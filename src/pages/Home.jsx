import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProcessOverview from '@/components/home/ProcessOverview';
import ProductsOverview from '@/components/home/ProductsOverview';
import ProblemsSolved from '@/components/home/ProblemsSolved';
import TrustSection from '@/components/home/TrustSection';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import FAQSection from '@/components/home/FAQSection';
import InquiryForm from '@/components/home/InquiryForm';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ProcessOverview />
      <ProductsOverview />
      <ProblemsSolved />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquiryForm />
    </>
  );
};

export default Home;
