import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
 return (
  <div className="mx-auto lg:px-6 p-4">
   <Navbar />
   <Body />
   <Projects />
   <Footer />
  </div>
 );
}

export default App;
