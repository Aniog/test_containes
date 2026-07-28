import PageHero from '@/components/common/PageHero'
import InquiryForm from '@/components/contact/InquiryForm'
import FAQSection from '@/components/home/FAQSection'

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact SSourcing China"
        title="Request a sourcing review for your China project"
        description="Tell us what you want to source, your target quantity, destination, and any supplier information you already have. We will help you define the next step."
        cta={false}
      />
      <InquiryForm />
      <FAQSection />
    </main>
  )
}
