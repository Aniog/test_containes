import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/shared/SectionHeading'
import CTA from '@/components/shared/CTA'
import { CheckCircle, Users, Shield, Award, Clock, Truck, FileText, Search, Package } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    document.title = 'Our Services | Supplier Sourcing, QC & Logistics | SSourcing China'
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return cleanup
  }, [])

  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Sourcing',
      desc: 'We locate manufacturers that match your product specifications, quality standards, and volume requirements.',
      details: [
        'Database and network search across major manufacturing regions',
        'Initial capability screening and preliminary pricing',
        'Shortlist of 5-8 qualified suppliers with comparison',
        'Introduction and initial communication support',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification & Audits',
      desc: 'On-site verification to confirm legitimacy, capabilities, and operating standards before you commit.',
      details: [
        'Business license and registration verification',
        'Production capacity and equipment assessment',
        'Quality management system review',
        'Workforce and facility conditions evaluation',
        'Written audit report with photos and findings',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Quality Control & Inspection',
      desc: 'Independent quality checks at key production stages to catch issues before shipment.',
      details: [
        'Pre-production sample verification',
        'During-production inspection (DUPRO)',
        'Pre-shipment inspection (PSI)',
        'Container loading supervision',
        'Detailed inspection reports with photos',
      ],
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Regular updates and timeline management to keep your order on track.',
      details: [
        'Production schedule confirmation',
        'Weekly progress reports',
        'Issue identification and escalation',
        'Coordination of corrective actions',
        'Timeline risk assessment',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics Coordination',
      desc: 'We manage the movement of goods from factory to your destination.',
      details: [
        'Freight quote comparison (sea, air, rail)',
        'Booking and documentation coordination',
        'Export compliance guidance',
        'Customs documentation support',
        'Tracking and delivery coordination',
      ],
    },
    {
      icon: FileText,
      title: 'Documentation & Compliance Support',
      desc: 'Assistance with the paperwork required for international trade.',
      details: [
        'Commercial invoice and packing list review',
        'Certificate of origin coordination',
        'Product compliance documentation guidance',
        'Bill of lading and shipping documents',
        'Record keeping recommendations',
      ],
    },
  ]

  const addons = [
    'Product development and specification refinement',
    'Packaging design and compliance review',
    'Private label and branding coordination',
    'Trade show support and supplier meetings',
    'Ongoing supplier relationship management',
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="services-hero-bg"
          data-strk-bg="China manufacturing factory floor industrial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
          <p className="text-lg text-slate-600">We provide practical, hands-on support at every stage of the sourcing process. You choose the level of involvement you need.</p>
        </div>
      </section>

      <section className="section max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-slate-600">{service.desc}</p>
              </div>
              <div className="md:col-span-7">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    data-strk-img-id={`service-${idx}`}
                    data-strk-img={`service-${idx}-title China factory audit inspection quality control`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div id={`service-${idx}-title`} className="sr-only">{service.title}</div>
                </div>
                <ul className="space-y-2">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading title="Additional Support" subtitle="Optional services available based on your project needs." />
          <div className="grid md:grid-cols-2 gap-4">
            {addons.map((addon, idx) => (
              <div key={idx} className="flex gap-3 p-4 bg-white border border-slate-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section max-w-4xl mx-auto px-6">
        <SectionHeading title="How We Work With Clients" />
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="mb-4">We operate as an extension of your team. Most clients engage us for a specific sourcing project, and we provide a clear scope of work and timeline before starting.</p>
          <p className="mb-4">We do not take ownership of goods or handle payments to suppliers. Our role is to identify options, verify facts, monitor progress, and coordinate logistics.</p>
          <p>We communicate in English and provide written reports at each stage. You remain in control of decisions and supplier relationships.</p>
        </div>
      </section>

      <CTA />
    </div>
  )
}

export default Services
