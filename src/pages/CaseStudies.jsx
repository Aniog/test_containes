import CaseStudiesSection from '../components/shared/CaseStudiesSection'
import CTASection from '../components/shared/CTASection'
import ImageLoadPage from '../components/shared/ImageLoadPage'
import PageHero from '../components/shared/PageHero'
import TrustSection from '../components/shared/TrustSection'

const CaseStudies = () => (
  <ImageLoadPage>
    <PageHero
      alt="Factory sourcing case studies and QC reports"
      description="Realistic examples of overseas buyer sourcing challenges involving supplier clarity, quality control preparation, packaging details, production follow-up, and shipping coordination."
      eyebrow="Case studies"
      imageId="case-studies-hero-qc-report-2f4a91"
      title="Practical sourcing case studies"
    />
    <CaseStudiesSection />
    <TrustSection />
    <CTASection />
  </ImageLoadPage>
)

export default CaseStudies
