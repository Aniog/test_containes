import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    detail: 'Mon–Fri, 8:00 AM – 6:00 PM EST',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitectmachinery.com',
    detail: 'We respond within 2 hours',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '1200 Industrial Blvd, Suite 400',
    detail: 'Detroit, MI 48226, United States',
  },
  {
    icon: Clock,
    label: 'Service Hotline',
    value: '24/7 Technical Support',
    detail: '+1 (555) 987-6543',
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    machine: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      machine: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-gold text-xs uppercase tracking-[0.2em] font-medium">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mt-3 mb-5">
            Request a Quote or Demo
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-0.5 bg-brand-gold" />
            <span className="w-2 h-2 bg-brand-gold rotate-45" />
            <span className="w-12 h-0.5 bg-brand-gold" />
          </div>
          <p className="text-brand-text-muted text-lg max-w-3xl mx-auto mt-5 leading-relaxed">
            Tell us about your requirements and our team will get back to you
            within 24 hours with a customized solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-navy flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-brand-text-muted font-medium mb-1">
                      {item.label}
                    </h4>
                    <p className="text-brand-navy font-medium">{item.value}</p>
                    <p className="text-sm text-brand-text-muted mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-brand-cream border border-brand-border p-10 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Send className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-brand-navy mb-3">
                  Thank You!
                </h3>
                <p className="text-brand-text-muted mb-6">
                  Your inquiry has been received. Our team will contact you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-brand-navy text-white text-sm uppercase tracking-wider font-medium hover:bg-brand-navy-light transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-brand-navy mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border border-brand-border bg-brand-cream text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors placeholder:text-brand-text-muted/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-brand-navy mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 border border-brand-border bg-brand-cream text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors placeholder:text-brand-text-muted/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-brand-navy mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-3 border border-brand-border bg-brand-cream text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors placeholder:text-brand-text-muted/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-brand-navy mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 border border-brand-border bg-brand-cream text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors placeholder:text-brand-text-muted/50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="machine"
                    className="block text-sm font-medium text-brand-navy mb-1.5"
                  >
                    Machine of Interest
                  </label>
                  <select
                    id="machine"
                    name="machine"
                    value={formData.machine}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-border bg-brand-cream text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors"
                  >
                    <option value="">Select a machine type...</option>
                    <option value="Double Folding Machine">
                      Double Folding Machine
                    </option>
                    <option value="Double Folder Pro Series">
                      Double Folder Pro Series
                    </option>
                    <option value="Sheet Metal Folder SX">
                      Sheet Metal Folder SX
                    </option>
                    <option value="Sheet Metal Folding Center">
                      Sheet Metal Folding Center
                    </option>
                    <option value="Metal Folder HD">Metal Folder HD</option>
                    <option value="Metal Folding Machine MFX">
                      Metal Folding Machine MFX
                    </option>
                    <option value="Other / Custom">Other / Custom</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-navy mb-1.5"
                  >
                    Your Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, required specifications, and any special requirements..."
                    className="w-full px-4 py-3 border border-brand-border bg-brand-cream text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors placeholder:text-brand-text-muted/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-brand-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-brand-gold-light transition-colors duration-200 flex items-center justify-center gap-3"
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