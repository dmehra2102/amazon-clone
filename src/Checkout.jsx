import React from 'react';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Header from './Header';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div>
    <Header />
    <div className='checkout'>
        <div className="checkout_left">
            <img className='checkout_ad' 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/MFD/Cashback/Apay.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/bankstripes/Bankstripe-scroll-1400x282.jpg" alt="" className="checkout_ad" />
            <div>
                <p>Hello , {user?.email}</p>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {basket.map(item => (
                  <CheckoutProduct 
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                ))}
            </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
    </div>
    </div>
  )
}

export default Checkout