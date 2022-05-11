import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import "./Subtotal.css"

function Subtotal() {
    const [{basket}] = useStateValue();
    console.log(basket);
    const [prices,setPrices] = useState(0);
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
              <p>
                  Subtotal ({basket?.length} items):
                  <strong>{value}</strong>
              </p>
              <small className='subtotal_gift'>
                  <input type='checkbox'/>This order
                  contains a gift
              </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
       />
       <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal