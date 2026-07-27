import PageHero from '@/components/shared/PageHero.jsx'
import InquiryFormSection from '@/components/home/InquiryFormSection.jsx'
import FaqSection from '@/components/home/FaqSection.jsx'

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Request a free sourcing quote"
        description="Send your sourcing brief, product details, target quantity, destination country, and any supplier information you already have. The more specific the brief, the more useful the first reply can be."
        cta={false}
      />
      <InquiryFormSection />
      <FaqSection />
    </main>
  )
}
