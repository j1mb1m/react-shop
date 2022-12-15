/* import { Link } from "react-router-dom"; */

function Header() {
  return (
    <header>
      <div className="contentSize menu">
        <img className="burger" src="/react-shop/img/burger.svg" alt="Burger" />
        <ul className="shopService">
{/*           <li><Link to='/'>New</Link></li>
          <li><Link to='/catalog'>Каталог</Link></li>
          <li><Link to='/'>О нас</Link></li> */}
        </ul>
        <img className="logo" src="/react-shop/img/YANKI.svg" alt="Logo" />

        <ul className="countrySettings">
          <li><div>Ru<img className="logo" src="/react-shop/img/drift_header.svg" alt="Logo" /></div>
            <ul>
              <li>En</li>
              <li>By</li>
              <li>Ru</li>
            </ul>
          </li>
          <li>UAh<img className="logo" src="/react-shop/img/drift_header.svg" alt="Logo" />
          <ul>
              <li>USD</li>
              <li>BYN</li>
              <li>UAH</li>
            </ul>
            </li>
        </ul>

        <ul className="userService">
          <li><a href='/'><img src="/react-shop/img/search.svg" alt="Search" /></a></li>
          <li><a href='/'><img src="/react-shop/img/user.svg" alt="User" /></a></li>
          <li><a href='/'><img src="/react-shop/img/favorite.svg" alt="Favorite" /></a></li>
          <li><a href='/'><img src="/react-shop/img/basket.svg" alt="Basket" /></a></li>
        </ul>

      </div>
    </header>
  );
}

export default Header;