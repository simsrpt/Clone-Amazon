import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header(){
  const[{basket,user},dispatch]=useStateValue();

	return (
       <div className='header'>
       <Link to="/">
               <img className='header-logo' src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"/>  
       </Link>
              
          <div className='header-search'>
              <input className='header-searchinpt' type="text"/>
              <SearchIcon className='header-SearchIcon'/>
               /*logo*/
          </div>
            <div className='header-nav'>
               <div className='header-opt'> 
                    <span className='header-optlineone'>
                      Hello Guest
                    </span>
                    <span className='header-optlinetwo'>
                      Sign In
                    </span>

               </div>
                 <div className='header-opt'> 
                      <span className='header-optlineone'>
                      Returns
                      </span>
                      <span className='header-optlinetwo'>
                      Orders
                      </span>
                   

               </div>
                <div className='header-opt'> 
                     <span className='header-optlineone'>
                      Your
                    </span>
                    <span className='header-optlinetwo'>
                      Prime
                    </span>

               </div>
               <Link to="/checkout">
                <div className='header-optbasket'> 
                   <ShoppingBasketIcon /> 
                   <span className='header-optlinetwo header-basketcount'>{basket?.length}
                   </span>
                </div>
               </Link>

             </div>
       </div>
		);

}

export default Header;