import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, CheckCircle, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    product: '', quantity: '', message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitted')
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Contact</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Tell us about your product and requirements. Our team will respond within 
              24 hours with a tailored sourcing proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'submitted' ? (
                <div className="text-center py-16 border border-border rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Thank You for Your Inquiry!</h2>
                  <p className="text-text-muted max-w-md mx-auto">
                    We've received your request and will get back to you within 24 business hours 
                    with a tailored sourcing proposal and cost estimate.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', phone: '', company: '', product: '', quantity: '', message: '' }) }}
                    className="mt-6 px-6 py-2.5 border border-border hover:bg-surface-alt rounded-lg text-sm font-medium transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">Full Name *</label>
                      <input
                        id="name" name="name" type="text" required
                        value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email *</label>
                      <input
                        id="email" name="email" type="email" required
                        value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">Phone</label>
                      <input
                        id="phone" name="phone" type="tel"
                        value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                        placeholder="+1 555 0123"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text mb-1.5">Company</label>
                      <input
                        id="company" name="company" type="text"
                        value={formData.company} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-text mb-1.5">Product Description *</label>
                      <input
                        id="product" name="product" type="text" required
                        value={formData.product} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                        placeholder="What product do you want to source?"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-text mb-1.5">Order Quantity</label>
                      <input
                        id="quantity" name="quantity" type="text"
                        value={formData.quantity} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
                        placeholder="e.g. 5,000 units"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">Additional Details</label>
                    <textarea
                      id="message" name="message" rows={5}
                      value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements: target price, timeline, quality standards, certifications needed, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Office Address</h4>
                      <p className="text-sm text-text-muted leading-relaxed">
                        Room 1208, Block A, Dongfang Plaza<br />
                        Shenzhen, Guangdong, China
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Email</h4>
                      <p className="text-sm text-text-muted">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Phone</h4>
                      <p className="text-sm text-text-muted">+86 755 8888 6666</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Business Hours</h4>
                      <p className="text-sm text-text-muted">
                        Monday – Friday: 9:00 AM – 6:00 PM (CST)<br />
                        Saturday: 9:00 AM – 12:00 PM (CST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-alt rounded-xl p-6">
                <h4 className="font-semibold mb-3">What Happens Next?</h4>
                <ol className="space-y-3 text-sm text-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <span>We review your inquiry within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <span>We schedule a call to discuss your requirements in detail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <span>You receive a tailored sourcing proposal with cost estimate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <span>We begin the sourcing process — no commitment required</span>
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