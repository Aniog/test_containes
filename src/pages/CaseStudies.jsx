import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import InquirySection from '@/components/home/InquirySection'
import PageHero from '@/components/shared/PageHero'

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Realistic examples of China sourcing and QC coordination"
        description="See how buyer-side sourcing support can help clarify suppliers, manage samples, follow production, and prepare shipments across different product categories."
        imageId="case-studies-qc-shipping-visual-5db42e"
        titleId="case-studies-page-title"
        descId="case-studies-page-desc"
      />
      <CaseStudiesSection showCta={false} />
      <InquirySection />
    </>
  )
}
