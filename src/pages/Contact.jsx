import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail, Phone, MapPin, Clock, CheckCircle, Send, Globe, MessageSquare
} from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '',
    product: '', quantity: '', budget: '', timeline: '', message: ''
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setForm({
        name: '', email: '', company: '', phone: '',
        product: '', quantity: '', budget: '', timeline: '', message: ''
      })
    }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Tell us about your product requirements. Our team will respond within 24 hours
            with a tailored sourcing plan and cost estimates.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Sourcing Inquiry Form</h2>
                <p className="text-slate-500 text-sm mb-8">Fields marked with * are required. We respond within 24 hours.</p>

                {status === 'success' ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Thank You!</h3>
                    <p className="text-slate-500 mb-6 max-w-md mx-auto">
                      We have received your sourcing inquiry. Our team will review your requirements
                      and get back to you within 24 hours with a sourcing plan.
                    </p>
                    <button onClick={() => setStatus('idle')} className="text-primary font-medium hover:underline text-sm">
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                        <input
                          name="name" type="text" required value={form.name} onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 bg-white"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                        <input
                          name="email" type="email" required value={form.email} onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 bg-white"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                        <input
                          name="company" type="text" value={form.company} onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 bg-white"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                        <input
                          name="phone" type="text" value={form.phone} onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 bg-white"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Product to Source *</label>
                        <input
                          name="product" type="text" required value={form.product} onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 bg-white"
                          placeholder="e.g. LED lights, furniture, apparel"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                        <input
                          name="quantity" type="text" value={form.quantity} onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 bg-white"
                          placeholder="e.g. 1,000 units, 1 container"
                        />
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Budget</label>
                        <select
                          name="budget" value={form.budget} onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 bg-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-20k">$5,000 - $20,000</option>
                          <option value="20k-50k">$20,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="over-100k">Over $100,000</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Timeline</label>
                        <select
                          name="timeline" value={form.timeline} onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 bg-white"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">As soon as possible</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="2-3-months">2-3 months</option>
                          <option value="flexible">Flexible / Exploring</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
                      <textarea
                        name="message" rows={5} value={form.message} onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none text-slate-900 bg-white"
                        placeholder="Product specifications, certifications needed (CE, FCC, etc.), target price, shipping destination, or any other details..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Get a Free Sourcing Quote
                        </>
                      )}
                    </button>
                    <p className="text-xs text-slate-400 text-center">
                      We respond within 24 hours. Your information is kept confidential.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Office Address</p>
                      <p className="text-sm text-slate-500">Tianhe District, Guangzhou, Guangdong, China 510620</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Email</p>
                      <p className="text-sm text-slate-500">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Phone / WeChat</p>
                      <p className="text-sm text-slate-500">+86 138 0000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Working Hours</p>
                      <p className="text-sm text-slate-500">Monday – Friday, 9:00 AM – 6:00 PM (CST, UTC+8)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Time Zone</p>
                      <p className="text-sm text-slate-500">China Standard Time (UTC+8)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Why Contact Us?</h3>
                <div className="space-y-3">
                  {[
                    'Free initial consultation — no obligation',
                    'Supplier shortlist in 3-5 business days',
                    'Transparent pricing, no hidden fees',
                    'Dedicated bilingual sourcing manager',
                    '10+ years of China sourcing experience',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-blue-100">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-bold text-slate-900">Prefer to Chat?</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  For quick questions, reach us on WeChat or WhatsApp. We typically respond within a few hours during business days.
                </p>
                <p className="text-sm font-medium text-primary">WeChat / WhatsApp: +86 138 0000 0000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
