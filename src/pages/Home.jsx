import React from 'react';
import Hero from '@/components/home/Hero.jsx';
import Capabilities from '@/components/home/Capabilities.jsx';
import ProductShowcase from '@/components/home/ProductShowcase.jsx';
import Stats from '@/components/home/Stats.jsx';
import Industries from '@/components/home/Industries.jsx';
import Process from '@/components/home/Process.jsx';
import Testimonial from '@/components/home/Testimonial.jsx';
import ContactCTA from '@/components/home/ContactCTA.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Capabilities />
      <ProductShowcase />
      <Stats />
      <Industries />
      <Process />
      <Testimonial />
      <ContactCTA />
    </>
  );
};

export default Home;
