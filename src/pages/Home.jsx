import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import ServicesGrid from '@/components/home/ServicesGrid';
import ProcessSteps from '@/components/home/ProcessSteps';
import HomeProductsBrief from '@/components/home/HomeProductsBrief';
import TrustPoints from '@/components/home/TrustPoints';
import HomeCaseStudiesBrief from '@/components/home/HomeCaseStudiesBrief';
import FAQSection from '@/components/home/FAQSection';
import BriefContactForm from '@/components/home/BriefContactForm';

const Home = () => {
  return (
    <div className="home-page">
      <HomeHero />
      <ServicesGrid />
      <ProcessSteps />
      <HomeProductsBrief />
      <TrustPoints />
      <HomeCaseStudiesBrief />
      <FAQSection />
      <BriefContactForm />
    </div>
  );
};

export default Home;
