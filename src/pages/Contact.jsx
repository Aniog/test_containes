import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react'

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">Get Started</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Tell us what you're looking for and our team will respond with a customized sourcing plan within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text-primary mb-2">Sourcing Inquiry Form</h2>
              <p className="text-text-secondary mb-8">Fill in the details below and we'll get back to you within 24 hours with a sourcing plan.</p>

              {status === 'success' ? (
                <div className="bg-success/10 border border-success/30 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-text-primary mb-2">Inquiry Submitted Successfully</h3>
                  <p className="text-text-secondary mb-4">Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-accent font-semibold text-sm border-none bg-transparent cursor-pointer hover:text-accent-hover"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-3 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">Phone / WhatsApp</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-text-primary mb-1.5">Product You're Looking For *</label>
                      <input
                        id="product"
                        name="product"
                        type="text"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        placeholder="e.g., Bluetooth speakers, LED panels"
                        className="w-full px-4 py-3 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-text-primary mb-1.5">Estimated Quantity</label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 1,000 units"
                        className="w-full px-4 py-3 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your product requirements, target price, quality standards, certifications needed, and any other relevant details..."
                      className="w-full px-4 py-3 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg text-base border-none cursor-pointer transition-colors w-full sm:w-auto"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-bg-alt rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-text-primary text-sm font-medium">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-text-secondary text-sm no-underline hover:text-accent">info@ssourcingchina.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-text-primary text-sm font-medium">Phone / WhatsApp</p>
                      <a href="tel:+8613800000000" className="text-text-secondary text-sm no-underline hover:text-accent">+86 138 0000 0000</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-text-primary text-sm font-medium">Office</p>
                      <p className="text-text-secondary text-sm">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-text-primary text-sm font-medium">Business Hours</p>
                      <p className="text-text-secondary text-sm">Mon-Fri: 9:00 - 18:00 CST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What Happens Next?</h3>
                <ol className="space-y-3 list-none p-0 m-0">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">1</span>
                    <p className="text-white/80 text-sm">We review your requirements within 24 hours</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">2</span>
                    <p className="text-white/80 text-sm">We send you a sourcing plan with timeline and pricing</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">3</span>
                    <p className="text-white/80 text-sm">Once approved, we start sourcing immediately</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
