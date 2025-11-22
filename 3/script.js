const cursor = document.querySelector(".cursor");
const main = document.querySelector("main");
main.addEventListener("mousemove",(e)=>{
    cursor.style.left = `${e.x}px`;
    cursor.style.top = `${e.y}px`;
    
})