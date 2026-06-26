import React from 'react'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.')
      return
    }

    setStatus('submitting')

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1
            id="contact-title"
            className="text-4xl md:text-5xl font-bold text-primary mb-4 font-display"
          >
            Contact Us
          </h1>
          <p
            id="contact-subtitle"
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Have questions about our sheet metal folding machines? Need a
            customized solution? Our team is here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-light p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-primary mb-6 font-display">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 8am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-gray-600">info@architectmachinery.com</p>
                    <p className="text-sm text-gray-500">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                    <p className="text-gray-600">123 Industrial Blvd</p>
                    <p className="text-gray-600">
                      Manufacturing City, MC 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gray-300 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-600">Map Location</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-6 font-display">
                Send Us a Message
              </h2>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                  <div className="text-green-600 mb-4">
                    <Check size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. Our team will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="request-quote">Request a Quote</option>
                      <option value="technical-support">
                        Technical Support
                      </option>
                      <option value="parts-service">Parts & Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
