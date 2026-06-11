import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['123 Industrial Avenue', 'Manufacturing District', 'City, State 12345'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+1 (234) 567-890', '+1 (234) 567-891'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@artitect.com', 'sales@artitect.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!formData.name.trim()) {
      setError('Name is required')
      return
    }
    if (!formData.email.trim()) {
      setError('Email is required')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please provide a valid email')
      return
    }
    if (!formData.message.trim()) {
      setError('Message is required')
      return
    }

    setStatus('submitting')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setStatus('success')
    setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' })
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="section-title mb-4">Contact Us</h1>
            <p className="section-subtitle">
              Get in touch with our team for quotes, technical support, or general inquiries.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-xl font-bold uppercase tracking-wide text-slate-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <info.icon size={20} className="text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-1">
                          {info.title}
                        </h3>
                        {info.lines.map((line, i) => (
                          <p key={i} className="text-slate-600 text-sm">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold uppercase tracking-wide text-slate-900 mb-6">
                  Send Us a Message
                </h2>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-900 mb-2">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-green-700 text-sm">
                          Thank you for contacting us. Our team will get back to you within 24 hours.
                        </p>
                        <button
                          onClick={() => setStatus('idle')}
                          className="mt-4 text-green-700 hover:text-green-800 text-sm font-semibold underline"
                        >
                          Send another message
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" aria-busy={status === 'submitting'}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors text-slate-900"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors text-slate-900"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors text-slate-900"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors text-slate-900"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                        Product of Interest
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors text-slate-900 bg-white"
                      >
                        <option value="">Select a product...</option>
                        <option value="double-folding-machine">Double Folding Machine</option>
                        <option value="double-folder">Double Folder</option>
                        <option value="sheet-metal-folder">Sheet Metal Folder</option>
                        <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                        <option value="metal-folder">Metal Folder</option>
                        <option value="metal-folder-machine">Metal Folder Machine</option>
                        <option value="metal-folding-machine">Metal Folding Machine</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors text-slate-900 resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    {error && (
                      <p className="text-red-600 text-sm" role="alert">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
