import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header(){
  const[{basket,user},dispatch]=useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

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
            <Link to={!user && '/login'}> 
                 <div onClick={handleAuthentication} className='header-opt'> 
                    <span className='header-optlineone'>
                      Hello 
                    </span>
                    <span className='header-optlinetwo'>
                    {user? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                </Link>
               

               
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