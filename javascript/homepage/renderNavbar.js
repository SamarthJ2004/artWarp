import {darkToggle} from "../darkToggle.js";

document.querySelector('nav')
    .innerHTML=`
    <div class="nav-left">
        <span id='sideNav' style="font-size:30px;cursor:pointer"><i class="fa-solid fa-bars fa-sm"></i></span>
        <a href='nft.html'><img id="nav-logo" src="images/logo/logo-removebg.png"></a>
    </div>
    <div class="nav-centre">
        <input class="nav-search" placeholder="Search web3">
        <i class="nav-pointer fa-solid fa-magnifying-glass fa-lg" style="color: #919191;"></i>
    </div>
    <div class="nav-right">
        <button>Connect Wallet</button>
        <a href='nft-favourites.html'><i class="fa-regular fa-heart fa-beat-fade fa-xl"></i></a>
        <div class="dropdown">
            <a href="nft-user-profile.html">
                <i class="fa-regular fa-user fa-xl"></i>
                <i class="fa-solid fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
                <a href="nft-user-profile.html">My Profile</a>
                <a id='logout'>Logout</a>
                <div class="nav-collections">
                    <a class="collection-dropdown">Collections</a>
                    <div class="nav-collection-dropdown">
                        <a href="nft-collection-1.html">Gaming</a>
                        <a href="nft-collection-2.html">Anime</a>
                        <a href="nft-collection-3.html">Art</a>
                        <a href="nft-collection-4.html">Cars</a>
                        <a href="nft-collection-5.html">City Life</a>
                        <a href="nft-collection-6.html">Space</a>
                        <a href="nft-collection-7.html">Landscape</a>
                        <a href="nft-collection-8.html">Miscellaneous</a>
                    </div>
                </div>
                <a id="darkToggle">Turn Dark</a>
            </div>
        </div>
        <a href='nft-cart.html'><i class="fa-solid fa-bag-shopping fa-2xl"></i></a>
    </div>
    `;

document.querySelectorAll("#darkToggle").forEach((item)=>{
    item.addEventListener('click',()=>{
        darkToggle();
    })
});

document.getElementById("sideNav").addEventListener("click",()=>{
    document.getElementById("mySideNav").style.width = "100%";
})