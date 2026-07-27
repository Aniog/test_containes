import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

const productTypes = [
  'Consumer Electronics',
  'Home & Living',
  'Apparel & Textiles',
  'Industrial & Hardware',
  'Beauty & Personal Care',
  'Outdoor & Sports',
  'Other',
]

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-Up',
  'Shipping & Logistics',
  'Full Service (End-to-End)',
]

export default function InquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    productType: '',
    quantity: '',
    targetPrice: '',
    services: [],
    message: '',
  })

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const toggleService = (s) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only: simulate submission. Backend wiring comes after design approval.
    console.log('Inquiry submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-verified/10">
          <CheckCircle2 className="h-8 w-8 text-verified" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink">Thank you — your request is in.</h3>
        <p className="mt-2 text-muted">
          A sourcing specialist will review your requirements and reply within one business day with a free, transparent quote.
        </p>
        <button
          type="button"
          className="btn-ghost mt-6"
          onClick={() => {
            setSubmitted(false)
            setForm({
              name: '', email: '', company: '', country: '', product: '',
              productType: '', quantity: '', targetPrice: '', services: [], message: '',
            })
          }}
        >
          Submit another request
        </button>
      </div>
    )
  }

  const inputCls =
    'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-steel focus:outline-none focus:ring-2 focus:ring-steel/20'
  const labelCls = 'block text-sm font-medium text-ink mb-1.5'

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8">
      {!compact && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-ink">Get a Free Sourcing Quote</h3>
          <p className="mt-1 text-sm text-muted">
            Fill in your project details. We reply within one business day.
          </p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="if-name">Full name *</label>
          <input id="if-name" required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} placeholder="Jane Doe" />
        </div>
        <div>
          <label className={labelCls} htmlFor="if-email">Business email *</label>
          <input id="if-email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className={inputCls} placeholder="jane@company.com" />
        </div>
        <div>
          <label className={labelCls} htmlFor="if-company">Company</label>
          <input id="if-company" value={form.company} onChange={(e) => update('company', e.target.value)} className={inputCls} placeholder="Company name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="if-country">Country *</label>
          <input id="if-country" required value={form.country} onChange={(e) => update('country', e.target.value)} className={inputCls} placeholder="United States" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="if-product">Product you want to source *</label>
          <input id="if-product" required value={form.product} onChange={(e) => update('product', e.target.value)} className={inputCls} placeholder="e.g. Bluetooth speakers, 2000 units" />
        </div>
        <div>
          <label className={labelCls} htmlFor="if-type">Product category</label>
          <select id="if-type" value={form.productType} onChange={(e) => update('productType', e.target.value)} className={inputCls}>
            <option value="">Select category</option>
            {productTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="if-qty">Estimated quantity</label>
          <input id="if-qty" value={form.quantity} onChange={(e) => update('quantity', e.target.value)} className={inputCls} placeholder="e.g. 1,000 pcs" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="if-price">Target price per unit (optional)</label>
          <input id="if-price" value={form.targetPrice} onChange={(e) => update('targetPrice', e.target.value)} className={inputCls} placeholder="e.g. USD 12 / unit" />
        </div>
        <div className="sm:col-span-2">
          <span className={labelCls}>Services you need</span>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => {
              const active = form.services.includes(s)
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleService(s)}
                  className={
                    'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ' +
                    (active
                      ? 'border-amber bg-amber text-navy'
                      : 'border-slate-300 bg-white text-muted hover:border-steel hover:text-steel')
                  }
                >
                  {s}
                </button>
              )
            })}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="if-message">Project details</label>
          <textarea id="if-message" rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} className={inputCls} placeholder="Share specs, timeline, certifications, or anything else we should know." />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full">
        <Send className="h-4 w-4" />
        Get My Free Quote
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        We respect your privacy. Your details are only used to prepare your quote.
      </p>
    </form>
  )
}
