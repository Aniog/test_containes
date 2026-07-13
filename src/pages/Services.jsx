import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, BarChart3, Truck,
  Shield, ArrowRight, CheckCircle, FileCheck, Users,
  Globe, HeadphonesIcon
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    subtitle: 'Find the right manufacturer for your product',
    points: [
      'Market research and supplier mapping based on your product requirements',
      'Shortlisting of qualified suppliers with verified credentials',
      'Comparison of pricing, lead times, and minimum order quantities',
      'Confidentiality agreements to protect your product designs',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Verification & Audits',
    subtitle: 'On-the-ground verification of manufacturing facilities',
    points: [
      'Physical on-site factory visits by our local team',
      'Business license and legal status verification',
      'Production capacity and equipment assessment',
      'Quality control systems and certification review',
      'Social compliance and working conditions evaluation',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection & Control',
    subtitle: 'Comprehensive quality assurance at every stage',
    points: [
      'Raw material inspection before production begins',
      'During-production (DUPRO) quality checks',
      'Pre-shipment inspection (PSI) with AQL sampling standards',
      'Packaging and labeling verification',
      'Detailed photographic and video inspection reports',
    ],
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    subtitle: 'Real-time visibility into your production progress',
    points: [
      'Regular production progress updates with photos',
      'Timeline tracking and milestone management',
      'Proactive identification and resolution of production issues',
      'Coordination between you and the factory',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'End-to-end logistics management',
    points: [
      'Freight booking (sea, air, rail, express)',
      'Export customs clearance and documentation',
      'Cargo insurance coordination',
      'Door-to-door delivery options',
      'Real-time shipment tracking',
    ],
  },
  {
    icon: Shield,
    title: 'Supplier Risk Management',
    subtitle: 'Ongoing monitoring to protect your supply chain',
    points: [
      'Continuous supplier performance evaluation',
      'Financial health monitoring',
      'Alternative supplier identification for risk mitigation',
      'Contract review and negotiation support',
    ],
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
      <section className="bg-gradient-to-br from-primary via-primary to-primary-light pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
              Comprehensive sourcing services designed to help you find, verify, and procure 
              quality products from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={service.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                <div className="flex-1">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary-light" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.subtitle}</p>
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-xl bg-surface h-64 md:h-80 flex items-center justify-center overflow-hidden">
                    <img
                      alt={service.title}
                      data-strk-img-id={`service-img-${i}`}
                      data-strk-img={`[service-title-${i}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                    <span id={`service-title-${i}`} className="hidden">{service.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Every business is unique. Tell us about your specific requirements and we'll design a service package that fits your needs.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-base bg-white text-primary hover:bg-blue-50 transition-colors">
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}