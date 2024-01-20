export function sortHTML(){
    document.querySelector('.sortFunction')
        .innerHTML=`
    <select name="Sort By" id="sortBy" class="sortOption">
    <option>Choose</option>
    <option>Price</option>
    <option>Name</option>
    <option>Collection</option>
    </select>
    <select name="Order" id="order"></select>
    <button class="buttonSort">SORT</button>
    `
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
        }else if(choice==="Collection"){
            a.innerHTML=`
            <option>Ascending</option>
            <option>Decending</option>`;
        }else{
            a.innerHTML='';
        }
    });
};

export function nameSort(array){
    array.sort(function(a,b){
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    return array;
}

export function priceSort(array){
    array.sort(function(a,b){
        return a.price-b.price;
    });
    return array;
}

export function collectionSort(array){
    array.sort(function(a,b){
        let x = a.collection.toLowerCase();
        let y = b.collection.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    return array;
}