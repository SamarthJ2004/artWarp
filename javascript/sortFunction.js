import { renderHTML } from "./render.js";
import { cars } from "./collection-data.js";
import { renderCars } from "./render-cars.js";

export function sortHTML(){
    document.querySelector('.sortFunction')
        .innerHTML=`
    <div>
        <select name="Sort By" id="sortBy" class="sortOption">
        <option>Choose</option>
        <option>Price</option>
        <option>Name</option>
        </select>
        <select name="Order" id="order"></select>
        <button class="buttonSort">SORT</button>
    </div>`
    ;

    const a=document.getElementById("order");

    document.querySelector(".sortOption").addEventListener('change',()=>{
        const choice=document.getElementById("sortBy").value;
        if (choice==="Price"){
            a.innerHTML=`
            <option>Low To High</option>
            <option>High To Low</option>`;
        }else if(choice==="Name"){
            a.innerHTML=`
            <option>Ascending</option>
            <option>Decending</option>`;
        }else{
            a.innerHTML='';
        }
    });
};

export function sortNFT(array){
    const a=document.getElementById("order");
    const choice=document.getElementById("sortBy").value;
    const secChoice=a.value;
    let isCars=0;
    array===cars?isCars=1:null;
    console.log(isCars);

    if (choice==="Choose"){
        alert("Choose a Sort condition!!!");
    }else if(choice==="Price"){
        array.sort(function(a,b){
            return a.price-b.price;
        });
        if (secChoice==="High To Low"){
            isCars===0?renderHTML(array.reverse()):renderCars(array.reverse());
        }else{
            isCars===0?renderHTML(array):renderCars(array);
        }
    }else if(choice==="Name"){
        array.sort(function(a,b){
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        if (secChoice==="Decending"){
            isCars===0?renderHTML(array.reverse()):renderCars(array.reverse());
        }else{
            isCars===0?renderHTML(array):renderCars(array);
        }
    }
};
