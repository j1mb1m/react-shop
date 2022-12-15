import CategoryCard from "./CategoryCard";
import Carousel from 'carousel-react-rcdev'

function CarouselBox(props) {
    return (
        <Carousel>
            <CategoryCard image="/react-shop/img/dress/dress1.jpg" title="Куртки" />
            <CategoryCard image="/react-shop/img/dress/dress2.jpg" title="Пальто" />
            <CategoryCard image="/react-shop/img/dress/dress3.jpg" title="Шубы" />
            <CategoryCard image="/react-shop/img/dress/dress4.jpg" title="Парки" />
            <CategoryCard image="/react-shop/img/dress/dress5.jpg" title="Тренчи" />
            <CategoryCard image="/react-shop/img/dress/dress2.jpg" title="Пуховики" />
            <CategoryCard image="/react-shop/img/dress/dress6.jpg" title="Костюмы" />
            <CategoryCard image="/react-shop/img/dress/dress4.jpg" title="Жакеты" />
        </Carousel>)
}

export default CarouselBox;