import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function InquiryForm() {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product_category: '',
    quantity: '',
    message: '',
    source: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.company.trim()) return 'Company name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.product_category.trim()) return 'Product category is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) { setError(err); return }

    setStatus('submitting')
    try {
      const { data: response, error: createError } = await client
        .from('Inquiry')
        .insert({
          data: {
            name: values.name,
            company: values.company,
            email: values.email,
            phone: values.phone,
            product_category: values.product_category,
            quantity: values.quantity,
            message: values.message,
            source: values.source,
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        const msg = Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : createError?.message || 'Submission failed. Please try again.'
        throw new Error(msg)
      }

      setStatus('success')
      setValues({
        name: '', company: '', email: '', phone: '',
        product_category: '', quantity: '', message: '', source: '',
      })
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-14 h-14 text-success mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-text-primary mb-2">Thank You!</h3>
        <p className="text-text-secondary text-sm max-w-md mx-auto">
          We have received your inquiry and will get back to you within 1 business day with a tailored sourcing plan.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            placeholder="John Smith"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">Company Name *</label>
          <input
            name="company"
            type="text"
            value={values.company}
            onChange={onChange}
            placeholder="Your Company Ltd."
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">Business Email *</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            placeholder="john@company.com"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">Phone (optional)</label>
          <input
            name="phone"
            type="tel"
            value={values.phone}
            onChange={onChange}
            placeholder="+1 234 567 8900"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">Product Category *</label>
          <input
            name="product_category"
            type="text"
            value={values.product_category}
            onChange={onChange}
            placeholder="e.g. Electronics, Apparel, Furniture"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">Estimated Quantity</label>
          <input
            name="quantity"
            type="text"
            value={values.quantity}
            onChange={onChange}
            placeholder="e.g. 1,000 units"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">Sourcing Requirements</label>
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={onChange}
          placeholder="Describe your product needs, target price, timeline, certifications needed, etc."
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">How did you hear about us?</label>
        <input
          name="source"
          type="text"
          value={values.source}
          onChange={onChange}
          placeholder="e.g. Google, Referral, LinkedIn"
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-lg bg-secondary text-white text-sm font-semibold hover:bg-secondary-hover transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Get a Free Sourcing Quote
          </>
        )}
      </button>
    </form>
  )
}
