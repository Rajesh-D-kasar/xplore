const searchForm = document.querySelector("[data-search-form]");
const searchStatus = document.querySelector("[data-search-status]");
const placeCards = [...document.querySelectorAll("[data-name]")];
const contactForm = document.querySelector("[data-contact-form]");
const contactStatus = document.querySelector("[data-contact-status]");

if (searchForm && searchStatus) {
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = new FormData(searchForm).get("query").toString().trim().toLowerCase();
        let visibleCount = 0;

        placeCards.forEach((card) => {
            const name = card.dataset.name.toLowerCase();
            const isMatch = !query || name.includes(query);
            card.classList.toggle("is-hidden", !isMatch);
            if (isMatch) {
                visibleCount += 1;
            }
        });

        searchStatus.textContent = query
            ? `${visibleCount} destination match found.`
            : "Showing all featured destinations.";
    });
}

if (contactForm && contactStatus) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = new FormData(contactForm).get("name").toString().trim();
        contactStatus.textContent = `Thanks ${name}. Your travel request is saved.`;
        contactForm.reset();
    });
}
