import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import ProblemsWeSolve from '@/components/home/ProblemsWeSolve';
import ServicesOverview from '@/components/home/ServicesOverview';
import SourcingProcess from '@/components/home/SourcingProcess';
import TrustPoints from '@/components/home/TrustPoints';
import CaseStudies from '@/components/home/CaseStudies';
import FAQ from '@/components/home/FAQ';
import InquiryForm from '@/components/home/InquiryForm';

const Home = () => {
  return (
    <>
      <HomeHero />
      <ProblemsWeSolve />
      <ServicesOverview />
      <SourcingProcess />
      <TrustPoints />
      <CaseStudies />
      <FAQ />
      <InquiryForm />
    </>
  );
};

export default Home;
