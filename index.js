var name = prompt('Please Enter Your Name.');
alert(`Hello ${name}`);
var age = prompt('Please Enter Your Age.'); 

if(age> 13){
    alert('you are allowed to enter the website');
} else {
    alert('You are not allowed to enter the website');
};

function VerifyingWillPurchase(){ 
    console.log('whatever');
    var purchaseState = confirm(`Press OK if you want to purchase the album or cancel.`);
    if (purchaseState){
        willPurchase();
    } else { 
        willNotPurchase();
    };
        
};

function willPurchase(){ 
    var contactInfo = prompt('Please Enter Your Email to Contact you.');
    alert('Thank you!');
};

function willNotPurchase(){ 
    alert('I can\'t stop you');
};