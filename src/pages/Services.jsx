import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Shield, ClipboardCheck, Factory, Truck, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right suppliers for your products',
    points: [
      'Market research and supplier mapping by product category',
      'Targeted supplier shortlisting based on your criteria',
      'Price negotiation and terms discussion',
      'Capacity and capability assessment',
      'Trade reference verification',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    subtitle: 'On-site audits to confirm supplier legitimacy',
    points: [
      'Business license and registration verification',
      'Production facility and equipment inspection',
      'Quality management system review',
      'Certification authenticity checks (ISO, CE, FDA, etc.)',
      'Social compliance and working conditions assessment',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch issues before they reach your customers',
    points: [
      'Raw material and component verification',
      'During-production (DUPRO) inspections',
      'Pre-shipment (PSI) inspections (AQL sampling)',
      'Third-party lab testing for safety & compliance',
      'Detailed photo and video inspection reports',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    subtitle: 'Real-time oversight of your manufacturing',
    points: [
      'Production schedule tracking and milestone monitoring',
      'Regular progress reports with photos/videos',
      'Raw material sourcing and batch tracking',
      'Packaging and labeling verification',
      'Expediting services for urgent orders',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    subtitle: 'End-to-end freight management',
    points: [
      'Air freight and sea freight coordination',
      'Freight consolidation for partial containers (LCL)',
      'Customs documentation and clearance support',
      'Warehousing and inventory management',
      'Door-to-door delivery tracking',
    ],
  },
  {
    icon: BarChart3,
    title: 'Sample Management',
    subtitle: 'Efficient sample development and approval',
    points: [
      'Sample request coordination with suppliers',
      'Sample collection and quality evaluation',
      'Comparison reports for multiple samples',
      'Feedback relay between you and supplier',
      'Approval workflow management',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {})
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              Comprehensive sourcing support from supplier discovery to final delivery. 
              We tailor our services to your specific product category, budget, and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-5">
                          <Icon className="w-7 h-7 text-navy-700" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2">{service.title}</h2>
                        <p className="text-slate-500 mb-6">{service.subtitle}</p>
                        <ul className="space-y-3">
                          {service.points.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-navy-50 rounded-xl h-80 flex items-center justify-center">
                        <div className="text-navy-400 text-center">
                          <div className="w-24 h-24 mx-auto mb-4 bg-navy-200 rounded-full flex items-center justify-center">
                            <Icon className="w-12 h-12 text-navy-500" />
                          </div>
                          <p className="text-sm font-medium">Service Illustration</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-navy-50 rounded-xl h-80 flex items-center justify-center order-1 lg:order-none">
                        <div className="text-navy-400 text-center">
                          <div className="w-24 h-24 mx-auto mb-4 bg-navy-200 rounded-full flex items-center justify-center">
                            <Icon className="w-12 h-12 text-navy-500" />
                          </div>
                          <p className="text-sm font-medium">Service Illustration</p>
                        </div>
                      </div>
                      <div>
                        <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-5">
                          <Icon className="w-7 h-7 text-navy-700" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2">{service.title}</h2>
                        <p className="text-slate-500 mb-6">{service.subtitle}</p>
                        <ul className="space-y-3">
                          {service.points.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Tell us about your project and we will design a service package that matches 
            your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}