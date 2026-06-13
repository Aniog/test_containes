import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/common/SharedComponents'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    timeline: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
    }, 1200)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Contact Us
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Tell us about your sourcing project. We will provide a free, no-obligation quote with supplier options and estimated pricing within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-content-primary mb-2">Request a Free Sourcing Quote</h2>
              <p className="text-content-secondary text-sm mb-8">Fill out the form below and a project manager will contact you within 24 hours.</p>

              {status === 'success' ? (
                <div className="bg-trust-green-bg border border-trust-green/20 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-trust-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-trust-green mb-2">Thank You!</h3>
                  <p className="text-content-secondary">Your inquiry has been received. A project manager will contact you within 24 hours with a detailed sourcing proposal.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-1.5" htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy placeholder-content-light"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-1.5" htmlFor="company">Company Name *</label>
                      <input id="company" name="company" type="text" required value={form.company} onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy placeholder-content-light"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-1.5" htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy placeholder-content-light"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-1.5" htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy placeholder-content-light"
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-1.5" htmlFor="country">Country *</label>
                      <input id="country" name="country" type="text" required value={form.country} onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy placeholder-content-light"
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-1.5" htmlFor="product">Product Category *</label>
                      <input id="product" name="product" type="text" required value={form.product} onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy placeholder-content-light"
                        placeholder="e.g. Consumer Electronics, Home & Garden"
                      />
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-1.5" htmlFor="quantity">Estimated Quantity</label>
                      <input id="quantity" name="quantity" type="text" value={form.quantity} onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy placeholder-content-light"
                        placeholder="e.g. 1,000 units"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-1.5" htmlFor="timeline">Preferred Timeline</label>
                      <select id="timeline" name="timeline" value={form.timeline} onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (within 2 weeks)</option>
                        <option value="1-2-months">1-2 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-content-primary mb-1.5" htmlFor="budget">Target Budget</label>
                      <select id="budget" name="budget" value={form.budget} onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-plus">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-content-primary mb-1.5" htmlFor="message">Project Details *</label>
                    <textarea id="message" name="message" rows={5} required value={form.message} onChange={onChange}
                      className="w-full px-4 py-3 rounded-lg border border-border-light text-sm text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy placeholder-content-light resize-y"
                      placeholder="Describe the product(s) you want to source, including specifications, materials, certifications needed, and any other relevant details."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto px-8 py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-60 text-sm"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'} <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <div className="bg-surface-light rounded-xl p-6 md:p-8 border border-border-light mb-6">
                <h3 className="font-semibold text-content-primary mb-5">Contact Information</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-navy/5 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-content-primary">Office Address</div>
                      <div className="text-content-secondary text-sm">Room 1205, Building A,<br />Nanshan District,<br />Shenzhen, China 518000</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-navy/5 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-content-primary">Phone</div>
                      <div className="text-content-secondary text-sm">+86 755 8888 9999</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-navy/5 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-content-primary">Email</div>
                      <div className="text-content-secondary text-sm">info@ssourcingchina.com</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-navy/5 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-content-primary">Business Hours</div>
                      <div className="text-content-secondary text-sm">Monday – Friday: 9:00 AM – 6:00 PM (CST/GMT+8)<br />Saturday: 9:00 AM – 1:00 PM</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-navy rounded-xl p-6 md:p-8 text-white">
                <h3 className="font-semibold mb-3">Fast Response Guarantee</h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  We respond to all sourcing inquiries within 24 business hours. For urgent requests, call us directly.
                </p>
                <div className="flex items-center gap-2 text-brand-orange text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Average response time: 4 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
