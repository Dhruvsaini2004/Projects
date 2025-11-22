const images = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1763466939715-c2efc8499f3b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    dp: "https://images.unsplash.com/photo-1762998577858-ceb61c5d4974?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    story: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1761846736532-55f0288f04d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    story: "https://images.unsplash.com/photo-1546961329-78bef0414d7c"
  },
  {
    dp: "https://images.unsplash.com/photo-1762543787011-186cfe6f1019?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    story: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
  },
  {
    dp: "https://images.unsplash.com/photo-1762770647310-66f492eb832f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    dp: "https://images.unsplash.com/photo-1762936263573-af3e0d866980?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    dp: "https://images.unsplash.com/photo-1761839256601-e768233e25e7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  },
  {
    dp: "https://images.unsplash.com/photo-1763415296619-ffd5c62e6e74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
  },
  {
    dp: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWF8ZW58MHx8MHx8fDA%3D",
    story: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    dp: "https://images.unsplash.com/photo-1588043213440-fd9c881853e9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29yZWF8ZW58MHx8MHx8fDA%3D",
    story: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  }
];

let story="";
const stories = document.querySelector(".stories");
images.forEach((img,idx)=>{
    story += `<div class="story"><img id="${idx}" src="${img.dp}" alt=""></div>` 
})

stories.innerHTML=story;

const fullStory=document.querySelector(".full-screen");

stories.addEventListener("click",(e)=>{
    let value = images[e.target.id].story;
    fullStory.style.display="block"
    fullStory.style.backgroundImage=`url(${value})`
    setTimeout(() => {
        fullStory.style.display="none"
    }, 2000);
})