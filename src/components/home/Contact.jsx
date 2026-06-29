import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Contact Us
          </h2>
          <div className="mt-4 w-16 h-1 bg-brand-gold mx-auto" />
          <p className="mt-6 text-brand-muted text-lg max-w-2xl mx-auto">
            Ready to find the perfect folding solution? Our team of experts is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark">Phone</h3>
                <p className="text-brand-muted text-sm mt-1">+86 555 1234 5678</p>
                <p className="text-brand-muted text-sm">Mon–Fri, 8:00–18:00 CST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark">Email</h3>
                <p className="text-brand-muted text-sm mt-1">sales@artitectmachinery.com</p>
                <p className="text-brand-muted text-sm">info@artitectmachinery.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark">Address</h3>
                <p className="text-brand-muted text-sm mt-1">
                  Industrial Zone, Ma'anshan<br />
                  Anhui Province, China 243000
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white border border-brand-border rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Thank You!</h3>
                <p className="text-brand-muted mt-2">
                  Your message has been received. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', phone: '', company: '', message: '' })
                  }}
                  className="mt-6 text-brand-gold hover:text-brand-gold-dark font-semibold text-sm transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-brand-border rounded-lg p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-colors bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-colors bg-white"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-colors bg-white"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-dark mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-colors bg-white"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-colors resize-none bg-white"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-semibold py-3.5 rounded-full transition-colors duration-200 text-base"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
