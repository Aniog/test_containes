import './App.css';
import Navbar from './components/baseball/Navbar';
import Hero from './components/baseball/Hero';
import About from './components/baseball/About';
import Rules from './components/baseball/Rules';
import Teams from './components/baseball/Teams';
import Players from './components/baseball/Players';
import Events from './components/baseball/Events';
import Footer from './components/baseball/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rules />
        <Teams />
        <Players />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default App;
