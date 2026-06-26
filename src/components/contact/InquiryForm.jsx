import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function InquiryForm({ showTitle = true }) {
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

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.product.trim()) return 'Please describe the product you want to source'
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }

    setStatus('submitting')
    // In production, send to backend / form endpoint
    setTimeout(() => {
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
    }, 1200)
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
      {showTitle && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">Request a Free Quote</h3>
          <p className="text-neutral-600">
            Tell us what you need and we will get back to you within 1 business day.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" aria-busy={status === 'submitting'}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-700">
              Full name <span className="text-error">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="company" className="mb-1 block text-sm font-medium text-neutral-700">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={values.company}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your company"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-700">
              Email <span className="text-error">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="john@company.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-neutral-700">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="+1 555 123 4567"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="product" className="mb-1 block text-sm font-medium text-neutral-700">
              Product to source <span className="text-error">*</span>
            </label>
            <input
              id="product"
              name="product"
              type="text"
              value={values.product}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="e.g. stainless steel water bottles"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="mb-1 block text-sm font-medium text-neutral-700">
              Estimated quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="text"
              value={values.quantity}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="e.g. 3,000 units"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-700">
            Additional details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Target price, specs, certifications, packaging, destination port..."
          />
        </div>

        {error && <p className="text-sm text-error">{error}</p>}
        {status === 'success' && (
          <p className="text-sm text-success font-medium">
            Thanks! We have received your inquiry and will reply shortly.
          </p>
        )}

        <Button type="submit" variant="primary" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Get a Free Sourcing Quote'}
        </Button>
      </form>
    </div>
  )
}
