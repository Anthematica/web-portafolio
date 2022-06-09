import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
}

export default App;
