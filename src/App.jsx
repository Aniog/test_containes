import Navbar from './components/ai/Navbar';
import Hero from './components/ai/Hero';
import WhatIsAI from './components/ai/WhatIsAI';
import Capabilities from './components/ai/Capabilities';
import Timeline from './components/ai/Timeline';
import Applications from './components/ai/Applications';
import Future from './components/ai/Future';
import Footer from './components/ai/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#05050f] text-slate-200">
      <Navbar />
      <Hero />
      <WhatIsAI />
      <Capabilities />
      <Timeline />
      <Applications />
      <Future />
      <Footer />
    </div>
  );
}

export default App;
