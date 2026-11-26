const fs=require('fs');
const d=JSON.parse(fs.readFileSync('data.json','utf8'));
d.guide={};
const ls=fs.readdirSync('.');
for(const f of ls.filter(f=>/^g\d\d\.js$/.test(f)).sort()){Object.assign(d.guide,require('./'+f))}
let n=0,miss=[];
for(const f of ls.filter(f=>/^w[\d-]+\.js$/.test(f)).sort()){const W=require('./'+f);
  for(const L in W){const G=d.guide[L];if(!G)continue;for(const x of G.ab){if(W[L][x.k]&&!x.why){x.why=W[L][x.k];n++}}}}
for(const L in d.guide)for(const x of d.guide[L].ab){if(x.t==='note')continue;if(!x.why)miss.push(L+':'+x.k);else{const len=x.t==='match'?x.pairs.length:x.lines.length;if(x.t!=='sort'&&x.why.length!==len)miss.push(L+':'+x.k+' len '+x.why.length+'/'+len)}}
for(const f of ls.filter(f=>/^v\d\d\.js$/.test(f)).sort()){const L=+f.slice(1,3);const V=require('./'+f);const W=d.vocab[L];
  if(V.length!==W.length)miss.push('vocab'+L+' len '+V.length+'/'+W.length);
  V.forEach((v,i)=>{if(!W[i]||!v)return;[W[i].ipa,W[i].xs,W[i].xsvi]=v;if(!/\*.+\*/.test(v[1]))miss.push('vocab'+L+':'+i+' no mark')})}
fs.writeFileSync('site/data.json',JSON.stringify(d));
console.log(Object.keys(d.guide).join(','),'why merged',n,'issues',miss.join(' '),fs.statSync('site/data.json').size);
