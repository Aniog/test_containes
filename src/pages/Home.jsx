import HeroSection from '../components/sections/HeroSection'
import ServicesGrid from '../components/sections/ServicesGrid'
import ProcessSection from '../components/sections/ProcessSection'
import ProductsGrid from '../components/sections/ProductsGrid'
import ProblemsSection from '../components/sections/ProblemsSection'
import CaseStudiesSection from '../components/sections/CaseStudiesSection'
import FAQSection from '../components/sections/FAQSection'
import InquiryForm from '../components/sections/InquiryForm'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <ProductsGrid />
      <ProblemsSection />
      <CaseStudiesSection />
      <FAQSection />
      <section className="bg-slate-100 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <InquiryForm sourcePage="home" />
        </div>
      </section>
    </>
  )
}
