import './navbar.scss'

import { Link } from "react-router-dom"

const Navbar = ({ type = 'block' }) => {
    return (
        <nav className={`navbar navbar__${type}`}>
            <ul className='navbar__items navbar__items_flex'>
                <li className='navbar__item'>
                    <Link to="/coffee-house">
                        <img className='navbar__logo' src="/coffee-beans_logo.svg" alt="Coffee beans logo" />
                        Coffe house
                    </Link>
                </li>
                <li className='navbar__item'>
                    <Link to="/our-coffee">Our coffee</Link>
                </li>
                <li className='navbar__item'>
                    <Link to="/for-your-pleasure">For your pleasure</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 