import HeroSection from '@/components/home/HeroSection';
import ProblemsWeSolve from '@/components/home/ProblemsWeSolve';
import ServicesOverview from '@/components/home/ServicesOverview';
import HowItWorksPreview from '@/components/home/HowItWorksPreview';
import ProductsPreview from '@/components/home/ProductsPreview';
import TrustPoints from '@/components/home/TrustPoints';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProblemsWeSolve />
      <ServicesOverview />
      <HowItWorksPreview />
      <ProductsPreview />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;
