/* ════════════════════════════════════════════════════════
   HAPPY BIRTHDAY, ACE — BEHAVIOR
   (content lives in data.js — this file shouldn't need edits)
   ════════════════════════════════════════════════════════ */

let playing = false;
let candlesOut = 0;

/* ── GRAIN ── */
(function(){
  const c=document.getElementById('grain'),x=c.getContext('2d');
  function r(){c.width=innerWidth;c.height=innerHeight}
  function d(){const i=x.createImageData(c.width,c.height);for(let j=0;j<i.data.length;j+=4){const v=Math.random()*255|0;i.data[j]=i.data[j+1]=i.data[j+2]=v;i.data[j+3]=255}x.putImageData(i,0,0);setTimeout(d,80)}
  addEventListener('resize',r);r();d();
})();

/* ── CURSOR ── */
(function(){
  const d=document.getElementById('cd'),r=document.getElementById('cr');
  let mx=0,my=0,rx=0,ry=0;
  addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;d.style.left=mx+'px';d.style.top=my+'px'});
  (function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;r.style.left=rx+'px';r.style.top=ry+'px';requestAnimationFrame(loop)})();
  addEventListener('mouseover',e=>{
    const h=!!e.target.closest('button,a,.fc,.lc,.sc,.c-exp,.lb-x,.lm-close,.hero-photo,.letter-card,.play-big,.reason-card,.candle,.wish-close');
    d.classList.toggle('h',h);r.classList.toggle('h',h);
  });
})();

/* ── LOCK ── */
function tryUnlock(){
  const m=document.getElementById('fm').value.trim().toLowerCase();
  const d=parseInt(document.getElementById('fd').value,10);
  if(LOCK_MONTHS.includes(m) && d===LOCK_DAY){
    document.getElementById('lock').classList.add('out');
    setTimeout(()=>{
      document.getElementById('lock').style.display='none';
      const s=document.getElementById('site');
      s.style.display='block';
      s.style.opacity='0';
      s.style.transition='opacity 1.1s';
      requestAnimationFrame(()=>requestAnimationFrame(()=>{ s.style.opacity='1'; }));
      init();
    },900);
  } else {
    document.getElementById('lerr').classList.add('show');
    ['fm','fd'].forEach(id=>{const el=document.getElementById(id);el.style.borderBottomColor='#c9786a';setTimeout(()=>el.style.borderBottomColor='',1200)});
    const b=document.querySelector('.lock-box');
    b.style.animation='none';void b.offsetWidth;b.style.animation='shake .45s ease';
    setTimeout(()=>{b.style.animation='';document.getElementById('lerr').classList.remove('show')},3000);
  }
}
addEventListener('keydown',e=>{if(e.key==='Enter') tryUnlock()});

/* ── INIT AFTER UNLOCK ── */
function init(){
  document.getElementById('mbar-name').textContent = SONG_NAME;
  document.getElementById('song-name').textContent = SONG_NAME;
  loadHeroPhoto();
  buildFeatured();buildLibrary();buildStrip();
  buildReasons();buildLetters();buildCandles();buildBigLetter();
  initReveal();initDragScroll(document.getElementById('strip'));
  nudgeStrip();initScrollHint();
}

/* ── HERO PHOTO ── */
function loadHeroPhoto(){
  const wrap=document.getElementById('hpw');
  const img=document.getElementById('himg');
  img.src=HERO_PHOTO;
  img.addEventListener('error',()=>wrap.classList.add('missing'));
}

/* ── CAM SVG (placeholder icon) ── */
const CAM=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8"><rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>`;

/* ── MAKE CARD (featured / library / strip) ── */
function makeCard(cls, id, data){
  const el=document.createElement('div');
  el.className=cls; el.id=id;
  el.innerHTML=`
    <img class="c-img" src="${data.img}" alt="${data.n}">
    <div class="c-ph">${CAM}<span>Photo coming soon</span></div>
    <div class="c-ov"><div class="ov-l">${data.n}</div><div class="ov-c">${data.c}</div></div>
    <span class="c-num">${data.n}</span>
    <button class="c-exp" title="Expand">⤢</button>`;
  const img=el.querySelector('.c-img');
  img.addEventListener('error',()=>el.classList.add('missing'));
  el.addEventListener('click',e=>{
    if(e.target.closest('.c-exp')) return;
    if(!el.classList.contains('missing')) openLb(data.img,data.c);
  });
  el.querySelector('.c-exp').addEventListener('click',e=>{
    e.stopPropagation();
    if(!el.classList.contains('missing')) openLb(data.img,data.c);
  });
  return el;
}

