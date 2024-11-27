/* Typing animation for about me header */
document.addEventListener("DOMContentLoaded", function() {
    const text = "About Me";
    const element = document.getElementById("about-me-heading");
    let index = 0;
    let isTyping = false; 

    function type() {
        if (index < text.length) {
            element.textContent += text[index]; 
            index++;
            setTimeout(type, 150); 
        }
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isTyping) {
                isTyping = true; 
                type();
            }
        });
    }, {
        threshold: 1
    });

    observer.observe(element);
});

/* Fade in animation for home section */
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const elementsToAnimate = document.querySelectorAll('#home .home-animate');
    elementsToAnimate.forEach(element => observer.observe(element)); 
});

/* Fade in animation for experience section */
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2 
    });

    const experienceSection = document.getElementById('experience');
    observer.observe(experienceSection);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });

    const techStacks = document.querySelectorAll('.tech-stack');
    techStacks.forEach(item => {
        observer.observe(item);
    });
});

/* Cycling songs and fade animation */
document.addEventListener("DOMContentLoaded", function () {
    const songIds = [
        "3PKq1cb1lIhs8moUhfADKJ", // Rush - Brook and the Bluff
        "2aSC2xhRxOLiiZZVjhbylH", // Hold On, We're Going Home - Drake
        "2plbrEY59IikOBgBGLjaoe", // Die With A Smile - Bruno Mars & Lady Gaga
        "4h6ViRoztTBpWcJ1zFT9Zg", // 20 Something - SZA
        "4O2rRsoSPb5aN7N3tG6Y3v", // Northern Attitude - Noah Kahan
        "4xR3MAscflQ262kMeiKshQ", // Skyline To - Frank Ocean
        "4fg2EzaeNhR2PWNGXbX18n", // 4 Seasons - Rex Orange County
        "7221xIgOnuakPdLqT0F3nP", // I Had Some Help - Post Malone & Morgan Wallen
        "7C1BLYzAvR0KdBpov3GpUZ", // El Dorado - Zach Bryan
        "5LrN7yUQAzvthd4QujgPFr", // Here With Me - d4vd
    ];

    let currentSongIndex = Math.floor(Math.random() * songIds.length);

    const iframe = document.getElementById("spotify-iframe");

    function setIframeSource(src) {
        iframe.src = src;
    }

    function changeSong(next = true) {
        const iframeWrapper = document.querySelector(".spotify-widget-wrapper");
        iframeWrapper.classList.add("fade-out-wrapper");

        setTimeout(() => {
            if (next) {
                currentSongIndex = (currentSongIndex + 1) % songIds.length;
            } else {
                currentSongIndex = (currentSongIndex - 1 + songIds.length) % songIds.length;
            }

            const newSrc = `https://open.spotify.com/embed/track/${songIds[currentSongIndex]}?utm_source=generator`;
            setIframeSource(newSrc);

            setTimeout(() => {
                iframeWrapper.classList.remove("fade-out-wrapper");
                iframeWrapper.classList.add("fade-in-wrapper");

                setTimeout(() => {
                    iframeWrapper.classList.remove("fade-in-wrapper");
                }, 500); 
            }, 100); 
        }, 500); 
    }

    const initialSongSrc = `https://open.spotify.com/embed/track/${songIds[currentSongIndex]}?utm_source=generator`;
    setIframeSource(initialSongSrc);

    document.getElementById("next-song-button").addEventListener("click", () => changeSong(true));
    document.getElementById("prev-song-button").addEventListener("click", () => changeSong(false));
});

/* Fade animation for Contacts section */
document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector("#contact");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contactSection.style.opacity = "1";
                    contactSection.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.5 } 
    );

    observer.observe(contactSection);
});

/* hamburger menu toggle */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const headerRight = document.querySelector(".header-right");

    menuToggle.addEventListener("click", function () {
        headerRight.classList.toggle("open"); 
    });
});

/* animation for hamburger menu */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const headerRight = document.querySelector(".header-right");

    menuToggle.addEventListener("click", function () {
        if (headerRight.style.maxHeight) {
            headerRight.style.maxHeight = null;
        } else {
            headerRight.style.maxHeight = headerRight.scrollHeight + "px";
        }
    });
});