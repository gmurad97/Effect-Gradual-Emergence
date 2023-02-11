document.addEventListener("DOMContentLoaded", function () {
    let options = {
        threshold: [1]
    };
    let observer = new IntersectionObserver(entries, options);
    observer.observe(document.getElementById("magic-text-js-scroll"));
});

function entries(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            let magic_text = document.getElementById("magic-text-js-scroll");
            magic_text.style.visibility = "visible";
            magic_text.style.opacity = 1;
            magic_text.style.transform = "translateY(0px)";
        }
    });
}

function showText() {
    let magic_text = document.getElementById("magic-text-js-click");
    magic_text.style.visibility = "visible";
    magic_text.style.opacity = 1;
    magic_text.style.transform = "translateY(0px)";
}

function resetText() {
    let magic_text = document.getElementById("magic-text-js-click");
    magic_text.style.visibility = "hidden";
    magic_text.style.opacity = 0;
    magic_text.style.transform = "translateY(20px)";
}