import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ProductsSection from '@/components/home/ProductsSection';
import ProblemsSection from '@/components/home/ProblemsSection';
import TrustSection from '@/components/home/TrustSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import FAQSection from '@/components/home/FAQSection';
import InquiryForm from '@/components/home/InquiryForm';

const Home = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryForm />
    </div>
  );
};

export default Home;
