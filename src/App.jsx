import './App.css';
import Navbar from './components/wiki/Navbar';
import Hero from './components/wiki/Hero';
import Features from './components/wiki/Features';
import QuickStart from './components/wiki/QuickStart';
import Footer from './components/wiki/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <QuickStart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
