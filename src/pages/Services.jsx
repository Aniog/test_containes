import PageHeader from '../components/PageHeader'
import ServicesGrid from '../components/home/ServicesGrid'
import ProcessSection from '../components/home/ProcessSection'
import InquirySection from '../components/home/InquirySection'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="China sourcing services for B2B buyers"
        subtitle="A modular service set you can pick from — or use end-to-end. Every engagement starts with a clear scope, deliverables, and timeline."
      />
      <ServicesGrid />
      <ProcessSection />
      <InquirySection sourcePage="services" />
    </>
  )
}
