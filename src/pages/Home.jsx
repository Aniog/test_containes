import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import SourcingProcess from '../components/home/SourcingProcess';
import ProductsWeSource from '../components/home/ProductsWeSource';
import ProblemsWeSolve from '../components/home/ProblemsWeSolve';
import TrustPoints from '../components/home/TrustPoints';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import FAQ from '../components/home/FAQ';
import InquiryForm from '../components/home/InquiryForm';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <SourcingProcess />
      <ProductsWeSource />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQ />
      <InquiryForm />
    </div>
  );
};

export default Home;
