var slides = (function () {
    let slides = null;

    window.onload = () => slides = document.getElementById('slides');

    function changeSlide (direction) {
        for (let i = 0; i < slides.children.length; i++) {
            let curSlide = slides.children[i];

            // Disable the current slide and show the previous or next slide
            if (!curSlide.classList.contains('hidden')) {
                let nextSlide = i + direction;
                // Wrap around to the first slide
                if (i === slides.children.length - 1) { nextSlide = 0 };

                curSlide.classList.toggle('hidden');
                slides.children[nextSlide].classList.toggle('hidden');
                break;
            }
        }
    }

    return {
        changeSlide: changeSlide
    }
})();