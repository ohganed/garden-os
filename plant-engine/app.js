const plants = [
  {id:'hellebore',name:'ヘレボルス・フェチダス',latin:'Helleborus foetidus',height:65,spread:45,sun:['shade','morning','part'],moisture:['moist'],winter:'evergreen',roles:['vertical','dark','winter','texture'],colors:['濃緑'],form:'切れ込み葉',spreadType:'clump',icon:'♟',tone:'#24372b',reason:'細かく裂けた濃緑葉が立ち上がり、冬も骨格を残す。'},
  {id:'tricyrtis',name:'ホトトギス ‘ミヤザキ’',latin:'Tricyrtis hirta ‘Miyazaki’',height:75,spread:35,sun:['shade','morning','part'],moisture:['moist'],winter:'deciduous',roles:['vertical','flower','texture'],colors:['緑','紫花'],form:'直立茎＋卵形葉',spreadType:'clump',icon:'⌇',tone:'#35483a',reason:'60〜80cmの細い立ち姿をつくり、秋に小花を添える。'},
  {id:'farfugium',name:'小型ツワブキ',latin:'Farfugium japonicum compact form',height:40,spread:45,sun:['shade','morning','part'],moisture:['moist'],winter:'evergreen',roles:['broad','winter','dark'],colors:['濃緑'],form:'丸い艶葉',spreadType:'clump',icon:'●',tone:'#294b31',reason:'丸く艶のある葉で、ギボウシとは異なる大葉の質感を足す。'},
  {id:'athyrium-red',name:'ニシキシダ ‘レッドビューティー’',latin:'Athyrium niponicum ‘Red Beauty’',height:40,spread:45,sun:['shade','morning','part'],moisture:['moist'],winter:'deciduous',roles:['blue','wine','texture'],colors:['銀青','ワイン'],form:'羽状葉',spreadType:'clump',icon:'≋',tone:'#46575a',reason:'銀青の葉と赤紫の葉軸を同時に加えられる。'},
  {id:'heuchera-purple',name:'ヒューケラ ‘フォーエバーパープル’',latin:'Heuchera ‘Forever Purple’',height:30,spread:35,sun:['morning','part','sun'],moisture:['moist'],winter:'semi',roles:['wine','small','winter'],colors:['紫','ワイン'],form:'丸い切れ込み葉',spreadType:'clump',icon:'✣',tone:'#5b334d',reason:'低い位置に濃いワイン色の面をつくる。'},
  {id:'heuchera-caramel',name:'ヒューケラ ‘キャラメル’',latin:'Heuchera ‘Caramel’',height:30,spread:40,sun:['morning','part'],moisture:['moist'],winter:'semi',roles:['camel','small','winter'],colors:['キャメル','赤褐色'],form:'丸い切れ込み葉',spreadType:'clump',icon:'✣',tone:'#76553d',reason:'暗色の中に温かいキャメル色の焦点をつくる。'},
  {id:'epimedium',name:'イカリソウ ‘夕映’',latin:'Epimedium grandiflorum ‘Yubae’',height:30,spread:35,sun:['shade','morning','part'],moisture:['moist','dry'],winter:'semi',roles:['small','wine','texture'],colors:['緑','赤銅'],form:'小さなハート葉',spreadType:'slow',icon:'♡',tone:'#533f3b',reason:'小さなハート形の葉と赤銅色の新葉で、細部を豊かにする。'},
  {id:'mondo',name:'黒竜',latin:'Ophiopogon planiscapus ‘Kokuryū’',height:22,spread:25,sun:['shade','morning','part','sun'],moisture:['moist'],winter:'evergreen',roles:['dark','small','vertical','winter'],colors:['黒紫'],form:'細い線形葉',spreadType:'slow',icon:'〽',tone:'#25232b',reason:'黒紫の細葉を小群落として反復できる。'},
  {id:'ajuga',name:'アジュガ ‘ブラックスカロップ’',latin:'Ajuga reptans ‘Black Scallop’',height:15,spread:45,sun:['morning','part'],moisture:['moist'],winter:'evergreen',roles:['dark','small','ground','winter'],colors:['黒紫'],form:'低い楕円葉',spreadType:'runner',icon:'◆',tone:'#3a283c',reason:'地表を黒紫色でつなぐ。広がるため境界管理が必要。'},
  {id:'saxifraga',name:'ユキノシタ ‘マルーンビューティー’',latin:'Saxifraga stolonifera ‘Maroon Beauty’',height:20,spread:30,sun:['shade','morning','part'],moisture:['moist'],winter:'semi',roles:['small','ground','wine','texture'],colors:['銀緑','赤紫'],form:'丸葉＋銀脈',spreadType:'runner',icon:'✺',tone:'#485347',reason:'銀色の葉脈と紫の葉裏が足元に細かな表情をつくる。'},
  {id:'hakone',name:'フウチソウ ‘ベニカゼ’',latin:'Hakonechloa macra ‘Beni-kaze’',height:40,spread:45,sun:['morning','part'],moisture:['moist'],winter:'deciduous',roles:['camel','vertical','texture'],colors:['緑','赤褐色'],form:'流れる細葉',spreadType:'slow',icon:'≀',tone:'#596044',reason:'柔らかく流れる細葉が秋に赤褐色へ変化する。'},
  {id:'carex',name:'カレックス ‘エヴァリロ’',latin:'Carex oshimensis ‘Everillo’',height:35,spread:40,sun:['shade','morning','part'],moisture:['moist'],winter:'evergreen',roles:['vertical','winter','texture'],colors:['黄緑'],form:'弓状の細葉',spreadType:'clump',icon:'≀',tone:'#667238',reason:'冬も残る細葉。ただし今回の暗色構成では明るさが強い。'},
  {id:'brunnera',name:'ブルンネラ ‘ジャックフロスト’',latin:'Brunnera macrophylla ‘Jack Frost’',height:40,spread:45,sun:['shade','morning','part'],moisture:['moist'],winter:'deciduous',roles:['blue','broad','texture'],colors:['銀青'],form:'ハート形大葉',spreadType:'clump',icon:'♡',tone:'#52656a',reason:'銀青の大葉が美しいが、ハルシオンと色と役割が重なりやすい。'},
  {id:'ligularia',name:'リグラリア ‘ブリットマリークロフォード’',latin:'Ligularia dentata cultivar',height:100,spread:80,sun:['shade','morning','part'],moisture:['wet','moist'],winter:'deciduous',roles:['broad','wine','flower'],colors:['黒銅'],form:'大きな円形葉',spreadType:'clump',icon:'●',tone:'#493d33',reason:'魅力的な大葉だが、この細い植栽帯では大きくなりすぎる。'},
  {id:'imperata',name:'ベニチガヤ',latin:'Imperata cylindrica ‘Rubra’',height:50,spread:50,sun:['sun','part'],moisture:['moist','dry'],winter:'deciduous',roles:['red','vertical'],colors:['赤','緑'],form:'直立する細葉',spreadType:'runner',icon:'⌇',tone:'#703d38',reason:'赤い細葉だが、色を保つにはより強い日照が必要。'},
  {id:'liriope',name:'ヤブラン',latin:'Liriope muscari',height:45,spread:40,sun:['shade','morning','part','sun'],moisture:['moist','dry'],winter:'evergreen',roles:['vertical','winter','flower'],colors:['濃緑'],form:'線形葉',spreadType:'clump',icon:'〽',tone:'#304736',reason:'丈夫な常緑の細葉。既存のシダの間に安定した線をつくる。'}
];

