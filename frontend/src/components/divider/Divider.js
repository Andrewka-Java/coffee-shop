import './divider.scss'

const Divider = ({ topElement, bottomElement }) => {
    return (
        <>
            {topElement}
            <div className="coffee-beans divider">
                <img className="coffee-beans__img" src="/coffee-beans.svg" alt="coffee beans" />
            </div>
            {bottomElement}
        </>
    )
}

export default Divider