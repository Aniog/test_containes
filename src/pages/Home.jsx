import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProcessSection from '@/components/home/ProcessSection';
import ProductsSourced from '@/components/home/ProductsSourced';
import ProblemsSection from '@/components/home/ProblemsSection';
import TrustSection from '@/components/home/TrustSection';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import FAQSection from '@/components/home/FAQSection';
import InquiryForm from '@/components/home/InquiryForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ProblemsSection />
      <ProcessSection />
      <TrustSection />
      <ProductsSourced />
      <CaseStudiesPreview />
      <FAQSection />
      <InquiryForm />
    </>
  );
}
