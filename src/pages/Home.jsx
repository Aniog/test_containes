import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsSection from '@/components/home/ProductsSection'
import ProblemsSection from '@/components/home/ProblemsSection'
import TrustSection from '@/components/home/TrustSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import FAQSection from '@/components/home/FAQSection'
import InquiryForm from '@/components/home/InquiryForm'
import SectionCTA from '@/components/shared/SectionCTA'

const Home = () => {
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

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>

      <SectionCTA
        title="Ready to Source from China?"
        subtitle="Get started with a free consultation. No commitment required."
        buttonText="Get a Free Sourcing Quote"
      />
    </>
  )
}

export default Home
