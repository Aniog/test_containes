import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="py-16 md:py-20 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-navy mb-4">
              Thank You for Your Inquiry
            </h2>
            <p className="text-text-muted text-lg mb-8">
              Our team will review your requirements and get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setFormState({ name: '', email: '', company: '', phone: '', message: '' })
              }}
              className="px-6 py-3 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-navy-light transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs tracking-[0.15em] uppercase font-semibold rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Request a Quote
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted text-base md:text-lg">
            Tell us about your metal folding needs, and our team will recommend the
            right machine for your operation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-brand-navy mb-4">
                Contact Information
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Reach out by phone, email, or fill out the form. We typically respond
                within one business day.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-navy">Phone</div>
                  <a href="tel:+15551234567" className="text-sm text-text-muted hover:text-brand-gold transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-navy">Email</div>
                  <a href="mailto:sales@artitectmachinery.com" className="text-sm text-text-muted hover:text-brand-gold transition-colors">
                    sales@artitectmachinery.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-navy">Headquarters</div>
                  <p className="text-sm text-text-muted">
                    1200 Industrial Blvd, Suite 200<br />
                    Chicago, IL 60607, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-semibold text-brand-navy mb-2">Service Hours</h4>
              <p className="text-xs text-text-muted">
                Monday - Friday: 8:00 AM - 6:00 PM CST<br />
                Saturday: 9:00 AM - 1:00 PM CST
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-surface-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-navy mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  placeholder="Your Company, Inc."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1.5">
                Tell Us About Your Needs <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                placeholder="What type of machine are you looking for? What materials and thicknesses do you work with? Any specific requirements we should know about?"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-navy-light transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Inquiry
            </button>

            <p className="text-xs text-text-muted text-center">
              By submitting this form, you agree to our privacy policy. Your information
              will not be shared with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}