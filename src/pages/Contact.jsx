import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/button'

const contactDetails = [
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com', href: 'mailto:info@artitectmachinery.com' },
  { icon: MapPin, label: 'Address', value: '1234 Industrial Way, Suite 100, Chicago, IL 60607', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 8:00 AM – 6:00 PM CST', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', company: '', message: '' })
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Ready to discuss your sheet metal folding needs? Our team is here to help with product selection, custom configurations, pricing, and technical support.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-6">Reach Our Team</h2>
              <div className="space-y-6">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-text-light mb-1">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm text-primary hover:text-accent transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-primary">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-white rounded-xl border border-border">
                <h3 className="text-sm font-semibold text-primary mb-2">Need Urgent Support?</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  For emergency technical support or spare parts, call our 24/7 hotline at{' '}
                  <span className="font-semibold text-accent">+1 (555) 999-8877</span>.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-border p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                    <p className="text-text-secondary mb-6">
                      Your inquiry has been received. A member of our team will get back to you within 24 hours.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h2>
                    <p className="text-sm text-text-secondary mb-8">
                      Fill out the form below and we will respond within one business day.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-primary mb-1.5">
                            Company
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                            placeholder="Your Company Inc."
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-border text-sm text-primary placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                          placeholder="Tell us about your application, material types, volume requirements, and any specific questions..."
                        />
                      </div>
                      <Button type="submit" variant="accent" size="md" className="w-full md:w-auto">
                        <Send className="w-4 h-4 mr-2" />
                        Send Inquiry
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}