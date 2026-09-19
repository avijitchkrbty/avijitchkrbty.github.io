const progress=document.getElementById('progress');
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h>0?(window.scrollY/h)*100:0)+'%';},{passive:true});
const items=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver((entries)=>{entries.forEach((entry,i)=>{if(entry.isIntersecting){entry.target.style.transitionDelay=(Math.min(i%5,4)*60)+'ms';entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.08});
items.forEach(el=>observer.observe(el));
