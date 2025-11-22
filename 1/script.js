const post = document.querySelector(".post");
const like = document.querySelector("i");
post.addEventListener("dblclick",()=>{
    like.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";
    like.style.opacity = 0.8;
    
    setTimeout(() => {
        like.style.transform = "translate(-50%,-50%) scale(0) rotate(-60deg)";
        like.style.opacity = 0;
        
    }, 600);
})