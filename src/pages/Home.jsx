import React from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import ServicesOverview from '../components/home/ServicesOverview.jsx';
import SourcingProcess from '../components/home/SourcingProcess.jsx';
import ProductsWeSource from '../components/home/ProductsWeSource.jsx';
import ProblemsWeSolve from '../components/home/ProblemsWeSolve.jsx';
import TrustPoints from '../components/home/TrustPoints.jsx';
import CaseStudyPreview from '../components/home/CaseStudyPreview.jsx';
import FAQSection from '../components/home/FAQSection.jsx';
import CTASection from '../components/home/CTASection.jsx';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <SourcingProcess />
      <ProductsWeSource />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudyPreview />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
