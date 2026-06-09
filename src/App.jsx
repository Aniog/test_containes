import React from 'react';
import './App.css';
import { TopBar, Breadcrumb } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedGenerators, BrowseByCategory } from './components/Directory';
import { AllGenerators } from './components/AllGenerators';
import { HowItWorks, WhyStrikingly, FAQ } from './components/InfoSections';
import { ClosingCTA, Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main>
        <Breadcrumb />
        <Hero />
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
