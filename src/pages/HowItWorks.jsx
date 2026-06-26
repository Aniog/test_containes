import { Link } from 'react-router-dom'
import { MessageSquare, Search, FileCheck, Factory, Package, Truck, ArrowRight, CheckCircle, Clock, Shield, DollarSign } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    description: 'Tell us what products you need, including specifications, target price, quantity, and timeline. You can use our inquiry form or schedule a call with our team.',
    timeline: 'Day 1',
    details: [
      'Share product specifications or reference samples',
      'Provide target pricing and expected volume',
      'Discuss packaging and labeling requirements',
      'Set your quality standards and inspection criteria',
    ],
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Sourcing & Verification',
    description: 'We search our network and the broader market to find suppliers that match your requirements. Each candidate is verified through background checks and factory assessments.',
    timeline: 'Days 2-5',
    details: [
      'Search across 500+ vetted supplier contacts',
      'Verify business licenses and export history',
      'Conduct on-site factory capability assessments',
      'Present you with 2-3 shortlisted suppliers with pricing',
    ],
  },
  {
    step: '03',
    icon: FileCheck,
    title: 'Sampling & Approval',
    description: 'We arrange product samples from your chosen supplier. Our team evaluates samples against your specifications and provides detailed feedback before you approve production.',
    timeline: 'Days 6-20',
    details: [
      'Order and receive product samples',
      'Evaluate quality, dimensions, and materials',
      'Document specifications and finalize designs',
      'Confirm pricing and production timeline with supplier',
    ],
  },
  {
    step: '04',
    icon: Factory,
    title: 'Production & Quality Control',
    description: 'Once you approve the sample, production begins. We monitor the manufacturing process and conduct inspections at critical stages to ensure quality is maintained throughout.',
    timeline: 'Days 20-60',
    details: [
      'Monitor raw material sourcing and preparation',
      'Conduct in-line inspections during production',
      'Send weekly photo/video progress updates',
      'Perform pre-shipment inspection before packing',
    ],
  },
  {
    step: '05',
    icon: Package,
    title: 'Packaging & Final Inspection',
    description: 'Products are packed according to your specifications with custom branding, barcodes, and retail-ready packaging. A final inspection ensures everything meets your standards.',
    timeline: 'Days 60-65',
    details: [
      'Apply custom packaging and labeling',
      'Verify barcodes, markings, and documentation',
      'Conduct final pre-shipment quality check',
      'Prepare packing list and shipping documents',
    ],
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We book freight, prepare export documentation, and coordinate with customs brokers. You receive tracking information and delivery updates until goods arrive at your destination.',
    timeline: 'Days 65-85',
    details: [
      'Book sea freight, air freight, or express shipping',
      'Prepare export customs documentation',
      'Coordinate with your customs broker for import',
      'Provide tracking and delivery confirmation',
    ],
  },
]

const benefits = [
  { icon: Clock, title: 'Save Time', desc: 'We handle the day-to-day management of your China supply chain.' },
  { icon: Shield, title: 'Reduce Risk', desc: 'Verified suppliers, inspected products, and documented processes.' },
  { icon: DollarSign, title: 'Lower Costs', desc: 'Competitive pricing through local negotiation and supplier competition.' },
]

export default function HowItWorks() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Our Process</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-extrabold text-white">
            How It Works
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            A clear, step-by-step process from your initial inquiry to final delivery. Full transparency at every stage.
          </p>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative flex gap-6 md:gap-8">
                  {/* Timeline line */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 relative z-10">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 bg-border flex-1 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-surface-alt rounded-xl border border-border p-6 md:p-8 mb-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="md:hidden w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">Step {item.step} &middot; {item.timeline}</span>
                        <h3 className="font-heading font-bold text-xl text-text">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{item.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-text text-sm">
                          <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="bg-white rounded-xl border border-border p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text mb-2">{b.title}</h3>
                  <p className="text-text-muted text-sm">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            The first step is simple: tell us what you need. We'll respond within 24 hours with a sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-base px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
