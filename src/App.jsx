import './App.css';
import Navbar from './components/basketball/Navbar';
import Hero from './components/basketball/Hero';
import StatsBar from './components/basketball/StatsBar';
import Players from './components/basketball/Players';
import Schedule from './components/basketball/Schedule';
import Team from './components/basketball/Team';
import News from './components/basketball/News';
import About from './components/basketball/About';
import Footer from './components/basketball/Footer';

function App() {
  return (
    <div className="bg-court-black min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <Players />
      <Schedule />
      <Team />
      <News />
      <About />
      <Footer />
    </div>
  );
}

export default App;

