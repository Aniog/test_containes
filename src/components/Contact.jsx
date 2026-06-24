import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', company: '', product: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-6">
            Request a Quote
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Tell us about your project and our team will recommend the perfect
            folding solution for your production needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">Phone</h3>
                <p className="text-text-muted">+1 (555) 234-5678</p>
                <p className="text-text-muted">+1 (555) 234-5679</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">Email</h3>
                <p className="text-text-muted">sales@artitectmachinery.com</p>
                <p className="text-text-muted">support@artitectmachinery.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">Headquarters</h3>
                <p className="text-text-muted">
                  1200 Industrial Parkway, Suite 400
                </p>
                <p className="text-text-muted">Cleveland, OH 44114, USA</p>
              </div>
            </div>

            <div className="bg-navy rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Business Hours</h3>
              <div className="space-y-1 text-sm text-white/80">
                <p>Monday — Friday: 8:00 AM – 6:00 PM EST</p>
                <p>Saturday: 9:00 AM – 2:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-lg border border-border-light p-12 text-center">
                <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-navy mb-3">
                  Message Sent!
                </h3>
                <p className="text-text-muted">
                  Thank you for reaching out. Our team will contact you within
                  24 business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg border border-border-light p-8 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border-light bg-cream text-navy placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border-light bg-cream text-navy placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border-light bg-cream text-navy placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      placeholder="Acme Fabrication"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="product"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Product Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-border-light bg-cream text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                    >
                      <option value="">Select a product</option>
                      <option value="double-folding-machine">
                        Double Folding Machine
                      </option>
                      <option value="double-folder">Double Folder</option>
                      <option value="sheet-metal-folder">
                        Sheet Metal Folder
                      </option>
                      <option value="sheet-metal-folding-machine">
                        Sheet Metal Folding Machine
                      </option>
                      <option value="metal-folder">Metal Folder</option>
                      <option value="metal-folder-machine">
                        Metal Folder Machine
                      </option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-border-light bg-cream text-navy placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                    placeholder="Tell us about your project, material types, and production volume..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded text-base font-bold hover:bg-gold-dark transition-colors"
                >
                  <Send className="w-5 h-5" />
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
