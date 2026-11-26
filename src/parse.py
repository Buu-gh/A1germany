import re, json, sys
lines=[l.strip() for l in open('../src/v.txt',encoding='utf8') if l.strip()]
# cut L3 country table: from "Land" line after L3 to "Lektion 4"
out=[];skip=False
for l in lines:
    if l=='Land' : skip=True
    if l.startswith('Lektion 4'): skip=False
    if not skip: out.append(l)
lines=out
# merge continuation lines: a line that doesn't start with '-' , article, and the previous line had ':' and this line has no ':' and starts lowercase or '(' -> continuation
merged=[]
for l in lines:
    if merged and not re.match(r'^(-|[rse]\s?\.|Lektion|Lekion|Kursbuch|Arbeitsbuch)',l) and ':' not in l and (l[0].islower() or l[0] in '(….0123456789') and not re.match(r'^(du |zB|z\.B|ich )',l):
        merged[-1]+=' '+l; continue
    merged.append(l)
lessons=[];cur=None;book='Kursbuch';sec=''
ART={'r':'der','e':'die','s':'das'}
for l in merged:
    m=re.match(r'^Lek?t?ion (\d+)',l)
    if m:
        cur={'n':int(m.group(1)),'items':[]};lessons.append(cur);book='Kursbuch';sec='';continue
    if l.startswith('Kursbuch') : book='Kursbuch';sec='';continue
    if l.startswith('Arbeitsbuch'): book='Arbeitsbuch';sec='';continue
    raw=l
    dash=l.startswith('-')
    l=l.lstrip('- ').strip()
    m=re.match(r'^([rse])\s?\.\s*(.*)',l)
    art=None
    if m: art=ART[m.group(1)]; l=m.group(2)
    if ':' in l:
        de,vi=l.split(':',1); de=de.strip(); vi=vi.strip()
    elif '=' in l and art:
        de,vi=l.split('=',1);de=de.strip();vi=vi.strip()
    else:
        de=l;vi=''
    # heading: not dash, no article, left side is a category word (capitalized, short) and right side is a Vietnamese category
    is_head = (not dash and not art and vi and len(de.split())<=4 and not re.search(r'[?!.…]',de) and de[0].isupper() and not re.search(r'\(v\)|\(adj\)|\(adv\)',de))
    if not vi and not dash and not art:
        cur['items'].append({'t':'note','x':raw,'b':book,'s':sec}); continue
    if is_head:
        sec=f"{de}: {vi}" ; cur['items'].append({'t':'head','de':de,'vi':vi,'b':book}); continue
    pl=None
    if art:
        mm=re.match(r'^(.*?),\s*(.+)$',de)
        if mm: de,pl=mm.group(1).strip(),mm.group(2).strip()
    cur['items'].append({'t':'w','de':de,'vi':vi,'a':art,'pl':pl,'b':book,'s':sec})
json.dump(lessons,open('vocab_raw.json','w'),ensure_ascii=False,indent=0)
for L in lessons:
    print('==',L['n'],len([i for i in L['items'] if i['t']=='w']))
