import React from "react";
import {  Link } from "react-router-dom";

function Header() {
  return (
    <>

        <header>
          <div className="contentSize menu">
            <img className="burger" src="img/burger.svg" alt="Burger" />

            <nav>
              <Link to='/'>New</Link>
              <Link to='/catalog'>Каталог</Link>
              <Link to='/contacts'>О нас</Link>
            </nav>

            <img className="logo" src="img/YANKI.svg" alt="Logo" />

            <ul className="countrySettings">
              <li><div>Ru<img className="logo" src="img/drift_header.svg" alt="Logo" /></div>
                <ul>
                  <li>En</li>
                  <li>By</li>
                  <li>Ru</li>
                </ul>
              </li>
              <li>UAh<img className="logo" src="img/drift_header.svg" alt="Logo" />
                <ul>
                  <li>USD</li>
                  <li>BYN</li>
                  <li>UAH</li>
                </ul>
              </li>
            </ul>

            <ul className="userService">
              <li><a href='/'><img src="img/search.svg" alt="Search" /></a></li>
              <li><a href='/'><img src="img/user.svg" alt="User" /></a></li>
              <li><a href='/'><img src="img/favorite.svg" alt="Favorite" /></a></li>
              <li><a href='/'><img src="img/basket.svg" alt="Basket" /></a></li>
            </ul>

          </div>

        </header>
    </>
  );
}

export default Header;