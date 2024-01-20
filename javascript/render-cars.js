import { addToCart } from './cart.js';
import { addToFav } from './favourite.js';
import {themeSet} from "./darkToggle.js";

export function renderCars(array){
    let HTML=``;

    array.forEach((item)=>{
        HTML+=`
        <a class="item-tabs" href='anime-1-nft.html'>
            <div class="tabs-img">
                <img src=${item.image}>
            </div>
            <div class="info">
                <div class='sub-info'>
                    <div>
                        <div class="author">by ${item.author}
                            <i class="fa-solid fa-circle-check" style="color: #4b48f9;"></i>
                        </div>
                        <div class="item-name">${item.name}</div>
                    </div>
                    <button id="cart-icon" class='js-add-cart' data-image-id=${item.image}><i class="fa-solid fa-bag-shopping fa-xl"></i></button>
                    <button id="fav-icon" class='js-add-fav' data-image-id=${item.image}><i class="fa-regular fa-heart fa-xl"></i></button>
                </div>
                <div class="status-price">
                    <div class="sub-status-price">
                        <div class="status">${item.status}</div>
                        <div>${item.statusValue}</div>
                    </div>
                    <div class="sub-status-price">
                        <div class="price">Price</div>
                        <div>${item.price}ETH</div>
                    </div>
                </div>  
            </div>
        </a>
        `;
    });

    document.querySelector('.item-block')
        .innerHTML=HTML;

    themeSet();

    document.querySelectorAll('.js-add-cart').forEach((cartButton)=>{
        cartButton.addEventListener('click',function(event){
            event.preventDefault();
            addToCart(cartButton.dataset.imageId,array);
        });
    });

    document.querySelectorAll('.js-add-fav').forEach((favButton)=>{
        favButton.addEventListener('click',function(event){
            event.preventDefault();
            addToFav(favButton.dataset.imageId,array);
        });
    });
}