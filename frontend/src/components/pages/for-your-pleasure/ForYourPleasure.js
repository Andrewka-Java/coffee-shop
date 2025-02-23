import './forYourPleasure.scss'
import Divider from '../../divider/Divider';
import Navbar from '../../navbar/Navbar';
import CoffeeCardList from '../../coffee-card-list/CoffeeCardList';
import InfoBlock from '../../info-block/InfoBlock';
import Footer from '../../footer/Footer';

const ForYourPleasure = () => {
    return (
        <>
            <header className='header our-coffee' style={{ background: 'url(/coffee-shop__bg.jpg) center center / cover no-repeat' }}>
                <div className="container">
                    <Navbar />
                    <h1 className="our-coffee__h1 mt-110">For your pleasure</h1>
                </div>
            </header>
            <InfoBlock
                h2={"About our goods"}
                p={
                    <>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br />
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.<br /><br />
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </>
                }
                align={"left"}
            />
            <CoffeeCardList />
            <Footer />
        </>
    )
}

export default ForYourPleasure