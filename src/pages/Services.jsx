import PageHero from '../components/PageHero'
import ServicesSection from '../components/sections/ServicesSection'
import ProblemsSection from '../components/sections/ProblemsSection'
import InquirySection from '../components/sections/InquirySection'

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="China sourcing services for supplier, quality, and shipment control"
        description="Use SSourcing China as your practical local support team for sourcing, supplier verification, factory checks, inspection, production follow-up, and shipping coordination."
        imageQueryId="services-page-title"
      />
      <ServicesSection />
      <ProblemsSection />
      <InquirySection />
    </main>
  )
}