const roles = [
  ['winter','冬も葉を残す'],['dark','黒・濃色'],['blue','青緑・銀青'],['wine','ワイン色'],['camel','キャメル'],['vertical','細長い葉'],['broad','大きな葉'],['small','小型植物'],['ground','地表を覆う'],['flower','季節の花'],['texture','異なる葉形']
];

const state = { sun:'morning', moisture:'moist', maxHeight:80, roles:new Set(['winter','dark','blue','wine','camel','vertical','broad','small','texture']), selected:{} };

const el = id => document.getElementById(id);
const winterLabel = {evergreen:'常緑',semi:'半常緑',deciduous:'冬は地上部なし'};
const area = p => Math.PI * (p.spread/2) ** 2 / 10000;

function scorePlant(p){
  let score=100; const issues=[];
  if(!p.sun.includes(state.sun)){ score-=32; issues.push('日照条件が合いにくい'); }
  if(!p.moisture.includes(state.moisture)){ score-=28; issues.push('土壌水分が合いにくい'); }
  if(p.height>state.maxHeight){ score-=Math.min(45,20+(p.height-state.maxHeight)); issues.push(`高さが上限を${p.height-state.maxHeight}cm超える`); }
  const matched=p.roles.filter(r=>state.roles.has(r)).length;
  score += Math.min(12, matched*2);
  if(state.roles.has('winter')&&p.winter==='deciduous'){ score-=8; issues.push('冬は葉がなくなる'); }
  if(p.id==='brunnera'){ score-=6; issues.push('既存ハルシオンと役割が重なる'); }
  return {score:Math.max(0,Math.min(100,score)),issues,matched};
}

