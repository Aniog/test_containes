import { useEffect, useRef } from 'react'
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
import SourcingInquiryForm from '@/components/SourcingInquiryForm'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers across China that match your product requirements, quality standards, and budget.',
    details: [
      'Product-specific supplier identification',
      'Initial capability assessment',
      'Request for quotation (RFQ) management',
      'Price and term negotiation',
      'Supplier shortlisting and recommendation',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to confirm that suppliers are legitimate, capable, and compliant with your requirements.',
    details: [
      'Business license and registration verification',
      'Production capacity evaluation',
      'Quality management system review',
      'Social compliance assessment',
      'Detailed audit report with photos',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional inspections at every stage of production to catch issues before they become costly problems.',
    details: [
      'Pre-production inspection (raw materials)',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    description: 'Regular monitoring and reporting to keep your orders on schedule and address issues proactively.',
    details: [
      'Production schedule tracking',
      'Regular progress updates',
      'Issue identification and resolution',
      'Timeline management',
      'Communication with factory on your behalf',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support to get your goods from the factory floor to your warehouse.',
    details: [
      'Freight forwarding (sea and air)',
      'Customs documentation preparation',
      'Export and import clearance',
      'Cargo insurance arrangement',
      'Delivery tracking and coordination',
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
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Sourcing Services</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Comprehensive sourcing support from supplier discovery to final delivery.
            Each service can be used independently or combined for end-to-end management.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h2 id={`service-title-${i}`} className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p id={`service-desc-${i}`} className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden border border-slate-200 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div
                    className="w-full h-64 md:h-80 bg-gradient-to-br from-slate-200 to-slate-300"
                    data-strk-bg-id={`service-bg-${i + 1}`}
                    data-strk-bg={`[service-title-${i}] [service-desc-${i}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Need Help Sourcing from China?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Tell us about your sourcing needs and we will recommend the right services for your situation.
              </p>
              <Link to="/how-it-works" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
                See How It Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <SourcingInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
