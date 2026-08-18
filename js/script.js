const params =
    new URLSearchParams(
        window.location.search
    );

const selectedBook =
    params.get("book");

let currentPage = 0;



const books = {

    alchemist: {

        title: "THE ALCHEMIST",

        author: "PAULO COELHO",

        pages: [

            {
                chapter: "The Beginning",

                content: `
                    <p>
                        Welcome to The Alchemist
                        reading preview.
                    </p>

                    <p>
                        This is page one of our
                        futuristic reader.
                    </p>

                    <p>
                        Later, you can replace this
                        with your own story or
                        properly licensed text.
                    </p>
                `
            },


            {
                chapter: "The Journey",

                content: `
                    <p>
                        Every journey begins with
                        a decision.
                    </p>

                    <p>
                        The world beyond what we
                        already know can feel
                        uncertain.
                    </p>

                    <p>
                        But curiosity keeps the
                        traveller moving forward.
                    </p>
                `
            },


            {
                chapter: "The Horizon",

                content: `
                    <p>
                        The horizon always seems
                        distant.
                    </p>

                    <p>
                        Yet each step changes the
                        person who takes it.
                    </p>

                    <p>
                        This is the final sample
                        page.
                    </p>
                `
            }

        ]

    },


    atomic: {

        title: "ATOMIC HABITS",

        author: "JAMES CLEAR",

        pages: [

            {
                chapter: "Small Changes",

                content: `
                    <p>
                        Welcome to the Atomic Habits
                        reading preview.
                    </p>

                    <p>
                        Small improvements can build
                        over time.
                    </p>
                `
            },


            {
                chapter: "Consistency",

                content: `
                    <p>
                        Repetition can turn actions
                        into habits.
                    </p>

                    <p>
                        Progress often comes from
                        continuing even when change
                        feels small.
                    </p>
                `
            },


            {
                chapter: "Progress",

                content: `
                    <p>
                        Small actions can create
                        larger results over time.
                    </p>
                `
            }

        ]

    },


    deepwork: {

        title: "DEEP WORK",

        author: "CAL NEWPORT",

        pages: [

            {
                chapter: "Focus",

                content: `
                    <p>
                        Welcome to the Deep Work
                        reading preview.
                    </p>

                    <p>
                        Focus helps us give our
                        attention to difficult work.
                    </p>
                `
            },


            {
                chapter: "Distraction",

                content: `
                    <p>
                        Distractions compete for
                        our attention.
                    </p>

                    <p>
                        Creating quiet space can
                        make concentration easier.
                    </p>
                `
            },


            {
                chapter: "Deep Thinking",

                content: `
                    <p>
                        Concentrated effort can help
                        us solve harder problems.
                    </p>
                `
            }

        ]
    }   

    };

    if (
        typeof window.unwrittenChapters !== "undefined"
    ) {

     books.unwritten = {

        title: "THE UNWRITTEN ONE",

        author: "UMAR",

        pages: window.unwrittenChapters

    };

    }

function displayPage() {

    const book = books[selectedBook];

    if (!book) {
        return;
    }


    const page = book.pages[currentPage];


    document.getElementById("book-title").textContent =
        book.title;


    document.getElementById("book-author").textContent =
        book.author;


    document.getElementById("chapter-title").textContent =
        page.chapter;


    document.getElementById("book-content").innerHTML =
        page.content;

    const content =
        document.getElementById("book-content");


    content.classList.remove("page-change");


    void content.offsetWidth;


    content.classList.add("page-change");


    document.getElementById("page-number").textContent =
        `PAGE ${currentPage + 1} / ${book.pages.length}`;

    const progress =
        ((currentPage + 1) / book.pages.length) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";
}

