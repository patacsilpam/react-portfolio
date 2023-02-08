
import "./App.css"
import { NavBar } from "./components/NavBar"
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Task/Projects";
import { Skills } from "./components/About/Skills";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <div className="route-con">
          <div>
            <NavBar/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
          </div>
      </div>
    </div>
  )
}

export default App
