import React from 'react';
import TopBar from './components/layout/TopBar';
import Breadcrumb from './components/layout/Breadcrumb';
import Hero from './components/generators/Hero';
import FeaturedGrid from './components/generators/FeaturedGrid';
import CategoryGrid from './components/generators/CategoryGrid';
import AllGeneratorsDirectory from './components/generators/AllGeneratorsDirectory';
import HowItWorks from './components/generators/HowItWorks';
import WhyStrikingly from './components/generators/WhyStrikingly';
import FAQ from './components/generators/FAQ';
import ClosingCTA from './components/generators/ClosingCTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Breadcrumb />
      <main className="flex-grow">
        <Hero />
        <FeaturedGrid />
        <CategoryGrid />
        <AllGeneratorsDirectory />
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
