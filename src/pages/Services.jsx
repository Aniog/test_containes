import { Link } from 'react-router-dom'
import {
  Search, Factory, ClipboardCheck, Gauge, Ship,
  HeadphonesIcon, CheckCircle, ArrowRight, Shield, Package, FileText
} from 'lucide-react'

const serviceList = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    desc: 'We tap into our network of 10,000+ pre-vetted factories to find the best manufacturing partners for your specific product, budget, and quality requirements.',
    details: [
      'Detailed product requirement analysis',
      'Multi-supplier shortlisting with comparison matrix',
      'Background checks on business licenses and export history',
      'Initial pricing and MOQ negotiation',
      'Supplier recommendation report with pros/cons',
    ],
    imgId: 'svc-sourcing-z9y8x7',
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'We conduct rigorous on-site factory audits to verify everything — from production capacity to quality management systems — before you commit.',
    details: [
      'On-site factory visit with photo/video documentation',
      'Production capacity and equipment assessment',
      'Quality management system review (ISO, BSCI, etc.)',
      'Financial health and business license verification',
      'Worker conditions and social compliance check',
      'Detailed audit report with scores and recommendations',
    ],
    imgId: 'svc-audit-w6v5u4',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Our QC team performs systematic inspections throughout production to ensure your products meet specifications and international quality standards.',
    details: [
      'Pre-production inspection (raw materials & components)',
      'During-production inspection (DUPRO) at 20–80% completion',
      'Pre-shipment inspection (AQL sampling)',
      'Container loading supervision (CLS)',
      'Lab testing coordination for compliance (CE, FCC, FDA, etc.)',
      'Detailed QC reports with timestamped photos',
    ],
    imgId: 'svc-qc-t3s2r1',
  },
  {
    icon: Gauge,
    title: 'Production Monitoring',
    desc: 'We track your order through every stage of production, providing weekly progress updates, milestone verification, and proactive timeline management.',
    details: [
      'Weekly production progress reports',
      'Milestone tracking against agreed timeline',
      'Early warning system for potential delays',
      'On-site production status verification',
      'Coordination between multiple suppliers for complex orders',
    ],
    imgId: 'svc-monitor-q1p2o3',
  },
  {
    icon: Ship,
    title: 'Shipping, Logistics & Customs',
    desc: 'We handle the entire logistics chain — freight booking, container consolidation, export/import documentation, and coordination with your local freight forwarder.',
    details: [
      'Freight forwarding (FCL, LCL, air freight, rail)',
      'Export customs clearance in China',
      'Shipping documentation (B/L, CO, invoice, packing list)',
      'Container booking and consolidation',
      'Cargo insurance arrangement',
      'Delivery tracking and status updates',
    ],
    imgId: 'svc-shipping-n4m5l6',
  },
  {
    icon: HeadphonesIcon,
    title: 'After-Sales Support',
    desc: 'Our service doesn\'t end at shipment. We remain your bridge to the factory for any post-delivery issues, warranty claims, or reorder management.',
    details: [
      'Post-delivery quality issue mediation',
      'Warranty claim coordination with suppliers',
      'Reorder and repeat order management',
      'Continuous supplier performance evaluation',
      'Market intelligence and new product sourcing',
    ],
    imgId: 'svc-support-k7j8h9',
  },
]

export default function Services() {

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <div className="container-wide py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 leading-tight">
              Complete Sourcing Solutions
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              From supplier discovery to final delivery — every service you need for worry-free sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col gap-16">
            {serviceList.map((svc, idx) => (
              <div key={svc.title} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
                <div className="flex-1">
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                    <svc.icon size={28} className="text-brand-800" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
                    {svc.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-5">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {svc.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl flex items-center justify-center">
                    <svc.icon size={64} className="text-brand-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="section-padding bg-surface-alt">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Flexible Pricing for Every Business
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            We offer three engagement models: per-project fixed fees for one-off orders, monthly retainers for ongoing sourcing needs, and percentage-based fees for large-volume programs. Every engagement starts with a free consultation and quote.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { title: 'Per Project', desc: 'Fixed fee based on scope. Ideal for first-time buyers and single-product sourcing.', icon: Package },
              { title: 'Monthly Retainer', desc: 'Ongoing sourcing support. Best for businesses with continuous procurement needs.', icon: Shield },
              { title: 'Volume-Based', desc: 'Small percentage of order value. Suitable for large, recurring production runs.', icon: FileText },
            ].map((plan) => (
              <div key={plan.title} className="bg-white rounded-xl p-6 border border-surface-border">
                <plan.icon size={28} className="text-brand-800 mb-3" />
                <h3 className="font-semibold text-text mb-2">{plan.title}</h3>
                <p className="text-text-secondary text-sm">{plan.desc}</p>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Custom Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}