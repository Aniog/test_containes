import Navbar from './components/cake-shop/Navbar';
import Hero from './components/cake-shop/Hero';
import CakeMenu from './components/cake-shop/CakeMenu';
import About from './components/cake-shop/About';
import Testimonials from './components/cake-shop/Testimonials';
import OrderForm from './components/cake-shop/OrderForm';
import Footer from './components/cake-shop/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fdf6ee]">
      <Navbar />
      <Hero />
      <CakeMenu />
      <About />
      <Testimonials />
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;
