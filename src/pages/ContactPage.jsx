import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from 'lucide-react'
import { toast } from 'sonner'

const offices = [
  {
    city: 'Shenzhen',
    address:
      'Floor 15, Building A, Technology Park, Nanshan District, Shenzhen, Guangdong, China',
    phone: '+86 755 1234 5678',
    email: 'shenzhen@ssourcing.cn',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM (GMT+8)',
  },
  {
    city: 'Hong Kong',
    address:
      'Unit 1501, Tower A, Business Center, Kowloon, Hong Kong',
    phone: '+852 2345 6789',
    email: 'hongkong@ssourcing.cn',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM (GMT+8)',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    productCategory: '',
    productDetails: '',
    quantity: '',
    targetPrice: '',
    serviceInterest: [],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    'Supplier Verification',
    'Factory Audit',
    'Quality Control Inspection',
    'Sourcing & Negotiation',
    'Shipping & Logistics',
    'Production Follow-up',
    'Not Sure Yet',
  ]

  const productCategories = [
    'Electronics',
    'Furniture',
    'Textiles & Apparel',
    'Machinery',
    'Packaging',
    'Consumer Goods',
    'Other',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      serviceInterest: prev.serviceInterest.includes(service)
        ? prev.serviceInterest.filter((s) => s !== service)
        : [...prev.serviceInterest, service],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Form submitted:', formData)
    toast.success('Thank you for your inquiry! We will get back to you within 24 hours.')
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-plus text-4xl sm:text-5xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="font-inter text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                Get in touch with our team for professional China sourcing
                assistance.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="#F8FAFC"
              />
            </svg>
          </div>
        </section>

        {/* Success Message */}
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-[#27AE60]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#27AE60]" />
            </div>
            <h2 className="font-plus text-3xl font-bold text-[#1E293B] mb-4">
              Thank You for Your Inquiry!
            </h2>
            <p className="font-inter text-lg text-[#64748B] mb-8">
              We have received your message and will get back to you within 24
              hours. Our team will review your requirements and contact you
              shortly.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white font-inter font-semibold rounded-lg hover:bg-[#2D5A87] transition-colors"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-plus text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="font-inter text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Get in touch with our team for professional China sourcing
              assistance. We typically respond within 24 hours.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-plus text-2xl font-bold text-[#1E293B] mb-2">
                Get a Free Quote
              </h2>
              <p className="font-inter text-[#64748B] mb-8">
                Fill out the form below and we will get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-sm font-medium text-[#1E293B] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg font-inter text-[#1E293B] focus:outline-none focus:border-[#E67E22]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-[#1E293B] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg font-inter text-[#1E293B] focus:outline-none focus:border-[#E67E22]"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-sm font-medium text-[#1E293B] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg font-inter text-[#1E293B] focus:outline-none focus:border-[#E67E22]"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-[#1E293B] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg font-inter text-[#1E293B] focus:outline-none focus:border-[#E67E22]"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block font-inter text-sm font-medium text-[#1E293B] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg font-inter text-[#1E293B] focus:outline-none focus:border-[#E67E22]"
                    placeholder="Your Company Ltd."
                  />
                </div>

                {/* Product Category */}
                <div>
                  <label className="block font-inter text-sm font-medium text-[#1E293B] mb-2">
                    Product Category *
                  </label>
                  <select
                    name="productCategory"
                    required
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg font-inter text-[#1E293B] focus:outline-none focus:border-[#E67E22] bg-white"
                  >
                    <option value="">Select a category</option>
                    {productCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quantity & Target Price */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-sm font-medium text-[#1E293B] mb-2">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg font-inter text-[#1E293B] focus:outline-none focus:border-[#E67E22]"
                      placeholder="e.g., 5,000 units"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-[#1E293B] mb-2">
                      Target Price (per unit)
                    </label>
                    <input
                      type="text"
                      name="targetPrice"
                      value={formData.targetPrice}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg font-inter text-[#1E293B] focus:outline-none focus:border-[#E67E22]"
                      placeholder="e.g., $15-20"
                    />
                  </div>
                </div>

                {/* Services Interest */}
                <div>
                  <label className="block font-inter text-sm font-medium text-[#1E293B] mb-3">
                    Services You Are Interested In *
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-3 p-3 border border-[#E2E8F0] rounded-lg cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.serviceInterest.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4 text-[#E67E22] border-[#E2E8F0] rounded focus:ring-[#E67E22]"
                        />
                        <span className="font-inter text-sm text-[#1E293B]">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div>
                  <label className="block font-inter text-sm font-medium text-[#1E293B] mb-2">
                    Product Details *
                  </label>
                  <textarea
                    name="productDetails"
                    required
                    rows={5}
                    value={formData.productDetails}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg font-inter text-[#1E293B] focus:outline-none focus:border-[#E67E22] resize-none"
                    placeholder="Please describe your product requirements, specifications, any special requirements, etc."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#E67E22] text-white font-inter font-semibold rounded-lg hover:bg-[#D35400] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-plus text-2xl font-bold text-[#1E293B] mb-2">
                Our Offices
              </h2>
              <p className="font-inter text-[#64748B] mb-8">
                Visit us at one of our offices in China or Hong Kong.
              </p>

              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]"
                  >
                    <h3 className="font-plus text-xl font-semibold text-[#1E3A5F] mb-4">
                      {office.city}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#E67E22] flex-shrink-0 mt-0.5" />
                        <p className="font-inter text-sm text-[#64748B]">
                          {office.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#E67E22] flex-shrink-0" />
                        <a
                          href={`tel:${office.phone}`}
                          className="font-inter text-sm text-[#64748B] hover:text-[#E67E22] transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-[#E67E22] flex-shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="font-inter text-sm text-[#64748B] hover:text-[#E67E22] transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-[#E67E22] flex-shrink-0" />
                        <p className="font-inter text-sm text-[#64748B]">
                          {office.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="mt-8 p-6 bg-[#1E3A5F] rounded-xl">
                <h3 className="font-plus text-lg font-semibold text-white mb-2">
                  Response Time
                </h3>
                <p className="font-inter text-sm text-white/80">
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent requests, please call us directly.
                </p>
              </div>

              {/* What to Expect */}
              <div className="mt-8">
                <h3 className="font-plus text-lg font-semibold text-[#1E293B] mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    'Personal response from our sourcing team',
                    'Initial assessment of your requirements',
                    'No obligation consultation',
                    'Customized solution proposal',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 font-inter text-sm text-[#64748B]"
                    >
                      <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}