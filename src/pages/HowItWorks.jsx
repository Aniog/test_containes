import PageHero from '@/components/site/PageHero'
import ProcessSection from '@/components/site/ProcessSection'
import ProblemSolutionSection from '@/components/site/ProblemSolutionSection'
import CtaBanner from '@/components/site/CtaBanner'
import { problemsWeSolve, processSteps, trustPoints } from '@/content/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

export default function HowItWorksPage() {
  usePageMeta('How It Works | SSourcing China')

  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="A sourcing workflow designed to reduce uncertainty"
        description="From product brief to shipment readiness, the process is built to help buyers work through supplier qualification, production monitoring, and quality control with clearer visibility."
      />
      <ProcessSection steps={processSteps} />
      <ProblemSolutionSection items={problemsWeSolve} trustPoints={trustPoints} />
      <CtaBanner />
    </main>
  )
}
