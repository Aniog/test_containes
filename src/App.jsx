import AIHero from './components/AIHero';
import WhatIsAI from './components/WhatIsAI';
import AIStats from './components/AIStats';
import AIApplications from './components/AIApplications';
import AITimeline from './components/AITimeline';
import AIEthics from './components/AIEthics';
import AIFooter from './components/AIFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#050816]">
      <AIHero />
      <WhatIsAI />
      <AIStats />
      <AIApplications />
      <AITimeline />
      <AIEthics />
      <AIFooter />
    </div>
  );
}

export default App;
