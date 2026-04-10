import NavBar from './components/ai/NavBar';
import Hero from './components/ai/Hero';
import HowItWorks from './components/ai/HowItWorks';
import Stats from './components/ai/Stats';
import Applications from './components/ai/Applications';
import Future from './components/ai/Future';
import Footer from './components/ai/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050510]">
      <NavBar />
      <main>
        <Hero />
        <HowItWorks />
        <Stats />
        <Applications />
        <Future />
      </main>
      <Footer />
    </div>
  );
}

export default App;
