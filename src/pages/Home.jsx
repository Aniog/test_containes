import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ProductsSection from '@/components/home/ProductsSection';
import ProblemsSection from '@/components/home/ProblemsSection';
import TrustSection from '@/components/home/TrustSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import FaqSection from '@/components/home/FaqSection';
import InquirySection from '@/components/home/InquirySection';
import CtaBanner from '@/components/shared/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <CtaBanner
        title="Ready to source from China with more confidence?"
        subtitle="Send us your product, target price, and quantity. We'll come back with a shortlist and a clear plan."
      />
      <FaqSection />
      <InquirySection />
    </>
  );
}
