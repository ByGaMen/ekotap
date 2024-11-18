import Header from "./Components/Header/Header"
import './App.scss'
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Placeholder from "./Components/Placeholder/Placeholder"

function App() {
    return (
        <div className="app">
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/new' element={<Placeholder />} />
            </Routes>



        </div>
    )
}
export default App