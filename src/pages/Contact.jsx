import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle, ArrowRight, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    service: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        service: '',
        message: ''
      })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["info@ssourcing-china.com"],
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone/WhatsApp",
      details: ["+86 123 4567 8900", "+1 234 567 8900"],
      description: "Available during business hours"
    },
    {
      icon: MessageCircle,
      title: "WeChat",
      details: ["SSourcingChina"],
      description: "Quick chat on WeChat"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Shenzhen, Guangdong, China"],
      description: "Visit our office"
    }
  ]

  const services = [
    "Supplier Identification",
    "Factory Verification",
    "Quality Inspection",
    "Production Monitoring",
    "Sample Management",
    "Shipping & Logistics",
    "Not Sure - Need Consultation"
  ]

  return (
    <div>
      <Helmet>
        <title>Contact Us | Get a Free Sourcing Quote | SSourcing China</title>
        <meta name="description" content="Contact SSourcing China for professional sourcing services. Get a free quote for supplier verification, quality inspection, and shipping." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600">
              Ready to start your China sourcing project? Contact us today for a free consultation and quote. We'll help you find the right suppliers within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 text-sm">{detail}</p>
                      ))}
                      <p className="text-slate-500 text-xs mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-2 text-slate-600 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Business Hours</span>
                </div>
                <p className="text-slate-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM (China Time)</p>
                <p className="text-slate-600 text-sm">Saturday: 9:00 AM - 1:00 PM (China Time)</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                {formStatus === 'success' ? (
                  <div className="bg-white rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-6">We've received your inquiry and will get back to you within 24 hours.</p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="John Smith"
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
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="john@company.com"
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
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                          Product You Need *
                        </label>
                        <input
                          type="text"
                          id="product"
                          name="product"
                          required
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., Smart Home Devices"
                        />
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., 5000 units"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                        Service You're Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us more about your requirements, timeline, and any specific needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about our services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "How long does it take to find a supplier?",
                a: "Typically 1-2 weeks for initial supplier shortlist."
              },
              {
                q: "What are your service fees?",
                a: "We offer transparent pricing. Contact us for a quote."
              },
              {
                q: "Do you handle shipping?",
                a: "Yes, we coordinate complete logistics from factory to door."
              },
              {
                q: "Can you inspect quality?",
                a: "Yes, we offer pre-shipment inspections at any production stage."
              },
              {
                q: "What's the minimum order quantity?",
                a: "MOQs vary by product. We help negotiate favorable terms."
              },
              {
                q: "How do you verify factories?",
                a: "On-site audits including business license and capability checks."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact