import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Shield, CheckCircle, BarChart3, Truck, ArrowRight, ClipboardCheck, FileText, Users, Package, Ship } from 'lucide-react'

const serviceDetails = [
  {
    icon: Search,
    title: 'Supplier Verification',
    subtitle: 'Find legitimate, reliable suppliers',
    points: [
      'Business license and tax certificate verification',
      'Export qualification and trade record checks',
      'Cross-reference with industry databases',
      'Financial standing and credit assessment',
      'Reference checks with past clients',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Audits',
    subtitle: 'On-the-ground factory evaluation',
    points: [
      'In-person factory visits by our auditors',
      'Production capacity and equipment assessment',
      'Quality management system review (ISO, etc.)',
      'Workforce size and skill level evaluation',
      'Social compliance and working conditions check',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Quality Inspection',
    subtitle: 'Multi-stage quality control',
    points: [
      'Raw material inspection before production',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    subtitle: 'Real-time production tracking',
    points: [
      'Weekly production progress reports',
      'Photo and video updates from the factory',
      'Schedule adherence monitoring',
      'Raw material quality checks',
      'Early warning system for delays',
    ],
  },
  {
    icon: FileText,
    title: 'Price Negotiation',
    subtitle: 'Get competitive pricing',
    points: [
      'Market price benchmarking',
      'Supplier quotation analysis',
      'Negotiation strategy development',
      'Payment term optimization',
      'Volume discount negotiation',
    ],
  },
  {
    icon: Package,
    title: 'Sample Coordination',
    subtitle: 'Manage samples from factory to you',
    points: [
      'Sample request and tracking',
      'Quality verification of samples',
      'International sample shipping',
      'Feedback coordination with factory',
      'Pre-production sample approval',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    subtitle: 'End-to-end freight management',
    points: [
      'Sea, air, and express freight options',
      'Export documentation and customs clearance',
      'Consolidation and warehousing in China',
      'Cargo insurance arrangement',
      'Door-to-door delivery tracking',
    ],
  },
  {
    icon: Users,
    title: 'OEM/ODM Development',
    subtitle: 'Custom product manufacturing',
    points: [
      'Factory capability assessment for custom products',
      'Technical drawing and spec review',
      'Mold and tooling management',
      'Prototype development coordination',
      'Production ramp-up support',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-brand-400 font-semibold text-sm mb-4 uppercase tracking-wide">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Comprehensive China Sourcing Services
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              From supplier discovery to your warehouse door, we provide full-service sourcing support tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceDetails.map((s, i) => (
              <div key={i} className="p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h2 className="text-xl font-bold text-neutral-900 mb-1">{s.title}</h2>
                <p className="text-brand-600 text-sm font-medium mb-4">{s.subtitle}</p>
                <ul className="space-y-2.5">
                  {s.points.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-3 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Need a Service Not Listed?</h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
            Every sourcing project is unique. Tell us what you need and we will customize a solution.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}