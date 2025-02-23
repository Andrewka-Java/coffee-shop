import './ourCoffee.scss';
import Navbar from '../../navbar/Navbar';

import CoffeeCardList from '../../coffee-card-list/CoffeeCardList';
import InfoBlock from '../../info-block/InfoBlock';
import Footer from '../../footer/Footer';

import { useState } from 'react'

const OurCoffee = () => {
    const [search, setSearch] = useState('');
    const [country, setCountry] = useState(null)

    const handleSearchInput = (e) => {
        setSearch(e.target.value); // Just update state
    };

    const handleCountry = (e) => {
        const text = e.target.innerText; // Corrected from e.target.text
        setCountry(text === country ? null : text); // Toggle active state
    };

    return (
        <>
            <header className="header our-coffee" style={{ background: 'url(/coffee-shop__bg.jpg) center center / cover no-repeat' }}>
                <div className="container">
                    <Navbar />
                    <h1 className="our-coffee__h1 mt-110">Our Coffee</h1>
                </div>
            </header>

            <InfoBlock
                h2="About our beans"
                p={
                    <>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br />
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </>
                }
                align="center"
            />

            <section className="filter">
                <div className="container">
                    <div className="filter-by-name">
                        <label className="filter-by-name__label" htmlFor="filter-by-name-input">
                            Looking for
                        </label>
                        <input
                            type="text"
                            id="filter-by-name-input"
                            className="filter__input"
                            placeholder="Start typing here..."
                            value={search}
                            onChange={handleSearchInput}
                        />
                    </div>
                    <div className="filter-by-type">
                        <span className="filter-by-type__span">Or filter</span>
                        <button
                            className={`filter__btn ${country === 'Brazil' ? 'active' : ''}`}
                            onClick={handleCountry} >
                            Brazil
                        </button>
                        <button
                            className={`filter__btn ${country === 'Kenya' ? 'active' : ''}`}
                            onClick={handleCountry} >
                            Kenya
                        </button>
                        <button
                            className={`filter__btn ${country === 'Columbia' ? 'active' : ''}`}
                            onClick={handleCountry} >
                            Columbia
                        </button>
                    </div>
                </div>
            </section>

            <CoffeeCardList search={search} filterByCountry={country} limit={6} />

            <Footer />
        </>
    );
};

export default OurCoffee