function renderRoles(){
  el('roleChips').innerHTML=roles.map(([id,label])=>`<button class="chip ${state.roles.has(id)?'active':''}" data-role="${id}">${label}</button>`).join('');
}

function renderPlants(){
  const q=el('plantSearch').value.trim().toLowerCase();
  let rows=plants.map(p=>({...p,...scorePlant(p)})).filter(p=>!q||[p.name,p.latin,p.form,...p.colors,...p.roles].join(' ').toLowerCase().includes(q));
  const sort=el('sortMode').value;
  rows.sort(sort==='height'?(a,b)=>a.height-b.height:sort==='name'?(a,b)=>a.name.localeCompare(b.name,'ja'):(a,b)=>b.score-a.score);
  el('resultCount').textContent=`${rows.length}候補`;
  el('plantList').innerHTML=rows.map(p=>{
    const grade=p.score>=80?'fit':p.score>=55?'caution':'reject';
    const note=p.issues[0]||p.reason;
    return `<article class="plant-card ${state.selected[p.id]?'selected':''} ${grade==='reject'?'dimmed':''}">
      <div class="leaf-icon" style="--leaf-bg:${p.tone}">${p.icon}</div>
      <div class="plant-main"><h3>${p.name}</h3><span class="latin">${p.latin}</span><div class="tags"><span>${p.height}cm</span><span>${winterLabel[p.winter]}</span><span>${p.form}</span></div><p class="reason">${note}</p></div>
      <div class="score ${grade}"><strong>${p.score}</strong><small>適合度</small><button data-select="${p.id}">${state.selected[p.id]?'採用済み':'採用'}</button></div>
    </article>`;
  }).join('')||'<div class="empty-state"><b>該当する植物がありません</b><small>条件または検索語を変更してください</small></div>';
}

function renderSelection(){
  const entries=Object.entries(state.selected);
  el('selectionEmpty').hidden=entries.length>0;
  el('selectionList').innerHTML=entries.map(([id,count])=>{const p=plants.find(x=>x.id===id);return `<div class="selection-item"><div><b>${p.name}</b><small>${p.height}cm・${winterLabel[p.winter]}</small></div><input aria-label="${p.name}の株数" data-count="${id}" type="number" min="1" max="9" value="${count}"><button data-remove="${id}" aria-label="削除">×</button></div>`}).join('');
  const bed=Math.max(.1,Number(el('width').value)*Number(el('depth').value));
  const occupied=entries.reduce((sum,[id,count])=>sum+area(plants.find(x=>x.id===id))*count*.62,0)+.13;
  const percent=Math.round(occupied/bed*100);
  el('occupancyText').textContent=`${percent}%`;
  el('occupancyBar').style.width=`${Math.min(100,percent)}%`;
  el('occupancyBar').style.background=percent>100?'#c77777':percent>82?'#d4ae68':'#9fcf72';
  el('occupancyNote').textContent=percent>100?'成長後に混雑します。株数か大型植物を減らしてください。':percent>82?'密植寄りです。毎年の整理を前提にできます。':'既存株が育つ余白を含む概算です。';
  diagnose(entries,percent);
}

