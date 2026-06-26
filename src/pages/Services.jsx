import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Building2, ClipboardCheck, Eye, Ship, FileCheck, BadgeCheck, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import InquirySection from '@/components/home/InquirySection'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    points: [
      'Detailed RFQ analysis and supplier shortlisting',
      'Leverage databases across 20+ Chinese manufacturing hubs',
      'Price negotiation and payment terms facilitation',
      'Compare multiple supplier quotations in one place',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    subtitle: 'Know exactly who you are dealing with',
    points: [
      'On-site physical audit with photo & video evidence',
      'Check business licenses, certifications, and trade capacity',
      'Assess production lines, equipment, and quality systems',
      'Social compliance and working conditions evaluation',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch issues before they reach your customers',
    points: [
      'Pre-production inspection of raw materials and components',
      'During-production (DUPRO) inspection at key milestones',
      'Pre-shipment inspection (PSI) using AQL sampling standards',
      'Container loading supervision',
    ],
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    subtitle: 'Stay informed throughout the manufacturing process',
    points: [
      'Weekly production progress reports with photos',
      'Real-time communication with factory management',
      'Milestone verification before payment releases',
      'Issue escalation and resolution management',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    subtitle: 'From factory floor to your doorstep',
    points: [
      'Warehouse consolidation and cargo packing',
      'Export customs clearance documentation',
      'Freight booking: sea, air, rail, or express',
      'Insurance coordination and tracking updates',
    ],
  },
  {
    icon: BadgeCheck,
    title: 'Product Compliance',
    subtitle: 'Ensure your products meet regulatory requirements',
    points: [
      'Identify applicable standards (CE, FDA, RoHS, etc.)',
      'Coordinate third-party lab testing',
      'Review product labeling and packaging compliance',
      'Documentation support for import customs clearance',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden">
        <div
          data-strk-bg-id="services-bg-4d12ef"
          data-strk-bg="[services-title] [services-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-slate-900"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p id="services-subtitle" className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Comprehensive sourcing support covering every stage of your supply chain.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-10 items-center`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-brand-700" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-4">{service.subtitle}</p>
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                        <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div
                    data-strk-bg-id={`service-img-${index}`}
                    data-strk-bg={`[service-title-${index}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                    className="w-full aspect-[4/3] bg-slate-100 rounded-xl"
                  />
                  <span id={`service-title-${index}`} className="sr-only">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquirySection />
    </>
  )
}