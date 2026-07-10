const roles = [
"Technical Support Engineer",
"PC Builder",
"Problem Solver",
"Aspiring Games Industry Professional"
];


let role = 0;
let character = 0;
const typing = document.getElementById("typing");


function type(){
if(character < roles[role].length){
typing.textContent += roles[role].charAt(character);
character++;
setTimeout(type,70);
}
else{
setTimeout(erase,1800);
}
}


function erase(){
if(character>0){
typing.textContent=roles[role].substring(0,character-1);
character--;
setTimeout(erase,40);
}
else{
role++;
if(role>=roles.length){
role=0;
}
setTimeout(type,300);
}
}

type();

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section => {

    observer.observe(section);

});