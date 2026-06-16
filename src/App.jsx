import Navbar from './components/football/Navbar';
import Hero from './components/football/Hero';
import StatsBar from './components/football/StatsBar';
import History from './components/football/History';
import Champions from './components/football/Champions';
import Legends from './components/football/Legends';
import WorldCup2026 from './components/football/WorldCup2026';
import Footer from './components/football/Footer';

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <History />
        <Champions />
        <Legends />
        <WorldCup2026 />
      </main>
      <Footer />
    </div>
  );
}
