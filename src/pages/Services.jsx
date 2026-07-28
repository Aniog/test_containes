import PageHeader from '@/components/common/PageHeader.jsx?ssourcing=20260728'
import FinalCTA from '@/components/common/FinalCTA.jsx?ssourcing=20260728'
import ServicesSection from '@/components/home/ServicesSection.jsx?ssourcing=20260728'
import ProblemsTrustSection from '@/components/home/ProblemsTrustSection.jsx?ssourcing=20260728'

const Services = () => (
  <>
    <PageHeader
      eyebrow="Services"
      title="China sourcing services for overseas buyers"
      description="Use SSourcing China for supplier sourcing, supplier verification, factory audits, QC inspection, production follow-up, and shipping coordination."
      imageId="services-factory-team-2f91c0"
      caption="Factory communication, product checks, and practical reporting for international buyers."
    />
    <ServicesSection compact />
    <ProblemsTrustSection />
    <FinalCTA />
  </>
)

export default Services
