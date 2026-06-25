import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import SourcingProcess from "../components/home/SourcingProcess";
import ProductsWeSource from "../components/home/ProductsWeSource";
import ProblemsWeSolve from "../components/home/ProblemsWeSolve";
import TrustPoints from "../components/home/TrustPoints";
import CaseStudies from "../components/home/CaseStudies";
import FAQ from "../components/home/FAQ";
import InquirySection from "../components/home/InquirySection";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <SourcingProcess />
      <ProductsWeSource />
      <ProblemsWeSolve />
      <TrustPoints />
      <CaseStudies />
      <FAQ />
      <InquirySection />
    </>
  );
};

export default Home;
