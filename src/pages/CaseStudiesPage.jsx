import PageHeader from '../components/PageHeader'
import CaseStudies from '../components/home/CaseStudies'
import InquirySection from '../components/home/InquirySection'

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Sourcing projects, measurable outcomes"
        subtitle="A selection of recent engagements with overseas buyers. Client names withheld under NDA."
      />
      <CaseStudies heading={false} />
      <InquirySection sourcePage="case-studies" />
    </>
  )
}
