import React from 'react';
import {
  Hero,
  ServicesPreview,
  ProcessSection,
  ProductsSection,
  ProblemsSection,
  TrustStats,
  CaseStudiesPreview,
  FAQSection,
  CTABanner,
  Testimonials,
} from '../components/home';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustStats />
      <CaseStudiesPreview />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </div>
  );
};

export default Home;
