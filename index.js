tippy("#pfp", {
    content: 'sauce: <a href="https://www.pixiv.net/en/artworks/96755240">pixiv/96755240</a>',
    interactive: true,
    allowHTML: true,
});

tippy("#pronouns", {
    content: "If you know me well I am also fine with she/her",
});

tippy("#discord", {
    content: "yes it was a natural discriminator",
});

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
        pixiv_id: "98032318"
    }
];
const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
document.body.style.backgroundImage = `url(${bg.path})`;
document.querySelector("#bg-source").innerHTML = `Background source: <a href="https://www.pixiv.net/en/artworks/${bg.pixiv_id}">pixiv/${bg.pixiv_id}</a>`;
