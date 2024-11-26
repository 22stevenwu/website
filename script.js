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
        threshold: 0.2 // Trigger when 20% of the element is in the viewport
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

/* Fade animation for switching songs */
document.addEventListener("DOMContentLoaded", function() {
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

    let currentSongIndex = 1;  // Start at the first song

    // Function to change the song by updating the iframe URL
    function changeSong() {
        const iframeWrapper = document.querySelector(".spotify-widget-wrapper");

        // Step 1: Fade out the wrapper (iframe will fade out as part of the wrapper)
        iframeWrapper.classList.add("fade-out-wrapper");

        // Wait for the fade-out effect to complete (1s)
        setTimeout(() => {
            // Step 2: Change the song by updating the iframe src
            const currentSongId = songIds[currentSongIndex];
            const iframe = document.getElementById("spotify-iframe");
            iframe.src = `https://open.spotify.com/embed/track/${currentSongId}?utm_source=generator`;

            // Increment the song index, looping back to the start if needed
            currentSongIndex = (currentSongIndex + 1) % songIds.length; // Loop back to the first song after the 10th

            // Step 3: Fade in the new song
            iframeWrapper.classList.remove("fade-out-wrapper");
            iframeWrapper.classList.add("fade-in-wrapper"); // Ensure it fades in

        }, 1000); // Wait for the fade-out transition to complete before changing the song
    }

    // Add event listener to the "Next Song" button
    document.getElementById('next-song-button').addEventListener('click', changeSong);
});