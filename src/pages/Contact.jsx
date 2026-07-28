import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'
import { submitInquiry } from '@/api/inquiries'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+86 123 4567 890', '+86 987 6543 210'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@ssourcingchina.com', 'sales@ssourcingchina.com'],
  },
  {
    icon: MapPin,
    title: 'Office Address',
    details: ['Room 1208, Block A', 'International Trade Center', 'Shenzhen, Guangdong, China'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 12:00 PM', '(China Standard Time, UTC+8)'],
  },
]

export default function Contact() {
  const containerRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const form = e.target
    const formData = {
      name: form.name.value,
      company: form.company.value,
      email: form.email.value,
      phone: form.phone.value,
      product: form.product.value,
      service: form.service.value,
      country: form.country.value,
      message: form.message.value,
      sourcePage: 'contact',
    }

    const result = await submitInquiry(formData)

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error)
    }

    setSubmitting(false)
  }

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm tracking-wide uppercase mb-3">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tell us about your sourcing needs and our team will respond within 24 hours
            with a tailored proposal.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy-950 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-950 mb-1">{item.title}</h3>
                      {item.details.map((line, i) => (
                        <p key={i} className="text-gray-600 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <div
                  data-strk-bg-id="contact-map-shenzhen-a1b2c3"
                  data-strk-bg="Shenzhen China business district international trade center office building"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="500"
                  className="w-full h-56 bg-gray-100"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 rounded-2xl p-12 text-center border border-green-100">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-950 mb-3">Thank You for Your Inquiry!</h2>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    We have received your message and will get back to you within 24 hours. In the meantime,
                    feel free to browse our blog for sourcing tips and insights.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-600 font-semibold hover:text-brand-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100" onSubmit={handleSubmit}>
                  <h2 className="text-xl font-bold text-navy-950 mb-6">Send Us a Message</h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-950 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy-950 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-950 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-950 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="product" className="block text-sm font-medium text-navy-950 mb-1.5">
                        What do you want to source? *
                      </label>
                      <textarea
                        id="product"
                        rows={4}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm resize-none"
                        placeholder="Please describe the product, including specifications, target quantity, target price, and any special requirements..."
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-navy-950 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                      >
                        <option value="">Select a service...</option>
                        <option value="sourcing">Supplier Sourcing</option>
                        <option value="verification">Factory Verification</option>
                        <option value="qc">Quality Control</option>
                        <option value="shipping">Shipping & Logistics</option>
                        <option value="oem">Product Development / OEM</option>
                        <option value="full">Full-Service Sourcing</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-navy-950 mb-1.5">
                        Your Country
                      </label>
                      <input
                        id="country"
                        type="text"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
                        placeholder="e.g., United States"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-navy-950 mb-1.5">
                        Additional Details
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm resize-none"
                        placeholder="Any additional information that would help us understand your needs..."
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
