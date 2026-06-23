import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  ClipboardCheck, 
  Factory, 
  Truck, 
  Package, 
  FileCheck, 
  Users,
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  Shield
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const services = [
  {
    id: 'verification',
    icon: Search,
    title: 'Supplier Verification',
    description: 'We verify factory existence, business legitimacy, production capacity, and certifications to ensure you work with trustworthy suppliers.',
    image: 'factory verification inspection',
    features: [
      'Factory existence verification',
      'Business license authentication',
      'Production capacity assessment',
      'Quality management system review',
      'Certification verification (ISO, CE, FCC, etc.)',
      'Financial stability assessment',
    ],
    process: [
      'Initial supplier research and shortlisting',
      'On-site factory visit by our team',
      'Business license and registration verification',
      'Production line and capacity inspection',
      'Quality control systems review',
      'Detailed verification report with photos',
    ],
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our experienced QC engineers perform comprehensive inspections at various stages of production to ensure your products meet specifications.',
    image: 'quality control inspection',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DPI)',
      'Initial production inspection (IPI)',
      'Container loading supervision',
      'AQL-based sampling inspection',
      'Detailed photo and video reports',
    ],
    process: [
      'Inspection criteria review with you',
      'On-site inspection at factory',
      'Product sampling and testing',
      'AQL evaluation against standards',
      'Same-day report with findings',
      'Corrective action recommendations',
    ],
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress monitoring to ensure your order is on schedule and meets quality requirements throughout production.',
    image: 'production monitoring factory',
    features: [
      'Weekly progress updates',
      'Production schedule monitoring',
      'Material quality verification',
      'Issue identification and resolution',
      'Timeline management',
      'Communication bridge with factory',
    ],
    process: [
      'Production timeline establishment',
      'Scheduled factory visits',
      'Progress and quality checks',
      'Issue reporting and resolution',
      'Final production verification',
      'Detailed status reports',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We handle the complexities of international logistics, from freight forwarding to customs clearance documentation.',
    image: 'shipping logistics container',
    features: [
      'Freight forwarding services',
      'Customs documentation preparation',
      'Shipping method optimization',
      'Cargo insurance coordination',
      'Port to door delivery',
      'Track and trace updates',
    ],
    process: [
      'Shipping requirements assessment',
      'Freight quote comparison',
      'Documentation preparation',
      'Factory to port coordination',
      'Customs clearance support',
      'Delivery tracking to destination',
    ],
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Verified Expertise',
    description: 'Our team has years of experience in Chinese manufacturing and international trade.',
  },
  {
    icon: Users,
    title: 'Local Presence',
    description: 'Based in Shenzhen, we have boots on the ground to visit factories and resolve issues quickly.',
  },
  {
    icon: FileCheck,
    title: 'Quality Assurance',
    description: 'Rigorous inspection protocols ensure your products meet international standards.',
  },
  {
    icon: Clock,
    title: 'Time Zone Advantage',
    description: 'Working in China\'s time zone means faster communication and response times.',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive solutions to help you source from China with confidence. 
              From supplier verification to final delivery, we handle every step.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What's Included:
                </h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Our Process:
                </h3>
                <ol className="space-y-3">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                        {idx + 1}
                      </span>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-200">
                  <img
                    data-strk-img-id={`service-${service.id}-img`}
                    data-strk-img={`[service-${service.id}-title] ${service.image}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our advantages in China sourcing that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Tell us about your sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}