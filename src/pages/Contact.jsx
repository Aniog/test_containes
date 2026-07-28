import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import loadStrkImgConfig from '../strk-img-config.js'
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react'
import { client, getErrorMessage } from '../api/postgrest-client.js'

export default function Contact() {
  const containerRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    loadStrkImgConfig().then((cfg) => {
      if (!cancelled && containerRef.current) {
        return ImageHelper.loadImages(cfg, containerRef.current)
      }
    })
    return () => { cancelled = true }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    const form = e.target
    const formData = {
      name: form.fullName.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      country: form.country.value.trim(),
      phone: form.phone.value.trim() || undefined,
      budget: form.budget.value || undefined,
      product_description: form.product.value.trim(),
      additional_info: form.message.value.trim() || undefined,
    }

    try {
      const { data: response, error: submitError } = await client
        .from('Sourcing Inquiries')
        .insert({ data: formData })
        .select()
        .single()

      if (submitError || response?.success === false) {
        throw new Error(getErrorMessage(response, submitError))
      }

      setSubmitted(true)
      setStatus('success')
    } catch (err) {
      console.error('Inquiry submission failed:', err)
      setError(err.message || 'Failed to submit inquiry. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Contact Us</h1>
            <p className="mt-4 text-lg text-slate-600">
              Ready to start sourcing? Fill out the form and our team will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Office Address</h3>
                      <p className="text-sm text-slate-600">
                        Room 1208, Tianhe Business Center<br />
                        Guangzhou, Guangdong 510000<br />
                        China
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                      <p className="text-sm text-slate-600">
                        +86 150 1234 5678<br />
                        Mon-Fri, 9:00 AM - 6:00 PM (CST)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <p className="text-sm text-slate-600">
                        info@ssourcingchina.com<br />
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Working Hours</h3>
                      <p className="text-sm text-slate-600">
                        Monday - Friday: 9:00 AM - 6:00 PM CST<br />
                        Saturday: 9:00 AM - 12:00 PM CST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h2>
                  <p className="text-slate-600">
                    Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg p-6 md:p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Get a Free Sourcing Quote</h2>

                  {status === 'error' && error && (
                    <div className="mb-5 bg-red-50 border border-red-200 rounded-md p-4 text-sm text-red-700" role="alert">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input type="text" id="fullName" required disabled={status === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="John Smith" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                      <input type="email" id="email" required disabled={status === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
                      <input type="text" id="company" required disabled={status === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="Your Company Ltd." />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">Country *</label>
                      <input type="text" id="country" required disabled={status === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="United States" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <input type="tel" id="phone" disabled={status === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="+1 234 567 8900" />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">Estimated Budget</label>
                      <select id="budget" disabled={status === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed">
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-25k">$5,000 - $25,000</option>
                        <option value="25k-100k">$25,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">Product Description *</label>
                    <textarea id="product" rows={5} required disabled={status === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="Please describe the products you want to source. Include details such as:&#10;&#10;- Product type and specifications&#10;- Target quantity and order frequency&#10;- Quality standards and certifications needed&#10;- Target price range&#10;- Any specific requirements or preferences" />
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Additional Information</label>
                    <textarea id="message" rows={3} disabled={status === 'submitting'} className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 disabled:opacity-60 disabled:cursor-not-allowed" placeholder="Any other details you would like to share about your project..." />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="mt-6 w-full bg-red-600 text-white px-8 py-3.5 rounded-md text-base font-semibold hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </button>

                  <p className="mt-3 text-xs text-slate-500 text-center">
                    We respect your privacy. Your information will be kept confidential and used only to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}