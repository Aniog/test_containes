import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react'

const PageHeader = ({ title, subtitle }) => (
  <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
    </div>
  </section>
)

const ContactInfoCard = ({ icon: Icon, title, details }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-7 h-7 text-[#1E3A5F]" />
    </div>
    <h3 className="text-lg font-semibold text-[#1A1A2E] mb-3">{title}</h3>
    <div className="space-y-2">
      {details.map((detail, index) => (
        <div key={index} className="text-[#4A5568] text-sm">{detail}</div>
      ))}
    </div>
  </div>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ssourcingchina.com', 'support@ssourcingchina.com'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 123 4567 8900', '+86 987 6543 2100'],
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Shenzhen, Guangdong, China',
        'Near Hong Kong Border',
      ],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Mon-Fri: 9:00 AM - 6:00 PM (CST)',
        'WeChat: Available 24/7',
      ],
    },
  ]

  const services = [
    'Supplier Verification',
    'Quality Inspection',
    'Production Follow-up',
    'Shipping & Logistics',
    'Sourcing Consultation',
    'Product Development',
    'Not Sure - Need Advice',
  ]

  if (isSubmitted) {
    return (
      <>
        <PageHeader 
          title="Contact Us" 
          subtitle="Get in touch with our sourcing experts"
        />
        
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#F8FAFC] rounded-2xl p-12">
              <div className="w-20 h-20 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#10B981]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
                Thank You for Your Inquiry!
              </h2>
              <p className="text-[#4A5568] mb-8">
                We have received your message and will get back to you within 24 hours. 
                Our team will review your requirements and provide a customized quote.
              </p>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-lg hover:bg-[#2D5A87] transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our sourcing experts"
      />

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} {...info} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                Get a Free Sourcing Quote
              </h2>
              <p className="text-lg text-[#4A5568]">
                Tell us about your sourcing needs and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                    placeholder="Your Company Ltd"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                    Product Category *
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="textiles">Textiles & Garments</option>
                    <option value="machinery">Machinery</option>
                    <option value="furniture">Furniture</option>
                    <option value="packaging">Packaging</option>
                    <option value="automotive">Automotive Parts</option>
                    <option value="home">Home & Garden</option>
                    <option value="sports">Sports & Outdoors</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                  placeholder="e.g., 5000 units"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
                  placeholder="Describe your product requirements, target price, timeline, and any specific needs. The more details you provide, the better we can help you."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Inquiry
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-center text-sm text-[#718096]">
                By submitting this form, you agree to our privacy policy. We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* WeChat Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#F8FAFC] rounded-2xl p-8">
            <MessageSquare className="w-12 h-12 text-[#E67E22] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Prefer WeChat?
            </h2>
            <p className="text-[#4A5568] mb-6">
              Add us on WeChat for quick responses and easy communication. 
              Scan the QR code or search for: SSourcingChina
            </p>
            <div className="w-48 h-48 bg-white border-2 border-gray-200 rounded-lg mx-auto flex items-center justify-center">
              <span className="text-sm text-gray-400">WeChat QR Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">
              Our Location
            </h2>
            <p className="text-[#4A5568]">
              Based in Shenzhen, China - Close to Hong Kong
            </p>
          </div>
          <div className="bg-white rounded-2xl h-80 flex items-center justify-center shadow-sm">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#E67E22] mx-auto mb-4" />
              <p className="text-[#4A5568]">Map placeholder - Shenzhen, Guangdong, China</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact