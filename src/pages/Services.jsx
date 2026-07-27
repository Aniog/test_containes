import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, BarChart3, Truck, Package, Shield, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    subtitle: 'Comprehensive background checks on potential suppliers',
    desc: 'We conduct thorough due diligence on every supplier before you engage. Our team verifies business licenses, checks export history, reviews client references, and assesses financial stability. We search for any red flags including past disputes, quality issues, or compliance violations.',
    features: [
      'Business license & registration verification',
      'Export history & trade record analysis',
      'Client reference checks',
      'Financial stability assessment',
      'Compliance & certification verification',
      'Red flag screening & risk assessment',
    ],
    imgId: 'services-verification-2a3b4c',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
  {
    icon: Factory,
    title: 'Factory Audits',
    subtitle: 'On-site inspection of production facilities',
    desc: 'Our experienced auditors visit factories in person to evaluate production capacity, quality control systems, working conditions, and compliance with international standards. We provide detailed audit reports with photos, recommendations, and risk ratings.',
    features: [
      'Production capacity assessment',
      'Quality management system review',
      'Equipment & technology evaluation',
      'Workforce & skill level analysis',
      'Health & safety compliance check',
      'Environmental & social compliance',
    ],
    imgId: 'services-audit-3b4c5d',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Multi-stage quality control throughout production',
    desc: 'We implement rigorous quality control procedures at every stage of production. Our inspectors check raw materials, monitor production processes, and conduct final inspections before shipment, all against your approved specifications and samples.',
    features: [
      'Raw material inspection & testing',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Product testing per international standards',
      'Detailed inspection reports with photos',
    ],
    imgId: 'services-inspection-4c5d6e',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    subtitle: 'Real-time tracking and progress reporting',
    desc: 'We keep you informed throughout the production cycle with regular updates, milestone tracking, and proactive issue resolution. Our team maintains direct communication with factory management to ensure your order stays on schedule and meets quality standards.',
    features: [
      'Weekly production progress reports',
      'Milestone tracking & schedule management',
      'Real-time communication with factories',
      'Issue escalation & resolution',
      'Photo & video documentation',
      'Production capacity utilization tracking',
    ],
    imgId: 'services-monitoring-5d6e7f',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    subtitle: 'End-to-end freight and customs management',
    desc: 'We handle all logistics from factory to your door, including freight booking, cargo consolidation, export documentation, customs clearance, and last-mile delivery. Our logistics partners offer competitive rates across air, sea, and rail freight options.',
    features: [
      'Sea freight (FCL & LCL) coordination',
      'Air freight & express shipping',
      'Rail freight services',
      'Cargo consolidation & warehousing',
      'Export documentation & customs clearance',
      'Door-to-door delivery management',
    ],
    imgId: 'services-shipping-6e7f8a',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
  {
    icon: Package,
    title: 'Product Sourcing',
    subtitle: 'Strategic sourcing from China\'s manufacturing base',
    desc: 'Our sourcing team leverages deep industry knowledge and extensive supplier networks to find the right manufacturers for your products. We conduct market research, shortlist qualified suppliers, negotiate pricing, and coordinate sample development.',
    features: [
      'Market research & feasibility analysis',
      'Supplier identification & shortlisting',
      'Price negotiation & cost optimization',
      'Sample coordination & evaluation',
      'IP protection consultation',
      'Contract & terms negotiation support',
    ],
    imgId: 'services-sourcing-7f8a9b',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
  {
    icon: Shield,
    title: 'Customs & Compliance',
    subtitle: 'Navigate import regulations and trade compliance',
    desc: 'We help ensure your products meet all regulatory requirements for your target market, including product certifications, labeling requirements, and import documentation. Our team stays updated on the latest trade policies and compliance standards.',
    features: [
      'Product certification assistance (CE, FDA, RoHS, etc.)',
      'Import duty & tariff analysis',
      'Customs documentation preparation',
      'Trade agreement qualification',
      'Labeling & packaging compliance',
      'Restricted material screening',
    ],
    imgId: 'services-compliance-8a9b1c',
    color: 'text-brand-500',
    bgColor: 'bg-brand-50',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="container-page text-center">
          <span className="text-brand-300 text-sm font-medium tracking-wider uppercase">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Sourcing Services</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            End-to-end support for importing from China — from supplier verification to final delivery
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-page space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="flex flex-col lg:flex-row gap-10 items-start">
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center mb-4', service.bgColor)}>
                    <Icon className={cn('h-7 w-7', service.color)} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">{service.title}</h2>
                  <p className="text-neutral-500 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-neutral-500 leading-relaxed mb-6">{service.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button size="lg">
                      Discuss This Service
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className={`flex-1 w-full lg:w-auto ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-xl overflow-hidden bg-neutral-100">
                    <div
                      className="h-64 md:h-80 lg:h-96 w-full"
                      data-strk-bg-id={service.imgId}
                      data-strk-bg={`[${service.imgId}-title] [${service.imgId}-desc]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="800"
                    />
                    <div className="sr-only">
                      <h3 id={`${service.imgId}-title`}>{service.title}</h3>
                      <p id={`${service.imgId}-desc`}>{service.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-neutral-500 max-w-xl mx-auto mb-8">
            Every project is unique. Tell us about your requirements and we'll propose a tailored approach.
          </p>
          <Link to="/contact">
            <Button size="xl" variant="accent">
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

