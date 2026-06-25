import HomeHero from '../components/home/HomeHero'
import CaseStudiesSection from '../components/shared/CaseStudiesSection'
import CTASection from '../components/shared/CTASection'
import FAQSection from '../components/shared/FAQSection'
import ImageLoadPage from '../components/shared/ImageLoadPage'
import InquiryForm from '../components/shared/InquiryForm'
import ProblemsSection from '../components/shared/ProblemsSection'
import ProcessSection from '../components/shared/ProcessSection'
import ProductsSection from '../components/shared/ProductsSection'
import ServicesSection from '../components/shared/ServicesSection'
import TrustSection from '../components/shared/TrustSection'

const Home = () => (
  <ImageLoadPage>
    <HomeHero />
    <ServicesSection />
    <ProcessSection />
    <ProductsSection />
    <ProblemsSection />
    <TrustSection />
    <CaseStudiesSection compact />
    <FAQSection />
    <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Inquiry form</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Request a practical sourcing review
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            The more specific your product brief, the better we can understand supplier fit, QC needs, and shipment coordination requirements.
          </p>
        </div>
        <InquiryForm />
      </div>
    </section>
    <CTASection />
  </ImageLoadPage>
)

export default Home
