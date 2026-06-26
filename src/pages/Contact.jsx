import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Mail, Phone, MapPin, Clock, Send, 
  CheckCircle, AlertCircle, Loader2 
} from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com' },
  { icon: Phone, label: 'Phone', value: '+86 20 1234 5678' },
  { icon: MapPin, label: 'Office', value: 'Guangzhou, Guangdong, China' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
]

export default function Contact() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [error, setError] = useState(null)
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address'
    if (!v.product.trim()) return 'Please describe the product you want to source'
    if (!v.message.trim()) return 'Please provide some details about your project'
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
      const { error: submitError } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim(),
            phone: values.phone.trim(),
            product: values.product.trim(),
            quantity: values.quantity.trim(),
            budget: values.budget.trim(),
            timeline: values.timeline.trim(),
            message: values.message.trim(),
            status: 'new',
          },
        })

      if (submitError) {
        throw new Error(submitError.message || 'Failed to submit inquiry')
      }

      setStatus('success')
      setValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        quantity: '',
        budget: '',
        timeline: '',
        message: '',
      })

      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err.message || 'An error occurred. Please try again or email us directly.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-blue to-slate-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Tell us about your sourcing needs and get a free, no-obligation quote within 24 hours. 
              We look forward to discussing how we can help your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Submitted!</h2>
                  <p className="text-slate-600">
                    Thank you for reaching out. Our team will review your project and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
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
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
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
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product to Source <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      value={values.product}
                      onChange={onChange}
                      required
                      placeholder="e.g., Stainless steel kitchenware, LED lighting, Industrial pumps"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={values.quantity}
                        onChange={onChange}
                        placeholder="e.g., 500-1000 units"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Target Budget
                      </label>
                      <input
                        id="budget"
                        name="budget"
                        type="text"
                        value={values.budget}
                        onChange={onChange}
                        placeholder="e.g., $10,000 - $50,000"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Target Timeline
                      </label>
                      <input
                        id="timeline"
                        name="timeline"
                        type="text"
                        value={values.timeline}
                        onChange={onChange}
                        placeholder="e.g., 2-3 months"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={onChange}
                      required
                      placeholder="Tell us about your project: product specifications, quality requirements, certifications needed, and any other important details."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-colors text-sm resize-y"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-4.5 h-4.5 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                        <p className="text-sm text-slate-900 font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'Our team researches suitable suppliers',
                    'We send you a personalized proposal',
                    'You choose how to proceed',
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Prefer to Email?</h3>
                <p className="text-sm text-slate-600 mb-3">
                  You can also send us an email directly with your project details.
                </p>
                <a
                  href="mailto:info@ssourcingchina.com"
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@ssourcingchina.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}