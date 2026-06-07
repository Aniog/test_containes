import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Destinations from './components/home/Destinations';
import Features from './components/home/Features';
import Testimonials from './components/home/Testimonials';
import BookingCTA from './components/home/BookingCTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-space-black min-h-screen">
        <Navbar />
        <Hero />
        <Destinations />
        <Features />
        <Testimonials />
        <BookingCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

