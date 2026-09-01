/* =====================================================
   ANIMETOON JAVASCRIPT
===================================================== */


/* =====================================================
   GLOBAL DATA
===================================================== */

let animeData = [];

let favourites = JSON.parse(
    localStorage.getItem("animetoonFavourites")
) || [];

let currentLanguage =
    localStorage.getItem("animetoonLanguage") || "en";


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

    en: {

        home: "Home",
        animeMovies: "Anime & Movies",
        account: "Account",

        menu: "MENU",
        languages: "Languages",
        favourites: "Favourites",
        categories: "Categories",
        genres: "GENRES",
        more: "More",

        premium: "Premium Experience",
        premiumText: "Ad-free • High Quality",
        earlyAccess: "Early Access • More",
        goPremium: "Go Premium",

        search: "Search anime, movies, genres...",

        featured: "FEATURED",

        heroDescription:
            "They say whatever doesn't kill you makes you stronger, but that's not the case for the world's weakest hunter.",

        watchNow: "Watch Now",
        addFavourite: "Add to Favourites",

        all: "All",
        allShows: "All Shows",

        trending: "Trending",
        popular: "Popular",

        newEpisodes: "New Episodes",
        thisWeek: "This Week",

        movies: "Movies",
        topPicks: "Top Picks",

        topRated: "Top Rated",
        highestRated: "Highest Rated",

        ongoing: "Ongoing",
        continue: "Continue",

        trendingNow: "Trending Now",
        latestReleases: "Latest Releases",

        viewAll: "View All",

        exploreAnime: "Explore 100+ anime and movies",

        watchlist: "Watchlist",
        history: "History",

        continueWatching: "Continue Watching",

        upcoming: "Upcoming Episodes",

        popularGenres: "Popular Genres",

        exploreAllGenres: "Explore All Genres",

        chooseLanguage: "Choose Language",
        languageDescription:
            "Select your preferred language",

        allGenres: "All Genres",

        selectGenre:
            "Select a genre to explore",

        yourFavouriteAnime:
            "Your favourite anime",

        accountSettings:
            "Account Settings"
    },


    ja: {

        home: "ホーム",
        animeMovies: "アニメ＆映画",
        account: "アカウント",

        menu: "メニュー",
        languages: "言語",
        favourites: "お気に入り",
        categories: "カテゴリー",
        genres: "ジャンル",
        more: "もっと見る",

        premium: "プレミアム体験",
        premiumText: "広告なし • 高画質",
        earlyAccess: "早期アクセス • その他",
        goPremium: "プレミアムへ",

        search: "アニメ、映画、ジャンルを検索...",

        featured: "おすすめ",

        heroDescription:
            "世界最弱のハンター、成長を続ける物語。",

        watchNow: "今すぐ見る",
        addFavourite: "お気に入りに追加",

        all: "すべて",
        allShows: "すべての作品",

        trending: "トレンド",
        popular: "人気",

        newEpisodes: "新エピソード",
        thisWeek: "今週",

        movies: "映画",
        topPicks: "おすすめ",

        topRated: "高評価",
        highestRated: "最高評価",

        ongoing: "放送中",
        continue: "続ける",

        trendingNow: "トレンド作品",
        latestReleases: "最新作品",

        viewAll: "すべて見る",

        exploreAnime: "100以上のアニメと映画を見る",

        watchlist: "ウォッチリスト",
        history: "履歴",

        continueWatching: "視聴を続ける",

        upcoming: "今後のエピソード",

        popularGenres: "人気ジャンル",

        exploreAllGenres: "すべてのジャンル",

        chooseLanguage: "言語を選択",
        languageDescription:
            "使用する言語を選択してください",

        allGenres: "すべてのジャンル",

        selectGenre:
            "ジャンルを選択してください",

        yourFavouriteAnime:
            "お気に入りのアニメ",

        accountSettings:
            "アカウント設定"
    },


    ta: {

        home: "முகப்பு",
        animeMovies: "அனிமே & திரைப்படங்கள்",
        account: "கணக்கு",

        menu: "மெனு",
        languages: "மொழிகள்",
        favourites: "விருப்பங்கள்",
        categories: "வகைகள்",
        genres: "வகைகள்",
        more: "மேலும்",

        premium: "பிரீமியம் அனுபவம்",
        premiumText: "விளம்பரமில்லை • உயர் தரம்",
        earlyAccess: "முன்கூட்டிய அணுகல் • மேலும்",
        goPremium: "பிரீமியம் பெறுக",

        search:
            "அனிமே, திரைப்படங்கள், வகைகளை தேடுங்கள்...",

        featured: "சிறப்பு",

        heroDescription:
            "உலகின் பலவீனமான ஹண்டரான சங் ஜின் வூவின் அற்புதமான பயணம்.",

        watchNow: "இப்போது பார்க்கவும்",

        addFavourite:
            "விருப்பங்களில் சேர்க்கவும்",

        all: "அனைத்தும்",
        allShows: "அனைத்து நிகழ்ச்சிகள்",

        trending: "டிரெண்டிங்",
        popular: "பிரபலமான",

        newEpisodes: "புதிய எபிசோடுகள்",
        thisWeek: "இந்த வாரம்",

        movies: "திரைப்படங்கள்",
        topPicks: "சிறந்த தேர்வுகள்",

        topRated: "சிறந்த மதிப்பீடு",
        highestRated: "உயர் மதிப்பீடு",

        ongoing: "தொடர்கிறது",
        continue: "தொடரவும்",

        trendingNow: "இப்போது டிரெண்டிங்",

        latestReleases:
            "சமீபத்திய வெளியீடுகள்",

        viewAll: "அனைத்தையும் பார்க்கவும்",

        exploreAnime:
            "100+ அனிமே மற்றும் திரைப்படங்களை ஆராயுங்கள்",

        watchlist: "வாட்ச் லிஸ்ட்",
        history: "வரலாறு",

        continueWatching:
            "பார்ப்பதைத் தொடரவும்",

        upcoming:
            "வரவிருக்கும் எபிசோடுகள்",

        popularGenres:
            "பிரபலமான வகைகள்",

        exploreAllGenres:
            "அனைத்து வகைகளையும் பார்க்கவும்",

        chooseLanguage:
            "மொழியைத் தேர்ந்தெடுக்கவும்",

        languageDescription:
            "உங்களுக்கு விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்",

        allGenres: "அனைத்து வகைகள்",

        selectGenre:
            "ஆராய ஒரு வகையைத் தேர்ந்தெடுக்கவும்",

        yourFavouriteAnime:
            "உங்கள் விருப்பமான அனிமே",

        accountSettings:
            "கணக்கு அமைப்புகள்"
    },


    hi: {

        home: "होम",
        animeMovies: "एनीमे और फिल्में",
        account: "अकाउंट",

        menu: "मेन्यू",
        languages: "भाषाएँ",
        favourites: "पसंदीदा",
        categories: "श्रेणियाँ",
        genres: "शैलियाँ",
        more: "और",

        premium: "प्रीमियम अनुभव",
        premiumText: "विज्ञापन मुक्त • उच्च गुणवत्ता",
        earlyAccess: "अर्ली एक्सेस • अधिक",
        goPremium: "प्रीमियम लें",

        search:
            "एनीमे, फिल्में, शैली खोजें...",

        featured: "विशेष",

        heroDescription:
            "दुनिया के सबसे कमजोर हंटर सुंग जिन-वू की शानदार कहानी।",

        watchNow: "अभी देखें",

        addFavourite:
            "पसंदीदा में जोड़ें",

        all: "सभी",
        allShows: "सभी शो",

        trending: "ट्रेंडिंग",
        popular: "लोकप्रिय",

        newEpisodes: "नए एपिसोड",
        thisWeek: "इस सप्ताह",

        movies: "फिल्में",
        topPicks: "टॉप पिक्स",

        topRated: "टॉप रेटेड",
        highestRated: "उच्चतम रेटिंग",

        ongoing: "जारी",
        continue: "जारी रखें",

        trendingNow: "अभी ट्रेंडिंग",

        latestReleases:
            "नवीनतम रिलीज़",

        viewAll: "सभी देखें",

        exploreAnime:
            "100+ एनीमे और फिल्मों को एक्सप्लोर करें",

        watchlist: "वॉचलिस्ट",
        history: "इतिहास",

        continueWatching:
            "देखना जारी रखें",

        upcoming:
            "आने वाले एपिसोड",

        popularGenres:
            "लोकप्रिय शैलियाँ",

        exploreAllGenres:
            "सभी शैलियाँ देखें",

        chooseLanguage:
            "भाषा चुनें",

        languageDescription:
            "अपनी पसंदीदा भाषा चुनें",

        allGenres:
            "सभी शैलियाँ",

        selectGenre:
            "एक शैली चुनें",

        yourFavouriteAnime:
            "आपके पसंदीदा एनीमे",

        accountSettings:
            "अकाउंट सेटिंग्स"
    }

};


