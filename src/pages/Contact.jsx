import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    console.log('Form submitted:', form)
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com', href: 'mailto:info@artitectmachinery.com' },
    { icon: MapPin, label: 'Address', value: '450 Industrial Parkway, Chicago, IL 60607' },
    { icon: Clock, label: 'Business Hours', value: 'Mon – Fri: 8:00 AM – 6:00 PM' },
  ]

  return (
    <>
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Get in Touch
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold text-warm-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-text-on-dark/70 max-w-2xl mx-auto">
            Have a question about our sheet metal folding machines? We&apos;re here to
            help. Reach out and our team will get back to you promptly.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy tracking-tight">
                  Let&apos;s Talk
                </h2>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Whether you need a quote, want to discuss your requirements, or
                  have a technical question — we&apos;re ready to assist.
                </p>
              </div>

              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-navy font-medium hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-navy font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-12 h-12 text-gold mb-4" />
                    <h3 className="text-xl font-semibold text-navy">Thank You!</h3>
                    <p className="mt-2 text-text-secondary max-w-md">
                      Your message has been received. Our team will get back to
                      you within 1-2 business days.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setForm({ name: '', email: '', company: '', phone: '', message: '' })
                      }}
                      className="mt-6 px-5 py-2.5 text-sm font-medium rounded-lg border border-stone-200 text-text-secondary hover:bg-stone-200/50 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                          placeholder="Acme Manufacturing"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none"
                        placeholder="Tell us about your requirements, the materials you work with, and the machines you're interested in..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-navy text-warm-white hover:bg-navy/90 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}