import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function InquiryForm({ compact = false }) {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Name is required'
    if (!values.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email'
    if (!values.product.trim()) return 'Please tell us what product you want to source'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    try {
      const { data: response, error: createError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: values.name,
            company: values.company,
            email: values.email,
            phone: values.phone,
            product: values.product,
            quantity: values.quantity,
            message: values.message,
            status: 'new',
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        const msg = Array.isArray(response?.errors) ? response.errors.join(', ') : createError?.message || 'Submission failed'
        throw new Error(msg)
      }

      setStatus('success')
      setValues({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        message: '',
      })
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8">
      {!compact && <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a free sourcing quote</h3>}
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full name *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1.5">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            placeholder="Your company"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone / WhatsApp</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="+1 234 567 890"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none"
          />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-semibold text-slate-700 mb-1.5">Product to source *</label>
          <input
            id="product"
            name="product"
            type="text"
            value={values.product}
            onChange={handleChange}
            placeholder="e.g. Bluetooth speaker, steel fittings"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-semibold text-slate-700 mb-1.5">Estimated quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={values.quantity}
            onChange={handleChange}
            placeholder="e.g. 1,000 units"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none"
          />
        </div>
        <div className={compact ? '' : 'md:col-span-2'}>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Project details</label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 3 : 4}
            value={values.message}
            onChange={handleChange}
            placeholder="Tell us about specs, target price, delivery destination, and any requirements."
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none resize-none"
          />
        </div>
      </div>

      {error && (
        <div className="mt-5 flex items-start gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {status === 'success' ? (
        <div className="mt-6 flex items-center gap-2 text-green-700 bg-green-50 rounded-lg px-4 py-3">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium">Thanks! We have received your inquiry and will reply within 1 business day.</span>
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-6 btn-primary w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
          <Send className="w-4 h-4 ml-2" />
        </button>
      )}
    </form>
  )
}
