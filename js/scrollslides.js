var scrollslides = (function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                entry.target.classList.add(entry.target.dataset.animation);
            }
        });
    });

    function init_observed_elements() {
        document.querySelectorAll('[data-animation]').forEach(element => {
            observer.observe(element);
        });
    }

    init_observed_elements();
})();