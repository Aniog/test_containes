import { useState } from 'react'
import { Send } from 'lucide-react'

const fields = [
  ['name', 'Name', 'Your name'],
  ['email', 'Business email', 'name@company.com'],
  ['company', 'Company', 'Company or brand name'],
  ['product', 'Product to source', 'Product name, category, or link'],
]

const InquiryForm = ({ compact = false }) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-brand-border bg-white p-6 shadow-card md:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Inquiry form</p>
        <h2 className="mt-2 text-2xl font-semibold text-brand-navy">Get a Free Sourcing Quote</h2>
        <p className="mt-3 text-sm leading-7 text-brand-muted">Tell us what you want to source. This preview form shows the inquiry flow; final submission can be connected after design approval.</p>
      </div>
      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        {fields.map(([id, label, placeholder]) => (
          <label key={id} className="grid gap-2 text-sm font-semibold text-brand-navy">
            {label}
            <input className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-slate placeholder:text-brand-muted/80 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10" name={id} placeholder={placeholder} required={id === 'email' || id === 'product'} />
          </label>
        ))}
        <label className={`${compact ? '' : 'md:col-span-2'} grid gap-2 text-sm font-semibold text-brand-navy`}>
          Project details
          <textarea className="min-h-32 rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-slate placeholder:text-brand-muted/80 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10" name="details" placeholder="Quantity, target market, materials, certification needs, current supplier links, inspection or shipping questions" required />
        </label>
      </div>
      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-brand-navy shadow-card transition hover:bg-brand-amber/90 md:w-auto">
        Send Sourcing Inquiry <Send className="ml-2 h-4 w-4" />
      </button>
      {submitted && <p className="mt-4 rounded-xl bg-brand-mist p-4 text-sm font-medium text-brand-navy">Thanks. Your inquiry details are ready for review in this frontend preview.</p>}
    </form>
  )
}

export default InquiryForm
