import './coffeeHouse.scss'

import Navbar from '../../navbar/Navbar';
import Divider from '../../divider/Divider';
import Footer from '../../footer/Footer';
import { CoffeeCardListView } from '../../coffee-card-list/CoffeeCardList';

import { useRef } from 'react';

const CoffeeHause = () => {

    const anchorRef = useRef(null)

    const handleScroll = () => {
        anchorRef.current?.scrollIntoView({ behaviour: "smooth", block: "start" })
    }

    return (
        <>
            <header className="coffee-house" style={{ background: 'url(/coffee-house__bg.jpg) center center / cover no-repeat' }}>
                <div className="container">
                    <Divider
                        topElement={
                            <>
                                <Navbar />
                                <h1 className="coffee-house__h1 mt-110 shadow-text">Everything You Love About Coffee</h1>
                            </>
                        }
                        bottomElement={
                            <>
                                <h2 className="coffee-house__h2 mt-35">We makes every day full of energy and taste</h2>
                                <h2 className="coffee-house__h2 mt-20 shadow">Want to try our beans?</h2>
                                <button
                                    className="coffee-house__btn mt-18"
                                    onClick={handleScroll}
                                >More</button>
                            </>
                        }
                    />

                </div>
            </header>
            <section className="about-us">
                <div className="container">
                    <Divider
                        topElement={
                            <h2 ref={anchorRef} className="about-us__h2">About us</h2>
                        }
                        bottomElement={
                            <p className="about-us__p">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                                <br />
                                <br />
                                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                horrible but confined day end marriage. Eagerness furniture set preserved far
                                recommend. Did even but nor are most gave hope. Secure active living depend son
                                repair day ladies now.</p>
                        }
                    />
                </div>
            </section>
            <section className="coffee-cards coffee-cards__our-best" style={{ background: 'url(/coffee-house__our-best-bg.jpg) center center / cover no-repeat' }}>
                <div className="container">
                    <h2 className="our-best__h2">Our best</h2>
                    <div className="coffee-cards__wrapper">
                        <CoffeeCardListView limit={3} />
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default CoffeeHause