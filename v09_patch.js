(()=>{
  const run=()=>{
    const pill=document.querySelector('.pill'); if(pill) pill.textContent='v0.9 · Safari';
    const footer=document.querySelector('footer'); if(footer) footer.textContent='Garden OS v0.9';

    function enhanceBedRows(){
      document.querySelectorAll('#bedList .bed').forEach((row,index)=>{
        const bed=state.beds[index]; if(!bed) return;
        row.style.cursor='pointer'; row.setAttribute('role','button'); row.setAttribute('tabindex','0');
        const btn=row.querySelector('button'); if(btn) btn.remove();
        if(!row.querySelector('.bed-chevron')){
          const ch=document.createElement('div'); ch.className='bed-chevron'; ch.textContent='›';
          ch.style.cssText='font-size:28px;color:var(--muted);padding-left:12px'; row.appendChild(ch);
        }
        row.onclick=()=>openBed(bed.id);
        row.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openBed(bed.id)}};
      });
    }

    function ensureBedHero(id){
      const screen=document.getElementById('bedDetail'); if(!screen) return;
      let hero=document.getElementById('bedHero');
      if(!hero){
        hero=document.createElement('div'); hero.id='bedHero'; hero.className='card';
        hero.innerHTML='<div class="kicker">Bed overview</div><div id="bedHeroPhoto" style="margin-top:10px"></div><div id="bedHeroSummary" class="sub" style="margin-top:10px"></div><div class="row" style="margin-top:14px"><button class="primary" id="bedLookBtn">◎ Look</button><button class="ghost" id="bedMapBtn">Map</button></div>';
        const topbar=screen.querySelector('.topbar'); topbar.insertAdjacentElement('afterend',hero);
      }
      const obs=state.observations.filter(o=>o.bedId===id).sort((a,b)=>a.ts-b.ts);
      const latest=obs.length?obs[obs.length-1]:null;
      const photo=document.getElementById('bedHeroPhoto'), summary=document.getElementById('bedHeroSummary');
      if(latest){
        photo.innerHTML='<img src="'+latest.photo+'" style="width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:18px;border:1px solid var(--line)">';
        summary.textContent=latest.feeling?'Latest look: '+latest.feeling:'Latest look: '+new Date(latest.ts).toLocaleDateString();
      }else{
        photo.innerHTML='<div class="empty" style="padding:20px 8px">まだ写真がありません。</div>';
        summary.textContent='最初の1枚を残すと、ここがこの花壇の入口になります。';
      }
      document.getElementById('bedLookBtn').onclick=()=>{go('look');document.getElementById('bedSelect').value=id;refreshRepeatAvailability();updateFirstPhotoGuide();};
      document.getElementById('bedMapBtn').onclick=()=>openMap();
    }

    const oldRender=renderAll;
    renderAll=function(){oldRender();enhanceBedRows();};
    const oldOpen=openBed;
    openBed=function(id){oldOpen(id);ensureBedHero(id);};
    enhanceBedRows();
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run();
})();