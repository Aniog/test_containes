import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const projectUrl = STRK_PROJECT_URL
const projectAnonKey = STRK_PROJECT_ANON_KEY
const client = new DataClient(projectUrl, projectAnonKey)

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  product: '',
  quantity: '',
  budget: '',
  timeline: '',
  description: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = (f) => {
    if (!f.name.trim()) return 'Please enter your name'
    if (!f.email.trim()) return 'Please enter your email'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return 'Please enter a valid email address'
    if (!f.product.trim()) return 'Please describe the product you want to source'
    if (!f.description.trim()) return 'Please provide more details about your requirements'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(form)
    if (err) { setError(err); return }

    setStatus('submitting')

    try {
      const { error: responseError } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            name: form.name,
            email: form.email,
            company: form.company,
            phone: form.phone,
            product: form.product,
            quantity: form.quantity,
            budget: form.budget,
            timeline: form.timeline,
            description: form.description,
            status: 'new',
          },
        })

      if (responseError) throw responseError

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error(err)
      setError(err.message || 'Submission failed. Please try again or email us directly.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-900 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              Tell us about your product requirements and we will get back to you within 24 hours with a free sourcing assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold mb-2">Submit Your Inquiry</h2>
                <p className="text-neutral-600 mb-8">Fill out the form below and our team will review your requirements.</p>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Inquiry Submitted Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for reaching out. Our team will review your requirements and contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Product You Want to Source <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="product"
                        name="product"
                        type="text"
                        value={form.product}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="e.g., Bluetooth speakers, cotton t-shirts, steel pipes"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Estimated Quantity
                        </label>
                        <input
                          id="quantity"
                          name="quantity"
                          type="text"
                          value={form.quantity}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="e.g., 1,000 units"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Target Budget
                        </label>
                        <input
                          id="budget"
                          name="budget"
                          type="text"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="e.g., $5,000 - $10,000"
                        />
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Target Timeline
                        </label>
                        <input
                          id="timeline"
                          name="timeline"
                          type="text"
                          value={form.timeline}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="e.g., 8-12 weeks"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={6}
                        value={form.description}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Describe your product requirements, specifications, quality standards, certifications needed, and any other relevant details..."
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary text-lg inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Inquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-700">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-neutral-600 hover:text-accent-600 transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-700">Phone</p>
                      <a href="tel:+861234567890" className="text-sm text-neutral-600 hover:text-accent-600 transition-colors">
                        +86 123 4567 890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-700">Office</p>
                      <p className="text-sm text-neutral-600">
                        Guangzhou, Guangdong Province<br />China
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-700">Business Hours</p>
                      <p className="text-sm text-neutral-600">
                        Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                        Saturday: 9:00 AM - 1:00 PM (CST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-primary-900 text-white">
                <h3 className="font-semibold text-white mb-2">Need a Quick Answer?</h3>
                <p className="text-sm text-neutral-300 mb-4">
                  Send us a message through the form and we will respond within 24 hours. For urgent inquiries, please call us directly.
                </p>
                <div className="flex items-center gap-2 text-sm text-accent-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Free consultation and quote</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-accent-400 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No obligation, no pressure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}