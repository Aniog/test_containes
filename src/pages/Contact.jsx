import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { toast } from 'sonner'
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Monitoring',
  'Shipping Coordination',
  'Custom Product Development',
]

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product_description: '',
    quantity: '',
    services_needed: [],
    budget_range: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const toggleService = (service) => {
    setValues((v) => {
      const current = v.services_needed
      const next = current.includes(service)
        ? current.filter((s) => s !== service)
        : [...current, service]
      return { ...v, services_needed: next }
    })
  }

  const validate = (v) => {
    const errs = {}
    if (!v.name.trim()) errs.name = 'Name is required'
    if (!v.email.trim()) errs.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(v.email)) errs.email = 'Please enter a valid email'
    if (!v.product_description.trim()) errs.product_description = 'Product description is required'
    return errs
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    const errs = validate(values)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('submitting')

    const { data: response, error } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          name: values.name,
          email: values.email,
          company: values.company,
          phone: values.phone,
          country: values.country,
          product_description: values.product_description,
          quantity: values.quantity,
          services_needed: values.services_needed,
          budget_range: values.budget_range,
          timeline: values.timeline,
          message: values.message,
        },
      })
      .select()
      .single()

    if (error || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : error?.message || 'Submission failed. Please try again.'
      toast.error(msg)
      setStatus('error')
      return
    }

    toast.success('Your inquiry has been submitted. We will be in touch within 24 hours.')
    setValues({
      name: '',
      email: '',
      company: '',
      phone: '',
      country: '',
      product_description: '',
      quantity: '',
      services_needed: [],
      budget_range: '',
      timeline: '',
      message: '',
    })
    setStatus('success')
  }

  return (
    <div>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Ready to source from China? Fill out the form below and our team will prepare a free sourcing plan for you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
            <div className="lg:col-span-2">
              <form onSubmit={onSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      placeholder="John Smith"
                      className={`w-full rounded-md border px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal ${
                        errors.name ? 'border-red-300 focus:ring-red-200' : 'border-border'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      placeholder="john@company.com"
                      className={`w-full rounded-md border px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal ${
                        errors.email ? 'border-red-300 focus:ring-red-200' : 'border-border'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-navy mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={onChange}
                      placeholder="Your Company Ltd"
                      className="w-full rounded-md border border-border px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={onChange}
                      placeholder="+1 555 123 4567"
                      className="w-full rounded-md border border-border px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-navy mb-1.5">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={values.country}
                      onChange={onChange}
                      placeholder="United States"
                      className="w-full rounded-md border border-border px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-semibold text-navy mb-1.5">
                      Expected Quantity
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={values.quantity}
                      onChange={onChange}
                      placeholder="e.g. 2,000 units"
                      className="w-full rounded-md border border-border px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product_description" className="block text-sm font-semibold text-navy mb-1.5">
                    Product Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="product_description"
                    name="product_description"
                    rows={4}
                    value={values.product_description}
                    onChange={onChange}
                    placeholder="Describe the product you want to source, including materials, dimensions, colors, and any certifications required."
                    className={`w-full rounded-md border px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal ${
                      errors.product_description ? 'border-red-300 focus:ring-red-200' : 'border-border'
                    }`}
                  />
                  {errors.product_description && (
                    <p className="text-xs text-red-500 mt-1">{errors.product_description}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Services Needed</label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                          values.services_needed.includes(s)
                            ? 'bg-teal text-white border-teal'
                            : 'bg-white text-text-muted border-border hover:border-teal hover:text-teal'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget_range" className="block text-sm font-semibold text-navy mb-1.5">
                      Budget / Target Price
                    </label>
                    <input
                      id="budget_range"
                      name="budget_range"
                      type="text"
                      value={values.budget_range}
                      onChange={onChange}
                      placeholder="e.g. $5,000 - $10,000"
                      className="w-full rounded-md border border-border px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-navy mb-1.5">
                      Expected Timeline
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      value={values.timeline}
                      onChange={onChange}
                      placeholder="e.g. 3 months"
                      className="w-full rounded-md border border-border px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={onChange}
                    placeholder="Any other information that will help us understand your project better."
                    className="w-full rounded-md border border-border px-4 py-2.5 text-sm text-navy outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center rounded-md bg-teal px-8 py-3 text-base font-semibold text-white hover:bg-teal-dark transition-colors disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get a Free Sourcing Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                  {status === 'success' && (
                    <span className="inline-flex items-center text-sm font-medium text-teal">
                      <CheckCircle2 className="mr-1.5 w-4 h-4" />
                      Submitted successfully
                    </span>
                  )}
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-navy mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-navy">Email</p>
                      <p className="text-sm text-text-muted">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-navy">Phone</p>
                      <p className="text-sm text-text-muted">+86 755 1234 5678</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-navy">Office</p>
                      <p className="text-sm text-text-muted">Shenzhen, Guangdong, China</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="text-base font-bold text-navy mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours.',
                    'A project manager contacts you for a brief call.',
                    'We prepare a tailored sourcing plan and quote.',
                    'You decide if you want to proceed. No obligation.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted">
                      <span className="w-5 h-5 rounded-full bg-teal/10 text-teal text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-navy rounded-xl p-6 text-white">
                <h3 className="text-base font-bold mb-2">Prefer to Email Directly?</h3>
                <p className="text-sm text-white/70 mb-4">
                  You can also send your requirements directly to our team.
                </p>
                <a
                  href="mailto:info@ssourcingchina.com"
                  className="inline-flex items-center text-sm font-semibold text-teal hover:text-teal-light transition-colors"
                >
                  info@ssourcingchina.com
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
