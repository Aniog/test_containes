import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (800) 555-0199', href: 'tel:+18005550199' },
  { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com', href: 'mailto:info@artitectmachinery.com' },
  { icon: MapPin, label: 'Address', value: '1200 Industrial Parkway, Cleveland, OH 44135', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 8:00 AM - 6:00 PM EST', href: null },
]

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-sans font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-brand-950">
            Request a Quote or Demo
          </h2>
          <p className="mt-5 text-brand-500 text-lg leading-relaxed">
            Our team of experts is ready to help you find the perfect metal folding solution 
            for your specific requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon
              const Wrapper = item.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={item.label}
                  {...(item.href ? { href: item.href } : {})}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-brand-950 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-accent-600 transition-colors">
                    <Icon size={20} className="text-accent-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-brand-400 text-xs font-semibold uppercase tracking-wider">{item.label}</p>
                    <p className="text-brand-900 font-medium mt-0.5">{item.value}</p>
                  </div>
                </Wrapper>
              )
            })}

            <div className="mt-4 p-6 bg-brand-950 rounded-sm text-brand-300 text-sm">
              <p className="font-display text-white font-semibold text-lg mb-2">Enterprise Inquiries</p>
              <p className="leading-relaxed">
                For bulk orders, custom configurations, or OEM partnerships, 
                please contact our enterprise sales team directly.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white p-8 rounded-sm shadow-lg shadow-brand-200/30 border border-brand-100">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-700 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brand-200 rounded-sm text-brand-900 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors bg-white placeholder:text-brand-300"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brand-200 rounded-sm text-brand-900 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors bg-white placeholder:text-brand-300"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-700 mb-1.5">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-200 rounded-sm text-brand-900 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors bg-white placeholder:text-brand-300"
                  placeholder="Your Company Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-200 rounded-sm text-brand-900 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors bg-white placeholder:text-brand-300"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="product" className="block text-sm font-medium text-brand-700 mb-1.5">Product of Interest</label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-200 rounded-sm text-brand-900 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors bg-white"
                >
                  <option value="">Select a product...</option>
                  <option value="double-folding-machine">Double Folding Machine (DF-Series)</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder (SF-Series)</option>
                  <option value="metal-folding-machine">Metal Folding Machine (MF-Series)</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-brand-700 mb-1.5">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-brand-200 rounded-sm text-brand-900 text-sm focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors resize-none bg-white placeholder:text-brand-300"
                  placeholder="Tell us about your requirements..."
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white font-semibold rounded-sm transition-all hover:shadow-lg hover:shadow-accent-500/25 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send size={16} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm font-medium">
                  Thank you! We will get back to you within 24 hours.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
