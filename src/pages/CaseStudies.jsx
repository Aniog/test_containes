import PageHeader from '@/components/common/PageHeader.jsx?ssourcing=20260728'
import FinalCTA from '@/components/common/FinalCTA.jsx?ssourcing=20260728'
import CaseStudiesSection from '@/components/home/CaseStudiesSection.jsx?ssourcing=20260728'

const CaseStudies = () => (
  <>
    <PageHeader
      eyebrow="Case studies"
      title="Representative sourcing and QC scenarios"
      description="Explore examples of how supplier comparison, inspection findings, and production follow-up can help overseas buyers make clearer decisions."
      imageId="case-studies-qc-report-83fd12"
      caption="Clear photos, findings, and next steps help buyers understand supplier and quality risks."
    />
    <CaseStudiesSection showCta={false} />
    <FinalCTA />
  </>
)

export default CaseStudies
