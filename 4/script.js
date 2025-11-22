const elem = document.querySelectorAll(".elem");
elem.forEach(element => {
    element.addEventListener("mousemove", (e) => {
        element.childNodes[3].style.left = `${e.x}px`
    })
    element.addEventListener("mouseenter", () => {
        element.childNodes[3].style.opacity = 1;
    })
    element.addEventListener("mouseleave", () => {
        element.childNodes[3].style.opacity = 0;
    })
});