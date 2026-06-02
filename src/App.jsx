import React from 'react';
import TopBar from '@/components/generators/TopBar';
import Breadcrumb from '@/components/generators/Breadcrumb';
import HeroSection from '@/components/generators/HeroSection';
import FeaturedGenerators from '@/components/generators/FeaturedGenerators';
import BrowseByCategory from '@/components/generators/BrowseByCategory';
import AllGenerators from '@/components/generators/AllGenerators';
import HowItWorks from '@/components/generators/HowItWorks';
import WhyStrikingly from '@/components/generators/WhyStrikingly';
import FAQ from '@/components/generators/FAQ';
import ClosingCTA from '@/components/generators/ClosingCTA';
import Footer from '@/components/generators/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <Breadcrumb />
      <main style={{ flex: 1 }}>
        <HeroSection />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
