document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");

    const options = {
        threshold: 0.60,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    slides.forEach((slide) => {
        observer.observe(slide);
    });
});
