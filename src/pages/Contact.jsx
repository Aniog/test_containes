import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Send, Mail, MapPin, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  product_description: '',
  quantity: '',
  budget: '',
  timeline: '',
  message: '',
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name'
    if (!v.email.trim()) return 'Please enter your email'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address'
    if (!v.product_description.trim()) return 'Please describe the product you want to source'
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
      const { data: response, error: submitError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim(),
            country: values.country.trim(),
            product_description: values.product_description.trim(),
            quantity: values.quantity.trim(),
            budget: values.budget.trim(),
            timeline: values.timeline.trim(),
            message: values.message.trim(),
            status: 'new',
          },
        })
        .select()
        .single()

      if (submitError || response?.success === false) {
        setError(getErrorMessage(response, submitError))
        setStatus('error')
        return
      }

      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      setError(err.message || 'An unexpected error occurred')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Your sourcing inquiry has been received. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-light font-semibold text-sm tracking-wide uppercase">Contact</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tell us about your product requirements and we will provide a tailored sourcing plan with cost estimates and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {error && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={onChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={values.country}
                      onChange={onChange}
                      placeholder="Your country"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product_description" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Product Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="product_description"
                    name="product_description"
                    rows={4}
                    value={values.product_description}
                    onChange={onChange}
                    required
                    placeholder="Describe the product you want to source — include specifications, materials, dimensions, etc."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-y"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={values.quantity}
                      onChange={onChange}
                      placeholder="e.g. 1,000 pcs"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Target Budget
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      value={values.budget}
                      onChange={onChange}
                      placeholder="e.g. USD 5,000–10,000"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Target Timeline
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      value={values.timeline}
                      onChange={onChange}
                      placeholder="e.g. 8–10 weeks"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={values.message}
                    onChange={onChange}
                    placeholder="Any special requirements, certifications needed, or other details..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
                  >
                    {status === 'submitting' ? (
                      <>Submitting...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Sourcing Inquiry
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 mt-3">
                    We respect your privacy. Your information will be kept confidential.
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-neutral-50 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-gray-600 hover:text-primary transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <a href="tel:+861234567890" className="text-sm text-gray-600 hover:text-primary transition-colors">
                        +86 123 4567 890
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Office</p>
                      <p className="text-sm text-gray-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Response Time</p>
                      <p className="text-sm text-gray-600">Within 24 hours on business days</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-primary-dark text-white">
                <h3 className="font-semibold mb-2">Ready to Start?</h3>
                <p className="text-sm text-primary-light/80 leading-relaxed mb-4">
                  Fill out the form and we will get back to you with a free sourcing plan tailored to your needs.
                </p>
                <ul className="space-y-2">
                  {['Free consultation & quote', 'No obligation', 'Expert advice'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-primary-light">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}