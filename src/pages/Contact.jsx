import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="section-padding min-h-[60vh] flex items-center">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thank You for Your Inquiry</h1>
            <p className="text-lg text-gray-600 mb-4">
              We have received your sourcing request and will review it carefully.
            </p>
            <p className="text-gray-500 mb-8">
              Our team typically responds within 24 hours with a customized sourcing plan and quote.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setFormData({
                  name: '', email: '', company: '', phone: '',
                  product: '', quantity: '', budget: '', timeline: '', message: '',
                })
              }}
              className="btn-primary"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready to start sourcing from China? Get in touch and we will respond within 24 hours 
            with a free, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Office Address</h3>
                    <p className="text-gray-600 text-sm">Guangzhou, Guangdong Province, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-gray-600 text-sm hover:text-primary transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Phone</h3>
                    <a href="tel:+861234567890" className="text-gray-600 text-sm hover:text-primary transition-colors">
                      +86 123 4567 890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                    <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 12:00 PM (CST)</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-primary/5 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Why Choose SSourcing China?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    Based in China with local market knowledge
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    In-person factory audits and inspections
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    Transparent pricing with no hidden fees
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    Free quote with no obligation
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Request a Free Sourcing Quote</h2>
                <p className="text-sm text-gray-600 mb-8">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                      Product to Source <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Describe the product you want to source"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                        Target Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g. 1,000 pcs"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Target Budget
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g. USD 5,000"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                        Target Timeline
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g. 3 months"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Share any specific requirements, specifications, or questions..."
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn-secondary text-lg px-8 py-3.5 inline-flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </button>
                    <p className="text-sm text-gray-500 mt-3">
                      We respect your privacy. Your information will not be shared with third parties.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}