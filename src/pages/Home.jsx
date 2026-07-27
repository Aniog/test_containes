import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ProductsSection from '@/components/home/ProductsSection';
import ProblemsSection from '@/components/home/ProblemsSection';
import TrustSection from '@/components/home/TrustSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import FAQSection from '@/components/home/FAQSection';
import InquiryForm from '@/components/home/InquiryForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />

      {/* Inquiry CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Start Sourcing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mt-2 mb-4">
              Ready to Source from China?
            </h2>
            <p className="text-brand-muted text-lg">
              Submit your sourcing request and we'll get back to you within 1 business day with a clear plan and fee proposal.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
