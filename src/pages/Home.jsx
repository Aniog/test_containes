import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import ProductsSection from '../components/home/ProductsSection';
import ProblemsSection from '../components/home/ProblemsSection';
import TrustSection from '../components/home/TrustSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/shared/CtaBanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner
        title="Ready to Start Sourcing from China?"
        subtitle="Tell us what you need and we'll get back to you within 24 hours with a free sourcing plan."
        buttonText="Get a Free Sourcing Quote"
      />
    </>
  );
}
