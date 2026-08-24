const builtInPlants = [
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

const CUSTOM_PLANTS_KEY='plant-engine-custom-plants-v1';
let customPlants=loadCustomPlants();
let plants=[...builtInPlants,...customPlants];

const roles = [
  ['winter','冬も葉を残す'],['dark','黒・濃色'],['blue','青緑・銀青'],['wine','ワイン色'],['camel','キャメル'],['vertical','細長い葉'],['broad','大きな葉'],['small','小型植物'],['ground','地表を覆う'],['flower','季節の花'],['texture','異なる葉形']
];

const state = {
  sun:'morning', moisture:'moist', maxHeight:80,
  roles:new Set(['winter','dark','blue','wine','camel','vertical','broad','small','texture']),
  selected:{},
  existing:[
    {id:'halcyon',name:'ギボウシ ‘Halcyon’',detail:'1株'},
    {id:'ferns',name:'既存のシダ',detail:'半分残す'}
  ]
};

const el = id => document.getElementById(id);
const winterLabel = {evergreen:'常緑',semi:'半常緑',deciduous:'冬は地上部なし'};
const spreadLabel = {clump:'株立ち',slow:'ゆっくり拡大',runner:'地下茎・ランナー'};
const roleLabel = Object.fromEntries(roles);
const area = p => Math.PI * (p.spread/2) ** 2 / 10000;

function loadCustomPlants(){
  try{
    const saved=JSON.parse(localStorage.getItem(CUSTOM_PLANTS_KEY)||'[]');
    return Array.isArray(saved)?saved.filter(p=>p&&p.id&&p.name):[];
  }catch{return [];}
}
function persistCustomPlants(){
  localStorage.setItem(CUSTOM_PLANTS_KEY,JSON.stringify(customPlants));
  plants=[...builtInPlants,...customPlants];
}
function escapeHtml(value=''){
  return String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}
function cleanText(value,fallback='',max=240){return String(value??fallback).trim().slice(0,max)||fallback;}
function cleanList(value,allowed){
  if(!Array.isArray(value))return [];
  const items=value.map(v=>cleanText(v,'',60)).filter(Boolean);
  return [...new Set(allowed?items.filter(v=>allowed.includes(v)):items)].slice(0,12);
}
function normalizeSources(value){
  if(!Array.isArray(value))return [];
  return value.map(source=>{
    const title=cleanText(source?.title,'出典',160);
    const url=cleanText(source?.url,'',500);
    if(!/^https?:\/\//i.test(url))return null;
    return {title,url,accessedAt:cleanText(source?.accessedAt,new Date().toISOString().slice(0,10),20)};
  }).filter(Boolean).slice(0,8);
}
function normalizeResearchPlant(raw,existingId){
  if(!raw||typeof raw!=='object'||Array.isArray(raw))throw new Error('JSONの最上位は植物1件のオブジェクトにしてください');
  const name=cleanText(raw.name,'',120);if(!name)throw new Error('name（植物名）がありません');
  const height=Number(raw.height),spread=Number(raw.spread);
  if(!Number.isFinite(height)||height<=0||height>500)throw new Error('heightは1〜500cmの数値にしてください');
  if(!Number.isFinite(spread)||spread<=0||spread>500)throw new Error('spreadは1〜500cmの数値にしてください');
  const sun=cleanList(raw.sun,['shade','morning','part','sun']);if(!sun.length)throw new Error('sunに有効な日照区分がありません');
  const moisture=cleanList(raw.moisture,['dry','moist','wet']);if(!moisture.length)throw new Error('moistureに有効な土壌水分区分がありません');
  const winter=['evergreen','semi','deciduous'].includes(raw.winter)?raw.winter:'deciduous';
  const validRoles=roles.map(([id])=>id),plantRoles=cleanList(raw.roles,validRoles);
  const spreadType=['clump','slow','runner'].includes(raw.spreadType)?raw.spreadType:'clump';
  const colors=cleanList(raw.colors);if(!colors.length)colors.push('緑');
  const sources=normalizeSources(raw.sources);
  return {
    id:existingId||`custom-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,
    name,latin:cleanText(raw.latin,'学名未確認',160),height:Math.round(height),spread:Math.round(spread),sun,moisture,winter,
    roles:plantRoles,colors,form:cleanText(raw.form,'葉形未確認',100),spreadType,
    icon:cleanText(raw.icon,'❧',2),tone:/^#[0-9a-f]{6}$/i.test(raw.tone)?raw.tone:'#405848',
    reason:cleanText(raw.reason,'現地条件との適合を確認してください。',360),sources,
    confidence:['high','medium','low'].includes(raw.confidence)?raw.confidence:'medium',
    researchNotes:cleanText(raw.researchNotes,'',500),researchedAt:cleanText(raw.researchedAt,new Date().toISOString().slice(0,10),20),origin:'custom'
  };
}

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
  const container=el('roleChips');
  container.innerHTML=roles.map(([id,label])=>`<button type="button" class="chip ${state.roles.has(id)?'active':''}" data-role="${id}">${label}</button>`).join('');
  container.querySelectorAll('[data-role]').forEach(button=>{
    button.onclick=()=>{
      const role=button.dataset.role;
      state.roles.has(role)?state.roles.delete(role):state.roles.add(role);
      renderRoles();
      renderPlants();
    };
  });
}

function renderExisting(){
  const container=el('existingList');
  if(!state.existing.length){
    container.innerHTML='<div class="existing-empty">既存植物なし</div>';
    return;
  }
  container.innerHTML=state.existing.map(item=>`<div class="existing-item"><span>${item.name}</span><b>${item.detail}</b><button type="button" data-existing-remove="${item.id}" aria-label="${item.name}を削除">×</button></div>`).join('');
  container.querySelectorAll('[data-existing-remove]').forEach(button=>{
    button.onclick=()=>{
      state.existing=state.existing.filter(item=>item.id!==button.dataset.existingRemove);
      renderExisting();
      toast('既存植物から削除しました');
    };
  });
}

function buildResearchPrompt(){
  const target=el('researchName').value.trim();
  if(!target){el('researchStatus').textContent='先に植物名を入力してください';el('researchStatus').className='research-status error';return '';}
  const wanted=[...state.roles].map(role=>roleLabel[role]).join('、')||'指定なし';
  const prompt=`あなたは園芸植物データの調査員です。現在のWeb情報を検索し、「${target}」を日本（関東・栃木県小山市）で植栽するための情報を調べてください。

現地条件：
- 日照区分：${state.sun}（shade=日陰、morning=午前だけ日が当たる、part=半日陰、sun=日向）
- 雨の翌日の土壌水分：${state.moisture}（dry=乾く、moist=適湿、wet=かなり湿る）
- 許容草丈：${state.maxHeight}cm以下
- 求める役割：${wanted}

調査規則：
1. 学名、成熟時の草丈・株張り、日照、土壌水分、冬の状態、広がり方、葉色、葉形を確認する。
2. 品種名が曖昧なら、断定せずresearchNotesへ不確実性を書く。
3. 販売店の説明だけに依存せず、植物園、大学・行政、公的園芸機関、生産者資料などを優先し、独立した出典を2件以上照合する。
4. 日本の高温多湿、梅雨、冬の最低気温を考慮する。海外情報をそのまま日本へ適用しない。
5. 数値に幅がある場合、一般的な成熟株の代表値をcm単位の数値でheightとspreadへ入れ、幅はresearchNotesへ書く。
6. 次のJSONだけを出力する。説明文やMarkdownコード枠は付けない。

許可値：
- sun: shade, morning, part, sun の配列
- moisture: dry, moist, wet の配列
- winter: evergreen, semi, deciduous のいずれか
- roles: winter, dark, blue, wine, camel, vertical, broad, small, ground, flower, texture の配列
- spreadType: clump, slow, runner のいずれか
- confidence: high, medium, low のいずれか

{
  "name":"日本語の標準名または流通名",
  "latin":"学名・品種名",
  "height":40,
  "spread":40,
  "sun":["morning","part"],
  "moisture":["moist"],
  "winter":"evergreen",
  "roles":["winter","texture"],
  "colors":["濃緑"],
  "form":"葉の形と質感",
  "spreadType":"clump",
  "icon":"❧",
  "tone":"#405848",
  "reason":"この現地条件での採否判断に使える簡潔な説明",
  "confidence":"medium",
  "researchNotes":"数値幅、不確実性、栽培上の注意",
  "researchedAt":"YYYY-MM-DD",
  "sources":[{"title":"出典名","url":"https://...","accessedAt":"YYYY-MM-DD"}]
}`;
  el('researchPrompt').value=prompt;
  el('researchStatus').textContent='プロンプトを生成しました';el('researchStatus').className='research-status success';
  return prompt;
}

function parseResearchJson(text){
  let cleaned=text.trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'');
  const first=cleaned.indexOf('{'),last=cleaned.lastIndexOf('}');
  if(first>=0&&last>first)cleaned=cleaned.slice(first,last+1);
  return JSON.parse(cleaned);
}

function renderCustomPlantList(){
  el('customPlantCount').textContent=`${customPlants.length}件`;
  const container=el('customPlantList');
  if(!customPlants.length){container.innerHTML='<div class="existing-empty">まだ登録されていません</div>';return;}
  container.innerHTML=customPlants.map(p=>`<div class="custom-plant-item"><span class="custom-tone" style="--custom-tone:${p.tone}">${escapeHtml(p.icon)}</span><div><b>${escapeHtml(p.name)}</b><small>${escapeHtml(p.latin)}・出典${p.sources?.length||0}件</small></div><button type="button" data-custom-delete="${escapeHtml(p.id)}">削除</button></div>`).join('');
  container.querySelectorAll('[data-custom-delete]').forEach(button=>button.onclick=()=>{
    const target=customPlants.find(p=>p.id===button.dataset.customDelete);
    if(!target||!confirm(`${target.name}を端末内の植物DBから削除しますか？`))return;
    customPlants=customPlants.filter(p=>p.id!==target.id);delete state.selected[target.id];persistCustomPlants();renderCustomPlantList();renderPlants();renderSelection();toast('登録植物を削除しました');
  });
}

function registerResearchPlant(){
  const status=el('researchStatus');
  try{
    const raw=parseResearchJson(el('researchJson').value);
    const duplicate=customPlants.find(p=>p.name.toLowerCase()===String(raw.name||'').trim().toLowerCase()||(raw.latin&&p.latin.toLowerCase()===String(raw.latin).trim().toLowerCase()));
    const plant=normalizeResearchPlant(raw,duplicate?.id);
    customPlants=duplicate?customPlants.map(p=>p.id===duplicate.id?plant:p):[...customPlants,plant];
    persistCustomPlants();renderCustomPlantList();renderPlants();
    const sourceNote=plant.sources.length>=2?`出典${plant.sources.length}件を保持`:`出典が${plant.sources.length}件です。後日もう1件以上追加してください`;
    status.textContent=`${duplicate?'更新':'登録'}完了：${plant.name}（${sourceNote}）`;status.className=`research-status ${plant.sources.length>=2?'success':'warning'}`;
    toast(`${plant.name}を植物DBへ登録しました`);
  }catch(error){status.textContent=`登録できません：${error.message}`;status.className='research-status error';}
}

function renderPlants(){
  const q=el('plantSearch').value.trim().toLowerCase();
  let rows=plants.map(p=>({...p,...scorePlant(p)})).filter(p=>!q||[p.name,p.latin,p.form,...p.colors,...p.roles].join(' ').toLowerCase().includes(q));
  const sort=el('sortMode').value;
  rows.sort(sort==='height'?(a,b)=>a.height-b.height:sort==='name'?(a,b)=>a.name.localeCompare(b.name,'ja'):(a,b)=>b.score-a.score);
  const counts=rows.reduce((n,p)=>{p.score>=80?n.fit++:p.score>=55?n.caution++:n.reject++;return n;},{fit:0,caution:0,reject:0});
  el('resultCount').textContent=`適合 ${counts.fit}｜要確認 ${counts.caution}｜条件外 ${counts.reject}`;
  el('plantList').innerHTML=rows.map(p=>{
    const grade=p.score>=80?'fit':p.score>=55?'caution':'reject';
    const gradeName={fit:'適合',caution:'要確認',reject:'条件外'}[grade];
    const matchedRoles=p.roles.filter(r=>state.roles.has(r)).map(r=>roleLabel[r]);
    const judgement=p.issues.length?p.issues.join('／'):p.reason;
    const sourceBlock=p.sources?.length?`<details class="source-detail"><summary>調査出典 ${p.sources.length}件</summary>${p.sources.map(source=>`<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)}</a>`).join('')}</details>`:'';
    return `<article class="plant-card grade-${grade} ${state.selected[p.id]?'selected':''} ${grade==='reject'?'dimmed':''}">
      <div class="card-status"><div><span class="grade-badge ${grade}">${gradeName}</span>${p.origin==='custom'?'<span class="local-badge">端末DB</span>':''}</div><span>役割一致 ${p.matched}件</span></div>
      <div class="plant-card-body">
        <div class="plant-visual"><div class="leaf-icon" style="--leaf-bg:${escapeHtml(p.tone)}">${escapeHtml(p.icon)}</div><span>${escapeHtml(p.colors.join('・'))}</span></div>
        <div class="plant-main">
          <h3>${escapeHtml(p.name)}</h3><span class="latin">${escapeHtml(p.latin)}</span>
          <div class="spec-grid">
            <div><small>草丈</small><b>${p.height}cm</b></div><div><small>株張り</small><b>${p.spread}cm</b></div>
            <div><small>冬姿</small><b>${escapeHtml(winterLabel[p.winter])}</b></div><div><small>広がり</small><b>${escapeHtml(spreadLabel[p.spreadType])}</b></div>
          </div>
          <div class="botanical-detail"><span class="color-swatch" style="--swatch:${escapeHtml(p.tone)}"></span><b>葉形</b>${escapeHtml(p.form)}</div>
          <div class="role-match"><b>一致</b>${escapeHtml(matchedRoles.length?matchedRoles.join('・'):'指定した役割との一致なし')}</div>
          <p class="reason"><b>${p.issues.length?'確認点':'選定理由'}</b>${escapeHtml(judgement)}</p>${sourceBlock}
        </div>
        <div class="score-panel ${grade}" style="--score:${p.score}">
          <div class="score-ring"><span><strong>${p.score}</strong><small>/100</small></span></div>
          <button type="button" data-select="${escapeHtml(p.id)}">${state.selected[p.id]?'採用済み':'採用'}</button>
        </div>
      </div>
    </article>`;
  }).join('')||'<div class="empty-state"><b>該当する植物がありません</b><small>条件または検索語を変更してください</small></div>';
}

function renderSelection(){
  const entries=Object.entries(state.selected).filter(([id])=>plants.some(p=>p.id===id));
  state.selected=Object.fromEntries(entries);
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
  const selected=Object.entries(state.selected).map(([id,n])=>{const plant=plants.find(p=>p.id===id);return plant?`${plant.name}×${n}`:'';}).filter(Boolean).join('、')||'未選択';
  const existing=state.existing.map(item=>`${item.name} ${item.detail}`).join('、')||'なし';
  return `【${el('caseName').value}】\n地域：${el('region').value}\n場所：${el('location').value}\n寸法：${el('width').value}m × ${el('depth').value}m\n日照：${document.querySelector('[data-field="sun"] .active').textContent}\n土：${document.querySelector('[data-field="moisture"] .active').textContent}\n高さ上限：${state.maxHeight}cm\n既存：${existing}\n採用候補：${selected}`;
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

function save(){const data={caseName:el('caseName').value,region:el('region').value,location:el('location').value,width:el('width').value,depth:el('depth').value,sun:state.sun,moisture:state.moisture,maxHeight:state.maxHeight,selected:state.selected,roles:[...state.roles],existing:state.existing};localStorage.setItem('plant-engine-case',JSON.stringify(data));toast('相談案件をiPad内に保存しました');}
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
el('clearRoles').onclick=()=>{state.roles.clear();renderRoles();renderPlants();};
el('clearSelection').onclick=()=>{state.selected={};renderPlants();renderSelection();};
el('saveCase').onclick=save;
el('newCase').onclick=async()=>{if(confirm('現在の入力を消して新しい案件を始めますか？')){localStorage.removeItem('plant-engine-case');await deletePhoto();location.reload();}};
el('copySummary').onclick=async()=>{await navigator.clipboard.writeText(summary());toast('相談メモをコピーしました');};
el('makePlan').onclick=()=>{if(!Object.keys(state.selected).length){toast('採用する植物を選んでください');return;}save();toast('採用案を確定しました');};
el('openResearch').onclick=()=>{renderCustomPlantList();const dialog=el('researchDialog');typeof dialog.showModal==='function'?dialog.showModal():dialog.setAttribute('open','');};
el('closeResearch').onclick=()=>{const dialog=el('researchDialog');typeof dialog.close==='function'?dialog.close():dialog.removeAttribute('open');};
el('buildPrompt').onclick=buildResearchPrompt;
el('copyResearchPrompt').onclick=async()=>{const prompt=el('researchPrompt').value||buildResearchPrompt();if(!prompt)return;try{await navigator.clipboard.writeText(prompt);toast('Web調査用プロンプトをコピーしました');}catch{el('researchPrompt').select();toast('プロンプトを選択しました。コピーしてください');}};
el('registerPlant').onclick=registerResearchPlant;
el('researchDialog').addEventListener('click',event=>{if(event.target===el('researchDialog'))el('closeResearch').click();});

restore();renderRoles();renderExisting();renderCustomPlantList();renderPlants();renderSelection();
if('serviceWorker' in navigator){
  let refreshing=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{
    if(refreshing)return;
    refreshing=true;
    location.reload();
  });
  navigator.serviceWorker.register('./sw.js?v=0.3.1').then(reg=>reg.update()).catch(()=>{});
}
