import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Send, CheckCircle } from 'lucide-react'

const projectUrl = STRK_PROJECT_URL
const projectAnonKey = STRK_PROJECT_ANON_KEY
const client = new DataClient(projectUrl, projectAnonKey)

export default function InquiryFormSection() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    volume: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email address'
    if (!v.message.trim()) return 'Please describe your sourcing needs'
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
      const { error: responseError } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            country: values.country,
            product: values.product,
            volume: values.volume || null,
            message: values.message,
          },
        })

      if (responseError) throw responseError

      setStatus('success')
      setValues({
        name: '',
        email: '',
        company: '',
        country: '',
        product: '',
        volume: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-surface-800 mb-4">
            Start Your Sourcing Project
          </h2>
          <p className="text-surface-500 text-lg">
            Tell us about your requirements and we will get back to you within 24 hours with a free sourcing assessment.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-green-50 rounded-xl border border-green-200 p-8 text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
            <p className="text-green-600">
              Your inquiry has been received. Our team will review your requirements and contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-white rounded-xl border border-surface-200 p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-surface-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={onChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-surface-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-surface-700 mb-1.5">
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={values.company}
                  onChange={onChange}
                  placeholder="Your company"
                  className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-surface-700 mb-1.5">
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={values.country}
                  onChange={onChange}
                  placeholder="Your country"
                  className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-surface-700 mb-1.5">
                  Product to Source
                </label>
                <input
                  id="product"
                  name="product"
                  type="text"
                  value={values.product}
                  onChange={onChange}
                  placeholder="e.g. Bluetooth speakers"
                  className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="volume" className="block text-sm font-medium text-surface-700 mb-1.5">
                  Estimated Volume
                </label>
                <select
                  id="volume"
                  name="volume"
                  value={values.volume}
                  onChange={onChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                >
                  <option value="">Select volume</option>
                  <option value="sample">Sample only</option>
                  <option value="small">Small (100-500 units)</option>
                  <option value="medium">Medium (500-5,000 units)</option>
                  <option value="large">Large (5,000-50,000 units)</option>
                  <option value="bulk">Bulk (50,000+ units)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-surface-700 mb-1.5">
                Tell Us About Your Sourcing Needs *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                required
                placeholder="Describe the product you want to source, your quality requirements, target budget, and any other relevant details..."
                className="w-full px-4 py-2.5 rounded-lg border border-surface-200 text-surface-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-y"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-lg font-semibold text-base hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Sourcing Inquiry
                </>
              )}
            </button>

            <p className="text-surface-400 text-xs text-center">
              We respect your privacy. Your information will be kept confidential and used only to respond to your inquiry.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}