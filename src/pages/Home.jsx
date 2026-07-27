import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProcessSection from '@/components/home/ProcessSection';
import ProductsSection from '@/components/home/ProductsSection';
import ProblemsSolved from '@/components/home/ProblemsSolved';
import TrustSection from '@/components/home/TrustSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import FAQSection from '@/components/home/FAQSection';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSolved />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
