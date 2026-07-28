import React, { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ArrowRight,
  Globe,
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productCategory: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to an API
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 138 0000 0000', '+86 20 8888 0000'],
      description: 'Mon-Fri, 9:00 AM - 6:00 PM (GMT+8)',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ssourcingchina.com', 'quotes@ssourcingchina.com'],
      description: 'Response within 24 hours',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp / WeChat',
      details: ['+86 138 0000 0000'],
      description: 'Available for instant messaging',
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Tianhe District, Guangzhou', 'Guangdong Province, China 510000'],
      description: 'Visit by appointment',
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank You for Your Inquiry!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your sourcing request and will get back to you within 24 hours
              with a detailed response and quote.
            </p>
            <div className="bg-muted rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-4">What Happens Next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</div>
                  <span className="text-muted-foreground">Our team reviews your requirements</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">2</div>
                  <span className="text-muted-foreground">We source and shortlist qualified suppliers</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">3</div>
                  <span className="text-muted-foreground">You receive a detailed quote within 24 hours</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Tell us about your product requirements and we'll provide a detailed quote
            within 24 hours. No obligations, no pressure.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions? We're here to help. Reach out through any of these channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                        <p className="text-muted-foreground/60 text-xs mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 p-6 bg-muted rounded-xl">
                <h3 className="font-semibold text-foreground mb-3">
                  Response Time
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4" />
                  <span>We respond to all inquiries within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-border p-8 md:p-12">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Sourcing Inquiry Form
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you with a detailed quote.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="NZ">New Zealand</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Product Info */}
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Product Requirements
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Product Category *
                        </label>
                        <select
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select category</option>
                          <option value="electronics">Electronics & Gadgets</option>
                          <option value="home">Home & Garden</option>
                          <option value="apparel">Apparel & Textiles</option>
                          <option value="industrial">Industrial & Tools</option>
                          <option value="beauty">Beauty & Health</option>
                          <option value="custom">Custom/OEM Products</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="e.g., 1,000 units"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Target Price (USD)
                        </label>
                        <input
                          type="text"
                          name="targetPrice"
                          value={formData.targetPrice}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="e.g., $5-10 per unit"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (within 4 weeks)</option>
                          <option value="standard">Standard (4-8 weeks)</option>
                          <option value="flexible">Flexible (8+ weeks)</option>
                          <option value="planning">Just planning ahead</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Product Details & Requirements *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Please describe the product you need, including specifications, materials, colors, certifications required, and any other relevant details."
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-muted-foreground">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors group"
                    >
                      Submit Inquiry
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Free Consultation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
