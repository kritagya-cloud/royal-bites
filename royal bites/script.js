// Smooth fade animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

const sections=document.querySelectorAll("section");

sections.forEach((section)=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition="all 1s ease";

observer.observe(section);

});