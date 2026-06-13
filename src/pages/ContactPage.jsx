import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (234) 567-890', '+1 (234) 567-891'],
    link: 'tel:+1234567890',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@artitect.com', 'sales@artitect.com'],
    link: 'mailto:info@artitect.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Industrial Boulevard', 'Manufacturing City, MC 12345'],
    link: null,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
    link: null,
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
      setError('Please enter your name')
      return
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      return
    }
    if (!formData.message.trim()) {
      setError('Please enter your message')
      return
    }

    setStatus('submitting')

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' })
    } catch (err) {
      setError('Failed to send message. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0f1f33] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#e8956a] font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="mt-3 text-3xl lg:text-5xl font-bold text-white">
              Let's Discuss Your Project
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Whether you need a quote, technical support, or want to explore custom solutions, 
              our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send Us a Message</h2>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                    <h3 className="mt-4 text-xl font-semibold text-[#1e3a5f]">Message Sent!</h3>
                    <p className="mt-2 text-[#6b7280]">
                      Thank you for contacting us. Our team will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 px-6 py-2 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#2d5a8e] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c87941]/50 focus:border-[#c87941] outline-none transition-colors"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c87941]/50 focus:border-[#c87941] outline-none transition-colors"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#374151] mb-1">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c87941]/50 focus:border-[#c87941] outline-none transition-colors"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#374151] mb-1">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c87941]/50 focus:border-[#c87941] outline-none transition-colors"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-[#374151] mb-1">
                        Product Interest
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c87941]/50 focus:border-[#c87941] outline-none transition-colors bg-white"
                      >
                        <option value="">Select a product...</option>
                        <option value="double-folding-machine">Double Folding Machine</option>
                        <option value="double-folder">Double Folder</option>
                        <option value="sheet-metal-folder">Sheet Metal Folder</option>
                        <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                        <option value="metal-folder">Metal Folder</option>
                        <option value="metal-folder-machine">Metal Folder Machine</option>
                        <option value="metal-folding-machine">Metal Folding Machine</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c87941]/50 focus:border-[#c87941] outline-none transition-colors resize-none"
                        placeholder="Tell us about your requirements, material types, production volume..."
                        required
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#c87941] text-white rounded-lg font-semibold hover:bg-[#a05d2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#1e3a5f]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f]">{info.title}</h3>
                      <div className="mt-1 space-y-0.5">
                        {info.details.map((detail) =>
                          info.link ? (
                            <a
                              key={detail}
                              href={info.link}
                              className="block text-sm text-[#6b7280] hover:text-[#c87941] transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={detail} className="text-sm text-[#6b7280]">
                              {detail}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Quote Card */}
              <div className="bg-[#1e3a5f] rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg">Need a Quick Quote?</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Call our sales team directly for immediate assistance with pricing and availability.
                </p>
                <a
                  href="tel:+1234567890"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#c87941] text-white rounded-lg text-sm font-semibold hover:bg-[#a05d2e] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
