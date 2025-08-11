  const clickSound = document.getElementById("clickSound");

    function playSound() {
        clickSound.currentTime = 0;
        clickSound.play();
    }

    document.addEventListener("keydown", (event) => {
        let key = event.key.toUpperCase();
        if (key === " ") key = " ";
        let keyElement = document.querySelector(`.key[data-key="${key}"]`);
        if (keyElement && !keyElement.classList.contains("active")) {
            keyElement.classList.add("active");
            playSound();
            gsap.fromTo(keyElement, { scale: 1 }, { scale: 1.2, duration: 0.1, yoyo: true, repeat: 1 });
        }
    });

    document.addEventListener("keyup", (event) => {
        let key = event.key.toUpperCase();
        if (key === " ") key = " ";
        let keyElement = document.querySelector(`.key[data-key="${key}"]`);
        if (keyElement) {
            keyElement.classList.remove("active");
        }
    });