/* =====================================================
   APPLY LANGUAGE
===================================================== */

function applyLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
        "animetoonLanguage",
        language
    );

    const text =
        translations[language];

    document
        .querySelectorAll("[data-lang]")
        .forEach(element => {

            const key =
                element.getAttribute("data-lang");

            if (text[key]) {

                element.textContent =
                    text[key];

            }

        });


    const search =
        document.getElementById("searchInput");

    search.placeholder =
        text.search;


    const codes = {
        en: "EN",
        ja: "JP",
        ta: "TA",
        hi: "HI"
    };

    document.getElementById(
        "currentLanguage"
    ).textContent = codes[language];


    document.documentElement.lang =
        language;

}


/* =====================================================
   LANGUAGE DROPDOWN
===================================================== */

const topLanguageBtn =
    document.getElementById(
        "topLanguageBtn"
    );

const languageDropdown =
    document.getElementById(
        "languageDropdown"
    );


topLanguageBtn.addEventListener(
    "click",
    () => {

        languageDropdown.classList.toggle(
            "show"
        );

    }
);


/* LANGUAGE BUTTONS */

document
    .querySelectorAll("[data-language]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const language =
                    button.dataset.language;

                applyLanguage(language);

                languageDropdown.classList.remove(
                    "show"
                );

                document
                    .getElementById(
                        "languageModal"
                    )
                    .classList.remove("show");

            }
        );

    });