function nextPage() {

    const book = books[selectedBook];

    if (currentPage < book.pages.length - 1) {

        currentPage++;

        displayPage();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}

function previousPage() {

    if (currentPage > 0) {

        currentPage--;

        displayPage();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


let fontSize = 18;


function increaseFont() {

    if (fontSize < 28) {

        fontSize++;

        document.getElementById("book-content").style.fontSize =
            fontSize + "px";

    }

}


function decreaseFont() {

    if (fontSize > 14) {

        fontSize--;

        document.getElementById("book-content").style.fontSize =
            fontSize + "px";

    }

}

if (
    selectedBook &&
    books[selectedBook]
) {

    displayPage();

}

// ==============================
// 3D BOOK CARD TILT
// ==============================

const bookCards = document.querySelectorAll(".book-card");

bookCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const box = card.getBoundingClientRect();

        const mouseX = event.clientX - box.left;
        const mouseY = event.clientY - box.top;

        const centerX = box.width / 2;
        const centerY = box.height / 2;

        const rotateY =
            ((mouseX - centerX) / centerX) * 8;

        const rotateX =
            ((centerY - mouseY) / centerY) * 8;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

});

// ==============================
// SPACE PARALLAX
// ==============================

// ==============================
// SPACE PARALLAX
// ==============================

const hero = document.querySelector(".hero");
const stars = document.querySelector(".stars");
const planet = document.querySelector(".planet");

if (hero) {

    hero.addEventListener("mousemove", (event) => {

        const rect = hero.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;


        if (stars) {

            stars.style.transform =
                `translate(
                    ${x * 20}px,
                    ${y * 20}px
                )`;

        }


        if (planet) {

            planet.style.transform =
                `translate(
                    ${x * 50}px,
                    ${y * 35}px
                )`;

        }

    });


    hero.addEventListener("mouseleave", () => {

        if (stars) {
            stars.style.transform =
                "translate(0px, 0px)";
        }

        if (planet) {
            planet.style.transform =
                "translate(0px, 0px)";
        }

    });

}

// ==============================
// ENTER LIBRARY WARP
// ==============================

const enterLibrary =
    document.getElementById("enter-library");

const warpScreen =
    document.querySelector(".warp-screen");


if (enterLibrary && warpScreen) {

    enterLibrary.addEventListener(
        "click",
        function(event) {

            // Stop normal page change
            event.preventDefault();


            // Start warp animation
            warpScreen.classList.add("active");


            // Wait for animation
            setTimeout(() => {

                window.location.href =
                    "library.html";

            }, 1500);

        }
    );

}

// ==============================
// CINEMATIC BOOK OPEN
// ==============================

const openBookButtons =
    document.querySelectorAll(".open-book");

const bookTransition =
    document.querySelector(".book-transition");


if (openBookButtons.length > 0 && bookTransition) {

    openBookButtons.forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                event.preventDefault();


                const destination =
                    this.getAttribute("href");


                bookTransition
                    .classList
                    .add("active");


                setTimeout(() => {

                    window.location.href =
                        destination;

                }, 1300);

            }
        );

    });

}


// ==============================
// NEXUS BOOK SEARCH
// ==============================

const searchInput =
    document.getElementById("book-search");

const libraryBooks =
    document.querySelectorAll(".book-float");


if (searchInput) {

    searchInput.addEventListener("input", () => {

        const search =
            searchInput.value.toLowerCase();


        libraryBooks.forEach(book => {

            const title =
                book.textContent.toLowerCase();


            if (title.includes(search)) {

                book.style.display = "";

            } else {

                book.style.display = "none";

            }

        });

    });

}

// ==============================
// NEXUS BOOT SCREEN
// ==============================

const loader =
    document.getElementById("loader");

const loaderBar =
    document.getElementById("loader-bar");

const loaderPercent =
    document.getElementById("loader-percent");

const loaderStatus =
    document.getElementById("loader-status");


if (
    loader &&
    loaderBar &&
    loaderPercent &&
    loaderStatus
) {

    let progress = 0;


    const boot =
        setInterval(() => {

            progress +=
                Math.floor(
                    Math.random() * 12
                ) + 4;


            if (progress >= 100) {

                progress = 100;

            }


            loaderBar.style.width =
                progress + "%";


            loaderPercent.textContent =
                progress + "%";


            if (progress < 35) {

                loaderStatus.textContent =
                    "CONNECTING TO ARCHIVE...";

            }

            else if (progress < 70) {

                loaderStatus.textContent =
                    "LOADING STAR DATABASE...";

            }

            else if (progress < 100) {

                loaderStatus.textContent =
                    "SYNCING NEXUS CORE...";

            }

            else {

                loaderStatus.textContent =
                    "ACCESS GRANTED";

            }


            if (progress === 100) {

                clearInterval(boot);


                setTimeout(() => {

                    loader.classList.add("hide");

                }, 600);

            }

        }, 180);

}
// ==============================
// SCROLL REVEAL
// ==============================

const featuredBooks =
    document.querySelectorAll(".featured-book");


if (featuredBooks.length > 0) {

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("reveal");

                    }

                });

            },

            {
                threshold: 0.2
            }

        );


    featuredBooks.forEach(book => {

        observer.observe(book);

    });

}