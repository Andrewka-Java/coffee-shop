import './footer.scss'
import Divider from '../divider/Divider';
import Navbar from '../navbar/Navbar';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <Divider
                        topElement={
                            <Navbar type={"none"} />
                        }
                    />
                </div>
            </footer>
        </>
    )
}

export default Footer