import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';
import MenuSection from './components/home/MenuSection';
import StorySection from './components/home/StorySection';
import FeaturesSection from './components/home/FeaturesSection';
import ContactSection from './components/home/ContactSection';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <StorySection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
