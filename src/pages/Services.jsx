import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Package, FileCheck, Factory, Truck, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: 'Supplier Verification',
      description: 'Before we introduce you to any factory, we conduct comprehensive verification to ensure legitimacy and reliability.',
      features: [
        'Business license verification',
        'Factory site audits',
        'Production capacity assessment',
        'Financial stability check',
        'Reputation & reference checks'
      ],
      imgId: 'service-detail-verification-001',
      imgDesc: 'Factory audit team conducting supplier verification'
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: 'Sample Sourcing',
      description: 'Evaluate product quality before committing to bulk orders with our efficient sampling service.',
      features: [
        'Fast sample procurement',
        'Quality evaluation reports',
        'Cost-effective shipping',
        'Sample-to-production comparison',
        'Multiple supplier samples'
      ],
      imgId: 'service-detail-sampling-002',
      imgDesc: 'Product samples ready for evaluation'
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: 'Quality Inspection',
      description: 'Multi-stage quality control processes to ensure your products meet specifications.',
      features: [
        'Pre-production inspections',
        'During-production checks',
        'Pre-shipment inspections',
        'Loading supervision',
        'Detailed inspection reports'
      ],
      imgId: 'service-detail-inspection-003',
      imgDesc: 'Quality inspector checking products'
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: 'Production Monitoring',
      description: 'Stay informed about your production progress with regular updates and monitoring.',
      features: [
        'Weekly progress reports',
        'Production timeline tracking',
        'Issue identification & resolution',
        'Milestone verification',
        'Real-time communication'
      ],
      imgId: 'service-detail-monitoring-004',
      imgDesc: 'Monitoring production line progress'
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support to ensure your products reach you safely and cost-effectively.',
      features: [
        'Freight forwarder coordination',
        'Customs documentation',
        'Shipping method optimization',
        'Cargo insurance arrangement',
        'Delivery tracking'
      ],
      imgId: 'service-detail-shipping-005',
      imgDesc: 'Container loading for international shipping'
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Price Negotiation',
      description: 'Leverage our local expertise and relationships to secure better pricing.',
      features: [
        'Market price analysis',
        'Volume discount negotiation',
        'Payment term optimization',
        'Cost breakdown transparency',
        'Long-term contract support'
      ],
      imgId: 'service-detail-negotiation-006',
      imgDesc: 'Business negotiation meeting with suppliers'
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="services-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p id="services-hero-subtitle" className="text-xl text-blue-100">
              Comprehensive sourcing solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[services-hero-subtitle] [services-hero-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.imgDesc}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Sourcing?
          </h2>
          <p id="services-cta-subtitle" className="text-lg text-gray-600 mb-8">
            Contact us today for a free consultation about your sourcing needs
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
