import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Flavors from './components/Flavors';
import Story from './components/Story';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <Flavors />
      <Story />
      <Sustainability />
      <Footer />
    </div>
  );
}

export default App;
