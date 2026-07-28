import PageHero from '@/components/common/PageHero'
import CaseStudiesSection from '@/components/cases/CaseStudiesSection'
import FinalCTASection from '@/components/home/FinalCTASection'

export default function CaseStudies() {
  return (
    <main>
      <PageHero
        eyebrow="Case studies"
        title="Realistic examples of sourcing, QC, and shipping coordination"
        description="See how a China-based sourcing agent can help buyers clarify supplier options, confirm production details, inspect goods, and coordinate export handover."
      />
      <CaseStudiesSection />
      <FinalCTASection />
    </main>
  )
}
