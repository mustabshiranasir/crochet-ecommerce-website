const NavigationbarHTML = `
    <style>
        /* ==========================================================
   GLOBAL RESET AND SETUP 
   ========================================================== */


        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            /* Added padding for smaller screens */
        }


        /* Top Bar */
        .top-bar {
            background-color: #6c998e;
            height: 45px;
            /* Dusty green */
            padding: 10px 0;
            color: #fff;
            font-family: 'Times New Roman', Times, serif;
            font-size: 1.1rem;
        }

        .top-bar__list {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }

        .top-bar__list a {
            color: #fff;
            border-right: 1px solid white;
            padding: 0 10px;
        }

        .currency-lang-selector a {

            border-right: 1px solid black;
            padding: 0 10px;
        }

        .top-bar__list li:last-child a {
            border-right: none;

        }

        /* Dropdown Links in Top Bar */
        .top-bar .dropdown-content a {
            color: gray;
        }

        /* Main Header Area */
        .main-header {
            background-color: white;

        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            position: relative;
            height: 250px;
            border-bottom: 1px dashed rgb(231, 229, 229);
        }

        /* Utility Groups (Left & Right) */
        .utility-group {
            flex: 1;
            display: flex;
            align-items: center;
        }

        .utility-group.left {
            justify-content: flex-start;
            margin-left: 15px;
        }

        .utility-group.right {
            justify-content: flex-end;
            gap: 20px;
            font-size: 1.1rem;
            margin-right: 50px;
        }

        .currency-lang-selector {
            display: flex;
            gap: 10px;
        }

        /* Logo */
        .logo {
            flex: 1;
            display: flex;
            justify-content: center;
        }

        .logo img {
            max-width: 150px;
            height: auto;
        }

        /* Cart Icon */
        .cart-icon {
            position: relative;
        }

        .cart-count {
            position: absolute;
            top: -5px;
            right: -10px;
            background-color: red;
            color: white;
            font-size: 0.7rem;
            border-radius: 50%;
            width: 15px;
            height: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Main Navigation */
        .main-nav {
            height: 65px;
            justify-content: center;
            width: 100%;
            display: flex;
            padding:0 20px;
            
        }

        .nav-list {
            display: flex;
            justify-content: center;
            gap: 50px;
            justify-content: space-between;
            padding: 20px 30px;
        }

        .nav-list a {
            font-size: 0.95rem;
            font-weight: 500;
            letter-spacing: 1px;
            transition: color 0.2s;
            position: relative;
        }

        .nav-list a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            right: 0;
            width: 0;
            height: 2px;
            background-color: #70938b;
            transition: width 0.5s ease;

        }


        .nav-list .smlbtn:hover::after {
            width: 100%;
        }

        /* ==========================================================
   DROPDOWN MENU
   ========================================================== */
        .dropdown {
            position: relative;
            cursor: pointer;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: white;
            min-width: 115px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 10;
            top: 185%;
            left: 0;
            animation: slideDown 0.5s ease forwards;

        }

        .nav-list .dropdown-content {
            width: 200px;
            color: grey;
            font-size: 1rem;
        }


        .dropdown:hover .dropdown-content {
            display: block;
        }

        .dropdown-content a {
            color: #807171;
            padding: 10px 16px;
            display: block;
            border: none;

            /* Reset border from top-bar links */
        }

        .dropbtn::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 1px;
            transform: translateY(-50%) rotate(45deg);

            width: 3px;
            height: 3px;
            border: 1px solid rgb(161, 152, 152);
            border-top-color: transparent;
            /* Hides the top border */
            border-left-color: transparent;

        }

        .dropdown-content a:hover {
            background-color: #f1f1f1;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(10px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
            .spacer_section {
    height: 50vh;
    background-image: url(images/accounts1.png);
    background-size: cover;


}
    </style>
   
    <header class="site-header">

        <section class="top-bar">
            <div class="container">
                <ul class="top-bar__list">
                    <li><a href="#">Shopping Cart</a></li>
                    <li><a href="#">Checkout</a></li>

                    <li class="dropdown">
                        <a href="#" class="dropbtn">English</a>
                        <div class="dropdown-content">
                            <a href="#">English</a>
                            <a href="#">Spanish</a>
                            <a href="#">French</a>
                            <a href="#">German</a>
                            <a href="#">Russian</a>
                            <a href="#">Urdu</a>
                        </div>
                    </li>

                    <li class="dropdown">
                        <a href="#" class="dropbtn">USD</a>
                        <div class="dropdown-content">
                            <a href="#">PKR</a>
                            <a href="#">USD</a>
                            <a href="#">EUR</a>
                            <a href="#">GBP</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <section class="main-header">

            <div class="header-content container">
                <div class="utility-group left">
                    <ul class="currency-lang-selector">
                        <li class="dropdown">
                            <a href="#" class="dropbtn">English</a>
                            <div class="dropdown-content">
                                <a href="#">English</a>
                                <a href="#">Spanish</a>
                                <a href="#">French</a>
                                <a href="#">German</a>
                                <a href="#">Russian</a>
                                <a href="#">Urdu</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropbtn" style="border: none;">USD</a>
                            <div class="dropdown-content">
                                <a href="#">PKR</a>
                                <a href="#">USD</a>
                                <a href="#">EUR</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="logo">
                    <a href="index.html">
                        <img src="images/Crocheting (1).png" alt="Blingcute Crochet Logo">
                    </a>
                </div>

                <div class="utility-group right">
                    <a href="accounts.html"><i class="far fa-user"></i></a>
                    <a href="search.html"><i class="fas fa-search"></i></a>
                    <a href="#"><i class="far fa-heart"></i></a>
                    <a href="#" class="cart-icon">
                        <i class="fas fa-shopping-bag"></i>
                        <span class="cart-count">0</span>
                    </a>
                </div>
            </div>

            <div class="main-nav">
                <ul class="nav-list">
                    <li><a href="index.html" class="smlbtn">HOME</a></li>
                    <li class="dropdown"><a href="fashion.html" class="dropbtn">FASHION</a>
                        <div class="dropdown-content">
                            <a href="#">BAGS</a>
                            <a href="#">CARDIGANS</a>
                            <a href="#">MITTENS</a>
                            <a href="#">KEYCHAIN</a>
                        </div>
                    </li>
                    <li class="dropdown"><a href="hairaccessories.html" class="dropbtn">HAIR ACCESSORIES</a>
                        <div class="dropdown-content">
                            <a href="#">HAIRPINS</a>
                            <a href="#">BANDANA</a>
                            <a href="#">HEADBANDS</a>
                            <a href="#">SCRUNCHIE</a>
                            
                        </div>
                    </li>
                    <li><a href="bouquet.html" class="smlbtn">BOUQUET</a></li>
                    <li><a href="homedecor.html" class="smlbtn">HOME DECOR</a></li>
                    <li><a href="Blog.html" class="smlbtn">BLOG</a></li>
                </ul>
            </div>

        </section>
    </header><section class="spacer_section">

        </section>
`;

// Inject HTML
document.body.insertAdjacentHTML('afterbegin', NavigationbarHTML);


