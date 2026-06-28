import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search,
  Shield,
  ClipboardCheck,
  TrendingUp,
  Truck,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and evaluate manufacturers that match your product requirements, budget, and quality standards. Our team searches across multiple industrial regions in China to find the best-fit suppliers for your needs.',
    features: [
      'Product-specific supplier research',
      'Initial capability assessment',
      'Price comparison across multiple suppliers',
      'Supplier shortlist with detailed profiles',
    ],
    imgId: 'sourcing-img-m1n2o3',
    imgQuery: '[services-title] [service-sourcing]',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    desc: 'Our team conducts on-site factory audits to confirm business licenses, production capacity, quality management systems, and working conditions. We provide detailed audit reports with photos and recommendations.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Quality system evaluation',
      'Working condition inspection',
      'Detailed audit report with photos',
    ],
    imgId: 'verification-img-p4q5r6',
    imgQuery: '[service-verification]',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'We conduct thorough quality inspections at every stage of production. From pre-production sample checks to final pre-shipment inspections, we ensure your products meet specifications before they leave the factory.',
    features: [
      'Pre-production sample inspection',
      'During-production quality checks',
      'Pre-shipment final inspection',
      'Container loading supervision',
      'Detailed inspection reports',
    ],
    imgId: 'inspection-img-s7t8u9',
    imgQuery: '[service-inspection]',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'We monitor your orders throughout the production process, providing regular progress updates and timeline monitoring. This helps identify and resolve issues early, keeping your orders on schedule.',
    features: [
      'Production timeline monitoring',
      'Regular progress updates',
      'Early issue identification',
      'Communication with factory management',
      'Delivery schedule coordination',
    ],
    imgId: 'production-img-v1w2x3',
    imgQuery: '[service-production]',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle the entire shipping process, from freight forwarding and customs documentation to final delivery coordination. Our logistics partners ensure your goods arrive safely and on time.',
    features: [
      'Freight forwarding arrangement',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo insurance coordination',
      'Delivery tracking and updates',
    ],
    imgId: 'shipping-img-y4z5a6',
    imgQuery: '[service-shipping]',
  },
]

function ServiceCard({ service, index }) {
  const isEven = index % 2 === 0

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>
      <div className={isEven ? '' : 'lg:order-2'}>
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
          <service.icon className="w-6 h-6 text-blue-700" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">{service.desc}</p>
        <ul className="mt-6 space-y-3">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`rounded-xl overflow-hidden bg-slate-100 aspect-[4/3] ${isEven ? '' : 'lg:order-1'}`}
        data-strk-bg-id={service.imgId}
        data-strk-bg={service.imgQuery}
        data-strk-bg-ratio="4x3"
        data-strk-bg-width="800"
      />
    </div>
  )
}

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="services-title" className="text-3xl md:text-4xl font-extrabold">Our Sourcing Services</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Comprehensive sourcing support from supplier discovery to final delivery.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Need Help Sourcing from China?</h2>
          <p className="mt-4 text-slate-600">
            Tell us what you need and we will recommend the right services for your project.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
