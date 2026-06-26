import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Factory,
  ClipboardCheck,
  Eye,
  Truck,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Shield,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Vetting',
    subtitle: 'Find the right manufacturer — verified and reliable.',
    desc: 'We tap into our extensive network of 500+ pre-qualified Chinese manufacturers to find suppliers that match your exact requirements. Every supplier undergoes our rigorous 5-step verification process before being recommended.',
    bullets: [
      'Supplier identification based on your product specs',
      'Business license and certification verification',
      'Production capacity and capability assessment',
      'Financial health and stability review',
      'Shortlist of 3-5 best-matched suppliers',
    ],
    imgId: 'service-detail-sourcing-a1',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Audit & Verification',
    subtitle: 'Know exactly who you are working with.',
    desc: 'Before you commit to any supplier, we conduct comprehensive on-site factory audits. Our bilingual auditors visit the facility, assess capabilities, verify certifications, and provide a detailed report with photos and recommendations.',
    bullets: [
      'On-site facility inspection and assessment',
      'Production line and equipment evaluation',
      'Quality management system review (ISO, BSCI, etc.)',
      'Workforce and shift capacity analysis',
      'Detailed audit report with photos and scoring',
    ],
    imgId: 'service-detail-audit-b2',
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control Inspections',
    subtitle: 'Ensure your products meet specifications.',
    desc: 'Our QC team follows internationally recognized AQL (Acceptable Quality Level) standards. We inspect at every critical stage — from initial samples and pre-production to in-line checks and final random inspection before shipment.',
    bullets: [
      'Pre-production sample inspection and approval',
      'In-line inspection during production (DUPRO)',
      'Final random inspection before shipment (FRI)',
      'Container loading supervision',
      'Detailed photographic inspection report within 24 hours',
    ],
    imgId: 'service-detail-qc-c3',
  },
  {
    id: 'production-monitoring',
    icon: Eye,
    title: 'Production Monitoring',
    subtitle: 'Keep your orders on track and on schedule.',
    desc: 'We don\'t just place the order and hope for the best. Our team makes regular factory visits during production to track progress, identify issues early, and ensure your timeline stays on track. You receive weekly status updates.',
    bullets: [
      'Weekly production progress tracking',
      'Early identification of delays or quality issues',
      'Raw material and component verification',
      'Production schedule adherence monitoring',
      'Weekly status reports with photos',
    ],
    imgId: 'service-detail-monitor-d4',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'From factory floor to your doorstep.',
    desc: 'We handle the entire logistics chain. Our team coordinates freight forwarding, prepares shipping documentation, manages customs clearance, and offers consolidated shipping options to reduce your total landed costs.',
    bullets: [
      'Freight forwarding (FCL, LCL, air freight)',
      'Customs documentation and compliance',
      'Consolidated shipping from multiple suppliers',
      'Cargo insurance arrangement',
      'Real-time shipment tracking and updates',
    ],
    imgId: 'service-detail-shipping-e5',
  },
  {
    id: 'product-development',
    icon: TrendingUp,
    title: 'Product Development Support',
    subtitle: 'Turn your concept into a production-ready product.',
    desc: 'From design refinement and material selection to prototyping, packaging design, and compliance testing — we support your entire product development journey with practical, cost-effective solutions.',
    bullets: [
      'Design for manufacturing (DFM) review',
      'Material sourcing and cost optimization',
      'Prototyping and sampling coordination',
      'Packaging design and sourcing',
      'Compliance testing (CE, FCC, RoHS, etc.)',
    ],
    imgId: 'service-detail-dev-f6',
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-gold font-semibold text-sm tracking-wide uppercase mb-3">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            End-to-End Sourcing Solutions
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Every service we offer is designed to reduce your risk, save you
            time, and ensure you get exactly what you pay for.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          className={`py-16 md:py-24 ${
            i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-5">
                  <svc.icon className="w-7 h-7 text-navy" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {svc.title}
                </h2>
                <p className="text-accent-red font-medium mb-4 text-lg">
                  {svc.subtitle}
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <ul className="space-y-3">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[svc-${svc.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span id={`svc-${svc.id}-title`} className="hidden">
                  {svc.title}
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Not sure which services you need?
            </h2>
            <p className="text-gray-300 text-lg">
              Let&apos;s discuss your project and we&apos;ll recommend the right
              approach.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-red hover:bg-red-700 text-white font-semibold rounded-lg px-8 py-3.5 transition-colors shadow-lg flex-shrink-0"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}