import './coffeeCard.scss'

import { Link } from 'react-router-dom';
import { img } from '../../util/Util';

const CoffeeCard = ({ coffee }) => {
    return (
        <>
            <Link to={`/our-coffee/${coffee.id}`} key={coffee.id} className="coffee-card shadow-box">
                <img className="coffee-card__img" src={img[coffee.imgName]} alt={coffee.name} />
                <p className="coffee-card__description">{coffee.name}</p>
                <p className="coffee-card__country">{coffee.country}</p>
                <p className="coffee-card__price">{coffee.price}$</p>
            </Link>
        </>
    )
}

export default CoffeeCard