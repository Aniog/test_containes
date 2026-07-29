import PageHero from '../components/PageHero'
import CaseStudiesSection from '../components/sections/CaseStudiesSection'
import InquirySection from '../components/sections/InquirySection'

export default function CaseStudies() {
  return (
    <main>
      <PageHero
        eyebrow="Case studies"
        title="Representative sourcing situations and practical support examples"
        description="See how structured supplier screening, quality checks, production follow-up, and shipping coordination can help buyers manage common sourcing challenges."
        imageQueryId="case-studies-page-title"
      />
      <CaseStudiesSection />
      <InquirySection />
    </main>
  )
}
