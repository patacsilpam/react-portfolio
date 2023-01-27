
import "./App.css"
import { NavBar } from "./components/NavBar"
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Task/Projects";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {

  return (
    <div className="body" >
     <NavBar/>
    
    <div className="route-con">
      <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App
