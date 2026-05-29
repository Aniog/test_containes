import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import ProductsSection from '../components/home/ProductsSection';
import ProblemSolveSection from '../components/home/ProblemSolveSection';
import TrustSection from '../components/home/TrustSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import FAQSection from '../components/home/FAQSection';
import InquiryFormSection from '../components/home/InquiryFormSection';
import CTABanner from '../components/shared/CTABanner';

export default function Home() {
  useEffect(() => {
    document.title = 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China';
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemSolveSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryFormSection />
      <CTABanner
        title="Ready to Start Sourcing from China?"
        subtitle="Get a free consultation and supplier shortlist within 5 business days."
        ctaText="Get a Free Sourcing Quote"
      />
    </>
  );
}
