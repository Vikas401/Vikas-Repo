import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe  = price * 100;
    const publishablekey = 'pk_test_WUtBCCXd4TClA63S2b1IuivB00qQY7Fi2o';

 const onToken = token => {
     console.log(token)
     alert('Payment Succesfull')
 };

return (
    <StripeCheckout 
       label='Pay Now'
       name='G-commerse Ltd.'
       billingAddress
       shippingAddress
       image= 'http://svgshare.com/i/CUz.svg'
       discription = {`Your Total is ${price}`}
       amount= {priceForStripe}
       pannelLable= 'Pay Now'
       token= {onToken} 
       stripeKey = {publishablekey}  
    />
);
};

export default StripeCheckoutButton;