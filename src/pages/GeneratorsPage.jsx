



import React from 'react';
import TopBar from '@/components/generators/TopBar.jsx';
import Breadcrumb from '@/components/generators/Breadcrumb.jsx';
import Hero from '@/components/generators/Hero.jsx';
import FeaturedGenerators from '@/components/generators/FeaturedGenerators.jsx';
import BrowseByCategory from '@/components/generators/BrowseByCategory.jsx';
import AllGenerators from '@/components/generators/AllGenerators.jsx';
import HowItWorks from '@/components/generators/HowItWorks.jsx';
import WhyStrikingly from '@/components/generators/WhyStrikingly.jsx';
import FAQ from '@/components/generators/FAQ.jsx';
import ClosingCTA from '@/components/generators/ClosingCTA.jsx';
import Footer from '@/components/generators/Footer.jsx';

const GeneratorsPage = () => {
  return (
    <>
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
    </>
  );
};

export default GeneratorsPage;


