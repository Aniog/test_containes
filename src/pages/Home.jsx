import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Hero from '../components/Hero';
import FeaturedGenerators from '../components/FeaturedGenerators';
import BrowseByCategory from '../components/BrowseByCategory';
import AllGenerators from '../components/AllGenerators';
import FeaturesAndSteps from '../components/FeaturesAndSteps';
import FAQ from '../components/FAQ';
import ClosingCTA from '../components/ClosingCTA';

const Home = () => {
  return (
    <>
      <Breadcrumb />
      <article>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <FeaturesAndSteps />
        <FAQ />
        <ClosingCTA />
      </article>
    </>
  );
};

export default Home;
