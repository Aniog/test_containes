import Navbar from './components/hoover/Navbar';
import Hero from './components/hoover/Hero';
import Overview from './components/hoover/Overview';
import Stats from './components/hoover/Stats';
import History from './components/hoover/History';
import Engineering from './components/hoover/Engineering';
import Gallery from './components/hoover/Gallery';
import Legacy from './components/hoover/Legacy';
import Footer from './components/hoover/Footer';

export default function App() {
  return (
    <div className="bg-navyBlack min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Overview />
      <Stats />
      <History />
      <Engineering />
      <Gallery />
      <Legacy />
      <Footer />
    </div>
  );
}
