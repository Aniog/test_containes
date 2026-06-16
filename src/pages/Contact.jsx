import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 234-5678',
    href: 'tel:+15552345678',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitectmachinery.com',
    href: 'mailto:info@artitectmachinery.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '42 Industrial Park Road, Building 7, Manufacturing District, 50001',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Fri: 8:00 AM – 6:00 PM EST',
    href: '#',
  },
]

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setStatus('submitting')

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.')
      setStatus('error')
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please provide a valid email address.')
      setStatus('error')
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        productInterest: '',
        message: '',
      })
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-brand-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-gold-500 tracking-[0.2em] uppercase mb-3 block">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-brand-300 leading-relaxed">
              Have a question about our products or need a custom quote? Our team is ready to help you find the perfect folding solution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <h2 className="font-serif text-2xl font-semibold text-brand-950 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-brand-50 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-gold-50 transition-colors">
                        <info.icon className="w-4 h-4 text-brand-500 group-hover:text-gold-600 transition-colors" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-0.5">
                          {info.label}
                        </div>
                        <div className="text-sm text-brand-700 group-hover:text-gold-700 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-brand-50 rounded-sm border border-brand-100">
                  <h3 className="font-serif text-lg font-semibold text-brand-900 mb-2">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-sm text-brand-500 mb-4 leading-relaxed">
                    Our sales engineers are available for live consultations. Call us directly for urgent inquiries.
                  </p>
                  <a
                    href="tel:+15552345678"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-900 hover:bg-brand-800 text-white text-sm font-semibold rounded-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-sm border border-brand-100 p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-brand-950 mb-6">
                  Send Us a Message
                </h2>

                {status === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-brand-900 mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-sm text-brand-500 mb-6">
                      Thank you for reaching out. Our team will get back to you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-900 hover:bg-brand-800 text-white text-sm font-semibold rounded-sm transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-brand-700 uppercase tracking-wide mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm border border-brand-200 rounded-sm bg-brand-50/50 focus:bg-white focus:border-gold-400 focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-brand-700 uppercase tracking-wide mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm border border-brand-200 rounded-sm bg-brand-50/50 focus:bg-white focus:border-gold-400 focus:outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-brand-700 uppercase tracking-wide mb-1.5">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm border border-brand-200 rounded-sm bg-brand-50/50 focus:bg-white focus:border-gold-400 focus:outline-none transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-brand-700 uppercase tracking-wide mb-1.5">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm border border-brand-200 rounded-sm bg-brand-50/50 focus:bg-white focus:border-gold-400 focus:outline-none transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="productInterest" className="block text-xs font-semibold text-brand-700 uppercase tracking-wide mb-1.5">
                        Product Interest
                      </label>
                      <select
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm border border-brand-200 rounded-sm bg-brand-50/50 focus:bg-white focus:border-gold-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select a product</option>
                        <option value="double-folding-machine">Double Folding Machine</option>
                        <option value="double-folder">Double Folder</option>
                        <option value="sheet-metal-folder">Sheet Metal Folder</option>
                        <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                        <option value="metal-folder">Metal Folder</option>
                        <option value="metal-folding-machine">Metal Folding Machine</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-brand-700 uppercase tracking-wide mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm border border-brand-200 rounded-sm bg-brand-50/50 focus:bg-white focus:border-gold-400 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project, requirements, or questions..."
                      />
                    </div>

                    {error && (
                      <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-100 rounded-sm">
                        <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-red-700">{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-900 hover:bg-brand-800 disabled:bg-brand-300 text-white font-semibold text-sm rounded-sm transition-colors duration-200"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
