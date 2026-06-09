import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import WhatIsAISection from '@/components/home/WhatIsAISection';
import TechnologiesSection from '@/components/home/TechnologiesSection';
import ApplicationsSection from '@/components/home/ApplicationsSection';
import TimelineSection from '@/components/home/TimelineSection';
import FutureSection from '@/components/home/FutureSection';
import Footer from '@/components/home/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-ai-dark text-slate-100">
      <Navbar />
      <HeroSection />
      <WhatIsAISection />
      <TechnologiesSection />
      <ApplicationsSection />
      <section id="ai-timeline">
        <TimelineSection />
      </section>
      <FutureSection />
      <Footer />
    </div>
  );
};

export default Home;
