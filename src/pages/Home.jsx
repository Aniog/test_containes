import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import ProblemsWeSolve from '../components/home/ProblemsWeSolve';
import ProcessTimeline from '../components/home/ProcessTimeline';
import ProductsGrid from '../components/home/ProductsGrid';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import FAQ from '../components/sections/FAQ';
import BlogPreview from '../components/home/BlogPreview';
import InquiryForm from '../components/sections/InquiryForm';

const Home = () => {
  return (
    <div>
      <Hero
        isHomepage={true}
      />
      <ServicesGrid />
      <ProblemsWeSolve />
      <ProcessTimeline />
      <ProductsGrid />
      <CaseStudiesPreview />
      <FAQ />
      <BlogPreview />
      <InquiryForm />
    </div>
  );
};

export default Home;
