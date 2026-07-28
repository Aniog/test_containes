import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import HowItWorksPreview from '@/components/home/HowItWorksPreview';
import ProductsPreview from '@/components/home/ProductsPreview';
import ProblemsWeSolve from '@/components/home/ProblemsWeSolve';
import TrustPoints from '@/components/home/TrustPoints';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <HowItWorksPreview />
      <ProductsPreview />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQSection />
      <CTASection />
    </div>
  );
}
