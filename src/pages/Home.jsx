import React from 'react';
import Hero from '../components/home/Hero.jsx';
import ServicesOverview from '../components/home/ServicesOverview.jsx';
import TrustPoints from '../components/home/TrustPoints.jsx';
import CTASection from '../components/home/CTASection.jsx';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <TrustPoints />
      <CTASection />
    </div>
  );
}
