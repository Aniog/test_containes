import { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { toast } from 'sonner'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const servicesOptions = [
  'Supplier Search',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Custom Packaging',
]

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  product_details: '',
  estimated_quantity: '',
  services_needed: [],
  budget_range: '',
  timeline: '',
  additional_notes: '',
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setValues((v) => ({
        ...v,
        services_needed: checked
          ? [...v.services_needed, value]
          : v.services_needed.filter((s) => s !== value),
      }))
    } else {
      setValues((v) => ({ ...v, [name]: value }))
    }
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    return null
  }

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      setError(null)
      const err = validate(values)
      if (err) {
        setError(err)
        toast.error(err)
        return
      }
      setStatus('submitting')
      try {
        const { data: response, error: createError } = await client
          .from('Inquiry')
          .insert({
            data: {
              name: values.name,
              email: values.email,
              company: values.company,
              country: values.country,
              phone: values.phone,
              product_category: values.product_category,
              product_details: values.product_details,
              estimated_quantity: values.estimated_quantity,
              services_needed: values.services_needed,
              budget_range: values.budget_range,
              timeline: values.timeline,
              additional_notes: values.additional_notes,
              status: 'new',
            },
          })
          .select()
          .single()

        if (createError || response?.success === false) {
          const msg = Array.isArray(response?.errors) && response.errors.length > 0
            ? response.errors.join(', ')
            : createError?.message || 'Submission failed. Please try again.'
          setError(msg)
          toast.error(msg)
          setStatus('error')
          return
        }

        setStatus('success')
        setValues(initialValues)
        toast.success('Your inquiry has been submitted. We will contact you within 24 hours.')
      } catch (err) {
        const msg = err?.message || 'Something went wrong. Please try again.'
        setError(msg)
        toast.error(msg)
        setStatus('error')
      }
    },
    [values]
  )

  return (
    <>
      <Helmet>
        <title>Contact Us | Free Sourcing Quote | SSourcing China</title>
        <meta name="description" content="Get a free sourcing quote from SSourcing China. Tell us what you need and we will respond within 24 hours with a customized sourcing plan." />
      </Helmet>

      {/* Hero */}
      <section className="w-full bg-navy-900 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Get a Free Sourcing Quote</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us what you need and our team will respond within 24 hours with a customized sourcing plan and pricing estimate.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Reach out directly or fill out the inquiry form. We typically respond within 24 hours during business days.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Email</h3>
                    <a href="mailto:hello@ssourcingchina.com" className="text-sm text-blue-600 hover:text-blue-700">
                      hello@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Phone</h3>
                    <a href="tel:+8675588881234" className="text-sm text-blue-600 hover:text-blue-700">
                      +86 755 8888 1234
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Office</h3>
                    <p className="text-sm text-slate-500">
                      Suite 1206, Futian District<br />
                      Shenzhen, Guangdong, China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                      <CheckCircle className="h-7 w-7 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Inquiry Received</h3>
                    <p className="text-slate-500 mb-6">Thank you for reaching out. We will review your requirements and contact you within 24 hours.</p>
                    <button
                      onClick={() => { setStatus('idle'); setError(null) }}
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={values.company}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Country
                        </label>
                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={values.country}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="e.g., United States"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={values.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <label htmlFor="product_category" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Product Category
                        </label>
                        <input
                          id="product_category"
                          name="product_category"
                          type="text"
                          value={values.product_category}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="e.g., Electronics, Textiles"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product_details" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Product Details
                      </label>
                      <textarea
                        id="product_details"
                        name="product_details"
                        rows={3}
                        value={values.product_details}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Describe the product, specifications, materials, colors, sizes, etc."
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="estimated_quantity" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Estimated Quantity
                        </label>
                        <input
                          id="estimated_quantity"
                          name="estimated_quantity"
                          type="text"
                          value={values.estimated_quantity}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="e.g., 5,000 units"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget_range" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Budget Range (USD)
                        </label>
                        <select
                          id="budget_range"
                          name="budget_range"
                          value={values.budget_range}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Select range</option>
                          <option value="Under $10,000">Under $10,000</option>
                          <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                          <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                          <option value="$100,000 - $500,000">$100,000 - $500,000</option>
                          <option value="Over $500,000">Over $500,000</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="mb-1.5 block text-sm font-medium text-slate-700">
                          Target Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={values.timeline}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Select timeline</option>
                          <option value="Within 1 month">Within 1 month</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="6-12 months">6-12 months</option>
                          <option value="Just exploring">Just exploring</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <span className="mb-2 block text-sm font-medium text-slate-700">Services Needed</span>
                      <div className="flex flex-wrap gap-3">
                        {servicesOptions.map((svc) => (
                          <label
                            key={svc}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                              values.services_needed.includes(svc)
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-slate-300 text-slate-600 hover:border-slate-400'
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="services_needed"
                              value={svc}
                              checked={values.services_needed.includes(svc)}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {svc}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="additional_notes" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Additional Notes
                      </label>
                      <textarea
                        id="additional_notes"
                        name="additional_notes"
                        rows={3}
                        value={values.additional_notes}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Any other details: target price, certifications required, shipping terms, etc."
                      />
                    </div>

                    {error && (
                      <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}

                    <div className="flex items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60 transition-colors"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Inquiry
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                      <span className="text-xs text-slate-500">
                        Free response within 24 hours
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
