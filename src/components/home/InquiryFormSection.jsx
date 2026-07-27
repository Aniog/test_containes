import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import Button from '@/components/ui/Button.jsx'
import SectionHeader from '@/components/shared/SectionHeader.jsx'

const inputClass = 'w-full rounded-xl border border-sourcing-line bg-white px-4 py-3 text-sm text-sourcing-ink placeholder:text-sourcing-muted/80 focus:border-sourcing-blue focus:outline-none focus:ring-4 focus:ring-sourcing-blue/10'

export default function InquiryFormSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="inquiry" className="bg-sourcing-soft py-16 text-sourcing-ink md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Inquiry form"
            title="Tell us what you need to source from China"
            description="Share the product, target quantity, destination, and any supplier information you already have. We will review the request and suggest a practical next step."
          />
          <div className="mt-8 rounded-2xl border border-sourcing-line bg-white p-6 text-sourcing-ink shadow-sm">
            <p className="flex gap-3 text-sm leading-7 text-sourcing-muted">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-sourcing-blue" />
              Prefer email? Send your brief to <a className="font-bold text-sourcing-blue hover:text-sourcing-navy" href="mailto:inquiries@ssourcingchina.com">inquiries@ssourcingchina.com</a>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-sourcing-line bg-white p-6 text-sourcing-ink shadow-b2b md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
              Name
              <input className={inputClass} name="name" placeholder="Your name" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
              Work email
              <input className={inputClass} type="email" name="email" placeholder="name@company.com" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
              Company
              <input className={inputClass} name="company" placeholder="Company name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
              Destination country
              <input className={inputClass} name="country" placeholder="United States, Germany, Australia..." />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-sourcing-ink">
            Product or service needed
            <textarea className={`${inputClass} min-h-32`} name="requirements" placeholder="Product details, target quantity, packaging, quality standards, supplier links, timeline..." required />
          </label>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
              Estimated order quantity
              <input className={inputClass} name="quantity" placeholder="e.g. 2,000 pcs" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-sourcing-ink">
              Support required
              <select className={inputClass} name="support">
                <option>Supplier sourcing</option>
                <option>Factory verification</option>
                <option>Quality inspection</option>
                <option>Production follow-up</option>
                <option>Shipping coordination</option>
                <option>Full sourcing project</option>
              </select>
            </label>
          </div>
          <Button className="mt-6 w-full gap-2 text-base" type="submit">
            Get a Free Sourcing Quote <Send className="h-4 w-4" />
          </Button>
          {submitted && (
            <p className="mt-4 rounded-xl bg-sourcing-sky p-4 text-sm font-semibold leading-6 text-sourcing-navy">
              Thank you. This frontend preview has recorded your intent locally. Once connected to a backend, this form can send qualified inquiries to SSourcing China.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
