const LastSectionHTML = `
<style>


/* Last section css */
.contact_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 60px;
    height: 150vh;
    background-color: rgb(245, 218, 245);
}

img {
    width: 150px;
    height: 150px;


}

.s5_heading {
    font-size: 3rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #555555e5;
    text-align: center;
}

.s5_merged_inpt {
    position: relative;
    width: 600px;
}

.s5_input_group {
    border: none;
    border-radius: 1.5rem;
    height: 50px;
    width: 100%;
    padding: 10px;
    padding-right: 60px;
    box-sizing: border-box;
    font-size: large;
    padding-left: 20px;
    font-family: 'Times New Roman', Times, serif;

}

.s5_input_group::placeholder {
    color: rgba(170, 162, 162, 0.829);
}

.s5_btn {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 180px;
    border: none;
    cursor: pointer;
    background-color: #000;
    color: white;
    border-radius: 1.5rem;
    font-size: medium;
    font-weight: lighter;
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 1px;
}

.s5_btn:hover {
    background-color: rgb(132, 174, 214);

}

.icon_family {

    display: flex;
    gap: 25px;
    font-size: 1.1rem;
}

.s5_text {
    color: grey;
    font-family: 'Roboto', sans-serif;
}
    

</style>

    <!--LAST SECTION OF PAGE-->
        <section class="lastpage_s5">
            <div class="contact_box">
                <img src=" images/Chrocheting (2).png" alt="Brand Logo" "><br><br><br><br><br>
                <h1 class=" s5_heading">Crochet with Love ! <br><br>
                100% Handmade Crochet</h1><br><br><br><br><br>
                <div class="s5_merged_inpt">
                    <input class="s5_input_group" type="email" placeholder="Your email address.">
                    <button class="s5_btn">SUBSCRIBE</button>
                </div><br><br><br><br><br>
                <div class="icon_family">
                    <a href=""> <i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-youtube"></i></a>


                </div>
                <br><br><br>
                <p class="s5_text">© 2024 blingcute. All Rights Reserved |<span
                        style="font-weight: bold; color: black;">(+1)
                        2133421206 </span> | contact@blingcute.com</p>

            </div>



        </section>
`;

// Inject HTML
document.body.insertAdjacentHTML('beforeend', LastSectionHTML);


