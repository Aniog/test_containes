import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ProductsSection from '@/components/home/ProductsSection';
import ProblemsSection from '@/components/home/ProblemsSection';
import TrustSection from '@/components/home/TrustSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import FAQSection from '@/components/home/FAQSection';
import InquirySection from '@/components/home/InquirySection';
import CTABanner from '@/components/layout/CTABanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <CTABanner
        title="Ready to Source from China?"
        subtitle="Get a free quote and supplier recommendations within 24 hours. No commitment required."
        buttonText="Get a Free Sourcing Quote"
        buttonLink="/contact"
      />
      <FAQSection />
      <InquirySection />
    </div>
  );
}
