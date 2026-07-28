import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, Building2, ClipboardCheck, HardHat, Ship, FileSearch,
  CheckCircle, ArrowRight, Shield, BarChart3, Clock, Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    subtitle: 'Find reliable suppliers you can trust',
    features: [
      'Business license and registration verification',
      'Trade record and export history analysis',
      'Financial background checks',
      'Reference checks with existing clients',
      'Capacity assessment and capability evaluation',
    ],
    imgId: 'services-verification-9b2c4d',
  },
  {
    icon: Building2,
    title: 'Factory Audits',
    subtitle: 'On-the-ground assessment of manufacturing facilities',
    features: [
      'Social compliance audits (SA8000, BSCI, SMETA)',
      'Quality management system review (ISO 9001)',
      'Production capability and equipment assessment',
      'Working conditions and safety inspection',
      'Detailed audit report with photos and recommendations',
    ],
    imgId: 'services-audit-7d3e5f',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Comprehensive QC at every production stage',
    features: [
      'Pre-production inspection of raw materials',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (AQL standards)',
      'Container loading supervision',
      'Lab testing and certification coordination',
    ],
    imgId: 'services-qc-4e6f1g',
  },
  {
    icon: HardHat,
    title: 'Production Monitoring',
    subtitle: 'Dedicated oversight of your manufacturing orders',
    features: [
      'Daily production progress tracking',
      'Real-time issue identification and resolution',
      'Photo and video updates from the factory floor',
      'Production timeline management',
      'Weekly status reports with actionable insights',
    ],
    imgId: 'services-production-8g5h2i',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    subtitle: 'End-to-end logistics management',
    features: [
      'Freight forwarding (sea, air, rail, express)',
      'Customs documentation and clearance support',
      'Cargo consolidation and warehousing',
      'Insurance arrangement',
      'Door-to-door delivery tracking',
    ],
    imgId: 'services-shipping-1h3j5k',
  },
  {
    icon: FileSearch,
    title: 'Product Sourcing',
    subtitle: 'Strategic sourcing for new products and categories',
    features: [
      'Market research and competitive analysis',
      'Supplier discovery and shortlisting',
      'RFQ management and price negotiation',
      'Sample coordination and evaluation',
      'NDA and contract management support',
    ],
    imgId: 'services-sourcing-2j4k6l',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Comprehensive sourcing support from supplier discovery to final delivery. 
              Each service is designed to reduce risk, improve quality, and save you time.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div key={service.title} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
              <div className="flex-1">
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-500 mb-6">{service.subtitle}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-gray-200 rounded-xl overflow-hidden h-64 md:h-80">
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[service-title-${service.imgId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <span id={`service-title-${service.imgId}`} className="hidden">{service.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SSourcing China</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Risk Mitigation', desc: 'We identify and address potential issues before they become problems, protecting your investment and reputation.' },
              { icon: BarChart3, title: 'Cost Efficiency', desc: 'Our local knowledge and supplier relationships help you negotiate better prices and avoid common sourcing pitfalls.' },
              { icon: Clock, title: 'Time Savings', desc: 'We handle the time-consuming work of supplier research, communication, and coordination so you can focus on your business.' },
              { icon: Award, title: 'Quality Assurance', desc: 'Rigorous inspection protocols and production monitoring ensure your products meet specifications every time.' },
              { icon: Building2, title: 'Local Presence', desc: 'Based in Guangzhou with a network across China\'s major manufacturing hubs, we are where your suppliers are.' },
              { icon: Ship, title: 'Full Logistics Support', desc: 'From factory to doorstep, we manage the entire shipping process with reliable partners and real-time tracking.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Specific Service?
          </h2>
          <p className="text-brand-200 mb-8">
            We customize our services based on your specific requirements. Contact us to discuss your project.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="text-base">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}