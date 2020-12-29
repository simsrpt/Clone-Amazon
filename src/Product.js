import React from 'react';
import './Product.css';
import Picker from 'emoji-picker-react';
import { useStateValue } from "./StateProvider";

function Product({id,title,image,price,rating}){
  const [{ basket }, dispatch] = useStateValue();

  const addtobasket=() => {
    //dispatch the item into the data lyr
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
           id: id,
           title: title,
           image: image,
           price: price,
           rating: rating,
        },

    });
  };
	return(
           <div className='product'>
              <div className='product-info'>
                   <p>{title}</p>
                   <p className='product-price'> 
                         <small>$</small>
                        <strong>{price}</strong>
                       
                   </p>
                   <div className='product-rating'>
                      {Array(rating).fill().map((_, i) =>
                            (<p> ⭐  </p>
                              ) )
                      }
                      
                      
                   </div>            
              </div> 
  <img src={image} alt=""/>
             
            
            <button onClick={addtobasket} > Add to basket </button>
           </div>
 

		);
}

export default Product