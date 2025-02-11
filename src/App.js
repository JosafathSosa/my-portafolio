import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./Components/Banner";
import { Lenguajes } from "./Components/Lenguajes";
import { NavBar } from "./Components/NavBar";

import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Lenguajes />

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
