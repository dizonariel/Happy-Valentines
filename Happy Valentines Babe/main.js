window.onload = function () {
    const modal = document.getElementById("valentineModal");
    const openModal = document.getElementById("openModal");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    // Show modal when button is clicked
    openModal.onclick = function () {
        modal.style.display = "flex";
        setTimeout(() => modal.style.opacity = "1", 100);
    };

    // "Yes" button: Redirect to flower.html smoothly
    yesBtn.onclick = function () {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
            window.location.href = "flower.html";
        }, 500);
    };

    // "No" button: Show a cute message instead
    noBtn.onclick = function () {
        modal.innerHTML = "<p style='color: white;'>Why naman ganon! :( 💔</p>";
        setTimeout(() => modal.style.opacity = "0", 2000);
    };

    // Floating hearts animation
    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 500);
};

var music = document.getElementById("bg-music");
    var button = document.getElementById("music-btn");

    function toggleMusic() {
        if (music.paused) {
            music.play();
            button.innerHTML = "⏸ Pause Music";
        } else {
            music.pause();
            button.innerHTML = "🎵 Play Music";
        }
    }

    // Image switching effect
    const leftImages = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
    const rightImages = ["img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg"];

    let leftIndex = 0;
    let rightIndex = 0;

    function switchImages() {
        leftIndex = (leftIndex + 1) % leftImages.length;
        rightIndex = (rightIndex + 1) % rightImages.length;

        let leftImageElement = document.querySelector(".switching-image.left");
        let rightImageElement = document.querySelector(".switching-image.right");

        leftImageElement.style.opacity = "0"; // Fade out
        rightImageElement.style.opacity = "0";

        setTimeout(() => {
            leftImageElement.src = leftImages[leftIndex];
            rightImageElement.src = rightImages[rightIndex];

            leftImageElement.style.opacity = "1"; // Fade in
            rightImageElement.style.opacity = "1";
        }, 500); // Half a second delay for smooth transition
    }

    setInterval(switchImages, 3000); // Change image every 3 seconds