import CoffeeHause from "../pages/coffee-house/CoffeeHouse"
import OurCoffee from "../pages/our-coffee/OurCofee"
import CoffeeInfoBlock from "../pages/coffee-info-block/CoffeeInfoBlock"
import ForYourPleasure from "../pages/for-your-pleasure/ForYourPleasure"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CoffeeHause />} />
                <Route path="/coffee-house" element={<CoffeeHause />} />
                <Route path="/our-coffee" element={<OurCoffee />} />
                <Route path="/our-coffee/:id" element={<CoffeeInfoBlock />} />
                <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
            </Routes>
        </Router>
    )
}

export default App