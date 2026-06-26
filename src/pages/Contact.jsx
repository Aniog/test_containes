import React, { useState } from 'react'
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle, 
  MessageSquare, Users, Building2, ArrowRight
} from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      country: '',
      product: '',
      quantity: '',
      budget: '',
      timeline: '',
      message: ''
    })
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[--color-primary] to-[--color-primary-light] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to start sourcing from China? Get in touch and receive a free consultation and quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[--color-text-dark] mb-6">
                Get In Touch
              </h2>
              <p className="text-[--color-text-muted] mb-8">
                Have questions about our services? Want to discuss your sourcing needs? We're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[--color-bg-navy-light] rounded-xl flex items-center justify-center text-[--color-primary] flex-shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[--color-text-dark] mb-1">Office Address</h4>
                    <p className="text-[--color-text-muted] text-sm">
                      Room 1208, Building A<br />
                      No. 123 East Nanjing Road<br />
                      Shanghai, China 200001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[--color-bg-navy-light] rounded-xl flex items-center justify-center text-[--color-primary] flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[--color-text-dark] mb-1">Phone</h4>
                    <a href="tel:+862155512345" className="text-[--color-text-muted] text-sm hover:text-[--color-primary] transition-colors">
                      +86 21 5551 2345
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[--color-bg-navy-light] rounded-xl flex items-center justify-center text-[--color-primary] flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[--color-text-dark] mb-1">Email</h4>
                    <a href="mailto:info@ssourcingchina.com" className="text-[--color-text-muted] text-sm hover:text-[--color-primary] transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[--color-bg-navy-light] rounded-xl flex items-center justify-center text-[--color-primary] flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[--color-text-dark] mb-1">Business Hours</h4>
                    <p className="text-[--color-text-muted] text-sm">
                      Monday - Friday: 9:00 - 18:00 CST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-[--color-border]">
                <h3 className="font-semibold text-[--color-text-dark] mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'We Review Your Request', desc: 'Within 24 hours' },
                    { step: '2', title: 'Initial Consultation', desc: 'Discuss your needs' },
                    { step: '3', title: 'Receive Options & Quote', desc: 'Within 48 hours' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-[--color-primary] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-medium text-[--color-text-dark] text-sm">{item.title}</div>
                        <div className="text-xs text-[--color-text-muted]">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[--color-bg-light] rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[--color-success]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[--color-success]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[--color-text-dark] mb-4">
                      Thank You!
                    </h3>
                    <p className="text-[--color-text-muted] mb-6 max-w-md mx-auto">
                      Your inquiry has been received. Our team will review your requirements and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[--color-primary] text-white font-semibold rounded-lg hover:bg-[--color-primary-light] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[--color-text-dark] mb-2">
                      Sourcing Inquiry Form
                    </h2>
                    <p className="text-[--color-text-muted] mb-8">
                      Fill out the form below and receive a free, no-obligation quote within 24 hours.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-[--color-text-dark] mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-[--color-border] rounded-lg bg-white focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-[--color-text-dark] mb-2">
                            Business Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-[--color-border] rounded-lg bg-white focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-[--color-text-dark] mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-[--color-border] rounded-lg bg-white focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                            placeholder="Your Company Ltd"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-[--color-text-dark] mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-[--color-border] rounded-lg bg-white focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-[--color-text-dark] mb-2">
                          Country/Region
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-[--color-border] rounded-lg bg-white focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                        >
                          <option value="">Select your country</option>
                          <option value="US">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="AU">Australia</option>
                          <option value="CA">Canada</option>
                          <option value="NL">Netherlands</option>
                          <option value="SE">Sweden</option>
                          <option value="NO">Norway</option>
                          <option value="DK">Denmark</option>
                          <option value="FI">Finland</option>
                          <option value="OTHER">Other</option>
                        </select>
                      </div>

                      <div className="border-t border-[--color-border] pt-6">
                        <h3 className="font-semibold text-[--color-text-dark] mb-4">Product Requirements</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="product" className="block text-sm font-medium text-[--color-text-dark] mb-2">
                              Product to Source *
                            </label>
                            <input
                              type="text"
                              id="product"
                              name="product"
                              value={formData.product}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-[--color-border] rounded-lg bg-white focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                              placeholder="e.g., Ceramic mugs, Electronics components"
                            />
                          </div>
                          <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-[--color-text-dark] mb-2">
                              Estimated Quantity
                            </label>
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              value={formData.quantity}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-[--color-border] rounded-lg bg-white focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                              placeholder="e.g., 10,000 units"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-[--color-text-dark] mb-2">
                              Target Budget (per unit)
                            </label>
                            <select
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-[--color-border] rounded-lg bg-white focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                            >
                              <option value="">Select budget range</option>
                              <option value="under-1">Under $1</option>
                              <option value="1-5">$1 - $5</option>
                              <option value="5-20">$5 - $20</option>
                              <option value="20-100">$20 - $100</option>
                              <option value="over-100">Over $100</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="timeline" className="block text-sm font-medium text-[--color-text-dark] mb-2">
                              Timeline
                            </label>
                            <select
                              id="timeline"
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-[--color-border] rounded-lg bg-white focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark]"
                            >
                              <option value="">Select timeline</option>
                              <option value="urgent">Urgent (within 4 weeks)</option>
                              <option value="1-2-months">1-2 months</option>
                              <option value="2-3-months">2-3 months</option>
                              <option value="3-6-months">3-6 months</option>
                              <option value="flexible">Flexible</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[--color-text-dark] mb-2">
                          Additional Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-[--color-border] rounded-lg bg-white focus:ring-2 focus:ring-[--color-primary] focus:border-transparent transition-all text-[--color-text-dark] resize-none"
                          placeholder="Tell us more about your requirements, target price, quality standards, certifications needed, special requirements, etc."
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          className="mt-1 w-4 h-4 rounded border-[--color-border] text-[--color-primary] focus:ring-[--color-primary]"
                        />
                        <label htmlFor="consent" className="text-sm text-[--color-text-muted]">
                          I agree to the Privacy Policy and consent to being contacted regarding my inquiry. *
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[--color-accent] text-white font-bold text-lg rounded-lg hover:bg-[--color-accent-dark] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Get a Free Quote
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-[--color-text-muted]">
                        We typically respond within 24 hours during business days.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[--color-bg-light]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            subtitle="Quick answers to help you get started."
          />
          
          <div className="mt-12 space-y-4">
            {[
              {
                question: 'What information do I need to provide for a quote?',
                answer: 'Provide as much detail as possible: product description, specifications, quantity needed, target price, quality requirements, certifications needed, and your timeline. The more information you provide, the more accurate our quote will be.'
              },
              {
                question: 'How long does it take to receive a quote?',
                answer: 'We typically respond within 24 hours with initial supplier options and pricing. For complex requirements or detailed technical specifications, it may take up to 48 hours.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Yes, we work with businesses of all sizes. While our full-service model is optimized for orders starting around $5,000 USD, we can also provide guidance for smaller orders.'
              },
              {
                question: 'Is there any charge for the initial consultation?',
                answer: 'No, the initial consultation and quote are completely free with no obligation to proceed.'
              },
              {
                question: 'What countries do you serve?',
                answer: 'We serve clients worldwide, including the US, UK, Europe, Australia, Canada, and many other countries. Our team is experienced in international trade regulations for various markets.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="font-semibold text-[--color-text-dark] mb-2">{faq.question}</h4>
                <p className="text-[--color-text-muted] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[--color-primary]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-16 h-16 text-[--color-accent-light] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prefer to Talk Directly?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Schedule a call with our sourcing experts to discuss your needs in detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-[--color-accent] text-white font-bold text-lg rounded-lg hover:bg-[--color-accent-dark] transition-colors"
            >
              Email Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+862155512345"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Call +86 21 5551 2345
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
