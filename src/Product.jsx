import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ title , image , price , rating ,id }) {

  const[{basket},dispatch] = useStateValue();
  const addToBasket = ()=>{
    dispatch({
      type : 'ADD_TO_BASKET',
      payload : {
        id : id,
        title : title,
        image : image,
        price : price,
        rating : rating
      },
    })
  }

  return (
    <div className='product'>
        <div className="product_info">
          <p>{title}</p>
          <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating).fill().map((_, i)=>(
              <p>&#11088;</p>
            ))}
          </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product