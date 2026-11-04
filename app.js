'use strict';
const slides = [
 {title:'청년의 꿈이 현실이 되는 도시, 천안',category:'정책 소개',intro:'천안시 청년정책 안내: 청년의 도전을 응원하는 천안시의 주요 지원 방향을 소개합니다.',points:[['핵심 메시지','청년의 꿈이 현실이 되는 도시, 천안'],['비전','청년의 도전을 응원하는 천안시']]},
 {title:'천안시 청년정책 비전',category:'정책 비전',intro:'청년이 살기 좋고 도전하기 좋은 도시를 지향합니다.',points:[['자립','청년의 안정적인 독립과 생활 기반'],['성장','새로운 역량과 가능성 개발'],['참여','청년이 정책과 지역사회에 참여'],['연결','청년과 청년, 지역사회 연결']]},
 {title:'청년정책 한눈에 보기',category:'5대 정책 분야',intro:'청년의 일상 전반을 지원하는 다섯 가지 정책 분야입니다.',points:[['취업 지원','상담·채용 연계'],['창업 지원','아이디어·사업화'],['주거 지원','주거비 부담 완화'],['교육·역량 강화','학습·디지털 역량'],['문화·복지·참여','커뮤니티·소통']]},
 {title:'취업 지원 정책',category:'일자리',intro:'청년의 취업 준비부터 채용 연계까지 지원하는 사업을 소개합니다.',points:[['취업패키지 지원사업','취업사진, AI 모의면접, 면접정장 대여 등'],['청년도전지원사업','맞춤형 프로그램으로 구직 의욕 회복 지원'],['청년 행정체험 프로그램','행정 현장 경험과 실무 체험 기회 제공'],['천안형 청년 채용연계 프로그램','직장기초교육과 채용 연계 지원'],['확인 사항','세부 일정·대상·예산은 공식 공고 기준']]},
 {title:'창업 지원 정책',category:'창업',intro:'청년 창업가의 아이디어를 사업으로 연결합니다.',points:[['1인창조기업 지원센터','사무공간 제공 및 입주 지원'],['전문가 자문','세무·회계·법률·마케팅 컨설팅'],['교육·멘토링','창업 역량 강화와 사업모델 고도화'],['사업화 지원','프로젝트 연계, 네트워킹, 판로 확대'],['확인 사항','추가 세부사업은 공식 자료 확인 필요']]},
 {title:'주거 지원 정책',category:'주거',intro:'청년의 주거 안정을 돕는 실질적 지원 정책을 안내합니다.',points:[['청년월세 지원사업','청년들의 주거비 부담 경감 지원'],['슬라이드에 표시된 지원 내용','생애 1회, 월 20만 원씩 최대 24개월 지원'],['신청 방법','복지로(온라인·앱) 또는 주소지 행정복지센터'],['유의 사항','대상·소득·재산 요건은 공식 공고 기준. 금액과 기간도 최신 공고 확인 필수']]},
 {title:'교육 및 역량 강화',category:'교육',intro:'배움과 성장을 통해 청년의 미래 경쟁력을 키웁니다.',points:[['대학생 학자금 대출이자 지원','한국장학재단 학자금 대출이자 지원'],['직업교육 혁신지구 운영','미래인재 양성과 지역기업 취업 연계'],['청년능력개발 프로그램','직무·디지털 역량 강화 프로그램 운영'],['자기계발 지원','학습과 진로 탐색의 기회 확대'],['신청 안내','세부 신청기간은 사업별 공고 확인']]},
 {title:'문화·복지 및 청년 참여',category:'문화·참여',intro:'소통과 커뮤니티로 청년의 삶의 질을 높입니다.',points:[['천안청년센터 이음 운영','상담, 프로그램, 공간대관 등 통합 지원'],['청년정책네트워크 청정넷','청년 의견 수렴과 정책 제안 참여'],['청년 독서동아리 활동지원','도서, 강사, 활동 운영 지원'],['청년 문화활동 활성화 지원','지역 문화예술 프로그램과 커뮤니티 활성화']]},
 {title:'청년정책 참여 방법',category:'참여 절차',intro:'정책 확인부터 신청까지 다음 네 단계를 따라 참여할 수 있습니다.',points:[['1. 정책 찾기','천안청년포털 다모아에서 맞춤 정책 검색'],['2. 자격 확인','대상, 기간, 제출서류 확인'],['3. 신청하기','천안시 홈페이지, 천안청년센터 이음, 복지로, 행정복지센터 등 정책별 신청'],['4. 결과 확인','심사·선정 절차 확인 후 참여'],['주의','정책별 신청 경로와 일정은 서로 다를 수 있습니다']]},
 {title:'청년의 오늘을 응원하고, 내일을 함께 만드는 천안',category:'마무리',intro:'청년의 밝은 미래를 위해 천안시가 함께합니다.',points:[['천안청년포털 다모아','천안시 청년정책 정보 안내'],['천안시 홈페이지','분야별정보 > 청년'],['천안청년센터 이음','청년 지원 프로그램 및 참여 정보'],['핵심 메시지','함께 성장하는 청년친화도시, 천안']]}
];
const $=id=>document.getElementById(id);
const dom={image:$('slideImage'),media:$('slideMedia'),frame:$('slideFrame'),title:$('stageTitle'),category:$('category'),number:$('currentNum'),progress:$('progressBar'),fill:$('progressFill'),nav:$('topNav'),overview:$('overview'),grid:$('overviewGrid'),info:$('infoPanel'),scrim:$('scrim'),toast:$('toast')};
let current=0,transitionTimer=0,wheelTime=0,touchX=0,touchY=0,toastTimer=0;
const pad=n=>String(n).padStart(2,'0');
const imagePath=i=>`./assets/slides/slide-${pad(i+1)}.webp`;
function build(){
 slides.forEach((s,i)=>{
  const b=document.createElement('button');b.type='button';b.textContent=pad(i+1);b.title=`${i+1}번: ${s.title}`;b.setAttribute('aria-label',`${i+1}번 슬라이드: ${s.title}`);b.addEventListener('click',()=>navigate(i));dom.nav.appendChild(b);
  const tile=document.createElement('button');tile.className='overview-item';tile.type='button';tile.innerHTML=`<img src="./assets/thumbs/slide-${pad(i+1)}.webp" loading="lazy" alt=""/><span class="thumb-caption"><em>${pad(i+1)}</em><span>${s.title}</span></span>`;tile.addEventListener('click',()=>{dom.overview.close();navigate(i)});dom.grid.appendChild(tile);
 });
 const initial=/^#slide-(\d+)$/.exec(location.hash);
 render(initial?Math.max(0,Math.min(9,Number(initial[1])-1)):0,false);
}
function render(i,animate=true){
 const previous=current;current=i;const s=slides[i];
 clearTimeout(transitionTimer);dom.media.classList.remove('enter-forward','enter-back');
 dom.image.src=imagePath(i);dom.image.alt=`${i+1}번 슬라이드: ${s.title}. ${s.intro}`;
 dom.title.textContent=s.title;dom.category.textContent=s.category;dom.number.textContent=pad(i+1);dom.fill.style.width=`${(i+1)*10}%`;dom.progress.setAttribute('aria-valuenow',String(i+1));
 $('prevBtn').disabled=i===0;$('nextBtn').disabled=i===9;
 [...dom.nav.children].forEach((b,n)=>{b.classList.toggle('active',n===i);if(n===i)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')});
 [...dom.grid.children].forEach((b,n)=>b.classList.toggle('current',n===i));
 if(animate && i!==previous){void dom.media.offsetWidth;dom.media.classList.add(i>previous?'enter-forward':'enter-back');transitionTimer=setTimeout(()=>dom.media.classList.remove('enter-forward','enter-back'),550)}
 if(location.hash!==`#slide-${i+1}`)history.replaceState(null,'',`#slide-${i+1}`);
 $('infoNumber').textContent=`${pad(i+1)} / 10`;$('infoTitle').textContent=s.title;$('infoIntro').textContent=s.intro;
 $('infoDetails').replaceChildren(...s.points.map(([name,detail])=>{const el=document.createElement('div');el.className='info-detail';const h=document.createElement('strong');h.textContent=name;const p=document.createElement('p');p.textContent=detail;el.append(h,p);return el}));
 for(let k=1;k<=2;k++){const next=i+k;if(next<slides.length){const pre=new Image();pre.src=imagePath(next)}}
}
function navigate(i){const next=Math.max(0,Math.min(slides.length-1,i));if(next===current)return;render(next)}
function closeInfo(){dom.info.classList.remove('open');dom.info.setAttribute('aria-hidden','true');dom.scrim.hidden=true;$('infoBtn').focus()}
function openInfo(){if(dom.overview.open)dom.overview.close();dom.scrim.hidden=false;dom.info.classList.add('open');dom.info.setAttribute('aria-hidden','false');$('closeInfo').focus()}
$('prevBtn').addEventListener('click',()=>navigate(current-1));$('nextBtn').addEventListener('click',()=>navigate(current+1));
$('infoBtn').addEventListener('click',openInfo);$('notesBtn').addEventListener('click',openInfo);$('closeInfo').addEventListener('click',closeInfo);dom.scrim.addEventListener('click',closeInfo);
$('overviewBtn').addEventListener('click',()=>{if(dom.info.classList.contains('open'))closeInfo();dom.overview.showModal()});$('closeOverview').addEventListener('click',()=>dom.overview.close());
$('sourceBtn').addEventListener('click',()=>window.open('https://www.cheonan.go.kr/go_now/','_blank','noopener,noreferrer'));
$('fullscreenBtn').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{showToast('이 브라우저에서는 전체 화면을 지원하지 않습니다.')}});
document.addEventListener('fullscreenchange',()=>{$('fullscreenBtn').setAttribute('aria-label',document.fullscreenElement?'전체 화면 종료':'전체 화면')});
function showToast(message){dom.toast.textContent=message;dom.toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>dom.toast.classList.remove('show'),2400)}
document.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey)return;if(dom.overview.open)return;if(dom.info.classList.contains('open')){if(e.key==='Escape')closeInfo();return}if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){e.preventDefault();navigate(current+1)}else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();navigate(current-1)}else if(e.key==='Home'){e.preventDefault();navigate(0)}else if(e.key==='End'){e.preventDefault();navigate(9)}else if(e.key.toLowerCase()==='g'){dom.overview.showModal()}else if(e.key.toLowerCase()==='i'){openInfo()}else if(e.key.toLowerCase()==='f'){$('fullscreenBtn').click()}});
dom.frame.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].screenX;touchY=e.changedTouches[0].screenY},{passive:true});
dom.frame.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchX,dy=e.changedTouches[0].screenY-touchY;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3)navigate(current+(dx<0?1:-1))},{passive:true});
// Mouse wheel provides slide-to-slide scroll progression, throttled to prevent accidental multiple jumps.
dom.frame.addEventListener('wheel',e=>{if(dom.info.classList.contains('open')||dom.overview.open)return;if(Math.abs(e.deltaY)<14)return;e.preventDefault();const now=Date.now();if(now-wheelTime<670)return;wheelTime=now;navigate(current+(e.deltaY>0?1:-1))},{passive:false});
window.addEventListener('hashchange',()=>{const m=/^#slide-(\d+)$/.exec(location.hash);if(m)navigate(Number(m[1])-1)});
build();
