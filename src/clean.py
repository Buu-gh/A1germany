import json,re
raw=json.load(open('vocab_raw.json'))
HEADS={'Familienstand':'Tình trạng hôn nhân','Weitere wichtige Wörter':'Những từ quan trọng khác','Sprachen':'Ngôn ngữ','Nomen':'Danh từ','Adjektiv':'Tính từ','Adjektive/ Adverb':'Tính từ / trạng từ','Verb':'Động từ','Uhrzeiten':'Giờ giấc','E-Mail / Brief':'Email / thư','Lebensmittel:':'Thực phẩm','Präposition mit Dativ ( Wo?)':'Giới từ đi với Dativ (Wo?)'}
VI=re.compile(r'[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]',re.I)
def fixart(s):
    s=re.sub(r'\b([rse])\s?\.\s',lambda m:{'r':'der ','e':'die ','s':'das '}[m.group(1)],s)
    return s
def normpl(p):
    if not p: return None
    p=p.strip().strip(',').strip()
    p=p.replace('´´','¨').replace('´-´','¨').replace('´','').replace('--','-').replace(' ','')
    if p in ('-','–'): return '-'
    if not p.startswith('-') and not p.startswith('¨') and not p.startswith('die') and len(p)<6: p='-'+p
    return p
out=[]
for L in raw:
    words=[];sec='';book='Kursbuch'
    def last(): return words[-1] if words and words[-1].get('de') else None
    for it in L['items']:
        if it['t']=='head':
            sec=it['de']+' — '+it['vi'];continue
        if it['t']=='note':
            x=it['x'].strip()
            if x in HEADS: sec=x.rstrip(':')+' — '+HEADS[x];continue
            if x.startswith('=') and last(): last()['note']=(last().get('note','')+' '+fixart(x)).strip();continue
            if re.match(r'^(du|ich) ',x) and last(): last()['conj']=x;continue
            if last() and (VI.search(x) or re.match(r'^[A-ZÄÖÜa-z]',x)):
                # example sentence
                if VI.search(x) and not re.search(r'\(',x) and last().get('ex') and not VI.search(last()['ex'][-1]):
                    last()['ex'][-1]+=' — '+x
                else:
                    last().setdefault('ex',[]).append(fixart(x))
                continue
            continue
        de=it['de'];vi=it['vi'];a=it['a'];pl=it['pl']
        # continuation perfect forms
        if not vi and re.match(r'^(hat|ist) ',de) and last():
            last()['perf']=de;continue
        if not vi:
            m=re.match(r'^(.*?[!?])\s+(.*)$',de)
            if m and VI.search(m.group(2)): de,vi=m.group(1),m.group(2)
            else:
                m=re.match(r'^(.*?)\s*=\s*(.*)$',de)
                if m and VI.search(m.group(2)): de,vi=m.group(1),m.group(2)
                elif re.search(r'\.{3,}',de) and VI.search(de):
                    m=re.match(r'^(.*?\S)\s+([^\s]*'+r'[^\x00-\x7FäöüßÄÖÜ].*)$',de)
                    if m: de,vi=m.group(1),m.group(2)
            if not vi and re.match(r'^(du|ich) ',de) and last(): last()['conj']=de;continue
            if not vi and last():
                if re.match(r'^(zB|z\.B)',de): last().setdefault('ex',[]).append(de);continue
                last().setdefault('ex',[]).append(fixart(de));continue
        # perfect inside vi
        perf=None
        m=re.search(r'\s*-{2,}\s*((hat|ist)\s.*)$',vi)
        if m: perf=m.group(1).strip(); vi=vi[:m.start()].strip()
        m=re.search(r'\s*-{2,}\s*((hat|ist)\s.*)$',de)
        if m: perf=m.group(1).strip(); de=de[:m.start()].strip()
        m=re.search(r'\s*-{2,}\s*((du|ich)\s.*)$',vi)
        conj=None
        if m: conj=m.group(1).strip(); vi=vi[:m.start()].strip()
        ty=None
        m=re.search(r'\s*\((v|adj|adv|adj\s)\)\s*',de)
        if m: ty={'v':'v','adj':'adj','adv':'adv','adj ':'adj'}[m.group(1)]; de=(de[:m.start()]+' '+de[m.end():]).strip()
        de=de.replace('_',', -')
        de=fixart(de).strip(); vi=fixart(vi).strip()
        if a: ty='n'
        note=None
        if pl and '=' in pl:
            p1,rest=pl.split('=',1); pl=p1; note='= '+fixart(rest.strip())
        w={'de':de,'a':a,'pl':normpl(pl),'vi':vi,'ty':ty,'b':it['b'],'s':sec}
        if perf: w['perf']=perf
        if conj: w['conj']=conj
        if note: w['note']=note
        w={k:v for k,v in w.items() if v}
        words.append(w)
    out.append({'n':L['n'],'words':words})
json.dump(out,open('vocab_clean.json','w'),ensure_ascii=False)
for L in out:
    for w in L['words']:
        print(L['n'],'|',w.get('a',''),w['de'],'|',w.get('pl',''),'|',w['vi'],'|',w.get('perf',''),w.get('conj',''),w.get('note',''),'|',' / '.join(w.get('ex',[])))
