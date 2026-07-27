import { Mail, MessageSquare, PackageSearch } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

export default function InquirySection() {
  return (
    <section className="bg-brand-mist py-16 text-brand-ink md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Inquiry"
            title="Get a Free Sourcing Quote"
            description="Tell us what you want to source from China. The more detail you share, the easier it is to identify suitable suppliers and quote the right service scope."
          />
          <div className="mt-8 space-y-4">
            {[
              ['Product details', 'Photos, drawings, links, materials, dimensions, or technical requirements.'],
              ['Order information', 'Estimated quantity, target price range, destination country, and timeline.'],
              ['Support needed', 'Supplier search, verification, inspection, production follow-up, or shipping coordination.'],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-brand-line bg-white p-5 text-brand-ink shadow-sm">
                <PackageSearch className="mt-1 h-5 w-5 flex-none text-brand-blue" />
                <div>
                  <p className="font-semibold text-brand-navy">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-brand-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-3xl border border-brand-line bg-white p-6 text-brand-ink shadow-soft md:p-8" aria-label="Sourcing inquiry form">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-brand-navy">
              Name
              <input className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="Your name" type="text" />
            </label>
            <label className="block text-sm font-semibold text-brand-navy">
              Work email
              <input className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="name@company.com" type="email" />
            </label>
            <label className="block text-sm font-semibold text-brand-navy">
              Company
              <input className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="Company name" type="text" />
            </label>
            <label className="block text-sm font-semibold text-brand-navy">
              Destination country
              <input className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="United States, Germany..." type="text" />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-brand-navy">
            Product or category
            <input className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="Industrial parts, packaging, electronics accessories..." type="text" />
          </label>
          <label className="mt-5 block text-sm font-semibold text-brand-navy">
            Tell us what you need
            <textarea className="mt-2 min-h-36 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="Share specs, target quantity, timeline, supplier concerns, QC needs, or shipping requirements." />
          </label>
          <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/20 sm:w-auto">
            <MessageSquare className="h-4 w-4" /> Get a Free Sourcing Quote
          </button>
          <p className="mt-4 flex items-center gap-2 text-sm text-brand-muted">
            <Mail className="h-4 w-4 text-brand-blue" /> Frontend preview only. Submission will be connected after design approval.
          </p>
        </form>
      </div>
    </section>
  )
}
