import BlogPreview from '@/components/home/BlogPreview.jsx?ssourcing=20260728'
import CaseStudiesSection from '@/components/home/CaseStudiesSection.jsx?ssourcing=20260728'
import FAQSection from '@/components/home/FAQSection.jsx?ssourcing=20260728'
import Hero from '@/components/home/Hero.jsx?ssourcing=20260728'
import ProblemsTrustSection from '@/components/home/ProblemsTrustSection.jsx?ssourcing=20260728'
import ProcessSection from '@/components/home/ProcessSection.jsx?ssourcing=20260728'
import ProductsSection from '@/components/home/ProductsSection.jsx?ssourcing=20260728'
import ServicesSection from '@/components/home/ServicesSection.jsx?ssourcing=20260728'
import FinalCTA from '@/components/common/FinalCTA.jsx?ssourcing=20260728'
import InquiryForm from '@/components/common/InquiryForm.jsx?ssourcing=20260728_backend'

const Home = () => (
  <>
    <Hero />
    <ServicesSection />
    <ProcessSection />
    <ProductsSection />
    <ProblemsTrustSection />
    <CaseStudiesSection />
    <FAQSection />
    <section className="bg-slate-50 py-16 text-slate-950 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Inquiry</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Tell us what you need to source from China</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Use the form to share your buying brief, supplier concern, inspection need, or shipment coordination question.
          </p>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
            <p className="text-sm font-semibold">Helpful details to include</p>
            <p className="mt-2 text-sm leading-7">Product specifications, target quantity, market, required certificates, packaging, timeline, and supplier links if available.</p>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
    <BlogPreview />
    <FinalCTA />
  </>
)

export default Home
