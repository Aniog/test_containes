import { Mail, MapPin, MessageSquareText } from 'lucide-react'
import InquiryForm from '../components/InquiryForm.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import VisualPanel from '../components/VisualPanel.jsx'

const Contact = () => (
  <>
    <section className="bg-brand-cloud py-16 text-brand-ink lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
        <div>
          <p id="contact-eyebrow" className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Contact</p>
          <h1 id="contact-title" className="mt-4 text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">Request a sourcing review</h1>
          <p id="contact-desc" className="mt-6 text-lg leading-8 text-brand-slate">
            Send your product details, expected quantity, quality requirements, and destination market. We will review the project and suggest practical next steps.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl shadow-soft">
            <VisualPanel
              id="contact-sourcing-office-shipment-30b7d2"
              query="[contact-desc] [contact-title] [contact-eyebrow]"
              ratio="4x3"
              width="850"
              alt="Sourcing office coordinating factory quality and shipment details"
              className="aspect-[4/3]"
            />
          </div>

          <div className="mt-8 grid gap-4">
            <div className="flex items-start gap-4 rounded-2xl border border-brand-steel bg-white p-5 text-brand-ink shadow-sm">
              <MapPin className="mt-1 h-5 w-5 text-brand-blue" />
              <div>
                <h2 className="font-bold text-brand-navy">China-based support</h2>
                <p className="mt-1 text-sm leading-6 text-brand-slate">Local supplier communication, factory visits where appropriate, and production follow-up.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-brand-steel bg-white p-5 text-brand-ink shadow-sm">
              <Mail className="mt-1 h-5 w-5 text-brand-blue" />
              <div>
                <h2 className="font-bold text-brand-navy">Qualified inquiries</h2>
                <p className="mt-1 text-sm leading-6 text-brand-slate">The more detail you provide, the more useful our first review can be.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-brand-steel bg-white p-5 text-brand-ink shadow-sm">
              <MessageSquareText className="mt-1 h-5 w-5 text-brand-blue" />
              <div>
                <h2 className="font-bold text-brand-navy">Clear communication</h2>
                <p className="mt-1 text-sm leading-6 text-brand-slate">We focus on practical facts, tradeoffs, and next steps rather than exaggerated promises.</p>
              </div>
            </div>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>

    <section className="bg-white py-16 text-brand-ink lg:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Before you submit"
          title="Helpful details to include"
          description="Product photos or links, specifications, target quantity, quality standard, packaging needs, destination country, and timeline help us understand your sourcing request faster."
          align="center"
        />
      </div>
    </section>
  </>
)

export default Contact
