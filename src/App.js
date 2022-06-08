import About from "./components/About";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
    </div>
  );
}

export default App;
