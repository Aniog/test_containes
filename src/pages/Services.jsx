import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Factory,
  ClipboardCheck,
  Truck,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  FileSearch,
  BarChart,
  Users,
  HardHat,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    subtitle: 'Find suppliers you can trust',
    features: [
      'Business license and registration verification',
      'Financial stability assessment',
      'Production capability evaluation',
      'Existing client reference checks',
      'Export history and compliance review',
      'Anti-counterfeit and IP protection screening',
    ],
    desc: 'We conduct thorough background checks on potential suppliers to ensure they are legitimate, financially stable, and capable of meeting your requirements. Our verification process goes beyond online research to provide real, actionable intelligence.',
  },
  {
    icon: Factory,
    title: 'Factory Audits',
    subtitle: 'See what is really happening on the ground',
    features: [
      'On-site production capacity assessment',
      'Quality management system evaluation',
      'Working conditions and labor practices',
      'Equipment and technology audit',
      'Raw material sourcing verification',
      'Social compliance and environmental check',
    ],
    desc: 'Our experienced auditors visit factories in person to evaluate production capabilities, quality systems, and working conditions. You receive a detailed report with photos, findings, and recommendations.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Ensure products meet your specifications',
    features: [
      'Raw material inspection before production',
      'During-production (DUPRO) quality checks',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL (Acceptable Quality Level) sampling',
      'Customized inspection checklists',
    ],
    desc: 'We provide multi-stage quality control services following international standards. Our inspectors check products against your specifications at every critical stage of production.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Get your goods where they need to go',
    features: [
      'Sea freight (FCL & LCL)',
      'Air freight and express shipping',
      'Customs documentation and clearance',
      'Warehousing and consolidation',
      'Cargo insurance arrangement',
      'Door-to-door delivery options',
    ],
    desc: 'We manage the complete logistics process from factory to your doorstep. Our team handles all documentation, customs clearance, and coordinates with freight forwarders to ensure timely delivery.',
  },
  {
    icon: Shield,
    title: 'Production Follow-Up',
    subtitle: 'Stay informed throughout production',
    features: [
      'Weekly production progress reports',
      'Material sourcing and verification',
      'Production timeline monitoring',
      'Real-time issue reporting',
      'Photo and video documentation',
      'Expediting services for urgent orders',
    ],
    desc: 'We keep your production on track with regular monitoring, detailed progress reports, and proactive communication. If issues arise, we address them immediately to minimize delays.',
  },
  {
    icon: Star,
    title: 'Product Sourcing',
    subtitle: 'Find the right product at the right price',
    features: [
      'Market research and trend analysis',
      'Supplier shortlisting and comparison',
      'Competitive pricing negotiation',
      'Sample coordination and evaluation',
      'Custom product development support',
      'Minimum order quantity negotiations',
    ],
    desc: 'Our sourcing team leverages extensive supplier networks and market knowledge to find the best products at competitive prices. We handle the entire sourcing cycle from concept to delivery.',
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
      <section className="bg-primary-900 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              End-to-end sourcing support from supplier discovery to final delivery. We help you navigate the Chinese market with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-24">
            {services.map((service, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-12 items-center" id={service.title.toLowerCase().replace(/\s+/g, '-')}>
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h2>
                  <p className="text-accent-600 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-neutral-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div
                    className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-primary-100"
                    data-strk-bg-id={`service-img-${i}`}
                    data-strk-bg={`[service-title-${i}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                  <div className="hidden">
                    <span id={`service-title-${i}`}>{service.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Sourcing Solution?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Every business is unique. Tell us about your requirements and we will create a tailored service package.
            </p>
            <Link to="/contact" className="btn-primary text-lg inline-flex items-center gap-2">
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}