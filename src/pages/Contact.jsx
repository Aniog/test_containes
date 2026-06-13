import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.')
      setStatus('error')
      return
    }

    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.')
      setStatus('error')
      return
    }

    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        productInterest: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Ready to elevate your production? Our team is here to help you find the perfect folding solution. Reach out for a personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                We are here to answer any questions you have about our machinery. Reach out and we will respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-600/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-1">Phone</h3>
                    <p className="text-slate-300 text-sm">+1 (555) 000-0000</p>
                    <p className="text-slate-500 text-xs mt-0.5">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-600/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-1">Email</h3>
                    <p className="text-slate-300 text-sm">info@artitectmachinery.com</p>
                    <p className="text-slate-500 text-xs mt-0.5">sales@artitectmachinery.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-600/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-1">Address</h3>
                    <p className="text-slate-300 text-sm">Industrial District, Manufacturing Zone</p>
                    <p className="text-slate-300 text-sm">Building 12, Sector 4</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-600/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-1">Hours</h3>
                    <p className="text-slate-300 text-sm">Monday - Friday: 9:00 - 18:00</p>
                    <p className="text-slate-300 text-sm">Saturday: 10:00 - 14:00</p>
                    <p className="text-slate-300 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder with image */}
              <div className="mt-10 rounded-xl overflow-hidden border border-slate-700">
                <img
                  data-strk-img-id="contact-map-img"
                  data-strk-img="[contact-loc] [contact-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Location"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Request a Quote
                </h2>
                <p className="text-slate-400 text-sm mb-6">
                  Fill in the form below and our team will get back to you within 24 hours.
                </p>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-emerald-900/30 border border-emerald-700/50 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-emerald-400 font-medium text-sm">Message Sent!</h3>
                      <p className="text-emerald-300/70 text-xs mt-1">
                        Thank you for reaching out. We will be in touch shortly.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && error && (
                  <div className="mb-6 p-4 bg-red-900/30 border border-red-700/50 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-red-400 font-medium text-sm">Oops!</h3>
                      <p className="text-red-300/70 text-xs mt-1">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-1.5">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-600 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-1.5">
                        Email <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-600 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-slate-300 text-sm font-medium mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-600 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-slate-300 text-sm font-medium mb-1.5">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-600 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productInterest" className="block text-slate-300 text-sm font-medium mb-1.5">
                      Product Interest
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 text-sm focus:outline-none focus:border-amber-600 transition-colors appearance-none"
                    >
                      <option value="" className="text-slate-400">Select a product...</option>
                      <option value="double-folding-machine">Double Folding Machine</option>
                      <option value="double-folder">Double Folder</option>
                      <option value="sheet-metal-folder">Sheet Metal Folder</option>
                      <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                      <option value="metal-folder">Metal Folder</option>
                      <option value="metal-folder-machine">Metal Folder Machine</option>
                      <option value="metal-folding-machine">Metal Folding Machine</option>
                      <option value="other">Other / Multiple</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-1.5">
                      Message <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-600 transition-colors resize-none"
                      placeholder="Tell us about your project and requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full px-6 py-3.5 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
