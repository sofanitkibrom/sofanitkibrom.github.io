/* =========================================================
   SOFANIT KIBROM — PORTFOLIO JAVASCRIPT
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");


// ---------------------------------------------------------
// MOBILE MENUs
// ---------------------------------------------------------

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

        const isOpen = mobileMenu.classList.contains("open");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });


    // Close menu after clicking a link

    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });

}


// ---------------------------------------------------------
// HEADER — SUBTLE SCROLL EFFECT
// ---------------------------------------------------------

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {
        header.style.background = "rgba(8, 9, 10, .94)";
    } else {
        header.style.background = "rgba(8, 9, 10, .86)";
    }

});


// ---------------------------------------------------------
// REVEAL ELEMENTS WHEN THEY ENTER THE SCREEN
// ---------------------------------------------------------

const revealElements = document.querySelectorAll(
    ".interest-card, .project-feature, .project-card, .timeline-item, .skill, .soft-list > div"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});


// ---------------------------------------------------------
// REVEAL CLASS
// ---------------------------------------------------------

const revealStyle = document.createElement("style");

revealStyle.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(revealStyle);