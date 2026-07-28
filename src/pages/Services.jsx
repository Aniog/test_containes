import PageHero from '@/components/common/PageHero'
import ServicesSection from '@/components/services/ServicesSection'
import ProblemsSection from '@/components/home/ProblemsSection'
import TrustSection from '@/components/home/TrustSection'
import FinalCTASection from '@/components/home/FinalCTASection'

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Sourcing services"
        title="China sourcing services for overseas purchasing teams"
        description="From supplier search to factory verification, quality inspection, production tracking, and shipping coordination, SSourcing China supports practical sourcing execution on the ground."
      />
      <ServicesSection compact />
      <ProblemsSection />
      <TrustSection />
      <FinalCTASection />
    </main>
  )
}
