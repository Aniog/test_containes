import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import LiveScores from './components/home/LiveScores';
import TopTeams from './components/home/TopTeams';
import LatestNews from './components/home/LatestNews';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pitch text-gray-50">
      <Navbar />
      <Hero />
      <LiveScores />
      <TopTeams />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;
