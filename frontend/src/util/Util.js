import aromistico from '../resources/img/coffee_aromistico.png'
import colombia from '../resources/img/coffee_colombia.jpg'
import czarnaKawka from '../resources/img/coffee_czarna-kawka.jpg'
import espresso from '../resources/img/coffee_espresso.jpg'
import presto from '../resources/img/coffee_presto.png'
import solimo from '../resources/img/coffee_solimo.png'

import Spinner from '../components/spinner/Spinner'

export const img = {
    'coffee_aromistico.png': aromistico,
    'coffee_colombia.jpg': colombia,
    'coffee_czarna-kawka.jpg': czarnaKawka,
    'coffee_espresso.jpg': espresso,
    'coffee_presto.png': presto,
    'coffee_solimo.png': solimo
}

export const setContent = (process, Component, loading) => {
    switch (process) {
        case 'waiting':
            return <Spinner />
        case 'loading':
            return loading ? Component() : <Spinner />
        case 'confirmed':
            return Component()
        case 'error':
            return <p>Error message</p>
        default:
            throw new Error("No default")
    }
}

