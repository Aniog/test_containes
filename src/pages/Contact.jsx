import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    setStatus('submitting')

    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tell us about your sourcing needs. We respond within 24 hours with a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-2">Get a Free Sourcing Quote</h2>
              <p className="text-muted-text mb-8">
                Fill out the form below and our team will get back to you within 24 hours with a tailored sourcing plan.
              </p>

              {status === 'success' ? (
                <div className="bg-trust-green/10 border border-trust-green/30 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-trust-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-2">Thank You!</h3>
                  <p className="text-muted-text">
                    Your inquiry has been received. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sky-blue font-semibold text-sm hover:text-sky-blue-dark transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg border border-border-gray text-body-text text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-border-gray text-body-text text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-navy mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-3 rounded-lg border border-border-gray text-body-text text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 rounded-lg border border-border-gray text-body-text text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="product" className="block text-sm font-semibold text-navy mb-1.5">
                        Product You Want to Source
                      </label>
                      <input
                        id="product"
                        name="product"
                        type="text"
                        value={formData.product}
                        onChange={handleChange}
                        placeholder="e.g., Bluetooth speakers, furniture"
                        className="w-full px-4 py-3 rounded-lg border border-border-gray text-body-text text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-semibold text-navy mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 1,000 units"
                        className="w-full px-4 py-3 rounded-lg border border-border-gray text-body-text text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
                      Your Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Describe your product requirements, target price, quality standards, timeline, or any other details..."
                      className="w-full px-4 py-3 rounded-lg border border-border-gray text-body-text text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-colors resize-y"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 bg-sky-blue text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-sky-blue-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div>
              <div className="bg-section-bg rounded-xl p-6 md:p-8 border border-border-gray">
                <h3 className="text-lg font-bold text-navy mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Office Location</p>
                      <p className="text-muted-text text-sm">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Email</p>
                      <p className="text-muted-text text-sm">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Phone</p>
                      <p className="text-muted-text text-sm">+86 755 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Business Hours</p>
                      <p className="text-muted-text text-sm">Mon-Fri: 9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-xl p-6 md:p-8 mt-6">
                <h3 className="text-lg font-bold text-white mb-3">Quick Response Guarantee</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We respond to all inquiries within 24 hours during business days. For urgent requests, please mention "URGENT" in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
