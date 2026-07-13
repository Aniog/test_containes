import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import ProductsSection from '../components/home/ProductsSection';
import ProblemsSection from '../components/home/ProblemsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import CTABanner from '../components/shared/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner
        title="Ready to Start Sourcing from China?"
        subtitle="Submit your product requirements and get a free sourcing quote within 24 hours."
        buttonText="Get a Free Sourcing Quote"
        buttonLink="/contact"
      />
    </>
  );
}
