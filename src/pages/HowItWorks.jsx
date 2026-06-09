import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Search, Shield, ClipboardCheck, Truck, Clock, CheckCircle, Phone, FileText, Camera, AlertTriangle, Package, Globe, Users } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    desc: 'Submit your product specifications, target price, quantity, quality standards, and delivery timeline through our inquiry form or direct communication.',
    details: ['Product description and specifications', 'Target unit price and quantity', 'Quality and certification requirements', 'Preferred delivery timeline', 'Target market and compliance needs'],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Identification & Quotes',
    desc: 'Our team searches our verified supplier network to find manufacturers that match your requirements. We provide competitive quotes with detailed cost breakdowns.',
    details: ['Search verified supplier database', 'Request and evaluate samples', 'Compare pricing from multiple suppliers', 'Provide detailed cost breakdown', 'Present supplier shortlist with recommendations'],
  },
  {
    num: '03',
    icon: Shield,
    title: 'Factory Verification & Sampling',
    desc: 'We visit the recommended factories to verify their legitimacy, capabilities, and quality systems. Samples are produced and shipped for your final approval.',
    details: ['On-site factory verification visit', 'Business license and registration check', 'Production capability assessment', 'Quality management system review', 'Sample production and shipping'],
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Order Placement & Quality Control',
    desc: 'After sample approval, we place the order and manage the entire production process. Inspections are conducted at key stages to ensure specifications are met.',
    details: ['Order placement and contract management', 'Raw material verification', 'In-line production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Weekly progress reports with photos'],
  },
  {
    num: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate all logistics including freight forwarding, customs documentation, container loading supervision, and provide tracking until delivery.',
    details: ['Freight forwarding arrangement', 'Customs documentation preparation', 'Container loading supervision', 'Shipment tracking and updates', 'Door-to-door delivery coordination'],
  },
]

const StepCard = ({ step, index }) => {
  const isEven = index % 2 === 0
  return (
    <div className="relative">
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
        <div className={!isEven ? 'lg:col-start-2' : ''}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary text-neutral-900 font-bold text-lg flex items-center justify-center">
              {step.num}
            </div>
            <div className="h-px flex-1 bg-neutral-200 hidden sm:block" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
          <p className="text-base text-neutral-600 leading-relaxed mb-5">{step.desc}</p>
          <ul className="space-y-2.5">
            {step.details.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-700">{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={!isEven ? 'lg:col-start-1' : ''}>
          <div className="bg-neutral-50 rounded-2xl p-10 flex items-center justify-center border border-neutral-100 min-h-[280px]">
            <step.icon className="w-24 h-24 text-primary/20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">How It Works</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">Your Sourcing Process, Simplified</h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            Five clear steps from initial inquiry to delivery. We handle the complexity so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Typical Project Timeline</h2>
            <p className="mt-3 text-lg text-neutral-500">Indicative timelines for a standard sourcing project.</p>
          </div>
          <div className="space-y-4">
            {[
              { phase: 'Inquiry & Requirements', time: 'Day 1-2', desc: 'Submit requirements, receive confirmation and questions' },
              { phase: 'Supplier Search & Quotes', time: 'Day 3-7', desc: 'We identify suppliers and provide competitive quotes' },
              { phase: 'Factory Audit & Samples', time: 'Day 8-21', desc: 'On-site verification and sample production' },
              { phase: 'Sample Approval & Order', time: 'Day 22-25', desc: 'You approve samples and we place the order' },
              { phase: 'Production & QC', time: 'Day 26-55', desc: 'Manufacturing with inspections at key stages' },
              { phase: 'Shipping & Delivery', time: 'Day 56-80', desc: 'Freight, customs, and door-to-door delivery' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-lg p-5 border border-neutral-200">
                <div className="w-20 shrink-0 text-center">
                  <span className="text-sm font-bold text-primary">{item.time}</span>
                </div>
                <div className="h-10 w-px bg-neutral-200" />
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">{item.phase}</h4>
                  <p className="text-sm text-neutral-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-4">Timelines are estimates and vary by product complexity, quantity, and shipping method.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-neutral-500 mb-8">Share your product requirements and we will begin the sourcing process within 24 hours.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
