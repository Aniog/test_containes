import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    setFormData({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#C8A45C' }}>
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: '#0F1B2D' }}>
            Let's Discuss Your Project
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Ready to upgrade your production line? Get in touch for a
            personalized quote or technical consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: '#0F1B2D' }}>
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-amber-400 transition-colors text-sm"
                    style={{ backgroundColor: '#FAF8F5' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: '#0F1B2D' }}>
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-amber-400 transition-colors text-sm"
                    style={{ backgroundColor: '#FAF8F5' }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1.5" style={{ color: '#0F1B2D' }}>
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-amber-400 transition-colors text-sm"
                  style={{ backgroundColor: '#FAF8F5' }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: '#0F1B2D' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-amber-400 transition-colors text-sm resize-none"
                  style={{ backgroundColor: '#FAF8F5' }}
                />
              </div>
              <button
                type="submit"
                className="font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm flex items-center gap-2"
                style={{ backgroundColor: '#C8A45C', color: '#0F1B2D' }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-sm font-medium">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-xl p-6 border border-gray-100" style={{ backgroundColor: '#FAF8F5' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(200, 164, 92, 0.1)' }}>
                  <Mail className="w-5 h-5" style={{ color: '#C8A45C' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: '#0F1B2D' }}>Email</h4>
                  <p className="text-gray-600 text-sm">sales@artitectmachinery.com</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-6 border border-gray-100" style={{ backgroundColor: '#FAF8F5' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(200, 164, 92, 0.1)' }}>
                  <Phone className="w-5 h-5" style={{ color: '#C8A45C' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: '#0F1B2D' }}>Phone</h4>
                  <p className="text-gray-600 text-sm">+1 (555) 234-5678</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-6 border border-gray-100" style={{ backgroundColor: '#FAF8F5' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(200, 164, 92, 0.1)' }}>
                  <MapPin className="w-5 h-5" style={{ color: '#C8A45C' }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: '#0F1B2D' }}>Location</h4>
                  <p className="text-gray-600 text-sm">
                    1200 Industrial Parkway<br />
                    Suite 400, Chicago, IL 60607
                  </p>
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