/* =====================================================
   LANGUAGE MODAL
===================================================== */

const languageModal =
    document.getElementById(
        "languageModal"
    );


document
    .getElementById("languageBtn")
    .addEventListener(
        "click",
        () => {

            languageModal.classList.add(
                "show"
            );

        }
    );


document
    .querySelectorAll(".close-modal")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".modal-overlay"
                    )
                    .forEach(modal => {

                        modal.classList.remove(
                            "show"
                        );

                    });

            }
        );

    });


/* =====================================================
   THEME SWITCH
===================================================== */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


const savedTheme =
    localStorage.getItem(
        "animetoonTheme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light"
    );

    themeToggle.checked = true;

}


themeToggle.addEventListener(
    "change",
    () => {

        if (themeToggle.checked) {

            document.body.classList.add(
                "light"
            );

            localStorage.setItem(
                "animetoonTheme",
                "light"
            );

        } else {

            document.body.classList.remove(
                "light"
            );

            localStorage.setItem(
                "animetoonTheme",
                "dark"
            );

        }

    }
);


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function openPage(pageName) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove(
                "active-page"
            );

        });


    const page =
        document.getElementById(
            pageName + "Page"
        );


    if (page) {

        page.classList.add(
            "active-page"
        );

    }


    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.remove(
                "active"
            );

            if (
                button.dataset.page ===
                pageName
            ) {

                button.classList.add(
                    "active"
                );

            }

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


document
    .querySelectorAll("[data-page]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const page =
                    button.dataset.page;

                openPage(page);

            }
        );

    });


/* =====================================================
   LOAD 100 ANIME
   JIKAN API
===================================================== */

async function loadAnime() {

    try {

        const response =
            await fetch(
                "https://api.jikan.moe/v4/top/anime?limit=100"
            );


        const result =
            await response.json();


        animeData =
            result.data || [];


        renderTrending();

        renderLatest();

        renderAllAnime();

        renderFavourites();

        document
            .getElementById("loading")
            .style.display = "none";


    } catch (error) {

        console.error(error);

        document
            .getElementById("loading")
            .innerHTML = `
                <h3>AnimeToon</h3>
                <p>
                    Unable to load anime.
                    Please check your internet connection
                    and refresh the page.
                </p>
            `;

    }

}


/* =====================================================
   ANIME CARD
===================================================== */

function createAnimeCard(anime) {

    const image =
        anime.images?.jpg?.large_image_url ||
        anime.images?.jpg?.image_url ||
        "https://via.placeholder.com/300x450";


    const title =
        anime.title ||
        "Unknown Anime";


    const score =
        anime.score ||
        "N/A";


    const episodes =
        anime.episodes ||
        "?";


    const isFavourite =
        favourites.includes(
            anime.mal_id
        );


    const card =
        document.createElement("div");


    card.className =
        "anime-card";


    card.dataset.id =
        anime.mal_id;


    card.innerHTML = `

        <img
            src="${image}"
            alt="${title}"
            loading="lazy"
        >

        <span class="top-label">
            ${isFavourite ? "♥" : "TOP"}
        </span>

        <span class="rating">
            ⭐ ${score}
        </span>

        <div class="card-info">

            <h3 title="${title}">
                ${title}
            </h3>

            <p>
                ${anime.type || "Anime"}
                • ${episodes} EP
            </p>

        </div>

    `;


    card.addEventListener(
        "click",
        () => {

            toggleFavourite(
                anime.mal_id
            );

        }
    );


    return card;

}


