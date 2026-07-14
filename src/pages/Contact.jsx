import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitting(false)
    setSubmitted(true)
    console.log('Form submitted:', formData)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Get a Free Sourcing Quote</h1>
          <p className="mt-4 text-gray-200 text-lg max-w-2xl">
            Tell us about your sourcing needs and receive a tailored proposal within 24 hours. No commitment required.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-primary">Thank You!</h2>
                    <p className="mt-3 text-text-secondary max-w-md mx-auto">
                      We have received your inquiry. Our sourcing team will review your requirements and respond within 24 hours.
                    </p>
                    <Link
                      to="/"
                      className="inline-block mt-6 text-accent font-semibold hover:text-accent-dark no-underline"
                    >
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold text-primary mb-6">Sourcing Inquiry Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                            placeholder="Your company"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="product" className="block text-sm font-medium text-text-primary mb-1.5">
                            Product Description *
                          </label>
                          <input
                            type="text"
                            id="product"
                            name="product"
                            required
                            value={formData.product}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                            placeholder="e.g. Bluetooth speakers, LED panels"
                          />
                        </div>
                        <div>
                          <label htmlFor="quantity" className="block text-sm font-medium text-text-primary mb-1.5">
                            Estimated Quantity
                          </label>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                            placeholder="e.g. 1,000 units/month"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                          Additional Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                          placeholder="Tell us more about your requirements: target price, quality standards, certifications needed, timeline, etc."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full md:w-auto bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 border-none cursor-pointer text-sm"
                      >
                        {submitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Submit Inquiry
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-primary mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Email</p>
                      <p className="text-sm text-text-secondary">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Phone / WhatsApp</p>
                      <p className="text-sm text-text-secondary">+86 138 0000 8888</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Office</p>
                      <p className="text-sm text-text-secondary">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Response Time</p>
                      <p className="text-sm text-text-secondary">Within 24 hours (business days)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-primary mb-3">What Happens Next?</h3>
                <ol className="space-y-3 list-none p-0 m-0">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <p className="text-sm text-text-secondary">We review your requirements within 24 hours</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <p className="text-sm text-text-secondary">We send you a sourcing proposal with timeline and pricing</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <p className="text-sm text-text-secondary">Once approved, we begin supplier research immediately</p>
                  </li>
                </ol>
              </div>

              <div className="bg-orange-50 rounded-xl border border-accent/20 p-6">
                <p className="text-sm font-medium text-primary">No commitment required</p>
                <p className="text-sm text-text-secondary mt-1">
                  Your initial consultation and sourcing proposal are completely free. You only pay when you decide to proceed with a project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
