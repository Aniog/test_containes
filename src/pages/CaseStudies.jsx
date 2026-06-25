import PageHero from '@/components/PageHero'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import CtaBanner from '@/components/CtaBanner'
import InquiryForm from '@/components/sections/InquiryForm'

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Sourcing projects delivered for international buyers"
        description="A selection of recent projects across consumer electronics, home goods, apparel and more — with realistic numbers, not marketing slogans."
        breadcrumbs={[{ label: 'Case Studies' }]}
      />
      <CaseStudiesSection />
      <CtaBanner />
      <InquiryForm />
    </>
  )
}
