import Navbar from "./components/Navbar/Navbar";
import Introduce from "./components/Introduce/Introduce";
import Services from "./components/Services/Services";
import "./App.css";
import Mile from "./components/Mile/Mile";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import SendEmail from "./components/SendEmail/SendEmail";
import { useContext, useState, useEffect } from "react";
import { themeContext } from "./Context";
import Solution from "./components/Solution/Solution";
import Reviews from "./components/Reviews/Reviews";
import GridLoader from "react-spinners/GridLoader";
import Testimonials from "./components/Testimonials/Testimonials";
import TeamWork from './components/TeamWork/TeamWork';
import Project from "./components/Project/Project";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{ background: darkMode ? "#222529" : "", color: darkMode ? "white" : "", }}>
      {
        loading ?
          <GridLoader color={'#00509d'} loading={loading} size={25} className="Loading" /> :
          <div>
            <Navbar />
            <Introduce />
            <About />
            <Mile />
            <Reviews />
            <Services />
            <TeamWork />
            <Project />
            <Solution />
            <Testimonials />
            <Contact />
            <SendEmail />
            <Footer />
          </div>
      }
    </div>
  );
}

export default App;
