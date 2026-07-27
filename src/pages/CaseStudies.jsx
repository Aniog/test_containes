import PageHero from '../components/site/PageHero'
import CaseStudiesSection from '../components/home/CaseStudiesSection'

function CaseStudies() {
  return (
    <main>
      <PageHero
        eyebrow="Case studies"
        title="Examples of sourcing, QC, and shipping coordination support"
        description="These scenarios show how practical local follow-up can help buyers make better supplier and production decisions."
      />
      <CaseStudiesSection />
    </main>
  )
}

export default CaseStudies
