import { useState } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle
} from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product_interest: '',
  quantity: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    // Basic validation
    if (!form.name.trim()) { setError('Please enter your name.'); return }
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) { setError('Please enter a valid email address.'); return }
    if (!form.message.trim()) { setError('Please describe your sourcing requirements.'); return }

    setStatus('submitting')

    try {
      const { data: response, error: createError } = await client
        .from('Contact Inquiries')
        .insert({
          data: {
            name: form.name,
            company: form.company,
            email: form.email,
            phone: form.phone,
            country: form.country,
            product_interest: form.product_interest,
            quantity: form.quantity,
            budget: form.budget,
            message: form.message,
            source: 'website',
            status: 'new',
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        const errMsg = Array.isArray(response?.errors)
          ? response.errors.join(', ')
          : createError?.message || 'Submission failed. Please try again.'
        setError(errMsg)
        setStatus('error')
        return
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('Contact form error:', err)
      setError(err.message || 'An unexpected error occurred.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Tell us about your sourcing needs. We will respond with a free assessment and quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:info@ssourcingchina.com" className="text-primary-500 hover:text-primary-700 no-underline">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <a href="tel:+86-21-1234-5678" className="text-primary-500 hover:text-primary-700 no-underline">
                      +86 21 1234 5678
                    </a>
                    <p className="text-sm text-gray-500 mt-1">WeChat: SSourcingChina</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Office</h4>
                    <p className="text-gray-600">
                      Room 1205, Building A<br />
                      Pudong New Area<br />
                      Shanghai 200120, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                      Saturday: 9:00 AM - 12:00 PM (CST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-primary-800 mb-2">Request a Free Sourcing Quote</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700 mb-6">
                      Your inquiry has been submitted successfully. Our team will review your requirements
                      and respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 bg-white"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 bg-white"
                        />
                      </div>
                    </div>

                    {/* Country */}
                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="United States"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 bg-white"
                      />
                    </div>

                    {/* Product & Quantity */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="product_interest" className="block text-sm font-semibold text-gray-700 mb-2">
                          Product You Want to Source
                        </label>
                        <input
                          type="text"
                          id="product_interest"
                          name="product_interest"
                          value={form.product_interest}
                          onChange={handleChange}
                          placeholder="e.g., LED lights, kitchen appliances"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={form.quantity}
                          onChange={handleChange}
                          placeholder="e.g., 1,000 units, 10,000 pcs"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 bg-white"
                        />
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                        Estimated Budget
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        placeholder="e.g., $5,000 - $10,000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 bg-white"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Please describe your sourcing requirements, product specifications, target price, and any other details..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 bg-white resize-y"
                      />
                    </div>

                    {/* Error message */}
                    {error && (
                      <div className="flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3 text-sm">
                        <AlertCircle size={18} />
                        {error}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to be contacted by SSourcing China regarding your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
