import PageLayout from "../components/layout/PageLayout.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import ProcessSection from "../components/home/ProcessSection.jsx";
import ProductsSection from "../components/home/ProductsSection.jsx";
import ProblemsSection from "../components/home/ProblemsSection.jsx";
import TrustSection from "../components/home/TrustSection.jsx";
import CaseStudiesSection from "../components/home/CaseStudiesSection.jsx";
import FaqSection from "../components/home/FaqSection.jsx";
import InquiryFormSection from "../components/home/InquiryFormSection.jsx";
import CtaSection from "../components/layout/CtaSection.jsx";

export default function Home() {
  return (
    <PageLayout title="China Sourcing Agent | Supplier Verification, QC & Shipping">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ProductsSection />
        <ProblemsSection />
        <TrustSection />
        <CaseStudiesSection />
        <FaqSection />
        <InquiryFormSection />
        <CtaSection />
      </main>
      <Footer />
    </PageLayout>
  );
}
