import React, { useState } from 'react'
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, 
  MessageSquare, ChevronDown, ChevronUp, ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'

const faqs = [
  {
    question: 'How do I start a sourcing request?',
    answer: 'Simply fill out our inquiry form with your product requirements, quantity, target price, and timeline. We will review your request and get back to you within 24 hours with initial feedback and a preliminary quote.',
  },
  {
    question: 'What information do you need to provide a quote?',
    answer: 'To provide an accurate quote, we need: product specifications or samples, estimated order quantity, target price range, required delivery timeline, and any special requirements such as certifications or compliance standards.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fees vary based on the scope of services required. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific needs. We can provide estimates for individual services or complete project packages.',
  },
  {
    question: 'How do you verify factories?',
    answer: 'We conduct site visits to verify factory existence, check business licenses, assess production capacity, review quality control systems, and evaluate worker conditions. We provide detailed reports with photos and video documentation.',
  },
  {
    question: 'Can you handle sample requests?',
    answer: 'Yes, we can request samples on your behalf, coordinate shipping, and provide detailed feedback on quality, packaging, and compliance with your specifications. We can also arrange for samples to be sent to your location for closer examination.',
  },
  {
    question: 'What quality inspection standards do you use?',
    answer: 'We follow internationally recognized standards including AQL (Acceptable Quality Limit) sampling, and can customize inspection criteria based on your product requirements and industry standards. Our inspectors are trained in various quality assessment methodologies.',
  },
  {
    question: 'How do you handle shipping and logistics?',
    answer: 'We work with established freight forwarders to coordinate shipping via sea or air. We handle documentation, customs clearance coordination, and provide tracking updates throughout delivery. We can arrange shipping from FOB to door delivery.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers (wire transfer) and major credit cards. Payment terms for our services are typically 50% upfront and 50% upon completion. For supplier payments, we can help coordinate various payment methods including T/T, L/C, and PayPal.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'The timeline varies based on product complexity, quantity, and availability. A typical new sourcing project takes 4-12 weeks from inquiry to delivery, depending on the product type, production requirements, and shipping method chosen.',
  },
  {
    question: 'Can you work with our existing suppliers?',
    answer: 'Yes, we can provide quality inspection and production monitoring services for your existing suppliers. We can also help verify new suppliers you identify before committing to larger orders.',
  },
]

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Get in touch with our team for your China sourcing needs
            </p>
          </div>
        </section>

        {/* Success Message */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-surface rounded-2xl p-12">
              <div className="w-20 h-20 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-success" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your inquiry has been received. Our team will review your requirements and get back to you within 24 hours.
              </p>
              <p className="text-gray-500 mb-8">
                In the meantime, feel free to explore our <a href="/blog" className="text-primary hover:underline">blog</a> for sourcing tips and insights.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Submit Another Inquiry
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Get in touch with our team for your China sourcing needs
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services? We're here to help. Reach out through any of the channels below or fill out the inquiry form.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-gray-600 hover:text-primary transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+862112345678" className="text-gray-600 hover:text-primary transition-colors">
                      +86 21 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      Shanghai, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Mon-Fri: 9:00 AM - 6:00 PM (CST)
                    </p>
                    <p className="text-sm text-gray-500">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-2xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Submit an Inquiry
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Category <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
                        placeholder="e.g., Electronics, Furniture"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
                        placeholder="e.g., 5,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Required Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="3-4-months">3-4 months</option>
                      <option value="5-6-months">5-6 months</option>
                      <option value="6+months">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none bg-white"
                      placeholder="Describe your product requirements, specifications, target price, any special requirements, certifications needed, etc."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Inquiry
                  </Button>

                  <p className="text-xs text-gray-500">
                    By submitting this form, you agree to be contacted by our team regarding your inquiry. We typically respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-surface" id="faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our sourcing services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-600">
                    {faq.answer}
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
