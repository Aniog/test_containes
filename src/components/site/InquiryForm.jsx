import { ArrowRight } from 'lucide-react'

function InquiryForm({ compact = false }) {
  return (
    <form className="rounded-3xl border border-brand-line bg-white p-6 text-brand-ink shadow-lg shadow-brand-navy/5 sm:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Inquiry form</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-brand-navy">
          Get a Free Sourcing Quote
        </h3>
        <p className="mt-3 text-sm leading-6 text-brand-ink/70">
          Share your product details and sourcing requirements. We will review the brief and suggest practical next steps.
        </p>
      </div>

      <div className={`mt-6 grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <label className="block text-sm font-medium text-brand-navy">
          Name
          <input className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-ink/40 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10" placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          Work email
          <input type="email" className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-ink/40 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10" placeholder="name@company.com" />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          Company
          <input className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-ink/40 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10" placeholder="Company name" />
        </label>
        <label className="block text-sm font-medium text-brand-navy">
          Product category
          <input className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-ink/40 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10" placeholder="e.g. packaging, hardware" />
        </label>
        <label className={`${compact ? '' : 'sm:col-span-2'} block text-sm font-medium text-brand-navy`}>
          What do you need help with?
          <select className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10">
            <option>Supplier sourcing</option>
            <option>Factory verification</option>
            <option>Quality inspection</option>
            <option>Production follow-up</option>
            <option>Shipping coordination</option>
            <option>Multiple services</option>
          </select>
        </label>
        <label className={`${compact ? '' : 'sm:col-span-2'} block text-sm font-medium text-brand-navy`}>
          Project details
          <textarea rows="4" className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-brand-ink/40 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10" placeholder="Product specs, quantity, target market, timeline, and current supplier status" />
        </label>
      </div>

      <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-navy">
        Get a Free Sourcing Quote
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  )
}

export default InquiryForm
