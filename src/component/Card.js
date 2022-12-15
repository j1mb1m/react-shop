import styles from './Card.module.scss';

function Card(props) {
    return (
        <div className = {styles.card}>
            <img src={props.img} alt={props.title} />
            <img className = {styles.like} src='./react-shop/img/like-yes.svg' alt="Unliked" />
            <div className="description">
                <p className= {styles.title} >{props.title}<span>{props.new}</span></p>
                <p className= {styles.price} >{props.price}</p>
                <p className= {styles.size} >{props.size}</p>
                <ul>
                    <li>Б</li>
                    <li>С</li>
                    <li>К</li>
                </ul>
            </div>
        </div>
        )
}

export default Card;