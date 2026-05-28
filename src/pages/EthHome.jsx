import Navbar from '../components/eth/Navbar';
import HeroSection from '../components/eth/HeroSection';
import WhatIsEthSection from '../components/eth/WhatIsEthSection';
import FeaturesSection from '../components/eth/FeaturesSection';
import StatsSection from '../components/eth/StatsSection';
import EcosystemSection from '../components/eth/EcosystemSection';
import RoadmapSection from '../components/eth/RoadmapSection';
import Footer from '../components/eth/Footer';

export default function EthHome() {
  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white">
      <Navbar />
      <HeroSection />
      <WhatIsEthSection />
      <FeaturesSection />
      <StatsSection />
      <EcosystemSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
}
