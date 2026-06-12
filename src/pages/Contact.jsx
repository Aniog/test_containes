import PageHeader from '@/components/sections/PageHeader'
import InquiryForm from '@/components/sections/InquiryForm'

export default function Contact() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Get a free sourcing quote"
        subtitle="Send us your product brief. We respond within one business day with next steps and an indicative timeline."
      />
      <InquiryForm
        kicker="Inquiry form"
        title="Tell us about your product"
        subtitle="The more detail you share, the faster we can come back with a useful response."
      />
    </>
  )
}
