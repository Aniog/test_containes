import Hero from "@/components/home/Hero.jsx";
import TrustBar from "@/components/home/TrustBar.jsx";
import ServicesOverview from "@/components/home/ServicesOverview.jsx";
import ProblemsWeSolve from "@/components/home/ProblemsWeSolve.jsx";
import SourcingProcess from "@/components/home/SourcingProcess.jsx";
import ProductsWeSource from "@/components/home/ProductsWeSource.jsx";
import TrustPoints from "@/components/home/TrustPoints.jsx";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview.jsx";
import FAQ from "@/components/home/FAQ.jsx";
import InquiryCTA from "@/components/home/InquiryCTA.jsx";

export default function Home() {
  return (
    <div className="page-fade">
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <ProblemsWeSolve />
      <SourcingProcess />
      <ProductsWeSource />
      <TrustPoints />
      <CaseStudiesPreview />
      <FAQ />
      <InquiryCTA />
    </div>
  );
}