import { useState } from 'react'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    machine: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setValues({ name: '', email: '', company: '', phone: '', machine: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-steel-50 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #1b1b2f 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-18">
          <span className="inline-block text-accent-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-950 mb-5">
            Request a <span className="text-accent-600">Quote</span>
          </h2>
          <p className="text-steel-500 text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your requirements and our team will get back to you
            with a tailored solution within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-brand-900/5 border border-brand-100">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-800 mb-2">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={values.name}
                    onChange={onChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl bg-brand-50 border border-brand-200 text-brand-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-800 mb-2">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={onChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-brand-50 border border-brand-200 text-brand-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-brand-800 mb-2">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-xl bg-brand-50 border border-brand-200 text-brand-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-brand-800 mb-2">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-brand-50 border border-brand-200 text-brand-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="machine" className="block text-sm font-semibold text-brand-800 mb-2">Machine Interest</label>
                <select
                  id="machine"
                  name="machine"
                  value={values.machine}
                  onChange={onChange}
                  className="w-full px-4 py-3 rounded-xl bg-brand-50 border border-brand-200 text-brand-900 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all appearance-none"
                >
                  <option value="">Select a product...</option>
                  <option value="double-folder-pro">Double Folder Pro</option>
                  <option value="sheet-metal-folder-x1">Sheet Metal Folder X1</option>
                  <option value="metal-folder-compact">Metal Folder Compact</option>
                  <option value="metal-folding-machine-elite">Metal Folding Machine Elite</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-brand-800 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={values.message}
                  onChange={onChange}
                  placeholder="Tell us about your material type, thickness, production volume..."
                  className="w-full px-4 py-3 rounded-xl bg-brand-50 border border-brand-200 text-brand-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/25"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                <Send size={18} />
              </button>

              {status === 'success' && (
                <div className="mt-5 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm font-medium">
                  Thank you! We have received your inquiry and will get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-brand-900/5 border border-brand-100">
              <h3 className="text-lg font-bold text-brand-950 mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-800 mb-0.5">Headquarters</div>
                    <div className="text-sm text-steel-500">1200 Industrial Parkway<br />Suite 400, Cleveland, OH 44135</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-accent-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-800 mb-0.5">Phone</div>
                    <div className="text-sm text-steel-500">+1 (216) 555-0192</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-accent-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-800 mb-0.5">Email</div>
                    <div className="text-sm text-steel-500">sales@artitectmachinery.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-brand-950 rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-steel-400">Mon — Fri</span>
                  <span className="text-white font-medium">8:00 AM — 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-steel-400">Saturday</span>
                  <span className="text-white font-medium">9:00 AM — 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-steel-400">Sunday</span>
                  <span className="text-steel-500">Closed</span>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-steel-300 text-sm">Emergency support available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
