import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, BarChart3, Ship, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right supplier for your product',
    items: [
      'Market research to identify capable manufacturers',
      'Request for quotation (RFQ) management',
      'Comparison of pricing, MOQ, lead times, and payment terms',
      'Shortlisting of 3-5 qualified suppliers per project',
      'Coordination of product samples for evaluation',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know exactly who you are working with',
    items: [
      'On-site factory visits with detailed photo reports',
      'Verification of business licenses and certifications',
      'Assessment of production capacity and equipment',
      'Evaluation of quality management systems',
      'Check of working conditions and compliance standards',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your customers',
    items: [
      'During-production (DUPRO) inspections',
      'Pre-shipment inspection (PSI) per AQL standards',
      'Container loading supervision',
      'Product testing against agreed specifications',
      'Photo and video documentation of every inspection',
    ],
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    subtitle: 'Stay informed throughout manufacturing',
    items: [
      'Regular production progress updates',
      'Raw material verification at factory',
      'Timeline tracking and delay alerts',
      'Photo/video updates from the production floor',
      'Proactive problem identification and resolution',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    subtitle: 'From factory floor to your door',
    items: [
      'Freight forwarding (sea, air, rail, or truck)',
      'Export documentation and customs clearance',
      'Cargo consolidation for partial containers (LCL)',
      'Cargo insurance coordination',
      'Door-to-door delivery tracking',
    ],
  },
  {
    icon: Shield,
    title: 'Risk Management',
    subtitle: 'Protect your business interests',
    items: [
      'Contract review and negotiation support',
      'Secure payment method guidance (T/T, L/C, etc.)',
      'Intellectual property protection advice',
      'Dispute mediation and resolution',
      'Supplier performance monitoring over time',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F2B44] to-[#1B4A7A] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive sourcing support covering every stage of the procurement process — from finding suppliers to delivering goods.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <div key={service.title} className={`lg:flex items-start gap-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="bg-light-bg rounded-lg overflow-hidden">
                  <img
                    data-strk-img-id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}-${i}`}
                    data-strk-img={`[service-title-${i}] [service-subtitle-${i}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <service.icon className="w-10 h-10 text-primary-blue mb-4" />
                <h2 id={`service-title-${i}`} className="text-2xl lg:text-3xl font-bold text-dark-text mb-1">{service.title}</h2>
                <p id={`service-subtitle-${i}`} className="text-lg text-medium-text mb-6">{service.subtitle}</p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                      <span className="text-medium-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Tell us about your product and we will provide a free sourcing assessment within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent-red-hover transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}