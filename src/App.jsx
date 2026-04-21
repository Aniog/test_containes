import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';
import Menu from './components/home/Menu';
import About from './components/home/About';
import Specials from './components/home/Specials';
import Contact from './components/home/Contact';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Specials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
