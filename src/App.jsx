import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';
import CakeMenu from './components/home/CakeMenu';
import HowItWorks from './components/home/HowItWorks';
import Testimonials from './components/home/Testimonials';
import ContactForm from './components/home/ContactForm';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fdf6f0]">
      <Navbar />
      <main>
        <Hero />
        <CakeMenu />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
