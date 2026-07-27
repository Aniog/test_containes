import InquirySection from '@/components/home/InquirySection'
import ServicesOverview from '@/components/home/ServicesOverview'
import TrustSection from '@/components/home/TrustSection'
import PageHero from '@/components/shared/PageHero'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="China sourcing services for supplier search, QC, and shipment coordination"
        description="Choose the support you need, from early supplier screening to factory verification, quality inspection, production follow-up, and export shipment handover."
        imageId="services-page-factory-qc-visual-9a31de"
        titleId="services-page-title"
        descId="services-page-desc"
      />
      <ServicesOverview />
      <TrustSection />
      <InquirySection />
    </>
  )
}
