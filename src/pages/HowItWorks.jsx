import PageHero from '@/components/common/PageHero'
import ProcessSection from '@/components/process/ProcessSection'
import FAQSection from '@/components/home/FAQSection'
import InquiryForm from '@/components/contact/InquiryForm'

export default function HowItWorks() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="A structured sourcing process from requirement review to shipment handover"
        description="Our workflow helps overseas buyers stay informed through supplier comparison, sample coordination, production follow-up, inspection, and logistics preparation."
      />
      <ProcessSection />
      <FAQSection />
      <InquiryForm />
    </main>
  )
}
