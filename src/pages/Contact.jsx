import React from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: '',
    message: ''
  })
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please provide a valid email'
    if (!formData.message.trim()) return 'Message is required'
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        productInterest: '',
        message: ''
      })
    } catch (err) {
      setError('Failed to send message. Please try again.')
      setStatus('error')
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      detail: '+1 (234) 567-890',
      subDetail: 'Mon-Fri 8am-6pm EST'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      detail: 'info@artitectmachinery.com',
      subDetail: 'We respond within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      detail: 'Industrial District',
      subDetail: 'Manufacturing Hub, USA'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      detail: 'Mon - Fri: 8:00 - 18:00',
      subDetail: 'Sat: 9:00 - 14:00'
    }
  ]

  const products = [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
    'Other / Not Sure'
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Ready to discuss your sheet metal folding needs? Our team of experts is here to help you 
              find the perfect solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                Have questions about our products or need a custom solution? We're here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{info.title}</h3>
                      <p className="text-slate-700">{info.detail}</p>
                      <p className="text-sm text-slate-500">{info.subDetail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="mt-10 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Quick Response</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Need immediate assistance? Call us directly for urgent inquiries.
                </p>
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-amber-600" />
                  <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
                </div>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">Thank you for your message!</p>
                    <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productInterest" className="block text-sm font-medium text-slate-700 mb-2">
                      Product Interest
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a product...</option>
                      {products.map((product, index) => (
                        <option key={index} value={product}>{product}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                      placeholder="Tell us about your project requirements, specifications, or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Facility</h2>
            <p className="text-slate-600">
              Schedule a visit to see our machines in action and meet our team.
            </p>
          </div>

          <div className="bg-slate-100 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Interactive Map</p>
              <p className="text-slate-500 text-sm">Industrial District, Manufacturing Hub, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is the lead time for a new machine?',
                a: 'Standard machines typically ship within 4-6 weeks. Custom configurations may require 8-12 weeks. We provide detailed timelines during the quoting process.'
              },
              {
                q: 'Do you offer installation and training?',
                a: 'Yes, we provide comprehensive installation, operator training, and ongoing technical support. Our team ensures your team is fully prepared to maximize machine performance.'
              },
              {
                q: 'What warranty do you offer?',
                a: 'All machines come with a standard 2-year warranty. Extended warranty options up to 5 years are available. We also offer comprehensive maintenance packages.'
              },
              {
                q: 'Can you customize machines for specific requirements?',
                a: 'Absolutely. We specialize in custom solutions and can modify our standard machines or design completely new configurations to meet your specific production needs.'
              },
              {
                q: 'Do you ship internationally?',
                a: 'Yes, we ship to over 50 countries worldwide. We handle all logistics, customs documentation, and provide installation support at your location.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact