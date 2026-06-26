import { Link } from 'react-router-dom'
import {
  Search, Shield, Eye, Clock, Truck, FileCheck,
  CheckCircle, ArrowRight, BarChart3, Users, Globe, Award
} from 'lucide-react'

const servicesDetailed = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Verification',
    subtitle: 'Find the right factory for your product',
    desc: 'We search our extensive supplier database and industry networks to identify factories that match your exact product requirements, production capacity, target pricing, and compliance needs.',
    features: [
      'Database search across 500+ verified suppliers',
      'Supplier background and license verification',
      'Production capacity assessment',
      'Reference checks from existing buyers',
      'Shortlist of 3–5 qualified suppliers per product',
    ],
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    icon: Shield,
    title: 'Factory Audits & Compliance',
    subtitle: 'Verify before you commit',
    desc: 'Our on-site audit team visits factories to verify their legitimacy, production capabilities, quality management systems, labor practices, and export compliance.',
    features: [
      'On-site factory inspection by our local team',
      'Business license and registration verification',
      'Production line and equipment assessment',
      'Quality management system review',
      'Social compliance and labor standards check',
      'Detailed audit report with photos and scoring',
    ],
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
  },
  {
    icon: Eye,
    title: 'Quality Control & Inspection',
    subtitle: 'Catch defects before they ship',
    desc: 'We conduct multi-stage quality inspections throughout the production cycle — from raw materials to finished goods — using AQL standards and detailed reporting.',
    features: [
      'Pre-production sample approval',
      'During production (DUPRO) inspection',
      'Pre-shipment inspection (PSI) using AQL 2.5',
      'Carton packing and labeling verification',
      'Detailed photo and video reports',
      'Third-party lab testing coordination',
    ],
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    subtitle: 'Stay on schedule, stay informed',
    desc: 'We track your order from confirmation to completion, monitoring production milestones, flagging delays early, and providing regular status updates.',
    features: [
      'Weekly production progress reports',
      'Milestone tracking (molding, sampling, bulk, packing)',
      'Early warning system for potential delays',
      'Direct factory communication on your behalf',
      'Photo documentation at each stage',
    ],
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    subtitle: 'Door-to-door delivery coordination',
    desc: 'We coordinate the entire logistics chain — from factory pickup to final delivery — including customs clearance, documentation, and freight management.',
    features: [
      'Sea freight (FCL and LCL)',
      'Air freight for urgent shipments',
      'Customs documentation and clearance',
      'Container loading supervision',
      'Door-to-door delivery coordination',
      'Competitive freight rates from trusted forwarders',
    ],
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600',
  },
  {
    icon: FileCheck,
    title: 'Sample Management',
    subtitle: 'Evaluate quality before bulk orders',
    desc: 'We collect, evaluate, and ship product samples so you can physically inspect quality, materials, and workmanship before committing to a full production run.',
    features: [
      'Sample collection from multiple suppliers',
      'Quality evaluation and comparison',
      'Photo/video documentation of samples',
      'International courier shipping to your door',
      'Feedback relay to factory for revisions',
    ],
    color: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-600',
  },
]

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Services</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">End-to-End Sourcing Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            From finding the right supplier to delivering goods to your warehouse,
            we handle every step of your China sourcing journey.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesDetailed.map((svc, i) => (
            <div
              key={svc.title}
              className={`rounded-2xl border p-8 lg:p-10 ${svc.color} ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:flex lg:items-start lg:gap-10">
                <div className="lg:w-1/3 mb-6 lg:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm ${svc.iconColor}`}>
                      <svc.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">{svc.title}</h2>
                      <p className="text-sm text-slate-500">{svc.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{svc.desc}</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">What is Included</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {svc.features.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Ready to Start Sourcing?</h2>
          <p className="text-slate-500 text-lg mb-8">Tell us about your product requirements and get a free sourcing plan within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
