import PageHero from '@/components/shared/PageHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ProblemsTrustSection from '@/components/sections/ProblemsTrustSection'
import CtaSection from '@/components/sections/CtaSection'

const Services = () => (
  <main>
    <PageHero
      eyebrow="Services"
      title="China sourcing services for overseas B2B buyers"
      description="From supplier sourcing and factory verification to quality inspection, production follow-up, and shipping coordination, SSourcing China supports practical purchasing decisions."
      imageId="services-page-factory-inspection-3d9a21"
      titleId="services-page-title"
      descId="services-page-desc"
    />
    <ServicesGrid />
    <ProblemsTrustSection />
    <CtaSection />
  </main>
)

export default Services
