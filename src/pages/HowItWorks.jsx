import InquirySection from '@/components/home/InquirySection'
import ProblemsSection from '@/components/home/ProblemsSection'
import ProcessSection from '@/components/home/ProcessSection'
import PageHero from '@/components/shared/PageHero'

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A structured China sourcing process with clear buyer checkpoints"
        description="We help buyers move from requirements to supplier comparison, verification, production follow-up, QC, and shipping coordination with documented communication."
        imageId="how-it-works-production-follow-up-visual-2e58bb"
        titleId="how-page-title"
        descId="how-page-desc"
      />
      <ProcessSection />
      <ProblemsSection />
      <InquirySection />
    </>
  )
}
