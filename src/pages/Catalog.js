import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Card from '../component/Card';
import '../index.scss';
import { Link } from "react-router-dom";


export default class Contacts extends Component {
  render() {
    return (
      <div className="App">

        <div className="coloredHeader">
        <Header /> 
        </div>  
        <div className="contentSize currentPage">
          <nav>
          <ul>
            <li><Link to='/'>Главная</Link>
            </li>
            <li>
              <div><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.88906 5L0 1.11094L1.11094 0L6.11094 5L1.11094 10L0 8.88906L3.88906 5Z" fill="#E0BEA2" />
              </svg></div>
            </li>
            <li><Link to='/'>Каталог</Link> 
            </li></ul>
            </nav>
        </div>
        <div className="contentSize catalogContent">
          <div className="menu-right">
            <ul>
              <li>Каталог</li>
              <li>Bestsellers</li>
              <li>Верхняя одежда</li>
              <li>Шубы</li>
              <li>Тренчи</li>
              <li>Пальто</li>
              <li>Пуховики и жилеты</li>
              <li>Костюмы</li>
              <li>Жакеты</li>
              <li>Платья</li>
              <li>Рубашки и блузы</li>
              <li>Юбки</li>
              <li>Футболки и топы</li>
              <li>Аксессуары</li>
              <li>Sale</li>
              <li>Summer</li>
              <li>Посмотреть всё</li>
            </ul>
          </div>
          <div>
            <div className="filter" >
              <ul>
                <li>Размер</li>
                <li>Цвет</li>
                <li>Цена</li>
                <li>Сортировать по</li>
              </ul>
            </div>
            <div className="cards">
              <Card title="Белая куртка" price="2900 грн" size="XXS XS S M L" new="new" img="./react-shop/img/catalog/Item1.jpg" />
              <Card title="Синее пальто" price="3150 грн" size="XS M L" new="" img="./react-shop/img/catalog/Item2.jpg" />
              <Card title="Бежевая шуба" price="4200 грн" size="XS M L" new="" img="./react-shop/img/catalog/Item3.jpg" />
              <Card title="Синяя парка" price="2900 грн" size="XXS XS S M L" new="new" img="./react-shop/img/catalog/Item4.jpg" />
              <Card title="Белая куртка" price="2900 грн" size="XXS XS S M L" new="new" img="./react-shop/img/catalog/Item1.jpg" />
              <Card title="Синее пальто" price="3150 грн" size="XS M L" new="" img="./react-shop/img/catalog/Item2.jpg" />
              <Card title="Белая куртка" price="2900 грн" size="XXS XS S M L" new="new" img="./react-shop/img/catalog/Item1.jpg" />
              <Card title="Синее пальто" price="3150 грн" size="XS M L" new="" img="./react-shop/img/catalog/Item2.jpg" />
              <Card title="Бежевая шуба" price="4200 грн" size="XS M L" new="" img="./react-shop/img/catalog/Item3.jpg" />
              <Card title="Синяя парка" price="2900 грн" size="XXS XS S M L" new="new" img="./react-shop/img/catalog/Item4.jpg" />
              <Card title="Белая куртка" price="2900 грн" size="XXS XS S M L" new="new" img="./react-shop/img/catalog/Item1.jpg" />
              <Card title="Синее пальто" price="3150 грн" size="XS M L" new="" img="./react-shop/img/catalog/Item2.jpg" />
            </div>
          </div>
        </div>

        <Footer />
      </div >
    );
  }

}

