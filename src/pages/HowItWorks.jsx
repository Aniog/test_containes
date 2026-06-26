import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Search, Building, Package, ClipboardCheck, Truck, Clock, ShieldCheck, MessageCircle, Users } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: FileText,
    title: 'Define Your Requirements',
    duration: '1–2 Days',
    desc: 'Share your product specifications, target price, order quantity, quality standards, timeline, and any certifications required. Our team reviews your brief and confirms feasibility.',
    detail: 'The more detail you provide, the better we can match you with the right supplier. We\'ll ask about materials, dimensions, functionality, packaging, compliance requirements, and target markets.',
    deliverables: ['Requirement brief confirmed', 'Feasibility assessment', 'Initial timeline estimate'],
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Search & Shortlisting',
    duration: '5–10 Days',
    desc: 'We search our database of 3,000+ audited factories and our broader industry network to identify 3–5 qualified manufacturers that match your requirements.',
    detail: 'We go beyond online directories. Our team leverages years of industry relationships, trade show contacts, and regional manufacturing networks across Guangdong, Zhejiang, Jiangsu, and other hubs.',
    deliverables: ['Supplier shortlist (3–5 factories)', 'Factory profiles', 'Preliminary pricing ranges'],
  },
  {
    step: '03',
    icon: Building,
    title: 'Factory Audit & Verification',
    duration: '3–7 Days',
    desc: 'We conduct on-site audits of shortlisted factories. Our team physically visits each facility to verify production capacity, quality systems, certifications, and export experience.',
    detail: 'Our audit covers: business license verification, factory size and layout, production lines and equipment, quality control processes, worker conditions, export history, and client references.',
    deliverables: ['Detailed audit report', 'Photo/video documentation', 'Factory rating and recommendation'],
  },
  {
    step: '04',
    icon: Package,
    title: 'Sampling & Price Negotiation',
    duration: '7–14 Days',
    desc: 'Selected factories produce samples. We negotiate pricing, MOQs, payment terms, and lead times. We collect samples and ship them to you for evaluation and approval.',
    detail: 'We handle all sample coordination — from communicating your requirements to tracking production. We also negotiate on your behalf to secure competitive pricing and favorable terms.',
    deliverables: ['Physical samples shipped to you', 'Finalized pricing and terms', 'Comparative analysis of quotes'],
  },
  {
    step: '05',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    duration: '30–60 Days',
    desc: 'Once you approve the sample and place the order, we monitor production closely. Our QC team conducts inspections at multiple stages to ensure quality standards are met.',
    detail: 'We follow AQL (Acceptable Quality Level) standards. Inspections include: pre-production (raw materials), during production (20–30% completion), and pre-shipment (80–100% completion).',
    deliverables: ['Weekly progress reports', 'QC inspection reports', 'Production photos and videos'],
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: '7–30 Days',
    desc: 'We coordinate logistics from factory to your warehouse. This includes freight forwarding, customs documentation, cargo insurance, and shipment tracking.',
    detail: 'We work with major carriers for sea, air, rail, and express shipping. We handle export documentation, certificates of origin, fumigation certificates, and all customs paperwork.',
    deliverables: ['Shipping documentation', 'Real-time tracking', 'Confirmed delivery to your warehouse'],
  },
]

const timeline = [
  { label: 'Requirements', days: '1–2 days' },
  { label: 'Supplier Search', days: '5–10 days' },
  { label: 'Factory Audit', days: '3–7 days' },
  { label: 'Sampling', days: '7–14 days' },
  { label: 'Production', days: '30–60 days' },
  { label: 'Shipping', days: '7–30 days' },
  { label: 'Total', days: '53–123 days', isTotal: true },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Process</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              How We Source for You
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              A proven 6-step process that has helped 500+ buyers successfully source from China. 
              Transparent, systematic, and results-driven.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-12 bg-surface-alt border-b border-border">
        <div className="section-container">
          <div className="flex flex-wrap items-center gap-3 md:gap-0">
            {timeline.map((item, i) => (
              <div key={item.label} className="flex items-center">
                <div className={`px-4 py-2 rounded-lg text-center ${item.isTotal ? 'bg-primary text-white' : 'bg-white border border-border'}`}>
                  <div className="text-xs text-text-muted">{item.label}</div>
                  <div className={`text-sm font-bold ${item.isTotal ? 'text-white' : 'text-primary'}`}>{item.days}</div>
                </div>
                {i < timeline.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-text-light mx-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 md:py-28">
        <div className="section-container max-w-4xl">
          <div className="space-y-16">
            {steps.map((item, i) => (
              <div key={item.step} className="relative pl-16 md:pl-20">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                  {item.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border" />
                )}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h2 className="text-xl md:text-2xl font-bold">{item.title}</h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                </div>
                <p className="text-text-muted leading-relaxed mb-4">{item.desc}</p>
                <div className="bg-surface-alt rounded-xl p-5 mb-4">
                  <p className="text-sm text-text-muted leading-relaxed">{item.detail}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">Deliverables</h4>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Process Works</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              What sets our sourcing methodology apart from DIY approaches and other agents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">On-Site Presence</h3>
              <p className="text-sm text-text-muted">We are physically in China. We visit factories, not just email them. You get real verification, not just paperwork.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Bilingual Communication</h3>
              <p className="text-sm text-text-muted">Our team speaks fluent English and Chinese. Nothing gets lost in translation. We bridge the cultural and language gap.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Dedicated Account Manager</h3>
              <p className="text-sm text-text-muted">One point of contact for your entire project. Your account manager knows your business and your requirements intimately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your Sourcing Journey?</h2>
          <p className="text-text-muted mb-8">
            The first step is simple — tell us what you need. We'll handle the rest.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}