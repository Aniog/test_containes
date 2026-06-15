import React from 'react';
import Header from '@/components/generators/Header';
import Breadcrumb from '@/components/generators/Breadcrumb';
import Hero from '@/components/generators/Hero';
import FeaturedGenerators from '@/components/generators/FeaturedGenerators';
import BrowseByCategory from '@/components/generators/BrowseByCategory';
import AllGenerators from '@/components/generators/AllGenerators';
import HowItWorks from '@/components/generators/HowItWorks';
import WhyStrikingly from '@/components/generators/WhyStrikingly';
import FAQ from '@/components/generators/FAQ';
import ClosingCTA from '@/components/generators/ClosingCTA';
import Footer from '@/components/generators/Footer';

const GeneratorsHub = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
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
};

export default GeneratorsHub;
