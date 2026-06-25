import CTASection from '../components/shared/CTASection'
import ImageLoadPage from '../components/shared/ImageLoadPage'
import PageHero from '../components/shared/PageHero'
import ProblemsSection from '../components/shared/ProblemsSection'
import ServicesSection from '../components/shared/ServicesSection'
import TrustSection from '../components/shared/TrustSection'

const Services = () => (
  <ImageLoadPage>
    <PageHero
      alt="Factory inspection and supplier sourcing service"
      description="Targeted sourcing services for overseas buyers who need supplier search, factory verification, sample comparison, quality inspection, production follow-up, and shipping coordination in China."
      eyebrow="Services"
      imageId="services-hero-factory-inspection-1c3a9b"
      title="China sourcing services for practical buying decisions"
    />
    <ServicesSection full />
    <ProblemsSection />
    <TrustSection />
    <CTASection />
  </ImageLoadPage>
)

export default Services