function diagnose(entries,percent){
  if(entries.length<2){el('diagnosticScore').textContent='未検証';el('diagnosticList').innerHTML='<p>植物を2種類以上選ぶと、冬の構成・葉形・繁殖性・混雑を照合します。</p>';return;}
  const chosen=entries.map(([id,count])=>({...plants.find(p=>p.id===id),count}));
  const forms=new Set(chosen.map(p=>p.form));
  const evergreen=chosen.filter(p=>p.winter!=='deciduous').length;
  const runners=chosen.filter(p=>p.spreadType==='runner');
  const messages=[];let quality=100;
  if(forms.size>=Math.min(5,chosen.length))messages.push(['good',`葉形が${forms.size}種類あり、群生に奥行きが出ます。`]);else{messages.push(['warn','似た葉形が重なっています。細葉・丸葉・切れ込み葉を混ぜてください。']);quality-=12;}
  if(evergreen>=Math.ceil(chosen.length*.45))messages.push(['good','冬に残る葉が十分あり、植栽の骨格を維持できます。']);else{messages.push(['warn','落葉性が多く、冬に空地が目立つ可能性があります。']);quality-=14;}
  if(runners.length)messages.push(['warn',`${runners.map(p=>p.name).join('、')}は広がるため、年1回の境界整理が必要です。`]);
  if(percent>100){messages.push(['warn','成長後の推定占有量が植栽面積を超えています。']);quality-=25;}else if(percent>82)messages.push(['warn','自然な密植になりますが、毎年の株分け・間引きを前提にします。']);else messages.push(['good','成長余地があり、植え付け直後の過密を避けられます。']);
  const roleSet=new Set(chosen.flatMap(p=>p.roles));
  if(roleSet.has('vertical')&&roleSet.has('broad')&&roleSet.has('small'))messages.push(['good','高い線・大きな面・小さな下草の三層が成立しています。']);else{messages.push(['warn','高さの異なる三層構成がまだ完成していません。']);quality-=10;}
  el('diagnosticScore').textContent=`構成評価 ${Math.max(0,quality)} / 100`;
  el('diagnosticList').innerHTML=messages.map(([c,t])=>`<p class="${c}">${t}</p>`).join('');
}

function summary(){
  const selected=Object.entries(state.selected).map(([id,n])=>`${plants.find(p=>p.id===id).name}×${n}`).join('、')||'未選択';
  return `【${el('caseName').value}】\n地域：${el('region').value}\n場所：${el('location').value}\n寸法：${el('width').value}m × ${el('depth').value}m\n日照：${document.querySelector('[data-field="sun"] .active').textContent}\n土：${document.querySelector('[data-field="moisture"] .active').textContent}\n高さ上限：${state.maxHeight}cm\n既存：ギボウシ ‘Halcyon’ 1株、シダを半分残す\n採用候補：${selected}`;
}

