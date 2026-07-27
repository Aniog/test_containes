import { Mail, MapPin, MessageSquare } from 'lucide-react'
import InquiryForm from '../components/InquiryForm.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

export default function Contact() {
  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader eyebrow="Contact" title="Get a Free Sourcing Quote">
              Send your requirements and sourcing questions. We will review the information and respond with practical next steps.
            </SectionHeader>
            <div className="mt-8 grid gap-4 text-brand-ink">
              <div className="flex gap-4 rounded-2xl border border-brand-border bg-brand-page p-5">
                <MapPin className="mt-1 h-5 w-5 flex-none text-brand-blue" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold text-brand-navy">China-based sourcing support</h2>
                  <p className="mt-1 text-sm leading-7 text-brand-muted">Factory communication, verification, inspection, production follow-up, and shipping coordination.</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-brand-border bg-brand-page p-5">
                <Mail className="mt-1 h-5 w-5 flex-none text-brand-blue" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold text-brand-navy">Business inquiries</h2>
                  <p className="mt-1 text-sm leading-7 text-brand-muted">Use the form for sourcing requests, factory verification, QC inspection, and shipping coordination needs.</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-brand-border bg-brand-page p-5">
                <MessageSquare className="mt-1 h-5 w-5 flex-none text-brand-blue" aria-hidden="true" />
                <div>
                  <h2 className="font-semibold text-brand-navy">What to include</h2>
                  <p className="mt-1 text-sm leading-7 text-brand-muted">Product description, quantity, target market, quality standard, packaging, timeline, and shipping destination.</p>
                </div>
              </div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
