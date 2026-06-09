import PageHero from '@/components/site/PageHero'
import CaseStudySection from '@/components/site/CaseStudySection'
import CtaBanner from '@/components/site/CtaBanner'
import { caseStudies } from '@/content/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

export default function CaseStudiesPage() {
  usePageMeta('Case Studies | SSourcing China')

  return (
    <main>
      <PageHero
        eyebrow="Case studies"
        title="Examples of sourcing projects involving supplier verification, QC, and shipping readiness"
        description="These examples show the kind of practical support overseas buyers often need when they want better supplier clarity, stronger follow-up, and fewer late-stage surprises."
      />
      <CaseStudySection items={caseStudies} />
      <CtaBanner />
    </main>
  )
}