function toast(msg){const t=el('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),1800);}
function openPhotoDb(){
  return new Promise((resolve,reject)=>{
    const request=indexedDB.open('plant-engine-media',1);
    request.onupgradeneeded=()=>request.result.createObjectStore('photos');
    request.onsuccess=()=>resolve(request.result);
    request.onerror=()=>reject(request.error);
  });
}
async function storePhoto(blob){const db=await openPhotoDb();return new Promise((resolve,reject)=>{const tx=db.transaction('photos','readwrite');tx.objectStore('photos').put(blob,'current-case');tx.oncomplete=()=>{db.close();resolve();};tx.onerror=()=>reject(tx.error);});}
async function loadPhoto(){const db=await openPhotoDb();return new Promise((resolve,reject)=>{const tx=db.transaction('photos','readonly');const req=tx.objectStore('photos').get('current-case');req.onsuccess=()=>{db.close();resolve(req.result);};req.onerror=()=>reject(req.error);});}
async function deletePhoto(){const db=await openPhotoDb();return new Promise((resolve,reject)=>{const tx=db.transaction('photos','readwrite');tx.objectStore('photos').delete('current-case');tx.oncomplete=()=>{db.close();resolve();};tx.onerror=()=>reject(tx.error);});}
function showPhoto(blob){if(!blob)return;const old=el('photoPreview').dataset.objectUrl;if(old)URL.revokeObjectURL(old);const url=URL.createObjectURL(blob);el('photoPreview').dataset.objectUrl=url;el('photoPreview').src=url;el('photoPreview').hidden=false;el('photoPrompt').hidden=true;}

function save(){const data={caseName:el('caseName').value,region:el('region').value,location:el('location').value,width:el('width').value,depth:el('depth').value,sun:state.sun,moisture:state.moisture,maxHeight:state.maxHeight,selected:state.selected,roles:[...state.roles]};localStorage.setItem('plant-engine-case',JSON.stringify(data));toast('相談案件をiPad内に保存しました');}
async function restore(){try{const d=JSON.parse(localStorage.getItem('plant-engine-case'));if(d){['caseName','region','location','width','depth'].forEach(k=>{if(d[k]!=null)el(k).value=d[k]});Object.assign(state,d,{roles:new Set(d.roles||[])});document.querySelectorAll('.segmented').forEach(g=>g.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.value===state[g.dataset.field])));el('maxHeight').value=state.maxHeight;el('heightOutput').textContent=`${state.maxHeight}cm`;}const photo=await loadPhoto();if(photo)showPhoto(photo);}catch{}}

document.addEventListener('click',e=>{
  const seg=e.target.closest('.segmented button');if(seg){const g=seg.parentElement;g.querySelectorAll('button').forEach(b=>b.classList.remove('active'));seg.classList.add('active');state[g.dataset.field]=seg.dataset.value;renderPlants();return;}
  const select=e.target.closest('[data-select]');if(select){const id=select.dataset.select;state.selected[id]?delete state.selected[id]:state.selected[id]=1;renderPlants();renderSelection();return;}
  const remove=e.target.closest('[data-remove]');if(remove){delete state.selected[remove.dataset.remove];renderPlants();renderSelection();}
});
document.addEventListener('change',e=>{if(e.target.matches('[data-count]')){state.selected[e.target.dataset.count]=Math.max(1,Number(e.target.value));renderSelection();}if(['width','depth'].includes(e.target.id))renderSelection();});
el('maxHeight').addEventListener('input',e=>{state.maxHeight=Number(e.target.value);el('heightOutput').textContent=`${state.maxHeight}cm`;renderPlants();});
el('plantSearch').addEventListener('input',renderPlants);el('sortMode').addEventListener('change',renderPlants);
el('photoInput').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{await storePhoto(f);showPhoto(f);toast('写真をこのiPad内に保存しました');}catch{toast('写真を保存できませんでした');}});
el('roleChips').addEventListener('click',e=>{const b=e.target.closest('[data-role]');if(!b)return;const r=b.dataset.role;state.roles.has(r)?state.roles.delete(r):state.roles.add(r);renderRoles();renderPlants();});
el('clearRoles').onclick=()=>{state.roles.clear();renderRoles();renderPlants();};
el('clearSelection').onclick=()=>{state.selected={};renderPlants();renderSelection();};
el('saveCase').onclick=save;
el('newCase').onclick=async()=>{if(confirm('現在の入力を消して新しい案件を始めますか？')){localStorage.removeItem('plant-engine-case');await deletePhoto();location.reload();}};
el('copySummary').onclick=async()=>{await navigator.clipboard.writeText(summary());toast('相談メモをコピーしました');};
el('makePlan').onclick=()=>{if(!Object.keys(state.selected).length){toast('採用する植物を選んでください');return;}save();toast('採用案を確定しました');};

restore();renderRoles();renderPlants();renderSelection();
if('serviceWorker' in navigator){
  let refreshing=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{
    if(refreshing)return;
    refreshing=true;
    location.reload();
  });
  navigator.serviceWorker.register('./sw.js?v=0.1.2').then(reg=>reg.update()).catch(()=>{});
}
