import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (555) 234-5678', href: 'tel:+15552345678' },
  { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com', href: 'mailto:info@artitectmachinery.com' },
  { icon: MapPin, label: 'Address', value: '123 Industrial Parkway, Suite 400, Manufacturing District, NY 10001' },
  { icon: Clock, label: 'Business Hours', value: 'Mon–Fri: 8:00 AM – 6:00 PM EST' },
]

export default function Contact() {
  const containerRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '', product: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', company: '', phone: '', message: '', product: '' })
  }

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to upgrade your metal folding capabilities? Our team is here to help.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                How to Reach Us
              </h2>
              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a href={item.href} className="text-text-primary hover:text-accent transition-colors font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-text-primary font-medium">{item.value}</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                <div
                  data-strk-bg-id="contact-bg-7i0k1l"
                  data-strk-bg="[contact-subtitle] [contact-title]"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="600"
                  className="w-full h-full"
                />
                <div className="hidden" id="contact-title">Industrial manufacturing support team</div>
                <div className="hidden" id="contact-subtitle">Customer service engineering consultation</div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">Thank You!</h3>
                    <p className="text-text-secondary mb-6">
                      Your inquiry has been received. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-text-primary mb-2">
                      Request a Quote
                    </h2>
                    <p className="text-text-secondary text-sm mb-8">
                      Fill out the form below and we'll get back to you with detailed specifications and pricing.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors bg-white text-text-primary"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors bg-white text-text-primary"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
                            Company
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors bg-white text-text-primary"
                            placeholder="Your Company Ltd."
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors bg-white text-text-primary"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-text-primary mb-1.5">
                          Product of Interest
                        </label>
                        <select
                          id="product"
                          name="product"
                          value={form.product}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors bg-white text-text-primary"
                        >
                          <option value="">Select a product</option>
                          <option value="Double Folding Machine">Double Folding Machine (DFM-3000)</option>
                          <option value="Double Folder">Double Folder (DF-2000)</option>
                          <option value="Sheet Metal Folder">Sheet Metal Folder (SMF-1500)</option>
                          <option value="Sheet Metal Folding Machine">Sheet Metal Folding Machine (SMF-PRO)</option>
                          <option value="Metal Folder">Metal Folder (MF-1000)</option>
                          <option value="Metal Folder Machine">Metal Folder Machine (MFM-HEAVY)</option>
                          <option value="Metal Folding Machine">Metal Folding Machine (MFM-ELITE)</option>
                          <option value="Other">Other / Not Sure</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none bg-white text-text-primary"
                          placeholder="Tell us about your requirements, material types, production volume, etc."
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-dark transition-colors duration-200"
                      >
                        <Send className="w-4 h-4" />
                        Send Inquiry
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}