import FAQSection from '@/components/home/FAQSection'
import InquirySection from '@/components/home/InquirySection'
import PageHero from '@/components/shared/PageHero'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send your China sourcing inquiry"
        description="Share your product requirements, target quantity, destination country, and support needs. We will review the request and outline a practical sourcing next step."
        imageId="contact-page-factory-shipping-visual-3f67ac"
        titleId="contact-page-title"
        descId="contact-page-desc"
      />
      <InquirySection />
      <FAQSection />
    </>
  )
}
