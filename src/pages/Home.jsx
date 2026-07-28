import HomeHero from "@/components/home/HomeHero.jsx";
import TrustBar from "@/components/home/TrustBar.jsx";
import ServicesGrid from "@/components/home/ServicesGrid.jsx";
import ProcessSection from "@/components/home/ProcessSection.jsx";
import ProductsSection from "@/components/home/ProductsSection.jsx";
import ProblemsSection from "@/components/home/ProblemsSection.jsx";
import CaseStudiesSection from "@/components/home/CaseStudiesSection.jsx";
import HomeInquirySection from "@/components/home/HomeInquirySection.jsx";
import HomeFAQ from "@/components/home/HomeFAQ.jsx";

const Home = () => {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <ServicesGrid />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesSection />
      <HomeInquirySection />
      <HomeFAQ />
    </>
  );
};

export default Home;
