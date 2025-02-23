import './infoBlock.scss'
import Divider from '../divider/Divider';
import { img } from '../../util/Util';

const InfoBlock = ({ h2, p, imgName, align, divider1 = true }) => {
    return (
        <section className="info-block">
            <div className="container">
                <div className="info-block__wrapper">
                    <div className="info-block__left">
                        <img className="info-block__img" src={img[imgName] || '/coffee-shop__girl.jpg'} alt="Woman drinks coffee" />
                    </div>
                    <div className={`info-block__right-${align}`}>
                        <Divider
                            topElement={
                                <h2 className="info-block__h2">{h2}</h2>
                            }
                            bottomElement={
                                <p className="info-block__p">{p}</p>
                            }
                        />
                    </div>
                </div>
                {divider1 ? <div className="divider1" /> : null}
            </div>
        </section>
    )
}

export default InfoBlock