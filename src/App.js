import About from "./components/About";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
