
import "./App.css"
import { NavBar } from "./components/NavBar"
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Task/Projects";
import { Skills } from "./components/About/Skills";
import { Footer } from "./components/Footer"
function App() {
  return (
    <div className="body">
    <NavBar/>
    <div className="route-con">
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    </div>
  )
}

export default App
