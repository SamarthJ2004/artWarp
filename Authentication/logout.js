import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBVkvytd05OpFoI72hNnoLEQWuiTGV00i8",
    authDomain: "nft-marketplace-8be2d.firebaseapp.com",
    projectId: "nft-marketplace-8be2d",
    storageBucket: "nft-marketplace-8be2d.appspot.com",
    messagingSenderId: "961682483678",
    appId: "1:961682483678:web:8688676fc174abb149954f",
    measurementId: "G-KBX7GH75T0"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// ----- Logout code start	  
export function logoutFunc(){
    document.querySelectorAll("#logout").forEach((item)=>{
        item.addEventListener("click", function() {
            signOut(auth).then(() => {
                console.log('Sign-out successful.');
                alert('Sign-out successful.');
                location.replace(`https://${location.hostname}/art-Warp/index.html`);
            }).catch((error) => {
                console.log('An error happened.');
            });		  		  
        });
    });
}
