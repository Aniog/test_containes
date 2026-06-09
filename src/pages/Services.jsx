import { Link } from 'react-router-dom'
import { Search, FileCheck, Factory, Truck, Ship, TrendingUp, ClipboardCheck, Settings, ChevronRight, ArrowRight, Shield, CheckCircle2, Phone } from 'lucide-react'

const serviceDetails = [
  {
    icon: Search,
    title: 'Supplier Identification & Sourcing',
    desc: 'We tap into our extensive network of verified manufacturers across China to find the best matches for your product requirements, budget, and volume.',
    items: [
      'Requirement analysis and product specification review',
      'Supplier database screening and shortlisting',
      'Initial supplier outreach and capability assessment',
      'Comparative quotation analysis',
      'Shortlist presentation with our recommendations',
    ],
  },
  {
    icon: FileCheck,
    title: 'Factory Verification & Audits',
    desc: 'Before you commit, we physically visit every factory to verify their capabilities, quality systems, certifications, and business standing — so you make informed decisions.',
    items: [
      'On-site factory visit with structured audit checklist',
      'Business license and certification verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation (ISO, BSCI, etc.)',
      'Detailed audit report with photos and scores',
    ],
  },
  {
    icon: Factory,
    title: 'Quality Control & Inspection',
    desc: 'We provide inspection services at every stage — from initial production samples to final shipment — using internationally recognized AQL standards.',
    items: [
      'Pre-production inspection (raw materials, components)',
      'During-production inspection (random sampling on line)',
      'Pre-shipment inspection (AQL 2.5 / 4.0 standard)',
      'Container loading supervision',
      'Detailed QC reports with photos and measurement data',
    ],
  },
  {
    icon: Truck,
    title: 'Production Monitoring & Follow-Up',
    desc: 'We keep production on track with regular factory visits, progress reports, and proactive communication — you always know the status of your order.',
    items: [
      'Production schedule confirmation and tracking',
      'Weekly progress updates with photos',
      'Timeline risk identification and mitigation',
      'Material and component verification',
      'Shipping readiness confirmation',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    desc: 'From factory floor to your warehouse door, we manage freight, documentation, and customs processes to ensure smooth delivery.',
    items: [
      'Freight option comparison (sea, air, rail, express)',
      'Export documentation and customs clearance',
      'Container consolidation and booking',
      'Insurance arrangement',
      'Shipment tracking and delivery confirmation',
    ],
  },
  {
    icon: Settings,
    title: 'Product Development Support',
    desc: 'We assist with OEM and ODM projects — from translating your design to prototyping, packaging development, and compliance testing.',
    items: [
      'Design translation and technical drawing review',
      'Material sourcing and cost optimization',
      'Prototype and sample coordination',
      'Packaging design and specification',
      'Compliance testing coordination (CE, FDA, RoHS, FCC)',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-wide uppercase mb-4">Services</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              End-to-End China Sourcing Services
            </h1>
            <p className="text-xl text-brand-200 leading-relaxed">
              From supplier discovery to delivery at your door — we provide every service you need to source from China safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceDetails.map((svc, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                    <svc.icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">{svc.desc}</p>
                  <ul className="space-y-3">
                    {svc.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${i % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <img
                      alt={`${svc.title} service`}
                      data-strk-img-id={`service-img-${i}-g7h8i9`}
                      data-strk-img={`china factory ${svc.title.toLowerCase()} professional`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-3 -left-3 bg-brand-600 text-white rounded-xl px-4 py-2 shadow-md">
                    <span className="text-sm font-semibold">SSourcing China</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-brand-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we'll put together a customized plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+8613800000000" className="inline-flex items-center justify-center gap-2 border-2 border-brand-200 hover:border-brand-600 text-brand-700 hover:text-brand-600 font-semibold px-8 py-4 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
