const toggle=document.getElementById("themeToggle");
if(localStorage.getItem("theme")==="dark")document.body.classList.add("dark");
toggle.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light");});
document.getElementById("year").textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));