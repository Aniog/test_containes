import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  Package, 
  FileCheck, 
  BarChart3, 
  Handshake,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react'

const services = [
  {
    id: 'verification',
    icon: Shield,
    title: 'Supplier Verification',
    description: 'We conduct comprehensive due diligence on potential suppliers to ensure they are legitimate, financially stable, and capable of meeting your requirements.',
    features: [
      'Business license verification',
      'Factory facility inspection',
      'Production capacity assessment',
      'Quality management system review',
      'Financial stability check',
      'Certification verification (ISO, CE, FCC, etc.)',
      'Reference checks with existing clients',
      'Third-party credit reports',
    ],
    process: [
      'Initial supplier shortlist based on your criteria',
      'Remote verification (business docs, certifications)',
      'On-site factory audit by our inspectors',
      'Detailed verification report with recommendations',
      'Ongoing monitoring for key suppliers',
    ],
  },
  {
    id: 'sourcing',
    icon: Factory,
    title: 'Factory Sourcing',
    description: 'We find the right manufacturers for your products by leveraging our extensive network and industry expertise.',
    features: [
      'Product-specific supplier matching',
      'Competitive bidding process',
      'Factory capability assessment',
      'Sample coordination and evaluation',
      'Price negotiation',
      'Terms and conditions negotiation',
      'Contract review and advice',
      'Multi-supplier sourcing for comparison',
    ],
    process: [
      'Detailed requirements gathering',
      'Market research and supplier identification',
      'Initial screening and shortlisting',
      'Supplier presentations to you',
      'Sample request and evaluation',
      'Final supplier selection support',
    ],
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional quality control inspections at any stage of production to ensure your products meet specifications and standards.',
    features: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL-based sampling',
      'Detailed photo and video reports',
      'Defect classification and reporting',
      'Corrective action follow-up',
    ],
    process: [
      'Inspection criteria definition',
      'Inspector assignment (24-48 hours notice)',
      'On-site inspection execution',
      'Same-day report with photos',
      'Defect analysis and recommendations',
      'Follow-up on corrective actions',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination from factory to your doorstep, handling all documentation and customs procedures.',
    features: [
      'Freight forwarding',
      'Customs clearance',
      'Documentation preparation',
      'Door-to-door delivery',
      'Express shipping options',
      'Consolidation services',
      'Insurance coordination',
      'Tracking and updates',
    ],
    process: [
      'Shipping requirements assessment',
      'Carrier selection and booking',
      'Factory pickup coordination',
      'Export customs clearance',
      'International freight',
      'Import customs clearance',
      'Final delivery to destination',
    ],
  },
]

const additionalServices = [
  {
    icon: Package,
    title: 'Product Development',
    description: 'From concept to production, we help develop your custom products.',
  },
  {
    icon: FileCheck,
    title: 'Compliance & Certification',
    description: 'Navigate CE, FCC, RoHS, and other certification requirements.',
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence',
    description: 'Get insights on pricing, suppliers, and market trends in China.',
  },
  {
    icon: Handshake,
    title: 'Trade Show Support',
    description: 'We accompany you to Canton Fair and other trade shows.',
  },
]

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState('idle')

  const currentService = services.find(s => s.id === activeService)

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 1500)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive solutions to make your China sourcing successful, reliable, and hassle-free.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  activeService === service.id
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <service.icon className="w-5 h-5 mr-2" />
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <currentService.icon className="w-8 h-8 text-blue-900" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentService.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {currentService.description}
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-3 mb-8">
                {currentService.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Process</h3>
              <div className="space-y-4">
                {currentService.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="ml-4 text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              We offer a full range of complementary services to support your China operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose SSourcing China
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to making your China sourcing experience seamless and successful
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Suppliers</h3>
              <p className="text-gray-600">
                Every supplier we recommend has been thoroughly vetted through our rigorous verification process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Our professional inspectors ensure your products meet specifications at every stage of production.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Support</h3>
              <p className="text-gray-600">
                From supplier discovery to final delivery, we handle all the details so you can focus on your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Sourcing?
              </h2>
              <p className="text-lg text-blue-200 mb-8">
                Get in touch with our team to discuss your sourcing needs. We'll provide a tailored solution within 24 hours.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-100">Free initial consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-100">No obligation quote</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-blue-100">Dedicated account manager</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                  <p className="text-gray-600">
                    Thank you for your inquiry. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Service Quote</h3>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="verification">Supplier Verification</option>
                      <option value="sourcing">Factory Sourcing</option>
                      <option value="inspection">Quality Inspection</option>
                      <option value="shipping">Shipping & Logistics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services