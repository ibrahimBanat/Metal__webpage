import { album } from './album.js';

let btn = document.getElementById('btn')
let el = document.getElementById('purchase');

btn.addEventListener('click', function () {
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'});
});

function VerifyingWillPurchase(){ 
    // console.log('whatever');
    var purchaseState = confirm(`Press OK if you want to purchase the album or cancel.`);
    if (purchaseState){
        willPurchase();
    } else { 
        willNotPurchase();
    };
        
};

function willPurchase(){ 
    album();
    alert('Thank you!');
};

function willNotPurchase(){ 
    alert('I can\'t stop you');
};

window.VerifyingWillPurchase = VerifyingWillPurchase;