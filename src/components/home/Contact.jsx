import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Ready to Upgrade Your
              <br />
              <span className="text-steel">Metal Forming?</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Whether you need a double folding machine, sheet metal folder, or a complete metal folding solution, our team is ready to help you find the perfect fit for your production needs.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-steel font-bold text-sm">01</span>
                </div>
                <div>
                  <h4 className="text-charcoal font-semibold mb-1">Tell Us Your Needs</h4>
                  <p className="text-muted text-sm">Describe your material types, thickness ranges, and production requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-steel font-bold text-sm">02</span>
                </div>
                <div>
                  <h4 className="text-charcoal font-semibold mb-1">Get Expert Recommendations</h4>
                  <p className="text-muted text-sm">Our engineers will recommend the ideal machine configuration for your application.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-steel font-bold text-sm">03</span>
                </div>
                <div>
                  <h4 className="text-charcoal font-semibold mb-1">Receive Your Quote</h4>
                  <p className="text-muted text-sm">Get a detailed quotation with specifications, delivery timeline, and support options.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream rounded-xl p-6 md:p-8 border border-border">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-2">Thank You!</h3>
                <p className="text-muted">Your inquiry has been received. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-charcoal text-sm font-medium mb-1.5">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-charcoal text-sm font-medium mb-1.5">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel transition-colors text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-charcoal text-sm font-medium mb-1.5">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-charcoal text-sm font-medium mb-1.5">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-charcoal text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your metal folding requirements..."
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-charcoal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-steel hover:bg-steel-light text-white py-3 rounded-lg font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
