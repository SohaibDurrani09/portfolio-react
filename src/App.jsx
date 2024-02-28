import Navbar from "./Navbar";
import "./App.css";
import Intro from './Intro';
import Services from "./Services";
import Experience from "./Experience";
import Works from "./Works";
// import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import { themeContext } from "./Context.jsx";
import { useContext } from "react";
import About from "./About";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background: darkMode? 'black' : '' , color: darkMode? 'white': ''  }}>
      <Navbar />
      // swdkwsdwsdk
      <Intro /> 
      <About />
      <Services /> 
      <Experience  /> 
      <Works />
      
      <Testimonial />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
