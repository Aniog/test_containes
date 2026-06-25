import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutF1 from './components/AboutF1';
import Teams from './components/Teams';
import Circuits from './components/Circuits';
import Legends from './components/Legends';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />
      <Hero />
      <AboutF1 />
      <Teams />
      <Circuits />
      <Legends />
      <Footer />
    </div>
  );
}

export default App;
