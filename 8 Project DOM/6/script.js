const arr = [
    {
        name: "Elara Vance",
        image: "https://loremflickr.com/500/500/aesthetic,portrait?lock=101"
    },
    {
        name: "Miles Thorne",
        image: "https://loremflickr.com/500/500/vintage,man?lock=102"
    },
    {
        name: "Sophie Ren",
        image: "https://loremflickr.com/500/500/fashion,girl?lock=103"
    },
    {
        name: "Lucas Grey",
        image: "https://loremflickr.com/500/500/cinematic,portrait?lock=104"
    },
    {
        name: "Isla Moon",
        image: "https://loremflickr.com/500/500/soft,girl?lock=105"
    },
    {
        name: "Oliver West",
        image: "https://loremflickr.com/500/500/urban,style?lock=106"
    },
    {
        name: "Chloe Kim",
        image: "https://loremflickr.com/500/500/aesthetic,cafe?lock=107"
    },
    {
        name: "Noah Aris",
        image: "https://loremflickr.com/500/500/moody,boy?lock=108"
    },
    {
        name: "Maya Brooks",
        image: "https://loremflickr.com/500/500/film,photography?lock=109"
    },
    {
        name: "Julian Vane",
        image: "https://loremflickr.com/500/500/cool,guy?lock=110"
    },
    {
        name: "Ava Rose",
        image: "https://loremflickr.com/500/500/pastel,aesthetic?lock=111"
    },
    {
        name: "Ethan Cole",
        image: "https://loremflickr.com/500/500/streetwear?lock=112"
    },
    {
        name: "Lily Chen",
        image: "https://loremflickr.com/500/500/artistic,portrait?lock=113"
    },
    {
        name: "Caleb Jude",
        image: "https://loremflickr.com/500/500/retro,style?lock=114"
    },
    {
        name: "Zara Quinn",
        image: "https://loremflickr.com/500/500/neon,portrait?lock=115"
    },
    {
        name: "Leo Frost",
        image: "https://loremflickr.com/500/500/minimalist,portrait?lock=116"
    },
    {
        name: "Ruby Skye",
        image: "https://loremflickr.com/500/500/warm,tone?lock=117"
    },
    {
        name: "Jasper Wolf",
        image: "https://loremflickr.com/500/500/bw,portrait?lock=118"
    },
    {
        name: "Grace Lee",
        image: "https://loremflickr.com/500/500/sunlight,girl?lock=119"
    },
    {
        name: "Finn Ray",
        image: "https://loremflickr.com/500/500/hipster,guy?lock=120"
    },
];

function content(arr) {
    const images = document.querySelector(".con")
    let data = "";
    arr.forEach((elem) => {
        data += `<div class="img">
            <img src="${elem.image}" alt="">
            <p>${elem.name}</p>
        </div>`
    })

    images.innerHTML = data
}
content(arr);

const input = document.querySelector("input");
const overlay = document.querySelector(".overlay");
const suggestions = document.querySelector(".suggestions");
input.addEventListener("focusin", () => {
    overlay.style.display = "block"
})
input.addEventListener("blur", () => {
    overlay.style.display = "none"
    suggestions.style.display = "none"
    suggestions.innerHTML = "";
})

input.addEventListener("input", () => {
    if (input.value.trim() === "") {
    content(arr);
    return;
}

    const filteredArr = arr.filter((elem) => { return elem.name.toLowerCase().startsWith(input.value) })
    suggestions.style.display = "block"
    let clutter = ""
    filteredArr.forEach((elem) => {
        clutter += `<div class="suggestion">
                <i class="ri-search-line"></i>
            <h2>${elem.name}</h2>
            </div>`
    })
    suggestions.innerHTML = clutter;
    content(filteredArr);
})