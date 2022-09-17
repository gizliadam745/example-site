import React from "react"
import ReactDOM from "react-dom/client"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"
import './App.css';

function App() {
    return (
        <div>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)