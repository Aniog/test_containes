import PageHero from '../components/PageHero'
import ProcessSection from '../components/sections/ProcessSection'
import FaqSection from '../components/sections/FaqSection'
import InquirySection from '../components/sections/InquirySection'

export default function HowItWorks() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="A clear sourcing workflow from product brief to shipment handover"
        description="Our process helps overseas buyers align requirements, compare suppliers, verify risk, follow production, and prepare goods for shipping with fewer surprises."
        imageQueryId="how-it-works-page-title"
      />
      <ProcessSection />
      <FaqSection />
      <InquirySection />
    </main>
  )
}
