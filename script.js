let currentIndex = 0;
const newsItems = document.querySelectorAll('.col-md-4');

function nextNews() {
    newsItems[currentIndex].style.animation = "slideOutLeft 0.5s forwards";
    currentIndex = (currentIndex + 1) % newsItems.length;
    newsItems[currentIndex].style.animation = "slideInRight 0.5s forwards";
}

// Reset animation when it finishes
newsItems.forEach(item => {
    item.addEventListener('animationend', () => {
        item.style.animation = '';
    });
});