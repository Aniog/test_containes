import PageHero from '@/components/shared/PageHero'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import CtaSection from '@/components/sections/CtaSection'

const CaseStudies = () => (
  <main>
    <PageHero
      eyebrow="Case studies"
      title="Practical examples of sourcing, QC, and production support"
      description="Review sample project scenarios showing how supplier screening, clear specifications, production tracking, and inspection planning help buyers reduce uncertainty."
      imageId="case-studies-quality-inspection-84bc09"
      titleId="case-page-title"
      descId="case-page-desc"
    />
    <CaseStudiesSection />
    <CtaSection />
  </main>
)

export default CaseStudies
