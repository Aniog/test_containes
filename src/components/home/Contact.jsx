import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', product: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-dark mt-2 tracking-tight">
            Request a Quote
          </h2>
          <p className="text-neutral-mid mt-4 max-w-2xl mx-auto">
            Tell us about your project and our team will get back to you within 24 hours with a tailored solution.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-neutral-light rounded-xl p-10 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">Thank You!</h3>
                <p className="text-neutral-mid">Your inquiry has been received. Our team will contact you shortly.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', product: '', message: '' }) }}
                  className="mt-6 text-primary font-semibold text-sm hover:text-primary-light transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-neutral-light rounded-xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-1.5">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-neutral-dark placeholder:text-neutral-mid/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark mb-1.5">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-neutral-dark placeholder:text-neutral-mid/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-1.5">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-neutral-dark placeholder:text-neutral-mid/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-neutral-dark mb-1.5">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-neutral-dark placeholder:text-neutral-mid/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="product" className="block text-sm font-semibold text-neutral-dark mb-1.5">Product of Interest</label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-neutral-dark focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm"
                  >
                    <option value="">Select a product</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                    <option value="metal-folder">Metal Folder</option>
                    <option value="metal-folder-machine">Metal Folder Machine</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="other">Other / Custom Solution</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-dark mb-1.5">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-neutral-dark placeholder:text-neutral-mid/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-accent hover:bg-accent-light text-white font-semibold py-3.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary rounded-xl p-8 text-white">
              <h3 className="font-bold text-lg mb-6">Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/60 text-sm block">Phone</span>
                    <span className="font-medium">+1 (800) 555-0199</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/60 text-sm block">Email</span>
                    <span className="font-medium">info@artitectmachinery.com</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/60 text-sm block">Address</span>
                    <span className="font-medium">Industrial Zone, Suite 400<br />Shanghai, China</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-light rounded-xl p-8 border border-border">
              <h3 className="font-bold text-lg text-neutral-dark mb-3">Business Hours</h3>
              <ul className="space-y-2 text-sm text-neutral-mid">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-neutral-dark">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-neutral-dark">9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-neutral-dark">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
