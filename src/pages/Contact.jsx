import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle,
  FileText, HelpCircle
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    productDetails: '',
    quantity: '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ssourcingchina.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+86 571 1234 5678',
      description: 'Mon-Fri, 9AM-6PM CST',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Hangzhou, Zhejiang, China',
      description: 'Near Shanghai, easy access',
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'On business days',
    },
  ]

  const faqs = [
    {
      question: 'How quickly can you provide supplier quotes?',
      answer: 'Typically within 3-5 business days, depending on product complexity.',
    },
    {
      question: 'What information do you need to start?',
      answer: 'Product specifications, estimated quantity, target price, and delivery timeline.',
    },
    {
      question: 'Do you work with small orders?',
      answer: 'Yes, we work with businesses of all sizes. MOQ requirements vary by supplier.',
    },
  ]

  if (submitted) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary to-primary-light py-20">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Thank You!
              </h1>
              <p className="text-blue-200 text-lg">
                We've received your inquiry and will be in touch within 24 hours.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                What's Next?
              </h2>
              <p className="text-text-secondary mb-8">
                Our team will review your requirements and match you with suitable suppliers. 
                We'll send you a detailed quote with supplier options, pricing, and timelines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline">Back to Home</Button>
                </Link>
                <Link to="/how-it-works">
                  <Button>Learn About Our Process</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Ready to start sourcing from China? Get in touch and we'll help you find the right suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-background-light">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-border text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary mb-1">{info.title}</h3>
                <p className="text-primary font-medium mb-1">{info.details}</p>
                <p className="text-text-secondary text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                Get a Free Quote
              </h2>
              <p className="text-text-secondary mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Product Category *
                    </label>
                    <select
                      name="productCategory"
                      required
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics</option>
                      <option value="textiles">Textiles & Apparel</option>
                      <option value="home">Home & Garden</option>
                      <option value="machinery">Machinery & Parts</option>
                      <option value="packaging">Packaging</option>
                      <option value="health">Health & Beauty</option>
                      <option value="toys">Toys & Games</option>
                      <option value="automotive">Automotive</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="e.g., 5,000 units"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Target Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (urgent)</option>
                    <option value="1-2months">1-2 months</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Product Details *
                  </label>
                  <textarea
                    name="productDetails"
                    required
                    rows={4}
                    value={formData.productDetails}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Describe your product requirements, specifications, target price, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Any other information you'd like to share..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Inquiry
                </Button>

                <p className="text-sm text-text-secondary text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact Options */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:info@ssourcingchina.com"
                    className="flex items-center gap-4 p-4 bg-background-light rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Email Us</p>
                      <p className="text-sm text-text-secondary">info@ssourcingchina.com</p>
                    </div>
                  </a>
                  <a 
                    href="tel:+8657112345678"
                    className="flex items-center gap-4 p-4 bg-background-light rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Call Us</p>
                      <p className="text-sm text-text-secondary">+86 571 1234 5678</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-background-light rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">WeChat</p>
                      <p className="text-sm text-text-secondary">SSourcingChina</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Questions */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  Common Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <p className="font-medium text-text-primary text-sm mb-1">{faq.question}</p>
                      <p className="text-text-secondary text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <Link to="/faq" className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:underline">
                  View all FAQs
                  <FileText className="w-4 h-4" />
                </Link>
              </div>

              {/* Office Info */}
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Our Office</h3>
                <p className="text-blue-200 mb-4">
                  We're located in Hangzhou, China - a major hub for manufacturing and e-commerce.
                </p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">SSourcing China Co., Ltd.</p>
                    <p className="text-blue-200 text-sm">Hangzhou, Zhejiang Province</p>
                    <p className="text-blue-200 text-sm">China 310000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage