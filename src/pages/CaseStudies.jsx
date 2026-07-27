import PageHero from '@/components/shared/PageHero.jsx'
import CaseStudiesSection from '@/components/home/CaseStudiesSection.jsx'
import CtaBand from '@/components/home/CtaBand.jsx'

export default function CaseStudies() {
  return (
    <main>
      <PageHero
        eyebrow="Case studies"
        title="Practical sourcing and quality control examples"
        description="Review common situations where overseas buyers ask SSourcing China to verify suppliers, check quality, track production, and coordinate shipment handover."
      />
      <CaseStudiesSection />
      <CtaBand />
    </main>
  )
}
