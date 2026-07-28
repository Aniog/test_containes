import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'
import { submitInquiry } from '@/api/inquiries'

export default function Contact() {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const result = await submitInquiry(formData, 'Contact Page')

    if (result.success) {
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', phone: '', country: '', product: '', quantity: '', budget: '', timeline: '', message: '' })
    } else {
      setError(result.error || 'Something went wrong. Please try again.')
    }
    setSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@ssourcingchina.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+86 755 1234 5678',
      description: 'Mon-Fri, 9am-6pm (GMT+8)',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Shenzhen, Guangdong, China',
      description: 'Schedule an appointment',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM (GMT+8)',
    },
  ]

  if (submitted) {
    return (
      <div ref={containerRef}>
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-trust-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-trust-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Thank You for Your Inquiry
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We have received your sourcing request. Our team will review your requirements 
              and contact you within 24 business hours with a detailed response.
            </p>
            <div className="bg-white rounded-xl p-8 border border-gray-100 max-w-md mx-auto mb-8">
              <h3 className="font-semibold text-navy mb-4">What happens next:</h3>
              <ul className="space-y-3 text-left text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span>Our team reviews your requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>We identify suitable suppliers in our network</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>You receive a detailed quote with supplier options</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to start sourcing from China? Tell us about your project and we will 
            provide a free, no-obligation quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-navy mb-1">{info.title}</h3>
                <p className="text-primary font-medium mb-1">{info.value}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Form info */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Get Your Free Sourcing Quote
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Fill out the form below with your product requirements. The more details you provide, 
                the more accurate our quote will be.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Free Consultation</h3>
                    <p className="text-gray-600 text-sm">No obligation to proceed. Get expert advice on your sourcing project.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Detailed Proposal</h3>
                    <p className="text-gray-600 text-sm">Receive supplier options, pricing estimates, and timeline recommendations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Fast Response</h3>
                    <p className="text-gray-600 text-sm">We respond to all inquiries within 24 business hours.</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 bg-white rounded-xl border border-gray-100 p-6">
                <div
                  data-strk-bg-id="contact-map-bg"
                  data-strk-bg="Shenzhen China city map business district skyline"
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                  className="w-full aspect-video rounded-lg bg-gray-100"
                />
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Our office is located in Shenzhen, the manufacturing hub of Southern China
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product to Source *</label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="e.g., LED lights, furniture, electronics"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="e.g., 1,000 units"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target Budget</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="e.g., $10,000 - $50,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (within 2 weeks)</option>
                    <option value="1month">Within 1 month</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Any specific requirements, specifications, target price, certifications needed, etc."
                  />
                </div>

                {error && (
                  <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/70 text-white px-6 py-4 rounded-lg font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Sourcing Request
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We will respond within 24 business hours. Your information is kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
