const stickyNavbarHTML = `
<style>
    /* =========================================
    Sticky merged navbar 
    =========================================*/

    .sticky-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 250px;
        background: white;
        display: none;
        justify-content: space-between;
        align-items: center;
        padding: 60px 100px;
        border-bottom: 1px solid #f0eded;
        z-index: 9999;
    }

    .sticky-bar img {
        height: 150px;
        width: 150px;
    }

    .sticky-center .sticky-nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 35px 10px;
        list-style: none;
        letter-spacing: 1px;
        padding: 8px 32px;
        width: 760px;
        margin: 0 auto;
    }

 

    .sticky-center .sticky-nav a {
        padding: 8px 12px;
        display: inline-block;
        text-align: center;
    }
    .sticky-right {
        display: flex;
        align-items: center;
    }
    .sticky-right a {
        margin-left: 20px;
        font-size: 20px;
        color: black;
        font-weight: lighter;
    }
</style>
<div class="sticky-bar">
    <div class="sticky-left">
        <img src="images/Crocheting (1).png" alt="Logo">
    </div>

    <div class="sticky-center">
        <ul class="sticky-nav">
            <li><a href="index.html">HOME</a></li>
            <li class="dropdown"><a href="fashion.html" class="dropbtn">FASHION</a>
                <div class="dropdown-content">
                    <a href="#">BAGS</a>
                    <a href="#">CARDIGANS</a>
                    <a href="#">MITTENS</a>
                    <a href="#">KEYCHAIN</a>
                </div>
            <li class="dropdown"><a href="hairaccrssories.html" class="dropbtn">HAIR ACCESSORIES</a>
                <div class="dropdown-content">
                    <a href="#">HAIRPINS</a>
                    <a href="#">BANDANA</a>
                    <a href="#">HEADBANDS</a>
                    <a href="#">SCRUNCHIE</a>                    
                </div>
            </li>
            <li><a href="bouquet.html">BOUQUET</a></li>
            <li><a href="homedecor.html">HOME DECOR</a></li>
            <li><a href="Blog.html">BLOG</a></li>
        </ul>
    </div>

    <div class="sticky-right">
        <a href="accounts.html"><i class="far fa-user"></i></a>
        <a href="search.html" id="searchLink"><i class="fas fa-search"></i></a>
        <a href="#"><i class="far fa-heart"></i></a>
        <a href="#" class="cart-icon">
            <i class="fas fa-shopping-bag"></i>
            <span class="cart-count">0</span>
        </a>
    </div>
</div>
`;

// Inject HTML
document.body.insertAdjacentHTML('beforeend', stickyNavbarHTML);

// Sticky navbar logic
window.addEventListener("scroll", function () {
    const stickyBar = document.querySelector(".sticky-bar");
    const mainNav = document.querySelector(".main-nav");

    if (!stickyBar || !mainNav) return; // safety check

    let navBottom = mainNav.offsetTop + mainNav.offsetHeight;

    if (window.scrollY > navBottom) {
        stickyBar.style.display = "flex";
    } else {
        stickyBar.style.display = "none";
    }
});
