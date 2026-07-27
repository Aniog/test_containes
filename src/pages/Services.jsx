import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Shield, Check, Clock, Truck, FileText, Users, Award } from 'lucide-react'
import CTASection from '../components/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'We identify and qualify manufacturers that match your product specifications, volume requirements, and quality standards.',
      details: [
        'Product specification analysis and supplier matching',
        'RFQ distribution to pre-screened factories',
        'Price and capability comparison reports',
        'Introduction to 3-5 qualified suppliers',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      desc: 'On-site audits confirm that suppliers are legitimate businesses with the capacity and systems to fulfill your orders.',
      details: [
        'Business license and registration verification',
        'Production capacity and equipment assessment',
        'Quality management system review',
        'Workforce and facility evaluation',
      ],
    },
    {
      icon: Check,
      title: 'Quality Inspection',
      desc: 'Independent inspections at key production stages ensure products meet your specifications before shipment.',
      details: [
        'Pre-production sample verification',
        'During-production quality checks',
        'Pre-shipment inspection (AQL standards)',
        'Container loading supervision',
      ],
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Regular updates and milestone tracking keep you informed throughout the manufacturing process.',
      details: [
        'Production schedule establishment',
        'Weekly progress reports with photos',
        'Issue identification and escalation',
        'Timeline adjustment coordination',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      desc: 'We manage freight booking, documentation, and logistics from the factory door to your destination.',
      details: [
        'Freight rate negotiation and booking',
        'Export documentation preparation',
        'Customs clearance coordination',
        'Last-mile delivery arrangement',
      ],
    },
    {
      icon: FileText,
      title: 'Compliance Support',
      desc: 'We help ensure products meet destination market regulatory requirements and documentation standards.',
      details: [
        'Product compliance requirement review',
        'Test report coordination',
        'Labeling and packaging guidance',
        'Certificate of origin and other documents',
      ],
    },
  ]

  const pricingModels = [
    { title: 'Project Fee', desc: 'Fixed fee for defined scope of work. Best for one-time sourcing projects with clear deliverables.' },
    { title: 'Percentage of Order', desc: 'Service fee as a percentage of order value. Common for ongoing sourcing relationships.' },
    { title: 'Retainer + Success', desc: 'Monthly retainer plus performance-based fees. Suitable for companies with regular sourcing needs.' },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] text-white/60 mb-4">OUR SERVICES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Comprehensive Sourcing Services</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            From initial supplier search to final delivery, we provide the expertise and on-the-ground support 
            you need to source successfully from China.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            const svcId = `svc-${idx}`
            return (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <img 
                  className="w-full h-48 object-cover bg-slate-100"
                  data-strk-img-id={`svc-img-${idx}`}
                  data-strk-img={`[${svcId}-title] factory audit quality inspection production`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 id={`${svcId}-title`} className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6 pl-1">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-emerald-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[2px] text-slate-500 mb-3">FLEXIBLE ENGAGEMENT</div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">How We Work With Clients</h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">We adapt our engagement model to match your sourcing volume and frequency.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingModels.map((model, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-slate-200 p-7">
                <h3 className="font-semibold text-lg mb-3">{model.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">All fees are agreed in writing before work begins. No hidden charges.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">What Makes Our Service Different</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-sm">
          <div className="flex gap-4">
            <Award className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-slate-900 mb-1">Factory-direct pricing</div>
              <p className="text-slate-600">We do not add markups to product costs. You pay the factory price plus our transparent service fee.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Users className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-slate-900 mb-1">Direct supplier relationships</div>
              <p className="text-slate-600">We introduce you to manufacturers. You can work with them directly on future orders if you prefer.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <FileText className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-slate-900 mb-1">Full documentation</div>
              <p className="text-slate-600">Every inspection, audit, and communication is documented and shared. Nothing is left to verbal agreements.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Shield className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-slate-900 mb-1">On-the-ground presence</div>
              <p className="text-slate-600">Our team is based in Yiwu with regular travel to major manufacturing regions across China.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Need a specific service?" 
        subtitle="Tell us about your sourcing requirements and we'll recommend the right approach." 
      />
    </div>
  )
}

export default Services
