import { useState } from 'react'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    machine: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', message: '', machine: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  return (
    <section id="contact" className="bg-surface py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-4">
            Ready to Upgrade Your Production?
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Tell us about your requirements and our team will recommend the right
            machine for your application. We typically respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-surface text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-surface text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1.5">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-surface text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-surface text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="machine" className="block text-sm font-medium text-charcoal mb-1.5">
                  Machine Interest
                </label>
                <select
                  id="machine"
                  name="machine"
                  value={formData.machine}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-surface text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                >
                  <option value="">Select a machine...</option>
                  <option value="df-2000">DF-2000 Pro — Double Folding Machine</option>
                  <option value="df-3200">DF-3200 Elite — Double Folder</option>
                  <option value="sf-1300">SF-1300 Compact — Sheet Metal Folder</option>
                  <option value="mf-2500">MF-2500 Industrial — Metal Folding Machine</option>
                  <option value="custom">Custom / Not Sure Yet</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-surface text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition resize-none"
                  placeholder="Tell us about your project requirements, material types, production volume..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-primary font-bold text-base rounded-lg hover:bg-accent-hover transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm font-medium">
                  Thank you! Your inquiry has been sent. Our team will contact you shortly.
                </div>
              )}
            </form>
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-primary rounded-xl p-6 md:p-8 text-white flex-1">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-steel mb-0.5">Phone</div>
                    <div className="font-semibold">+1 (800) 555-MACH</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-steel mb-0.5">Email</div>
                    <div className="font-semibold">info@artitectmachinery.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-steel mb-0.5">Headquarters</div>
                    <div className="font-semibold">1200 Industrial Parkway<br />Houston, TX 77001</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="font-bold text-charcoal mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-muted">
                  <span>Monday – Friday</span>
                  <span className="font-medium text-charcoal">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Saturday</span>
                  <span className="font-medium text-charcoal">9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Sunday</span>
                  <span className="font-medium text-charcoal">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