/* ── BUILD SECTIONS ── */
function buildFeatured(){
  const g=document.getElementById('fg');g.innerHTML='';
  FD.forEach((d,i)=>{
    const c=makeCard('fc',`fc${i}`,d);
    const tag=document.createElement('span');
    tag.style.cssText='position:absolute;top:.9rem;right:.9rem;font-size:.5rem;letter-spacing:.2em;text-transform:uppercase;color:#fff;background:rgba(255,255,255,.12);backdrop-filter:blur(5px);padding:.2rem .6rem;border:1px solid rgba(255,255,255,.18);opacity:0;transform:translateY(-4px);transition:opacity .3s,transform .3s;pointer-events:none;z-index:3';
    tag.textContent=d.tag;
    c.appendChild(tag);
    c.addEventListener('mouseenter',()=>{tag.style.opacity='1';tag.style.transform='translateY(0)'});
    c.addEventListener('mouseleave',()=>{tag.style.opacity='0';tag.style.transform='translateY(-4px)'});
    g.appendChild(c);
  });
}
function buildLibrary(){
  const g=document.getElementById('lg');g.innerHTML='';
  LD.forEach((d,i)=>{const c=makeCard(`lc ${d.sz}`,`lc${i}`,d);g.appendChild(c)});
}
function buildStrip(){
  const g=document.getElementById('strip');g.innerHTML='';
  SD.forEach((d,i)=>{
    const c=makeCard('sc',`sc${i}`,d);
    const yr=document.createElement('span');yr.className='sc-tag';yr.textContent=d.yr;c.prepend(yr);
    g.appendChild(c);
  });
}

/* ── REASONS I LOVE YOU — flip cards ── */
function buildReasons(){
  const g=document.getElementById('reasons-grid');g.innerHTML='';
  REASONS.forEach((r,i)=>{
    const card=document.createElement('div');
    card.className='reason-card';card.id=`rc${i}`;
    card.innerHTML=`
      <div class="reason-inner">
        <div class="reason-face reason-front"><span class="rf-num">${r.front}</span><span class="rf-lbl">Tap to reveal</span></div>
        <div class="reason-face reason-back"><p>${r.back}</p></div>
      </div>`;
    card.addEventListener('click',()=>card.classList.toggle('flip'));
    g.appendChild(card);
  });
}

/* ── LETTERS ── */
function buildLetters(){
  const g=document.getElementById('letters-grid');g.innerHTML='';
  LETTERS.forEach((l,i)=>{
    const card=document.createElement('div');card.className='letter-card';
    card.innerHTML=`<span class="lc-num">${l.tag}</span><h3 class="lc-title">${l.title}</h3><p class="lc-preview">${l.preview}</p><button class="lc-open">Read letter →</button><span class="lc-decor">${['✦','—','♥','✶'][i % 4]}</span>`;
    card.querySelector('.lc-open').addEventListener('click',()=>openLetter(i));
    g.appendChild(card);
  });
}
function openLetter(i){
  const l=LETTERS[i],m=document.getElementById('lm');
  document.getElementById('lm-tag').textContent=l.tag;
  document.getElementById('lm-title').textContent=l.title;
  document.getElementById('lm-body').innerHTML=l.body;
  document.getElementById('lm-sig').textContent=l.sig;
  m.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLm(e){
  if(e && e.target===document.getElementById('lm-inner')) return;
  if(e && e.currentTarget!==document.getElementById('lm')) return;
  document.getElementById('lm').classList.remove('open');
  document.body.style.overflow='';
}

/* ── MAKE A WISH — candles ── */
function buildCandles(){
  const g=document.getElementById('candles');g.innerHTML='';
  candlesOut=0;
  for(let i=0;i<CANDLE_COUNT;i++){
    const c=document.createElement('div');
    c.className='candle';c.id=`cn${i}`;
    c.innerHTML=`<div class="flame-wrap"><div class="flame"></div><div class="smoke"></div></div><div class="stick"></div><span class="candle-lbl">blow</span>`;
    c.addEventListener('click',()=>blowCandle(c));
    g.appendChild(c);
  }
  updateWishProgress();
}
function blowCandle(c){
  if(c.classList.contains('out')) return;
  c.classList.add('out');
  c.querySelector('.candle-lbl').textContent='out';
  candlesOut++;
  updateWishProgress();
  if(candlesOut===CANDLE_COUNT) setTimeout(showWish,500);
}
function updateWishProgress(){
  document.getElementById('wish-progress').textContent = `${candlesOut} of ${CANDLE_COUNT} candles blown out`;
}
function showWish(){
  document.getElementById('wish-text').textContent=WISH_MESSAGE;
  document.getElementById('wish-overlay').classList.add('open');
  document.body.style.overflow='hidden';
  celebrate();
}
function closeWish(){
  document.getElementById('wish-overlay').classList.remove('open');
  document.body.style.overflow='';
}

/* ── THE BIG LETTER ── */
function buildBigLetter(){
  document.getElementById('bl-eye').textContent=BIG_LETTER.eyebrow;
  document.getElementById('bl-ttl').textContent=BIG_LETTER.heading;
  document.getElementById('bl-sig').textContent=BIG_LETTER.sig;
  const body=document.getElementById('bl-body');
  body.innerHTML='';
  BIG_LETTER.body.trim().split(/\n\s*\n/).forEach(para=>{
    const p=document.createElement('p');
    p.innerHTML=para.trim();
    body.appendChild(p);
  });
}

/* ── LIGHTBOX ── */
function openLb(src,cap){
  document.getElementById('lbimg').src=src;
  document.getElementById('lbcap').textContent=cap||'';
  document.getElementById('lb').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLb(){
  document.getElementById('lb').classList.remove('open');
  document.body.style.overflow='';
}
addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeLb();
    document.getElementById('lm').classList.remove('open');
    closeWish();
    document.body.style.overflow='';
  }
});

