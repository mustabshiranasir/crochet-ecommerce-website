console.log("Hello");

const toggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
        mobileMenu.style.display =
            mobileMenu.style.display === "block" ? "none" : "block";
    });
}

// Newsletter Popup (only if form exists)
const subForm = document.getElementById("subForm");
if (subForm) {
    subForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Subscribed Successfully!");
        this.reset();
    });
}

