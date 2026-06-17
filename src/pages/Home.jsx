import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ProductsSection from '@/components/home/ProductsSection';
import ProblemsSection from '@/components/home/ProblemsSection';
import TrustSection from '@/components/home/TrustSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import FaqSection from '@/components/home/FaqSection';
import CtaBanner from '@/components/shared/CtaBanner';

export default function Home() {
  return (
    <>
      <title>China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China</title>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FaqSection />
      <CtaBanner
        title="Ready to Source from China with Confidence?"
        subtitle="Get a free sourcing consultation. Tell us what you need and we'll get back to you within 24 hours."
      />
    </>
  );
}