/* ── MUSIC ── */
const aud=document.getElementById('aud');
aud.addEventListener('timeupdate',()=>{
  if(!aud.duration)return;
  document.getElementById('pfill').style.width=(aud.currentTime/aud.duration*100)+'%';
});
aud.addEventListener('ended',()=>{ aud.currentTime=0;aud.play(); }); // manual loop fallback

function togglePlay(){
  if(aud.readyState<2 && !aud.src){
    document.getElementById('mbar-name').textContent='Add music source to <audio> tag ↑';
    return;
  }
  if(playing){ aud.pause(); setPlaying(false); }
  else { aud.play().catch(()=>{}); setPlaying(true); }
}

function setPlaying(v){
  playing=v;
  const pb=document.getElementById('play-big');
  const pi=document.getElementById('play-ico');
  pb.classList.toggle('playing',v);
  pi.textContent=v?'⏸':'▶';
  document.getElementById('mbar-btn').textContent=v?'⏸ Pause':'▶ Play';
  document.getElementById('mbar-btn').classList.toggle('act',v);
  document.querySelectorAll('.mbw').forEach(b=>b.classList.toggle('on',v));
  document.querySelectorAll('.wm-b').forEach(b=>b.classList.toggle('on',v));
  const vinyl=document.getElementById('vinyl');
  vinyl.classList.toggle('show',v);
  vinyl.classList.toggle('spin',v);
  document.getElementById('wave-mini').classList.toggle('show',v);
}

/* ── REVEAL ── */
function initReveal(){
  const obs=new IntersectionObserver(en=>{en.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target)}})},{threshold:.08});
  document.querySelectorAll('[data-r]').forEach(el=>obs.observe(el));
}

/* ── SCROLL HINT ── */
function initScrollHint(){
  const h=document.getElementById('shi');
  addEventListener('scroll',function f(){if(scrollY>60){h.style.opacity='0';removeEventListener('scroll',f)}});
}

/* ── DRAG SCROLL ── */
function initDragScroll(el){
  let down=false,sx,sl;
  el.addEventListener('mousedown',e=>{down=true;sx=e.pageX-el.offsetLeft;sl=el.scrollLeft});
  ['mouseup','mouseleave'].forEach(ev=>el.addEventListener(ev,()=>{down=false}));
  el.addEventListener('mousemove',e=>{if(!down)return;e.preventDefault();el.scrollLeft=sl-(e.pageX-el.offsetLeft-sx)*1.6});
}

/* ── NUDGE STRIP ── */
function nudgeStrip(){
  const s=document.getElementById('strip');
  const obs=new IntersectionObserver(en=>{
    if(en[0].isIntersecting){
      setTimeout(()=>{s.scrollTo({left:110,behavior:'smooth'});setTimeout(()=>s.scrollTo({left:0,behavior:'smooth'}),700)},500);
      obs.disconnect();
    }
  },{threshold:.3});
  obs.observe(s);
}

/* ── CONFETTI ── */
const CC=['#c9786a','#b8977e','#0c0c0c','#d4cfc9','#f6f3ef','#8a6050'];
function celebrate(){
  for(let i=0;i<120;i++) setTimeout(()=>{
    const el=document.createElement('div');el.className='cfp';
    const s=5+Math.random()*10;
    el.style.cssText=`left:${Math.random()*100}vw;top:-40px;width:${s}px;height:${s*(1+Math.random())}px;background:${CC[Math.floor(Math.random()*CC.length)]};animation-duration:${2.5+Math.random()*2.5}s;animation-delay:${Math.random()*.9}s;border-radius:${Math.random()>.5?'50%':'1px'}`;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),5500);
  },i*14);
}
