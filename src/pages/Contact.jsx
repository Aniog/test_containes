import { useState } from 'react'
import { CheckCircle, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-4 py-20">
          <CheckCircle className="w-20 h-20 text-success-green mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-dark-text mb-3">Thank You for Your Inquiry</h1>
          <p className="text-lg text-medium-text mb-2">
            We have received your sourcing request and will review it carefully.
          </p>
          <p className="text-medium-text">
            Our team will get back to you within 24 hours with a free assessment and quote.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F2B44] to-[#1B4A7A] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Ready to start sourcing from China? Fill out the form below and we will provide a free quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex gap-12">
            {/* Form */}
            <div className="lg:w-3/5 mb-12 lg:mb-0">
              <h2 className="text-2xl font-bold text-dark-text mb-6">Send Us Your Sourcing Requirements</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-1.5">Full Name *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="John Smith" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-1.5">Email Address *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-dark-text mb-1.5">Company Name</label>
                    <input id="company" name="company" type="text" value={form.company} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Your Company Ltd." />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-text mb-1.5">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="+1 555 123 4567" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-dark-text mb-1.5">Product Interested In *</label>
                    <input id="product" name="product" type="text" required value={form.product} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="e.g., Bluetooth speakers" />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-dark-text mb-1.5">Estimated Quantity</label>
                    <input id="quantity" name="quantity" type="text" value={form.quantity} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="e.g., 1,000 pcs per month" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-1.5">Tell Us About Your Needs *</label>
                  <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-border rounded-md text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-none"
                    placeholder="Describe your product, target price range, quality requirements, certifications needed, timeline, and any other details that will help us understand your project..." />
                </div>
                <button type="submit"
                  className="w-full bg-accent-red text-white py-3.5 rounded-md font-semibold text-base hover:bg-accent-red-hover transition-colors">
                  Submit Inquiry — Get Free Quote
                </button>
                <p className="text-xs text-light-text text-center">
                  Your information is confidential. We will never share your details with third parties.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:w-2/5">
              <div className="bg-light-bg rounded-lg p-8 space-y-6 lg:sticky lg:top-28">
                <h3 className="text-lg font-semibold text-dark-text">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-blue/10 rounded flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-text text-sm">Our Office</p>
                      <p className="text-sm text-medium-text">Guangzhou, Guangdong Province<br />China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-blue/10 rounded flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-text text-sm">Email</p>
                      <p className="text-sm text-medium-text">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-blue/10 rounded flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-text text-sm">Phone</p>
                      <p className="text-sm text-medium-text">+86 20 8888 6666</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-blue/10 rounded flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-text text-sm">Business Hours</p>
                      <p className="text-sm text-medium-text">Monday - Friday: 9:00 - 18:00 (CST)<br />Saturday: 9:00 - 12:00 (CST)</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6 mt-6">
                  <h4 className="font-semibold text-dark-text text-sm mb-3">What Happens After You Submit?</h4>
                  <ol className="space-y-2 text-sm text-medium-text">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary-blue/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary-blue flex-shrink-0 mt-0.5">1</span>
                      We review your requirements within 24 hours
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary-blue/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary-blue flex-shrink-0 mt-0.5">2</span>
                      We provide a free sourcing assessment and quote
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary-blue/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary-blue flex-shrink-0 mt-0.5">3</span>
                      We begin supplier research and matching
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-primary-blue/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary-blue flex-shrink-0 mt-0.5">4</span>
                      You receive supplier recommendations with full audit reports
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}