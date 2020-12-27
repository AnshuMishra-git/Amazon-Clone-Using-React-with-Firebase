import React from "react";
import { Link } from "react-router-dom";
import logo from "./amazon_logo.jpg";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img id="header_logo" src={logo} alt="Amazon_logo"></img>
      </Link>
      <div className="header_search">
        {/* Search Box */}
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_SearchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header_nav">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">Hello {user?.email} </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Return </span>
            <span className="header_optionLineTwo">& Order</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span>Your</span>
            <span
              className="header_optionLineOne"
              className="header_optionLineTwo"
            >
              Prime
            </span>
          </div>
        </Link>
      </div>
      <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
