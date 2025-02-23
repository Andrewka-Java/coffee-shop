import './coffeeCardList.scss'

import { useState, useEffect } from 'react';
import useCoffeShopService from '../../services/CoffeeService';
import CoffeeCard from '../coffee-card/CoffeeCard';
import { setContent } from '../../util/Util';


const CoffeeCardList = ({ search, filterByCountry, limit, style }) => {
    return (
        <section className="coffee-cards" style={style}>
            <div className="container">
                <div className="coffee-cards__wrapper">
                    <CoffeeCardListView search={search} filterByCountry={filterByCountry} limit={limit} />
                </div>
            </div>
        </section>
    )
}

export const CoffeeCardListView = ({ search, filterByCountry, limit }) => {

    const [coffeeList, setCoffeeList] = useState([])
    const { getAllCoffee, process, setProcess } = useCoffeShopService()

    useEffect(() => {
        getAllCoffee(search, filterByCountry, limit)
            .then(list => setCoffeeList(list))
            .then(() => setProcess('confirmed'))
    }, [search, limit, filterByCountry])

    return (
        <>
            {
                setContent(
                    process,
                    () => coffeeList.map(coffee => <CoffeeCard coffee={coffee} />),
                    true
                )
            }
        </>
    )
}

export default CoffeeCardList