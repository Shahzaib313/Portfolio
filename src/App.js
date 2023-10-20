import "./css/style.css"
import About from './Components/About';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Resume from "./Components/Resume";
import Services from "./Components/Services";
import Section from "./Components/Section";
import Portfolio from "./Components/Portfolio";
import News from "./Components/News";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Resume/>
    <Services/>
    <Section/>
    <Portfolio/>
    <News/>
    <Contact/>
    <Footer/>

    {/* <Routes>
      <Route path="/" element= {<Navbar/>}/>
    </Routes> */}

    </>
  
  );
}

export default App;
