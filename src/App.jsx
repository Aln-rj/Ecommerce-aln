import Category from "./components/Categorys";
import Featuresectionfashion from "./components/Featuresectionfashion";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Featuresectionhome from "./components/Featuresectionhome";
import Bannersection from "./components/Bannersection";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import FeatureCard from "./components/Featurecard";
import Featuresection from "./Featuresection";
import Footer from "./components/Footer";



const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
    <Category />
    <Featuresectionfashion />
    <Featuresectionhome />
    <Bannersection />
    <Blog />
    <Newsletter />
    <Featuresection />
    <Footer />
   </main>
  );
};

export default App;