const backgrounds = [
    {
        path: "/img/backgrounds/1.png",
        pixiv_id: "94924761",
    },
    {
        path: "/img/backgrounds/2.jpg",
        pixiv_id: "96981854",
    },
    {
        path: "/img/backgrounds/3.jpg",
        pixiv_id: "97361753",
    },
    {
        path: "/img/backgrounds/4.png",
        pixiv_id: "93615405",
    },
    {
        path: "/img/backgrounds/5.png",
        pixiv_id: "89618492",
    },
    {
        path: "/img/backgrounds/6.jpg",
        pixiv_id: "98032318",
    },
];
const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
document.body.style.backgroundImage = `url(${bg.path})`;
document.querySelector(
    "#bg-source"
).innerHTML = `Background source: <a href="https://www.pixiv.net/en/artworks/${bg.pixiv_id}">pixiv/${bg.pixiv_id}</a>`;

const typewriter = document.querySelector("#typewriter");
const descriptors = [
    {
        value: "catgirl",
        weight: 15,
    },
    {
        value: "transfemme",
        weight: 10,
    },
    {
        value: "cat",
        weight: 5,
    },
    {
        value: "idiot",
        weight: 5,
    },
    {
        value: "computer addict",
        weight: 2,
    },
    {
        value: "rhythm gamer",
        weight: 2,
    },
];
let currentDescriptor = descriptors[0].value;

function weightedRandom(weightArr) {
    let weights = [weightArr[0].weight];

    for (let i = 1; i < weightArr.length; i++)
        weights[i] = weightArr[i].weight + weights[i - 1];

    let random = Math.random() * weights[weights.length - 1];

    for (let i = 0; i < weights.length; i++)
        if (weights[i] > random) return weightArr[i].value;

    return weightArr[0].value;
}

function typeDescriptor() {
    let current = "";
    const interval = setInterval(() => {
        if (current.length == currentDescriptor.length) {
            clearInterval(interval);
            setTimeout(() => {
                deleteDescriptor();
            }, 2000);
        }
        current += currentDescriptor.substring(
            current.length,
            current.length + 1
        );
        typewriter.innerHTML = current;
    }, 100);
}

function deleteDescriptor() {
    const interval = setInterval(() => {
        if (typewriter.innerHTML.length == 0) {
            clearInterval(interval);
            currentDescriptor = weightedRandom(
                descriptors.filter((d) => d.value != currentDescriptor)
            );
            setTimeout(() => {
                typeDescriptor();
            }, 250);
        }
        typewriter.innerHTML = typewriter.innerHTML.substring(
            0,
            typewriter.innerHTML.length - 1
        );
    }, 100);
}

typeDescriptor();
