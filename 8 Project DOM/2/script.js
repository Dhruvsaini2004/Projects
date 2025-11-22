const btn = document.querySelector("button");
const state = document.querySelector("h2");
let flag = false;
btn.addEventListener("click", () => {
    if (!flag) {
        state.style.color = "lightseagreen";
        btn.style.backgroundColor = "red";
        btn.innerText = "Remove";
        flag = true;
    }
    else {
        state.style.color = "red";
        btn.style.backgroundColor = "lightseagreen";
        btn.innerText = "Add Friend";
        flag = false;
    }
})
