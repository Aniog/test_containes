import { Mail, MapPin, MessageSquare, PackageSearch } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import InquiryForm from '@/components/shared/InquiryForm'

const Contact = () => (
  <main>
    <PageHero
      eyebrow="Contact"
      title="Request a sourcing quote from China"
      description="Tell us what you need sourced, verified, inspected, or shipped. We will review the details and outline a practical sourcing path."
    >
      <div className="grid gap-4 text-sm leading-6 text-slate-200">
        <div className="flex gap-3">
          <MapPin className="mt-1 h-5 w-5 flex-none text-amber-300" />
          <span>China-based sourcing coordination for overseas buyers</span>
        </div>
        <div className="flex gap-3">
          <MessageSquare className="mt-1 h-5 w-5 flex-none text-amber-300" />
          <span>English communication for supplier search, QC, and shipment follow-up</span>
        </div>
        <div className="flex gap-3">
          <PackageSearch className="mt-1 h-5 w-5 flex-none text-amber-300" />
          <span>Best for buyers with clear product details and B2B sourcing goals</span>
        </div>
      </div>
    </PageHero>
    <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <aside className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <Mail className="h-8 w-8 text-blue-700" />
          <h2 className="mt-5 text-2xl font-semibold text-slate-950">Send a qualified inquiry</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Include product specifications, target quantity, destination country, packaging needs, quality standards, and current sourcing status.
          </p>
          <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-sm leading-6 text-slate-200">
            <p className="font-semibold text-white">Response focus</p>
            <p className="mt-2">We review feasibility, information gaps, supplier screening needs, and the most suitable next step.</p>
          </div>
        </aside>
        <InquiryForm pageSource="contact page inquiry form" />
      </div>
    </section>
  </main>
)

export default Contact
