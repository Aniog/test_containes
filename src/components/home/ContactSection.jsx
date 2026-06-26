import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitectmachinery.com',
    href: 'mailto:info@artitectmachinery.com',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Industriestrasse 42, 70565 Stuttgart, Germany',
    href: null,
  },
]

export default function ContactSection() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setSubmitted(true)
    setFormState({ name: '', email: '', phone: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold text-sm tracking-widest uppercase">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6">
            Let's Discuss Your Next Machine
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Tell us about your requirements and our team will prepare a customized solution with pricing and lead times.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted font-medium uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-text-primary font-semibold hover:text-brand-dark transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text-primary font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-brand-dark rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Need urgent assistance?</h3>
              <p className="text-white/70 text-sm mb-4">
                Our support team is available 24/7 for emergency service and technical support.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-light text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-xl p-8 md:p-10 border border-border-subtle text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">Thank You!</h3>
                <p className="text-text-secondary mb-6">
                  Your inquiry has been received. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-dark hover:bg-brand-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 md:p-10 border border-border-subtle">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-text-primary mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-lg border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, machine specifications, material types, production volume..."
                    className="w-full px-4 py-3 rounded-lg border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-brand-dark hover:bg-brand-light text-white py-4 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
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