import PageIntro from '@/components/site/PageIntro'
import SourcingInquiryForm from '@/components/site/SourcingInquiryForm'
import { usePageMeta } from '@/lib/usePageMeta'

const contactPoints = [
  'Best for buyers that want supplier search, verification, QC, or shipment support',
  'Useful for new products, repeat buys, or supplier review before placing an order',
  'A detailed brief helps us review feasibility and next steps more effectively',
]

const ContactPage = () => {
  usePageMeta(
    'Contact | SSourcing China',
    'Contact SSourcing China to request a free sourcing quote for supplier verification, factory checks, quality control, and shipping coordination.'
  )

  return (
    <main>
      <PageIntro
        description="Send your sourcing requirement and we will review your product needs, supplier stage, and the type of support that may be suitable for your project."
        eyebrow="Contact"
        idPrefix="contact-page"
        points={contactPoints}
        title="Discuss your China sourcing project with SSourcing China"
      />
      <SourcingInquiryForm />
    </main>
  )
}

export default ContactPage
