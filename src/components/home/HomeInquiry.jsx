import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
}

export default function HomeInquiry() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.product.trim()) return 'Please describe the product you need'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }

    setStatus('submitting')

    try {
      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            product: values.product,
            quantity: values.quantity,
            message: values.message,
          },
        })
        .select()
        .single()

      if (insertError || response?.success === false) {
        const msg = Array.isArray(response?.errors)
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed'
        throw new Error(msg)
      }

      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      console.error('Inquiry submission error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            Get a Free Sourcing Quote
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Tell us what you need, and we&apos;ll get back to you within 24 hours with a tailored proposal.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
            <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-navy mb-2">Thank You for Your Inquiry</h3>
            <p className="text-gray-600">
              We&apos;ve received your sourcing request. Our team will review it and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="inquiry-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  id="inquiry-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="inquiry-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="inquiry-company" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Company Name
                </label>
                <input
                  id="inquiry-company"
                  name="company"
                  type="text"
                  value={values.company}
                  onChange={onChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="inquiry-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  id="inquiry-phone"
                  name="phone"
                  type="text"
                  value={values.phone}
                  onChange={onChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                  placeholder="+1 234 567 890"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="inquiry-product" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Product You Need *
                </label>
                <input
                  id="inquiry-product"
                  name="product"
                  type="text"
                  value={values.product}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                  placeholder="e.g., LED light fixtures"
                />
              </div>
              <div>
                <label htmlFor="inquiry-quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Estimated Order Quantity
                </label>
                <input
                  id="inquiry-quantity"
                  name="quantity"
                  type="text"
                  value={values.quantity}
                  onChange={onChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors"
                  placeholder="e.g., 1,000 units/month"
                />
              </div>
            </div>

            <div>
              <label htmlFor="inquiry-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                Additional Details
              </label>
              <textarea
                id="inquiry-message"
                name="message"
                rows={4}
                value={values.message}
                onChange={onChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none transition-colors resize-y"
                placeholder="Target price, specifications, certifications needed, timeline..."
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}