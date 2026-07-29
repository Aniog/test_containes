import PageHero from '../components/PageHero'
import InquirySection from '../components/sections/InquirySection'
import FaqSection from '../components/sections/FaqSection'

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Request a free sourcing quote for your China project"
        description="Send your product brief, target quantity, requirements, and timeline. We will review your inquiry and respond with practical questions or recommended next steps."
        imageQueryId="contact-page-title"
      />
      <InquirySection />
      <FaqSection />
    </main>
  )
}
