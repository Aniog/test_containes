import PageHeader from '@/components/common/PageHeader.jsx?ssourcing=20260728'
import FinalCTA from '@/components/common/FinalCTA.jsx?ssourcing=20260728'
import ProcessSection from '@/components/home/ProcessSection.jsx?ssourcing=20260728'
import FAQSection from '@/components/home/FAQSection.jsx?ssourcing=20260728'

const HowItWorks = () => (
  <>
    <PageHeader
      eyebrow="How it works"
      title="A practical sourcing workflow from brief to shipment"
      description="Our process helps overseas buyers move step by step: define the brief, compare suppliers, verify the shortlist, follow production, inspect goods, and coordinate export handoff."
      imageId="process-production-line-19bc62"
      caption="Production follow-up and quality control checkpoints help keep sourcing decisions clear."
    />
    <ProcessSection />
    <FAQSection />
    <FinalCTA />
  </>
)

export default HowItWorks
