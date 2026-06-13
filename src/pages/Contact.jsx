import InquiryForm from '@/components/common/InquiryForm'
import PageHero from '@/components/common/PageHero'
import SectionHeader from '@/components/common/SectionHeader'
import { usePageMeta } from '@/hooks/usePageMeta'

const Contact = () => {
  usePageMeta({
    title: 'Contact | SSourcing China',
    description:
      'Contact SSourcing China for supplier search, factory verification, quality inspection, production follow-up, and shipping coordination support.',
  })

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Send your sourcing request"
        description="Share your product details, quantity, timeline, and sourcing concerns. We will review the request and reply with practical next steps."
        titleId="contact-page-title"
        descriptionId="contact-page-description"
        visual={
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-4 shadow-sm">
            <div
              className="absolute inset-0 opacity-0"
              data-strk-bg-id="contact-page-bg-c04b91"
              data-strk-bg="[contact-page-visual-detail] [contact-page-visual-focus]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            />
            <div className="relative min-h-[360px] rounded-[1.5rem] bg-slate-900/35 p-8">
              <div className="flex h-full items-end">
                <div>
                  <p className="sr-only" id="contact-page-visual-focus">
                    China sourcing consultation with supplier documents, factory verification planning, quality inspection checklist, and export shipping coordination.
                  </p>
                  <p className="max-w-md text-sm leading-7 text-white/90" id="contact-page-visual-detail">
                    Factory sourcing consultation, inspection planning, and export shipment coordination for international buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Inquiry form"
              title="Get a free sourcing quote"
              description="A clear inquiry helps us understand whether you need supplier search, verification, inspection, production follow-up, shipping coordination, or broader sourcing support."
            />
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-950">What to include</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Product type, photos, links, or specifications</li>
                <li>Estimated order quantity or volume expectations</li>
                <li>Target timeline and shipment goals</li>
                <li>Current supplier concerns or QC issues if relevant</li>
              </ul>
            </div>
          </div>
          <InquiryForm sourcePage="contact" />
        </div>
      </section>
    </div>
  )
}

export default Contact
