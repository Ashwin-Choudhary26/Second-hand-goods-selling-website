const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">categories</li>
                <li><a href="#" class="footer-link">electronic</a></li>
                <li><a href="#" class="footer-link">transportation</a></li>
                <li><a href="#" class="footer-link">hostel room essentials</a></li>
                <li><a href="#" class="footer-link">academics</a></li>
                <li><a href="#" class="footer-link">sports equipment</a></li>
                <li><a href="#" class="footer-link">miscellaneous</a></li>
            </ul>

        </div>
    </div>
    <p class="footer-title">About Company</p>
    <p class ="info">We at SECOND HAND know the perils that the students of NITK go through every year, nay everyday to come by the basic necessities that are needed to sustain a homely yet economically well managed life. It is for this reason, along with a willingness to carry on the ideology of NITK being nothing but one large family that here to aid one another, that we have created our website. Second hand runs on the synergy between the buyer and the seller having a sense of relatability as they share the common expereince of having the need for the product at one point in their academic life. The diverse range of essentials to luxuires avaiblable beautifully compliments the accesibility of the website, maiing it the final destination for those looking to buy and sell alike.</p>
    <p class="info">support emails - help@secondHand.com, customersupport@secondHand.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">SECOND HAND, Best online store</p>
    `;
}

createFooter();
