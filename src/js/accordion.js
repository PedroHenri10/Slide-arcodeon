const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        const body = accordion.querySelector(".accordion-body");

        accordions.forEach(otherAccordion => {
            if (otherAccordion !== accordion) {
                otherAccordion.querySelector(".accordion-body").classList.remove('active');
            }
        });

        body.classList.toggle('active');
    });
});
