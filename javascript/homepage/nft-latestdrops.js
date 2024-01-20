import { renderHTML } from '../render.js';


export const latestNFTs=[{
    image: 'images/latest-drops/asteroid.gif',
    author: 'Fame Identity',
    name: 'Meteorite Bash',
    status: 'Minting',
    statusValue:'Now',
    price: 0.01
}, {
    image: 'images/latest-drops/womenportrait.png',
    author: 'Rocketgirl',
    name: 'INGENUE',
    status: 'Starts in',
    statusValue: '20hours',
    price: 0.01
}, {
    image: 'images/latest-drops/music.gif',
    author: 'Micheal Jackson',
    name: 'all they sing',
    status: 'Minting',
    statusValue: 'Now',
    price: 0.08
}, {
    image: 'images/latest-drops/gorilla.jpeg',
    author:'White Chase',
    name:'Smoker Gorilla',
    status:'Status',
    statusValue: 'Completed',
    price: 0.02
}, {
    image: 'images/latest-drops/cups.gif',
    author: 'OoakosiMo',
    name:'Trashcans Rebellion',
    status: 'Status',
    statusValue: 'Completed',
    price: 0.0024
}, {
    image: 'images/latest-drops/thereaper.jpeg',
    author: 'Shilly Preston',
    name: 'Noise is Everywhere',
    status:'Start in',
    statusValue: '2 hours',
    price: 0.01
}, {
    image: 'images/latest-drops/collection.gif',
    author: 'hemilylan',
    name: 'KIROGI',
    status: 'Minting',
    statusValue: 'Now',
    price: 0.035
}, {
    image: 'images/latest-drops/theshowmustgoon.jpeg',
    author: 'Varvara Alay',
    name:'Show must go on',
    status: 'Status',
    statusValue: 'Completed',
    price: 0.0011
}, {
    image: 'images/latest-drops/random.gif',
    author: 'catswilleatyou',
    name: 'open cats get',
    status: 'Minting',
    statusValue: 'Now',
    price: 0.01
}, {
    image: 'images/latest-drops/trashineyes.png',
    author: 'LedgerOnEmotions',
    name: 'trash in your eyes',
    status: 'Status',
    statusValue: 'Completed',
    price: 0.0024
}];

renderHTML(latestNFTs);