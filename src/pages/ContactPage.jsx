import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react'
import { site } from '@/data/site-data'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  if (submitted) {
    return (
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle2 className="w-20 h-20 text-success mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Thank You!</h1>
          <p className="text-secondary-text text-lg mb-8">
            We&apos;ve received your inquiry and will get back to you within 24 hours.
            Our team typically responds within the same business day.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', message: '' }) }}
            className="bg-primary-light hover:bg-primary text-white font-semibold rounded-lg px-8 py-3 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/95 to-primary/80 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Ready to start your sourcing project? Get in touch for a free consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl border border-border p-6">
                <h2 className="text-lg font-semibold text-text-primary mb-4">Our Office</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-light mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Address</p>
                      <p className="text-sm text-secondary-text">{site.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-light mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Phone</p>
                      <a href={`tel:${site.phone}`} className="text-sm text-primary-light hover:text-primary transition-colors">
                        {site.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-light mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Email</p>
                      <a href={`mailto:${site.email}`} className="text-sm text-primary-light hover:text-primary transition-colors">
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-light mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Response Time</p>
                      <p className="text-sm text-secondary-text">Within 24 hours (usually same day)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-muted-bg rounded-xl border border-border p-6">
                <h3 className="font-semibold text-text-primary mb-3">Why Work With Us?</h3>
                <ul className="space-y-2">
                  {[
                    'Free initial consultation',
                    'Transparent pricing',
                    'Dedicated account manager',
                    'Bilingual team (EN/CN)',
                    'Proven track record',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-primary">
                      <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-border p-6 md:p-8">
                <h2 className="text-xl font-semibold text-text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-secondary-text mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-border rounded-lg px-4 py-3 text-text-primary focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-border rounded-lg px-4 py-3 text-text-primary focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full border border-border rounded-lg px-4 py-3 text-text-primary focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-border rounded-lg px-4 py-3 text-text-primary focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">Tell Us About Your Needs *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-border rounded-lg px-4 py-3 text-text-primary focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none resize-none"
                      placeholder="Describe the products, quantities, budget, and any specific requirements you have..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary-light hover:bg-primary text-white font-semibold rounded-lg px-6 py-3.5 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}