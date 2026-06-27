import React from 'react';
import TopBar from './TopBar.jsx';
import Breadcrumb from './Breadcrumb.jsx';
import Hero from './Hero.jsx';
import FeaturedGenerators from './FeaturedGenerators.jsx';
import BrowseByCategory from './BrowseByCategory.jsx';
import AllGenerators from './AllGenerators.jsx';
import HowItWorks from './HowItWorks.jsx';
import WhyStrikingly from './WhyStrikingly.jsx';
import FAQ from './FAQ.jsx';
import ClosingCTA from './ClosingCTA.jsx';
import Footer from './Footer.jsx';

export default function GeneratorsPage() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
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
    </>
  );
}