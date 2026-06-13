import { useState } from 'react'
import { useScrollAnimation } from '../lib/useScrollAnimation'
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Industriestrasse 42, 70565 Stuttgart, Germany',
  },
  {
    icon: Phone,
    label: 'Sales Hotline',
    value: '+49 711 555 0200',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitect-machinery.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Fri: 8:00 – 18:00 CET',
  },
]

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
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
    // Simulate submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', interest: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  const inputClasses = "w-full px-4 py-3 bg-white border border-brand-border rounded-lg text-brand-dark text-sm placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/10 transition-all"
  const labelClasses = "block text-sm font-medium text-brand-dark mb-1.5"

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-surface-warm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 ${
            headerVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <p className="text-brand-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Ready to Find Your{' '}
            <span className="text-brand-accent">Perfect Machine</span>?
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Tell us about your requirements and our team will provide a tailored recommendation
            and competitive quote within 24 hours.
          </p>
        </div>

        <div
          ref={formRef}
          className={`grid lg:grid-cols-5 gap-12 lg:gap-16 ${
            formVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-brand-dark rounded-xl p-8 text-brand-surface">
              <h3 className="font-heading text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-brand-surface/50 text-xs uppercase tracking-wider mb-1">{label}</p>
                      <p className="text-brand-surface text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick note */}
            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-6">
              <p className="text-brand-dark text-sm font-medium mb-2">
                Need urgent assistance?
              </p>
              <p className="text-brand-muted text-sm">
                Call our 24/7 technical support line at{' '}
                <span className="text-brand-accent font-semibold">+49 711 555 0299</span>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 lg:p-8 border border-brand-border/50 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className={labelClasses}>Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="company" className={labelClasses}>Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="interest" className={labelClasses}>Product of Interest</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="">Select a product...</option>
                  <option value="double-folder">Double Folder (AF-4000 Series)</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder (SM-2000 Series)</option>
                  <option value="metal-folder-machine">Metal Folder Machine (MF-6000 Series)</option>
                  <option value="metal-folding-machine">Metal Folding Machine (FF-3000 Series)</option>
                  <option value="custom">Custom Configuration</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className={labelClasses}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements — material type, thickness, working length, production volume..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-accent text-brand-dark font-semibold rounded tracking-wide uppercase text-sm hover:bg-brand-accent-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
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
                <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-emerald-800 text-sm font-medium">
                    Thank you! Your inquiry has been received. Our team will respond within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
