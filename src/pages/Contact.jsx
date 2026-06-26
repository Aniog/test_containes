import React, { useState, createElement } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  Globe,
  MessageSquare,
  Users,
  Factory,
  Ship,
  Search,
  ClipboardCheck,
  DollarSign,
  ShieldCheck,
  PackageCheck,
  ArrowRight
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productCategory: '',
    estimatedQuantity: '',
    budget: '',
    timeline: '',
    message: '',
    howDidYouHear: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      country: '',
      productCategory: '',
      estimatedQuantity: '',
      budget: '',
      timeline: '',
      message: '',
      howDidYouHear: ''
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'info@ssourcingchina.com',
      subDetail: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+86-xxx-xxxx-xxxx',
      subDetail: 'Mon-Fri, 9am-6pm CST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Guangzhou, China',
      subDetail: 'By appointment only'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      detail: 'Mon - Fri: 9:00 - 18:00',
      subDetail: 'Saturday: 9:00 - 12:00'
    }
  ]

  const services = [
    { name: 'Supplier Sourcing', icon: Search },
    { name: 'Factory Verification', icon: ShieldCheck },
    { name: 'Quality Control', icon: ClipboardCheck },
    { name: 'Shipping Coordination', icon: Ship },
    { name: 'Product Development', icon: PackageCheck },
    { name: 'Price Negotiation', icon: DollarSign }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your inquiry has been received. Our team will review your requirements and get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Tell us about your product requirements, and we'll provide a customized sourcing solution. 
              No obligation, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <a href="#inquiry-form">
                  Start Your Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-3">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                <p className="text-sm text-gray-900">{info.detail}</p>
                <p className="text-xs text-gray-500">{info.subDetail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Sourcing Inquiry Form</h2>
                <p className="text-gray-600 mb-8">
                  Please provide as much detail as possible so we can give you the most accurate quote and recommendations.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <Input
                      id="country"
                      name="country"
                      type="text"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="United States"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-2">
                          Product Category *
                        </label>
                        <select
                          id="productCategory"
                          name="productCategory"
                          required
                          value={formData.productCategory}
                          onChange={handleChange}
                          className="flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a category</option>
                          <option value="electronics">Electronics & Components</option>
                          <option value="home-garden">Home & Garden</option>
                          <option value="apparel">Apparel & Textiles</option>
                          <option value="toys-gifts">Toys & Gifts</option>
                          <option value="auto-parts">Auto Parts</option>
                          <option value="industrial">Industrial Equipment</option>
                          <option value="health-beauty">Health & Beauty</option>
                          <option value="sports">Sports & Outdoors</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="estimatedQuantity" className="block text-sm font-medium text-gray-700 mb-2">
                            Estimated Quantity
                          </label>
                          <Input
                            id="estimatedQuantity"
                            name="estimatedQuantity"
                            type="text"
                            value={formData.estimatedQuantity}
                            onChange={handleChange}
                            placeholder="e.g., 1,000 units"
                          />
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                            Target Budget (USD)
                          </label>
                          <Input
                            id="budget"
                            name="budget"
                            type="text"
                            value={formData.budget}
                            onChange={handleChange}
                            placeholder="e.g., $5,000 - $10,000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                          Desired Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (within 2 weeks)</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="2-3-months">2-3 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please describe your product requirements, specifications, quality standards, and any other relevant details..."
                        />
                      </div>

                      <div>
                        <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-2">
                          How did you hear about us?
                        </label>
                        <select
                          id="howDidYouHear"
                          name="howDidYouHear"
                          value={formData.howDidYouHear}
                          onChange={handleChange}
                          className="flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select an option</option>
                          <option value="google">Google Search</option>
                          <option value="referral">Referral</option>
                          <option value="social-media">Social Media</option>
                          <option value="trade-show">Trade Show</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Submitting...</>
                      ) : (
                        <>
                          Submit Inquiry
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 mt-3">
                      By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Services */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        {React.createElement(service.icon, { className: 'h-4 w-4 text-blue-600' })}
                      </div>
                      <span className="text-sm text-gray-700">{service.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link to="/services" className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center">
                    View all services
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose SSourcing China?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">200+ verified factories in our network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Native English-speaking agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Dedicated project manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Free initial consultation</span>
                  </li>
                </ul>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-blue-600">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Initial Response</p>
                      <p className="text-xs text-gray-500">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-blue-600">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Supplier Options</p>
                      <p className="text-xs text-gray-500">3-5 qualified suppliers within 3-5 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-blue-600">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Detailed Quote</p>
                      <p className="text-xs text-gray-500">Customized proposal within 1 week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600">
              Based in Guangzhou, the heart of China's manufacturing and trading industry.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto">
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Guangzhou, China</p>
                <p className="text-sm text-gray-500">Sourcing & Trading Hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
