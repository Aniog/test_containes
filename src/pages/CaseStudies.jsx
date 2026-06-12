import PageHeader from '@/components/sections/PageHeader'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import CTASection from '@/components/sections/CTASection'

export default function CaseStudies() {
  return (
    <>
      <PageHeader
        kicker="Case studies"
        title="Buyer outcomes, not marketing claims"
        subtitle="A few representative engagements with measurable results. Names anonymized on request — full references available on a call."
      />
      <CaseStudiesSection
        kicker="Selected work"
        title="How we helped buyers de-risk their supply chain"
        showAll
        showCTA={false}
      />
      <CTASection
        title="Want a similar outcome for your product?"
        subtitle="Most engagements start with a paid factory audit or QC trial — low risk, fast feedback."
      />
    </>
  )
}
