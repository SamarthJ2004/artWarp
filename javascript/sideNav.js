document.getElementById("mySideNav").innerHTML=`
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <ul>
        <p>Collections</p>
        <a href="nft-collection-1.html">Gaming</a>
        <a href="nft-collection-2.html">Anime</a>
        <a href="nft-collection-3.html">Beauty of Art</a>
        <a href="nft-collection-4.html">Cars</a>
        <a href="nft-collection-5.html">City Life</a>
        <a href="nft-collection-6.html">Marvelous World</a>
        <a href="nft-collection-7.html">Landscapes</a>
        <a href="nft-collection-8.html">Miscellaneous</a>
    </ul>

    <ul>
        <p>My Account</p>
        <a href='nft-user-profile.html'>My Profile</a>
        <a href='nft-favourites.html'>Favourites</a>
        <a href='nft-cart.html'>Cart</a>
        <a href='documentation.html'>Documentation</a>
        <a href='try premium.html'>Try Premium</a>
        <a id='logout'>Logout</a>
    </ul>

    <ul>
        <p>Join Us</p>
        <a href='https://www.instagram.com/samarth__jindal?igsh=cmpuYnpseWY3eHNx'>Instagram</a>
        <a href='https://www.discordapp.com/users/1159167506167115856'>Discord</a>
        <a href='https://www.linkedin.com/in/samarth-jindal-1129a01b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>LinkedIn</a>
        <a>Facebook</a>
    </ul>
    `;


function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}