import React, { useState } from 'react'
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare 
} from 'lucide-react'
import { cn } from '@/lib/utils'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+86 123 4567 8900', '+86 987 6543 2100'],
    action: 'tel:+8612345678900',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@ssourcingchina.com', 'sales@ssourcingchina.com'],
    action: 'mailto:info@ssourcingchina.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: ['Shenzhen, Guangdong', 'China 518000'],
    action: null,
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon-Fri: 9:00 AM - 6:00 PM (CST)', 'Sat: 9:00 AM - 1:00 PM'],
    action: null,
  },
]

export default function Contact() {
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
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    console.log('Contact form submitted:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6">Contact Us</h1>
              <p className="body-large text-gray-300">
                Get in touch with our sourcing experts to discuss your product requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <h2 className="heading-2 text-foreground mb-4">Thank You!</h2>
              <p className="body-large text-muted-foreground mb-8">
                Your message has been sent successfully. Our sourcing specialist will 
                contact you within 24 hours to discuss your requirements.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
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
                }}
                className="btn-secondary"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Contact Us</h1>
            <p className="body-large text-gray-300">
              Get in touch with our sourcing experts to discuss your product requirements. 
              We respond to all inquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-muted-foreground">
                          {info.action ? (
                            <a href={info.action} className="hover:text-primary transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Map placeholder */}
                <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Shenzhen, China</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="card-padding">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <h2 className="heading-3 text-foreground">Send Us a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">
                          Product Type *
                        </label>
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        >
                          <option value="">Select product type</option>
                          <option value="electronics">Electronics</option>
                          <option value="home-garden">Home & Garden</option>
                          <option value="apparel">Apparel & Textiles</option>
                          <option value="machinery">Machinery & Parts</option>
                          <option value="packaging">Packaging & Printing</option>
                          <option value="custom">Custom Products</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="e.g., 1000 units"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-50k">$10,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-500k">$100,000 - $500,000</option>
                          <option value="over-500k">Over $500,000</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (Within 2 weeks)</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="2-3-months">2-3 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Product Requirements *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        placeholder="Describe your product requirements, specifications, target price, and any other relevant details..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        'btn-primary w-full text-lg py-4',
                        isSubmitting && 'opacity-70 cursor-not-allowed'
                      )}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <Send className="w-5 h-5" />
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