/* =====================================================
   TRENDING
===================================================== */

function renderTrending() {

    const container =
        document.getElementById(
            "trendingAnime"
        );


    container.innerHTML = "";


    animeData
        .slice(0, 20)
        .forEach(anime => {

            container.appendChild(
                createAnimeCard(anime)
            );

        });

}


/* =====================================================
   LATEST
===================================================== */

function renderLatest() {

    const container =
        document.getElementById(
            "latestAnime"
        );


    container.innerHTML = "";


    animeData
        .slice(20, 32)
        .forEach(anime => {

            container.appendChild(
                createAnimeCard(anime)
            );

        });

}


/* =====================================================
   ALL 100 ANIME
===================================================== */

function renderAllAnime(
    data = animeData
) {

    const container =
        document.getElementById(
            "allAnime"
        );


    container.innerHTML = "";


    data.forEach(anime => {

        container.appendChild(
            createAnimeCard(anime)
        );

    });

}


/* =====================================================
   FAVOURITES
===================================================== */

function toggleFavourite(id) {

    if (favourites.includes(id)) {

        favourites =
            favourites.filter(
                item => item !== id
            );

    } else {

        favourites.push(id);

    }


    localStorage.setItem(
        "animetoonFavourites",
        JSON.stringify(favourites)
    );


    renderTrending();

    renderLatest();

    renderAllAnime();

    renderFavourites();

}


function renderFavourites() {

    const container =
        document.getElementById(
            "favouriteGrid"
        );


    if (!container) return;


    container.innerHTML = "";


    const favouriteAnime =
        animeData.filter(
            anime =>
                favourites.includes(
                    anime.mal_id
                )
        );


    if (favouriteAnime.length === 0) {

        container.innerHTML = `
            <p style="
                color:#888;
                grid-column:1/-1;
                padding:40px;
                text-align:center;
            ">
                No favourites yet ❤️
            </p>
        `;

        return;

    }


    favouriteAnime.forEach(
        anime => {

            container.appendChild(
                createAnimeCard(anime)
            );

        }
    );

}


/* =====================================================
   SLIDER CONTROLS
===================================================== */

const trendingContainer =
    document.getElementById(
        "trendingAnime"
    );


document
    .getElementById("trendLeft")
    .addEventListener(
        "click",
        () => {

            trendingContainer.scrollBy({
                left: -500,
                behavior: "smooth"
            });

        }
    );


document
    .getElementById("trendRight")
    .addEventListener(
        "click",
        () => {

            trendingContainer.scrollBy({
                left: 500,
                behavior: "smooth"
            });

        }
    );


/* =====================================================
   SEARCH
===================================================== */

const searchInput =
    document.getElementById(
        "searchInput"
    );


searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .toLowerCase()
                .trim();


        if (!query) {

            renderAllAnime();

            return;

        }


        const results =
            animeData.filter(
                anime =>
                    anime.title
                        .toLowerCase()
                        .includes(query)
            );


        openPage("anime");

        renderAllAnime(results);

    }
);


/* =====================================================
   TYPE FILTER
===================================================== */

document
    .getElementById("typeFilter")
    .addEventListener(
        "change",
        function () {

            const value =
                this.value;


            if (value === "all") {

                renderAllAnime();

                return;

            }


            const filtered =
                animeData.filter(
                    anime =>
                        anime.type
                            ?.toLowerCase() ===
                        value.toLowerCase()
                );


            renderAllAnime(filtered);

        }
    );


/* =====================================================
   GENRES
===================================================== */

const genres = [

    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Romance",
    "Sci-Fi",
    "Horror",
    "Mystery",
    "Thriller",
    "Sports",
    "Supernatural",
    "School",
    "Music",
    "Military",
    "Historical",
    "Isekai",
    "Mecha",
    "Shounen",
    "Shoujo",
    "Seinen",
    "Josei",
    "Psychological",
    "Slice of Life",
    "Martial Arts",
    "Samurai",
    "Vampire",
    "Demons",
    "Magic",
    "Space",
    "Cars",
    "Game",
    "Parody",
    "Ecchi",
    "Mahou Shoujo",
    "Kids",
    "Gourmet",
    "Workplace",
    "Police",
    "Cyberpunk"

];


