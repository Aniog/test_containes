import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Eye, Truck, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    description: 'We leverage our extensive network and industry expertise to find the right suppliers for your specific product requirements.',
    features: [
      'Database of 1,200+ verified Chinese factories',
      'Industry-specific supplier matching',
      'Initial capability assessment',
      'Competitive pricing comparison',
      'Supplier shortlist with detailed profiles',
    ],
    image: 'sourcing agent factory visit meeting with Chinese supplier in office',
    imgId: 'service-detail-sourcing-img',
    titleId: 'service-detail-sourcing-title',
    descId: 'service-detail-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audits',
    description: 'Comprehensive on-site factory audits to ensure your suppliers are legitimate, capable, and compliant.',
    features: [
      'Business license and registration verification',
      'On-site facility inspection',
      'Production capacity assessment',
      'Quality management system review',
      'Worker conditions and compliance check',
      'Detailed audit report with photos',
    ],
    image: 'factory audit inspection quality control manager checking production facility',
    imgId: 'service-detail-verification-img',
    titleId: 'service-detail-verification-title',
    descId: 'service-detail-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection Services',
    description: 'Multi-stage quality control to catch issues early and ensure products meet your specifications before shipment.',
    features: [
      'Pre-production sample evaluation',
      'During production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'AQL sampling standards',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
    image: 'quality inspection products testing measurement tools factory floor',
    imgId: 'service-detail-inspection-img',
    titleId: 'service-detail-inspection-title',
    descId: 'service-detail-inspection-desc',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Stay informed throughout the production process with regular updates and on-site presence when needed.',
    features: [
      'Production schedule tracking',
      'Weekly progress reports',
      'Issue identification and resolution',
      'Communication bridge with factory',
      'Timeline management',
      'Photo and video documentation',
    ],
    image: 'production monitoring factory floor manufacturing progress tracking dashboard',
    imgId: 'service-detail-monitoring-img',
    titleId: 'service-detail-monitoring-title',
    descId: 'service-detail-monitoring-desc',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics management from factory floor to your warehouse door, anywhere in the world.',
    features: [
      'Freight forwarding (sea, air, rail)',
      'Customs documentation and clearance',
      'Container consolidation',
      'Door-to-door delivery coordination',
      'Real-time shipment tracking',
      'Insurance arrangement',
    ],
    image: 'shipping container loading port logistics international freight cargo vessel',
    imgId: 'service-detail-shipping-img',
    titleId: 'service-detail-shipping-title',
    descId: 'service-detail-shipping-desc',
  },
  {
    icon: BarChart3,
    title: 'Cost Optimization',
    description: 'Strategic sourcing and negotiation to help you achieve the best possible landed cost without sacrificing quality.',
    features: [
      'Price benchmarking and analysis',
      'Volume discount negotiation',
      'Alternative material suggestions',
      'Supply chain optimization',
      'Currency risk management',
      'Total cost of ownership analysis',
    ],
    image: 'business negotiation meeting cost analysis charts pricing strategy',
    imgId: 'service-detail-cost-img',
    titleId: 'service-detail-cost-title',
    descId: 'service-detail-cost-desc',
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
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
            Comprehensive Sourcing Services
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From initial supplier identification to final delivery, we provide end-to-end sourcing 
            solutions that give you confidence in your China supply chain.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}] Chinese sourcing service`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      className="w-full aspect-[4/3] object-cover bg-gray-100"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 id={service.titleId} className="text-3xl font-bold text-navy mb-4">
                    {service.title}
                  </h2>
                  <p id={service.descId} className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-trust-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and get a free, no-obligation quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
