import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-brand-accent" />
            <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
              Get in Touch
            </span>
            <div className="h-px w-8 bg-brand-accent" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark-text tracking-tight">
            Request a Quote
          </h2>
          <p className="mt-4 text-brand-gray text-lg max-w-2xl mx-auto">
            Tell us about your project requirements and our team will provide a tailored solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark-text mb-2">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-brand-dark-text placeholder-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark-text mb-2">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-brand-dark-text placeholder-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-colors text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-dark-text mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-brand-dark-text placeholder-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark-text mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your requirements, material types, production volume..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-brand-dark-text placeholder-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-navy font-semibold px-7 py-3.5 rounded-lg text-base hover:bg-amber-400 transition-colors duration-200 disabled:opacity-60 border-0"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-sm font-medium mt-2">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-brand-light rounded-xl p-8 h-full">
              <h3 className="text-lg font-bold text-brand-dark-text mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-brand-dark-text">Email</div>
                    <div className="text-sm text-brand-gray mt-1">info@artitectmachinery.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-brand-dark-text">Phone</div>
                    <div className="text-sm text-brand-gray mt-1">+1 (800) 555-0199</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-brand-dark-text">Location</div>
                    <div className="text-sm text-brand-gray mt-1">
                      1200 Industrial Parkway<br />
                      Suite 400, Detroit, MI 48201
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-bold text-brand-dark-text mb-3">Business Hours</h4>
                <div className="space-y-2 text-sm text-brand-gray">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="text-brand-dark-text font-medium">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-brand-dark-text font-medium">9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-brand-dark-text font-medium">Closed</span>
                  </div>
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
