import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text tracking-tight mb-4">
            Request a Quote
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ready to upgrade your production line? Contact us for pricing, specifications, or a personalized consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors w-full sm:w-auto cursor-pointer border-none"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
              {submitted && (
                <p className="text-green-600 font-medium text-sm mt-2">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Email Us</h4>
                  <p className="text-text-secondary text-sm">sales@artitectmachinery.com</p>
                  <p className="text-text-secondary text-sm">support@artitectmachinery.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Call Us</h4>
                  <p className="text-text-secondary text-sm">+1 (800) 555-0199</p>
                  <p className="text-text-secondary text-sm">Mon–Fri, 8AM–6PM EST</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Visit Us</h4>
                  <p className="text-text-secondary text-sm">1200 Industrial Parkway</p>
                  <p className="text-text-secondary text-sm">Cleveland, OH 44135, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
