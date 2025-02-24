import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from 'react'

import Spinner from "../spinner/Spinner"

const CoffeeHause = lazy(() => import("../pages/coffee-house/CoffeeHouse"))
const OurCoffee = lazy(() => import("../pages/our-coffee/OurCofee"))
const CoffeeInfoBlock = lazy(() => import("../pages/coffee-info-block/CoffeeInfoBlock"))
const ForYourPleasure = lazy(() => import("../pages/for-your-pleasure/ForYourPleasure"))

const App = () => {
    return (
        <Router>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<CoffeeHause />} />
                    <Route path="/coffee-house" element={<CoffeeHause />} />
                    <Route path="/our-coffee" element={<OurCoffee />} />
                    <Route path="/our-coffee/:id" element={<CoffeeInfoBlock />} />
                    <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App