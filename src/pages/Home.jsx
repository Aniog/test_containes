import React from 'react';
import Hero from '../components/home/Hero.jsx';
import ServicesOverview from '../components/home/ServicesOverview.jsx';
import SourcingProcess from '../components/home/SourcingProcess.jsx';
import ProductsWeSource from '../components/home/ProductsWeSource.jsx';
import ProblemsWeSolve from '../components/home/ProblemsWeSolve.jsx';
import TrustPoints from '../components/home/TrustPoints.jsx';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview.jsx';
import FAQ from '../components/home/FAQ.jsx';
import InquiryForm from '../components/home/InquiryForm.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <SourcingProcess />
      <ProductsWeSource />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQ />
      <InquiryForm />
    </>
  );
};

export default Home;
