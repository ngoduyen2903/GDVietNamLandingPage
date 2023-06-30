import Navbar from "./components/Navbar/Navbar";
import Introduce from "./components/Introduce/Introduce";
import Services from "./components/Services/Services";
import "./App.css";
import Mile from "./components/Mile/Mile";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import SendEmail from "./components/SendEmail/SendEmail";
import { useContext } from "react";
import { themeContext } from "./Context";
import Solution from "./components/Solution/Solution";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{ background: darkMode ? "#222529" : "", color: darkMode ? "white" : "", }}>
      <Navbar />
      <Introduce />
      <About />
      <Services />
      <Mile />
      <Team />
      <Solution />
      <Contact />
      <SendEmail />
      <Footer />
    </div>
  );
}

export default App;