function renderGenres() {

    const container =
        document.getElementById(
            "allGenres"
        );


    container.innerHTML = "";


    genres.forEach(
        genre => {

            const button =
                document.createElement(
                    "button"
                );


            button.textContent =
                genre;


            button.addEventListener(
                "click",
                () => {

                    filterByGenre(
                        genre
                    );

                }
            );


            container.appendChild(
                button
            );

        }
    );

}


function filterByGenre(genre) {

    const results =
        animeData.filter(
            anime =>

                anime.genres?.some(
                    item =>
                        item.name
                            .toLowerCase() ===
                        genre.toLowerCase()
                )

        );


    document
        .getElementById(
            "genresModal"
        )
        .classList.remove(
            "show"
        );


    openPage("anime");

    renderAllAnime(results);

}


/* =====================================================
   OPEN GENRES
===================================================== */

const genresModal =
    document.getElementById(
        "genresModal"
    );


document
    .getElementById("genresBtn")
    .addEventListener(
        "click",
        () => {

            renderGenres();

            genresModal.classList.add(
                "show"
            );

        }
    );


document
    .getElementById("moreGenresBtn")
    .addEventListener(
        "click",
        () => {

            renderGenres();

            genresModal.classList.add(
                "show"
            );

        }
    );


document
    .getElementById("exploreGenres")
    .addEventListener(
        "click",
        () => {

            renderGenres();

            genresModal.classList.add(
                "show"
            );

        }
    );


/* SIDEBAR GENRES */

document
    .querySelectorAll(
        "[data-genre]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterByGenre(
                    button.dataset.genre
                );

            }
        );

    });


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

document
    .getElementById("mobileMenu")
    .addEventListener(
        "click",
        () => {

            document
                .querySelector(
                    ".sidebar"
                )
                .classList.toggle(
                    "open"
                );

        }
    );


/* =====================================================
   CLOSE MODALS WHEN CLICK OUTSIDE
===================================================== */

document
    .querySelectorAll(
        ".modal-overlay"
    )
    .forEach(modal => {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "show"
                    );

                }

            }
        );

    });


/* =====================================================
   HERO SLIDER
===================================================== */

const heroSlides = [

    {
        title: "SOLO<br><em>LEVELING</em>",
        image:
            "https://cdn.myanimelist.net/images/anime/1806/126216l.jpg"
    },

    {
        title: "JUJUTSU<br><em>KAISEN</em>",
        image:
            "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg"
    },

    {
        title: "DEMON<br><em>SLAYER</em>",
        image:
            "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg"
    },

    {
        title: "ONE<br><em>PIECE</em>",
        image:
            "https://cdn.myanimelist.net/images/anime/1244/138851l.jpg"
    },

    {
        title: "ATTACK<br><em>ON TITAN</em>",
        image:
            "https://cdn.myanimelist.net/images/anime/10/47347l.jpg"
    }

];


let heroIndex = 0;


function changeHero(index) {

    heroIndex = index;


    document
        .querySelector(".hero h1")
        .innerHTML =
        heroSlides[index].title;


    document
        .getElementById("heroImage")
        .src =
        heroSlides[index].image;


    document
        .querySelectorAll(
            ".hero-dots span"
        )
        .forEach(
            (dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === index
                );

            }
        );

}


document
    .querySelector(".hero-next")
    .addEventListener(
        "click",
        () => {

            heroIndex =
                (heroIndex + 1) %
                heroSlides.length;

            changeHero(heroIndex);

        }
    );


document
    .querySelector(".hero-prev")
    .addEventListener(
        "click",
        () => {

            heroIndex =
                (heroIndex - 1 +
                    heroSlides.length) %
                heroSlides.length;

            changeHero(heroIndex);

        }
    );


document
    .querySelectorAll(
        ".hero-dots span"
    )
    .forEach(
        (dot, index) => {

            dot.addEventListener(
                "click",
                () => {

                    changeHero(index);

                }
            );

        }
    );


/* AUTOMATIC HERO */

setInterval(
    () => {

        heroIndex =
            (heroIndex + 1) %
            heroSlides.length;

        changeHero(heroIndex);

    },
    6000
);


/* =====================================================
   INITIALIZE
===================================================== */

applyLanguage(
    currentLanguage
);

renderGenres();

loadAnime();