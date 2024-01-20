let backId;

export function darkToggle(){
    if (localStorage.getItem("theme")==="light"){
        console.log("turned to dark");
        localStorage.setItem("theme","dark");
        toDark();
    }else{
        console.log("turned to light");
        localStorage.setItem("theme","light");
        toLight();
    }
}

export function themeSet(){
    if (localStorage.getItem("theme")==="dark"){
        toDark();
    }else if ((backId===undefined) && (document.getElementById("nft-theme"))){
        let i=-1;
        backLightImage();
        function backLightImage(){
            i+=1;
            document.querySelector(".hero-heading").style.backgroundImage=`url('url('https://${location.hostname}/artWarp/styles/images/hero-light/hero${i}.jpeg')`;
            i===4?i=-1:null;
            backId=setTimeout(backLightImage,5000);
        }
    }
}

function toDark(){
    document.getElementById("darkToggle").innerHTML="Turn Light";
    document.getElementById("footer-theme").href="styles/dark-theme/footer-dark.css";
    document.getElementById("nav-theme").href="styles/dark-theme/nav-dark.css";
    document.getElementById("nav-logo").src="images/logo/logo-dark-removebg.png";

    if (document.getElementById("nft-theme")){
        document.getElementById("nft-theme").href="styles/dark-theme/nft dark.css";
        document.getElementById("subscribe-theme").href="styles/dark-theme/subscribe-dark.css";
        document.getElementById("intro-logo").src="images/logo/logo-dark-removebg.png";
        clearTimeout(backId);
        let j=-1;
        backDarkImage();
        function backDarkImage(){
            j+=1;
            document.querySelector(".hero-heading").style.backgroundImage=`url('url('https://${location.hostname}/artWarp/styles/images/hero-dark/hero${j}.jpeg')`;
            j===5?j=-1:null;
            backId=setTimeout(backDarkImage,5000);
        }
    }else if (document.getElementById("pages-theme")){
        document.getElementById("pages-theme").href="styles/dark-theme/nft-space-dark.css";
    }else if(document.getElementById("cart-theme")){
        document.getElementById("cart-theme").href="styles/dark-theme/cart-dark.css";
    }else if(document.getElementById("fav-theme")){
        document.getElementById("fav-theme").href="styles/dark-theme/fav-dark.css";
    }
    if (document.getElementById("latest-cars-theme")){
        document.getElementById("latest-cars-theme").href="styles/dark-theme/nft-latest-cars-dark.css";
        document.querySelectorAll("#cart-icon").forEach((item)=>{
            item.innerHTML='<i class="fa-solid fa-bag-shopping fa-xl" style="color: #ffffff;"></i>';});
        document.querySelectorAll("#fav-icon").forEach((item)=>{
            item.innerHTML='<i class="fa-solid fa-heart fa-xl" style="color: #ffffff;"></i>';});
    }else if(document.getElementById("latest-theme")){
        document.getElementById("latest-theme").href="styles/dark-theme/nft-latest-dark.css";
        document.querySelectorAll("#cart-icon").forEach((item)=>{
            item.innerHTML='<i class="fa-solid fa-bag-shopping fa-xl" style="color: #ffffff;"></i>';});
        document.querySelectorAll("#fav-icon").forEach((item)=>{
            item.innerHTML='<i class="fa-solid fa-heart fa-xl" style="color: #ffffff;"></i>';});
    }
}

function toLight(){
    document.getElementById("darkToggle").innerHTML="Turn Dark";
    document.getElementById("footer-theme").href="styles/nft-footer.css";
    document.getElementById("nav-theme").href="styles/nft-nav.css";
    document.getElementById("nav-logo").src="images/logo/logo-removebg.png";

    if (document.getElementById("nft-theme")){
        document.getElementById("nft-theme").href="styles/nft.css";
        document.getElementById("subscribe-theme").href="styles/nft-subscribe.css";
        document.getElementById("intro-logo").src="images/logo/logo-removebg.png";
        clearTimeout(backId);
        let i=-1;
        backLightImage();
        function backLightImage(){
            i+=1;
            document.querySelector(".hero-heading").style.backgroundImage=`url('url('https://${location.hostname}/artWarp/styles/images/hero-light/hero${i}.jpeg')`;
            i===4?i=-1:null;
            backId=setTimeout(backLightImage,5000);
        }
    }else if (document.getElementById("pages-theme")){
        document.getElementById("pages-theme").href="styles/nft-space.css";
    }else if(document.getElementById("cart-theme")){
        document.getElementById("cart-theme").href="styles/cart.css";
    }else if(document.getElementById("fav-theme")){
        document.getElementById("fav-theme").href="styles/favourite.css";
    }
    if (document.getElementById("latest-cars-theme")){
        document.getElementById("latest-cars-theme").href="styles/nft-latest cars.css";
        document.querySelectorAll("#cart-icon").forEach((item)=>{
            item.innerHTML='<i class="fa-solid fa-bag-shopping fa-xl" style="color: #000000;"></i>';});
        document.querySelectorAll("#fav-icon").forEach((item)=>{
            item.innerHTML='<i class="fa-regular fa-heart fa-xl" style="color: #000000;"></i>';});
    }else if(document.getElementById("latest-theme")){
        document.getElementById("latest-theme").href="styles/nft-latest.css";
        document.querySelectorAll("#cart-icon").forEach((item)=>{
            item.innerHTML='<i class="fa-solid fa-bag-shopping fa-xl" style="color: #000000;"></i>';});
        document.querySelectorAll("#fav-icon").forEach((item)=>{
            item.innerHTML='<i class="fa-regular fa-heart fa-xl" style="color: #000000;"></i>';});
    }
}
