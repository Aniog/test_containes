import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  ClipboardCheck, 
  Shield, 
  Factory, 
  Truck, 
  Users, 
  ArrowRight,
  CheckCircle,
  FileText,
  BarChart3
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Services = () => {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    const loadImages = (ref) => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
      return undefined
    }

    const cleanups = [
      loadImages(heroRef),
      loadImages(servicesRef),
    ].filter(Boolean)

    return () => cleanups.forEach(cleanup => cleanup())
  }, [])

  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: 'Supplier Sourcing',
      description: 'We leverage our extensive network to find suppliers that match your specific requirements, budget, and quality standards. Our sourcing process includes market research, supplier shortlisting, and initial screening.',
      features: [
        'Comprehensive market research',
        'Supplier shortlisting (3-5 options)',
        'Initial capability assessment',
        'Price benchmarking',
      ],
      image: 'supplier-sourcing-service',
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: 'Factory Audit',
      description: 'Our on-site factory audits verify manufacturer capabilities, certifications, production capacity, and working conditions. We provide detailed reports with photos and recommendations.',
      features: [
        'On-site facility inspection',
        'Production capacity verification',
        'Quality system assessment',
        'Certification validation',
      ],
      image: 'factory-audit-service',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Quality Inspection',
      description: 'Multi-stage quality control services ensure your products meet specifications. We conduct pre-production, during production, and pre-shipment inspections with detailed reports.',
      features: [
        'Pre-production inspection',
        'During production checks',
        'Pre-shipment inspection',
        'Detailed photo reports',
      ],
      image: 'quality-inspection-service',
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: 'Production Monitoring',
      description: 'Regular oversight during manufacturing to ensure timeline adherence and quality consistency. We provide weekly updates with photos and progress reports.',
      features: [
        'Weekly progress updates',
        'Timeline monitoring',
        'Quality consistency checks',
        'Production photos/videos',
      ],
      image: 'production-monitoring-service',
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management including supplier coordination, customs clearance, and delivery to your doorstep. We handle all documentation and regulations.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Door-to-door delivery',
      ],
      image: 'shipping-coordination-service',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Negotiation Support',
      description: 'Leverage our expertise and local presence to negotiate better prices, payment terms, and delivery schedules with suppliers.',
      features: [
        'Price negotiation',
        'Payment term optimization',
        'Contract review',
        'Risk mitigation',
      ],
      image: 'negotiation-support-service',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900" ref={heroRef}>
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-20"
            data-strk-bg-id="services-hero-bg"
            data-strk-bg="[services-hero-subtitle] [services-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-hero-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p id="services-hero-subtitle" className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive sourcing solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="text-blue-600 mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden bg-gray-200">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      data-strk-img-id={`service-${index}`}
                      data-strk-img={`[service-title-${index}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                    />
                  </div>
                  <h3 id={`service-title-${index}`} className="hidden">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We offer flexible service packages tailored to your specific needs and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
