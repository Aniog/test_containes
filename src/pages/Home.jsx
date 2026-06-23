import HomeHero from '../components/home/HomeHero';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import ProductsSection from '../components/home/ProductsSection';
import ProblemsSection from '../components/home/ProblemsSection';
import TrustSection from '../components/home/TrustSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import FaqSection from '../components/home/FaqSection';
import InquirySection from '../components/home/InquirySection';

const Home = () => {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FaqSection />
      <InquirySection />
    </>
  );
};

export default Home;
