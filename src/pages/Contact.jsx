import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (800) 555-1234', '+1 (713) 555-5678'],
    link: 'tel:+18005551234',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@artitectmachinery.com', 'sales@artitectmachinery.com'],
    link: 'mailto:info@artitectmachinery.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['1250 Industrial Parkway, Suite 200', 'Houston, TX 77015, USA'],
    link: null,
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Mon - Fri: 8:00 AM - 6:00 PM CST', 'Sat: 9:00 AM - 1:00 PM CST'],
    link: null,
  },
]

const inquiryTypes = [
  'General Inquiry',
  'Product Information',
  'Quote Request',
  'Technical Support',
  'Spare Parts',
  'Training & Installation',
  'Partnership Opportunities',
]

export default function Contact() {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative pt-20 bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          data-strk-bg-id="contact-hero-bg-4e7a1b"
          data-strk-bg="[contact-hero-title] industrial office meeting business"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
              Get in Touch
            </span>
            <h1 id="contact-hero-title" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Let's Discuss Your{' '}
              <span className="text-brand-gold italic">Project</span>
            </h1>
            <p className="font-body text-lg text-white/70 leading-relaxed">
              Whether you need a quote, technical specifications, or expert advice on the right 
              sheet metal folding machine for your application, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-brand-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 -mt-20 relative z-20">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              const Wrapper = info.link ? 'a' : 'div'
              return (
                <Wrapper
                  key={i}
                  {...(info.link ? { href: info.link } : {})}
                  className="bg-white rounded-xl p-6 border border-brand-warm-gray hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-brand-dark mb-2 uppercase tracking-wider">
                    {info.title}
                  </h3>
                  {info.details.map((d, j) => (
                    <p key={j} className="font-body text-sm text-gray-500">{d}</p>
                  ))}
                </Wrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="bg-brand-cream pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl border border-brand-warm-gray p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-dark mb-3">
                    Message Sent Successfully
                  </h3>
                  <p className="font-body text-gray-500 mb-6 max-w-sm">
                    Thank you for reaching out. Our team will review your inquiry and get back to 
                    you within 1 business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', phone: '', company: '', inquiryType: '', message: '' })
                    }}
                    className="font-body text-sm text-brand-gold font-semibold uppercase tracking-wider hover:text-brand-gold-hover transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold text-brand-dark mb-2">
                    Send Us a Message
                  </h2>
                  <p className="font-body text-sm text-gray-500 mb-8">
                    Fill out the form below and we'll get back to you promptly.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={`w-full px-4 py-3 bg-brand-cream/50 border rounded-lg font-body text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors ${
                            errors.name ? 'border-red-400' : 'border-brand-warm-gray'
                          }`}
                        />
                        {errors.name && <p className="font-body text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block font-body text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`w-full px-4 py-3 bg-brand-cream/50 border rounded-lg font-body text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors ${
                            errors.email ? 'border-red-400' : 'border-brand-warm-gray'
                          }`}
                        />
                        {errors.email && <p className="font-body text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone & Company Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 bg-brand-cream/50 border border-brand-warm-gray rounded-lg font-body text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Name"
                          className="w-full px-4 py-3 bg-brand-cream/50 border border-brand-warm-gray rounded-lg font-body text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block font-body text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-brand-cream/50 border rounded-lg font-body text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors appearance-none ${
                          !formData.inquiryType ? 'text-gray-400' : ''
                        } ${errors.inquiryType ? 'border-red-400' : 'border-brand-warm-gray'}`}
                      >
                        <option value="">Select an inquiry type</option>
                        {inquiryTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.inquiryType && <p className="font-body text-xs text-red-500 mt-1">{errors.inquiryType}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-body text-xs font-semibold text-brand-dark uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us about your project requirements, materials, expected volume, or any questions you have..."
                        className={`w-full px-4 py-3 bg-brand-cream/50 border rounded-lg font-body text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors resize-none ${
                          errors.message ? 'border-red-400' : 'border-brand-warm-gray'
                        }`}
                      />
                      {errors.message && <p className="font-body text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/20"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Map / Additional Info */}
            <div className="space-y-6">
              {/* Map placeholder */}
              <div className="bg-brand-dark rounded-2xl overflow-hidden aspect-[4/3] relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-strk-bg-id="contact-map-bg-2c8f3d"
                  data-strk-bg="[contact-hero-title] industrial area aerial city map"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                    <p className="font-display text-lg font-bold text-white">Houston, Texas</p>
                    <p className="font-body text-sm text-white/60">1250 Industrial Parkway, Suite 200</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-brand-navy rounded-2xl p-8 border border-white/10">
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="font-body text-sm text-white/60 mb-6 leading-relaxed">
                  For urgent technical support or sales inquiries, reach out directly to our team. 
                  We're available during business hours and respond to emergency requests 24/7.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+18005551234"
                    className="flex items-center gap-3 bg-brand-dark/50 rounded-xl p-4 hover:bg-brand-dark/80 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-white/50 uppercase tracking-wider">Sales Hotline</p>
                      <p className="font-body text-sm font-semibold text-white group-hover:text-brand-gold transition-colors">
                        +1 (800) 555-1234
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:sales@artitectmachinery.com"
                    className="flex items-center gap-3 bg-brand-dark/50 rounded-xl p-4 hover:bg-brand-dark/80 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-white/50 uppercase tracking-wider">Email</p>
                      <p className="font-body text-sm font-semibold text-white group-hover:text-brand-gold transition-colors">
                        sales@artitectmachinery.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
