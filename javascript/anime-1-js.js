import { addToCart } from './cart.js';
import {anime} from './collection-data.js';
import { addToFav } from './favourite.js';

const item= anime[2];

document.querySelector('.item-data')
    .innerHTML=`
    <div class="hero">
        <div class="hero1">
            <img src="${item.image}">
        </div>
    </div>

    <div class="hero-head">
        <div>
            <div class="main-head">${item.name}</div>
            <div class="sub">
                <div class="sub_">
                    <div class="sub1">Created By</div>
                    <div class="sub2">${item.author}</div>
                </div>
                <div class='sub_'>
                    <div class="sub1">Collection</div>
                    <div class="sub2">Anime</div>
                </div>
                <div>
                    <div class="sub1">Owned By</div>
                    <div class="sub2">bfkbbvv</div>
                </div>
            </div>
            <pre><span class="sub1">Address</span>     <span class="sub2">0x9bc...41ee5</span></pre>
        </div>
        <div class="bidding">
            <div class="sub1">Price</div> 
            <div class="price_bid">${item.price}ETH</div>
            <div class='bid-button'>
                <button id='addToCart'>Add to Cart</button>
                <button id='addToFav'>Add to Favourites</button>
            </div>
        </div>
    </div>`;

document.getElementById('addToCart').addEventListener('click',()=>{
    addToCart(item.image,anime);
});

document.getElementById('addToFav').addEventListener('click',()=>{
    addToFav(item.image,anime);
});
