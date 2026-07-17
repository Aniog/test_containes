import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import PlantGallery from './components/plants/PlantGallery';
import GrowingGuide from './components/plants/GrowingGuide';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <PlantGallery />
        <GrowingGuide />
      </main>
      <Footer />
    </div>
  );
}

export default App;
