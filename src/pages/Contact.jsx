import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Globe } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.',
  },
  {
    question: 'Do you charge for initial consultations?',
    answer: 'No, initial consultations and quotes are completely free. We only charge after you approve our service proposal.',
  },
  {
    question: 'What information do you need to provide a quote?',
    answer: 'Please provide product details (or a reference image), estimated quantity, target price, and any specific requirements. The more details you provide, the more accurate our quote will be.',
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Yes, we work with businesses of all sizes, from startups to large corporations. We tailor our services to meet your specific needs and budget.',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-primary py-20 md:py-28">
        <div className="container-custom text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to start sourcing? Have questions? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="section-title mb-6">Let's Talk About Your Project</h2>
              <p className="text-navy-500 text-lg mb-8">
                Whether you're looking to source your first product from China or need help 
                optimizing your existing supply chain, we're here to help.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Email</h4>
                    <p className="text-navy-500">info@ssourcingchina.com</p>
                    <p className="text-navy-400 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Phone</h4>
                    <p className="text-navy-500">+86 XXX-XXXX-XXXX</p>
                    <p className="text-navy-400 text-sm">Mon-Fri 9:00-18:00 (CST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Location</h4>
                    <p className="text-navy-500">Shenzhen, Guangdong, China</p>
                    <p className="text-navy-400 text-sm">Near major manufacturing hubs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Business Hours</h4>
                    <p className="text-navy-500">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                    <p className="text-navy-500">Saturday: 9:00 AM - 1:00 PM (CST)</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-navy mb-4">Why Work With Us?</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm text-navy-600">Licensed Company</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm text-navy-600">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm text-navy-600">500+ Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm text-navy-600">40+ Countries</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-navy mb-6">Send Us an Inquiry</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                    <p className="text-navy-500">
                      We've received your message and will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                                   focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                                   focus:ring-primary focus:border-transparent transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                                   focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                                   focus:ring-primary focus:border-transparent transition-all"
                          placeholder="+1 234 567 890"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                                 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="sourcing">Product Sourcing Inquiry</option>
                        <option value="quotation">Request for Quotation</option>
                        <option value="inspection">Quality Inspection Services</option>
                        <option value="shipping">Shipping & Logistics</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Product Description</label>
                      <input
                        type="text"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                                 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="What product are you looking for?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Estimated Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                                 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                                 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Please provide any additional details about your requirements..."
                      />
                    </div>
                    
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50" id="faq">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Quick answers to common questions about contacting us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl mb-4 border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-navy pr-4">{faq.question}</span>
                  <MessageSquare className={`w-5 h-5 flex-shrink-0 ${
                    openFaq === index ? 'text-primary' : 'text-navy-400'
                  }`} />
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-navy-500">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
