import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 555-1234',
    link: 'tel:+18005551234',
    description: 'Mon-Fri, 8AM-6PM EST',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitectmachinery.com',
    link: 'mailto:info@artitectmachinery.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '1200 Industrial Parkway',
    link: null,
    description: 'Cleveland, OH 44135, USA',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday - Friday',
    link: null,
    description: '8:00 AM - 6:00 PM EST',
  },
]

const inquiryTypes = [
  'General Inquiry',
  'Product Information',
  'Request a Quote',
  'Technical Support',
  'Spare Parts',
  'Service & Maintenance',
  'Training Programs',
  'Partnership Opportunities',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
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
    }, 1500)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-400 text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-6">
            Contact <span className="text-accent-400">Us</span>
          </h1>
          <p className="text-brand-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a question about our machines? Need a custom configuration?
            Our team is ready to help you find the perfect solution.
          </p>
        </div>
      </section>

      {/* Contact cards + Form */}
      <section className="py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item) => {
              const Icon = item.icon
              const Wrapper = item.link ? 'a' : 'div'
              return (
                <Wrapper
                  key={item.label}
                  {...(item.link ? { href: item.link } : {})}
                  className="bg-white rounded-2xl p-6 border border-steel-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300 group block"
                >
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-steel-400 uppercase tracking-wider mb-1">{item.label}</h3>
                  <p className="text-steel-900 font-bold mb-1">{item.value}</p>
                  <p className="text-steel-400 text-sm">{item.description}</p>
                </Wrapper>
              )
            })}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-steel-200 shadow-sm">
                <h2 className="text-2xl font-bold text-steel-900 mb-2">Send Us a Message</h2>
                <p className="text-steel-500 text-sm mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-steel-900 mb-2">Message Sent!</h3>
                    <p className="text-steel-500 mb-6">
                      Thank you for reaching out. Our team will review your message and respond within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setStatus('idle')
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          inquiryType: '',
                          message: '',
                        })
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-steel-700 mb-2">
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
                          className="w-full px-4 py-3 rounded-lg border border-steel-200 bg-white text-steel-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-steel-700 mb-2">
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
                          className="w-full px-4 py-3 rounded-lg border border-steel-200 bg-white text-steel-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-steel-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-lg border border-steel-200 bg-white text-steel-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-steel-700 mb-2">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full px-4 py-3 rounded-lg border border-steel-200 bg-white text-steel-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-semibold text-steel-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-steel-200 bg-white text-steel-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
                      >
                        <option value="">Select an inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-steel-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements, the materials you work with, and any specific needs..."
                        className="w-full px-4 py-3 rounded-lg border border-steel-200 bg-white text-steel-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      variant="accent"
                      className="w-full gap-2"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-steel-200 overflow-hidden shadow-sm">
                <div className="aspect-square bg-steel-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-brand-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-steel-900 mb-2">Visit Our Facility</h3>
                    <p className="text-steel-500 text-sm">
                      1200 Industrial Parkway<br />
                      Cleveland, OH 44135<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 border border-steel-200 shadow-sm">
                <h3 className="text-lg font-bold text-steel-900 mb-6">Frequently Asked</h3>
                <div className="space-y-4">
                  {[
                    { q: 'Do you offer machine demonstrations?', a: 'Yes, we offer in-person demos at our Cleveland facility and virtual demos worldwide.' },
                    { q: 'What is the typical lead time?', a: 'Standard machines ship within 4-6 weeks. Custom configurations may take 8-12 weeks.' },
                    { q: 'Do you provide installation support?', a: 'Yes, all machines include professional installation and operator training at your facility.' },
                  ].map((faq) => (
                    <div key={faq.q} className="border-b border-steel-100 pb-4 last:border-0 last:pb-0">
                      <h4 className="text-sm font-semibold text-steel-900 mb-1">{faq.q}</h4>
                      <p className="text-steel-500 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
