import React from 'react';
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className='header'>
        {/*logo on left */}
        <Link to='/'>
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="header__logo"
          />
        </Link>

        {/* search bar */}
        <div className='header__search'>
        <input className='header__searchInput' type="text" />
        <SearchIcon className='header__searchIcon'/>
        </div>
        

        {/* links 3 */}
        <div className='header__nav'>
          {/* 1st link */}
          <Link to="/login" className="header__link">
            <div className="header__option">
            <span className='header__optionLineOne'>Hello shiv</span>
            <span className='header__optionLineTwo'>Sign In</span>
            </div>
          </Link>

          {/* 2nd link */}
          <Link to="/" className="header__link">
            <div className="header__option">
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
            </div>
          </Link>

          {/* 3rd link */}
          <Link to="/" className="header__link">
            <div className="header__option">
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
            </div>
          </Link>


          {/* 4th link */}
            <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                {/**shopping basket icon */}
                  <ShoppingBasketIcon />

                {/** no. of items in basket */}
                <span className='header__optionLineTwo header__basketCount'>0</span>

              </div>
            </Link>

        </div>

    </nav>
  )
}

export default Header