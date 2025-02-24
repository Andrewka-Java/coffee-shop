import './coffeeInfoBlock.scss'
import Navbar from '../../navbar/Navbar';
import InfoBlock from '../../info-block/InfoBlock';
import Footer from '../../footer/Footer';
import { useParams } from 'react-router-dom';
import useCoffeShopService from '../../../services/CoffeeService';
import { useEffect, useState } from 'react';
import { setContent } from '../../../util/Util';

const CoffeeInfoBlock = () => {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [coffee, setCoffee] = useState({})
    const { getCoffee, process, setProcess } = useCoffeShopService()

    useEffect(() => {
        getCoffee(id)
            .then(coffee => setCoffee(coffee))
            .then(() => setProcess('confirmed'))
        setLoading(false)
    }, [])

    return (
        <>
            <header className='header our-coffee' style={{ background: 'url(/coffee-shop__bg.jpg) center center / cover no-repeat' }}>
                <div className="container">
                    <Navbar />
                    <h1 className="our-coffee__h1 mt-110">Our Coffee</h1>
                </div>
            </header>
            {
                setContent(
                    process,
                    () => View(coffee),
                    loading
                )
            }

            <Footer />
        </>
    )
}

const View = ({ country, price, imgName }) => {
    return (
        <InfoBlock
            divider1={false}
            imgName={imgName}
            h2={"About it"}
            p={
                <>
                    <span className="info-block__span">Country: </span>
                    {country}
                    <br />
                    <br />
                    <span className="info-block__span">Description: </span>
                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    <br />
                    <br />
                    <span className="info-block__span">Price: </span>
                    <span className="info-block__span info-block__span-price">{price}$</span>
                </>
            }
        />
    )
}

export default CoffeeInfoBlock