import {match,tellCollection,addCartFav} from './cart.js'
import { themeSet } from './darkToggle.js';
import { priceSort,nameSort,collectionSort } from './sortFunction other.js';

export let favourite=JSON.parse(localStorage.getItem('favourite'))||[{
    image: 'images/anime/anime1.jpeg',
    name: 'Everything at Once',
    collection: 'Anime',
    price: 0.3
}, {
    image: 'images/anime/anime2.gif',
    name: 'The Clan Killer',
    collection: 'Anime',
    price: 0.09
}];

export function renderFav(){
    let HTML=``;
    favourite.forEach((item)=>{
        HTML+=`
        <div class="item">
            <img src='${item.image}'>
            <div class="item-info-head">
                ${item.name}<br>
                Collection: ${item.collection}<br>
                Price: ${item.price}ETH
                <u class='js-cart-fav' data-id=${item.image}>ADD TO CART</u>
                <u class='js-remove' data-remove-id=${item.image}>REMOVE</u>
            </div>
        </div>`;
    })
    document.querySelector('.fav-items').innerHTML=HTML;
    themeSet();
    document.querySelectorAll('.js-remove').forEach((link)=>{
        link.addEventListener('click',()=>{
            removeFav(link.dataset.removeId);
        });
    });
    document.querySelectorAll('.js-cart-fav').forEach((link)=>{
        link.addEventListener('click',()=>{
            addCartFav(link.dataset.id);
        });
    });
    document.querySelector('.js-count-fav').innerHTML=`${favourite.length} items`;
}

function removeFav(imageId){
    const newFav=[];

    favourite.forEach((item)=>{
        if (item.image!==imageId){
            newFav.push(item);
        }
    });
    favourite=newFav;
    localStorage.setItem('favourite',JSON.stringify(newFav));
    renderFav();
}

export function addToFav(imageId,collection){
    if (match(imageId,favourite)){
        alert('Already in the Favourites');
    }else{
        const requiredCollection=tellCollection(collection);
        collection.forEach((item)=>{
            if (imageId===item.image){
                favourite.push({
                    image: imageId,
                    name: item.name,
                    collection: requiredCollection,
                    price: item.price
                });
            };
        });
        localStorage.setItem('favourite',JSON.stringify(favourite));
    }
};

export function removeAll(){
    favourite=[];
    localStorage.setItem('favourite',JSON.stringify(favourite));
    renderFav();
};

export function sortNFT(){
    const a=document.getElementById("order");
    const choice=document.getElementById("sortBy").value;
    const secChoice=a.value;
    if (choice==="Choose"){
        alert("Choose a Sort condition!!!");
    }else if(choice==="Price"){
        favourite=priceSort(favourite);
        if (secChoice==="High To Low"){
            localStorage.setItem('favourite',JSON.stringify(favourite.reverse()));
        }else{
            localStorage.setItem('favourite',JSON.stringify(favourite));
        }
    }else if(choice==="Name"){
        favourite=nameSort(favourite);
        if (secChoice==="Decending"){
            localStorage.setItem('favourite',JSON.stringify(favourite.reverse())); 
        }else{
            localStorage.setItem('favourite',JSON.stringify(favourite)); 
        }
    }else if(choice==="Collection"){
        favourite=collectionSort(favourite);
        if (secChoice==="Decending"){
            localStorage.setItem('favourite',JSON.stringify(favourite.reverse())); 
        }else{
            localStorage.setItem('favourite',JSON.stringify(favourite)); 
        }
    }
    renderFav();
};