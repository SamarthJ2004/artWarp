import { priceSort,nameSort,collectionSort } from './sortFunction other.js';
import { themeSet } from './darkToggle.js';

export let profile=JSON.parse(localStorage.getItem('profile'))||[{
    image: 'images/cars/cars5.jpeg',
    name: 'Super se uppar',
    collection: 'Cars',
    price: 0.7
}, {
    image: 'images/marvelous-world/space5.webp',
    name: 'true beauty',
    collection: 'Space',
    price: 0.0024
}];

export function renderProfile(){
    let HTML=``;
    profile.forEach((item)=>{
        HTML+=`
        <div class="item">
            <img src='${item.image}'>
            <div class="item-info-head">
                ${item.name}<br>
                Collection: ${item.collection}<br>
                Price: ${item.price}ETH
                <u class='js-sell' data-sell-id=${item.image}>SELL</u>
            </div>
        </div>`;
    })
    document.querySelector('.fav-items').innerHTML=HTML;
    themeSet();
    document.querySelectorAll('.js-sell').forEach((link)=>{
        link.addEventListener('click',()=>{
            sellProfile(link.dataset.sellId);
        });
    });
    document.querySelector('.js-count-fav').innerHTML=`${profile.length} items`;
}

function sellProfile(imageId){
    const newProfile=[];

    profile.forEach((item)=>{
        if (item.image!==imageId){
            newProfile.push(item);
        }
    });
    profile=newProfile;
    localStorage.setItem('profile',JSON.stringify(newProfile));
    renderProfile();
};

export function removeAll(){
    profile=[];
    localStorage.setItem('profile',JSON.stringify(profile));
    renderProfile();
};

export function sortNFT(){
    const a=document.getElementById("order");
    const choice=document.getElementById("sortBy").value;
    const secChoice=a.value;
    if (choice==="Choose"){
        alert("Choose a Sort condition!!!");
    }else if(choice==="Price"){
        profile=priceSort(profile);
        if (secChoice==="High To Low"){
            localStorage.setItem('profile',JSON.stringify(profile.reverse()));
        }else{
            localStorage.setItem('profile',JSON.stringify(profile));
        }
    }else if(choice==="Name"){
        profile=nameSort(profile);
        if (secChoice==="Decending"){
            localStorage.setItem('profile',JSON.stringify(profile.reverse())); 
        }else{
            localStorage.setItem('profile',JSON.stringify(profile)); 
        }
    }else if(choice==="Collection"){
        profile=collectionSort(profile);
        if (secChoice==="Decending"){
            localStorage.setItem('profile',JSON.stringify(profile.reverse())); 
        }else{
            localStorage.setItem('profile',JSON.stringify(profile)); 
        }
    }
    renderProfile();
};