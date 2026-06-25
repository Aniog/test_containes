import PageHeader from '../components/PageHeader.jsx'
import InquiryForm from '../components/InquiryForm.jsx'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to a sourcing specialist"
        subtitle="Tell us about your product, target price, and timeline. A project manager will reply by email within one business day."
        crumbs={[{ label: 'Contact' }]}
      />
      <InquiryForm />
    </>
  )
}
