import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Label } from '@/components/ui/Label'
import { createInquiry } from '@/api/inquiries'

const initialValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  product_category: '',
  product_description: '',
  estimated_volume: '',
  target_market: '',
  message: '',
}

export function InquiryForm({ embedded = false }) {
  const [values, setValues] = useState(initialValues)
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
    if (!v.product_description.trim() || v.product_description.trim().length < 10)
      return 'Please describe your product in at least 10 characters'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate(values)
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')
    try {
      await createInquiry(values)
      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section
      id="inquiry"
      className={embedded ? '' : 'bg-slate-50 py-16 md:py-24'}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {!embedded && (
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wide text-primary">
              Get a Free Sourcing Quote
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Tell Us What You Need
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We reply within one business day with next steps and a clear proposal.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Full name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                placeholder="John Carter"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Business email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={values.company}
                onChange={handleChange}
                placeholder="Your company"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                placeholder="+1 555 123 4567"
              />
            </div>
            <div>
              <Label htmlFor="product_category">Product category</Label>
              <Input
                id="product_category"
                name="product_category"
                type="text"
                value={values.product_category}
                onChange={handleChange}
                placeholder="Electronics, home goods..."
              />
            </div>
            <div>
              <Label htmlFor="estimated_volume">Estimated volume</Label>
              <Input
                id="estimated_volume"
                name="estimated_volume"
                type="text"
                value={values.estimated_volume}
                onChange={handleChange}
                placeholder="1,000 units / month"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="target_market">Target market</Label>
              <Input
                id="target_market"
                name="target_market"
                type="text"
                value={values.target_market}
                onChange={handleChange}
                placeholder="USA, Germany, Australia..."
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="product_description">Product description *</Label>
              <Textarea
                id="product_description"
                name="product_description"
                rows={5}
                value={values.product_description}
                onChange={handleChange}
                placeholder="Describe the product, materials, specs, packaging, and any certification requirements."
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="message">Additional questions</Label>
              <Textarea
                id="message"
                name="message"
                rows={3}
                value={values.message}
                onChange={handleChange}
                placeholder="Any deadlines, budget range, or special requirements?"
              />
            </div>
          </div>

          {error && (
            <div className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {status === 'success' && (
            <div className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-700">
              Thank you. Your inquiry has been received. We will contact you within one business day.
            </div>
          )}

          <div className="mt-8">
            <Button
              type="submit"
              size="lg"
              disabled={status === 'submitting'}
              className="w-full md:w-auto"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
