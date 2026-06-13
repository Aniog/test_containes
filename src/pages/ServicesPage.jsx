import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Building2, ClipboardCheck, Timer, Ship, FileText, Package } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers that match your product requirements, budget, and quality standards. Our team searches across multiple platforms and our verified network to find the best fit.',
    details: [
      'Product-specific manufacturer matching',
      'RFQ distribution to multiple suppliers',
      'Price comparison and negotiation',
      'Supplier capability assessment',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site audits to verify that suppliers are legitimate manufacturers with the capacity and systems to fulfill your orders reliably.',
    details: [
      'Business license verification',
      'Production facility inspection',
      'Quality management system review',
      'Worker conditions assessment',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional quality control inspections at every stage of production to ensure your products meet agreed specifications and standards.',
    details: [
      'Pre-production inspection',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
    ],
  },
  {
    icon: Timer,
    title: 'Production Monitoring',
    description: 'Regular progress updates and on-site follow-ups to keep your production on schedule and address issues before they become problems.',
    details: [
      'Weekly production status reports',
      'Timeline tracking and alerts',
      'Issue resolution coordination',
      'Factory communication management',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support from factory pickup to final delivery, including all documentation and customs requirements.',
    details: [
      'Freight forwarding (sea and air)',
      'Customs documentation preparation',
      'Cargo insurance arrangement',
      'Delivery tracking and coordination',
    ],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We coordinate sample requests, evaluate quality against your requirements, and manage revisions until you are satisfied with the product.',
    details: [
      'Sample request coordination',
      'Sample quality evaluation',
      'Revision feedback to factory',
      'Sample shipping to your address',
    ],
  },
  {
    icon: Package,
    title: 'Custom Packaging & Labeling',
    description: 'Coordinate custom packaging design, printing, and labeling to meet your brand requirements and destination market regulations.',
    details: [
      'Packaging design coordination',
      'Label and barcode printing',
      'Compliance marking verification',
      'Retail-ready packaging options',
    ],
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1a2744] py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 id="services-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Comprehensive solutions to manage every aspect of your China supply chain, from finding suppliers to delivering products to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12 md:space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#1a2744]/5 rounded-lg flex items-center justify-center">
                      <service.icon size={20} className="text-[#1a2744]" />
                    </div>
                    <h2 id={`service-title-${index}`} className="text-xl md:text-2xl font-bold text-[#1a2744]">{service.title}</h2>
                  </div>
                  <p className="text-[#4a5568] leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#4a5568]">
                        <span className="w-1.5 h-1.5 bg-[#d4a843] rounded-full mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="aspect-video rounded-lg bg-[#f5f7fa] overflow-hidden"
                  data-strk-bg-id={`service-bg-${index}-a1b2c3`}
                  data-strk-bg={`[service-title-${index}] [services-page-title]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">
              Need a Custom Sourcing Solution?
            </h2>
            <p className="text-[#4a5568] mb-8">
              Every sourcing project is unique. Tell us your requirements and we will create a tailored plan for your business.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
