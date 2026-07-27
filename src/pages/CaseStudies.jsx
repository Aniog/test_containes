import PageHeader from "@/components/layout/PageHeader"
import CaseStudies from "@/components/sections/CaseStudies"
import CTASection from "@/components/sections/CTASection"

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Sourcing projects and the results behind them"
        description="Real examples of how we've helped buyers source, verify, inspect, and ship — with measurable outcomes."
      />
      <CaseStudies />
      <CTASection />
    </>
  )
}
