import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Something went wrong. Please try again.'
}

const initialForm = {
  full_name: '',
  email: '',
  company: '',
  phone: '',
  country: '',
  product_description: '',
  quantity: '',
  budget: '',
  timeline: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = (v) => {
    if (!v.full_name.trim()) return 'Please enter your full name'
    if (!v.email.trim()) return 'Please enter your email'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address'
    if (!v.product_description.trim()) return 'Please describe the product you want to source'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const err = validate(form)
    if (err) {
      setError(err)
      return
    }

    setStatus('submitting')

    try {
      const { data: response, error: submitError } = await client
        .from('Inquiry Form Responses')
        .insert({
          data: {
            full_name: form.full_name,
            email: form.email,
            company: form.company || '',
            phone: form.phone || '',
            country: form.country || '',
            product_description: form.product_description,
            quantity: form.quantity || '',
            budget: form.budget || '',
            timeline: form.timeline || '',
            message: form.message || '',
            status: 'new',
          },
        })
        .select()
        .single()

      if (submitError) throw submitError
      if (response?.success === false) {
        throw new Error(getErrorMessage(response, null))
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Tell us about your sourcing needs and we will get back to you within 24 hours with a free assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy-700 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-700 text-sm">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-gray-600 text-sm hover:text-navy-700 transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-700 text-sm">Phone</h3>
                    <a href="tel:+861234567890" className="text-gray-600 text-sm hover:text-navy-700 transition-colors">
                      +86 123 4567 890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-700 text-sm">Office</h3>
                    <p className="text-gray-600 text-sm">
                      Guangzhou, Guangdong Province<br />
                      China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-700 text-sm">Business Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                      Saturday: 9:00 AM - 12:00 PM (CST)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-navy-50 rounded-xl border border-navy-100">
                <h3 className="font-semibold text-navy-700 mb-2">Response Time</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please indicate in your message.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-navy-700 mb-2">Request a Free Sourcing Quote</h2>
                <p className="text-gray-600 text-sm mb-8">
                  Fill out the form below and we will prepare a customized sourcing plan for your project.
                </p>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-800 text-sm">Thank you for your inquiry!</p>
                      <p className="text-green-700 text-sm mt-1">We have received your message and will get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-800 text-sm">Submission Error</p>
                      <p className="text-red-700 text-sm mt-1">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label htmlFor="full_name" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        value={form.full_name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="United States"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={form.quantity}
                        onChange={handleChange}
                        placeholder="1,000 - 5,000 units"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_description" className="block text-sm font-medium text-navy-700 mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      rows={4}
                      value={form.product_description}
                      onChange={handleChange}
                      required
                      placeholder="Describe the product you want to source, including specifications, materials, and any special requirements..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Target Budget
                      </label>
                      <input
                        id="budget"
                        name="budget"
                        type="text"
                        value={form.budget}
                        onChange={handleChange}
                        placeholder="$10,000 - $50,000"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Expected Timeline
                      </label>
                      <input
                        id="timeline"
                        name="timeline"
                        type="text"
                        value={form.timeline}
                        onChange={handleChange}
                        placeholder="Within 3 months"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any other details, questions, or special requirements..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-lg font-semibold text-base transition-colors flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}