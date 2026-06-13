import { ArrowRight, MessageSquare, Search, Package, ClipboardCheck, Truck, CheckCircle2, Phone } from 'lucide-react'
import { SectionHeader, CTAButton, StatCard } from '@/components/common/SharedComponents'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    timeline: 'Day 1-2',
    desc: 'Send us your product specifications, target price, quantity needed, and desired timeline. Our team reviews your requirements and clarifies any details within 24 hours.',
    details: [
      'Product specifications and design files',
      'Target price range and budget',
      'Quantity and order frequency',
      'Quality standards and certifications required',
      'Preferred shipping method and destination',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Identification & Matching',
    timeline: 'Day 3-7',
    desc: 'We identify suitable suppliers from our verified network, request quotations, and present you with a shortlist of qualified options with detailed pricing.',
    details: [
      'Search our database of 500+ verified suppliers',
      'Request and compare multiple quotations',
      'Evaluate supplier capabilities against your specs',
      'Prepare detailed comparison report',
      'Present 3-5 shortlisted suppliers with pricing',
    ],
  },
  {
    num: '03',
    icon: Package,
    title: 'Sample Ordering & Verification',
    timeline: 'Day 8-21',
    desc: 'We arrange product samples from your preferred supplier(s), conduct quality checks, and ship samples to you for approval before moving to mass production.',
    details: [
      'Coordinate sample production with selected supplier',
      'Inspect samples against your specifications',
      'Document any deviations or quality concerns',
      'Ship samples to your location for approval',
      'Facilitate any revisions or improvements',
    ],
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Order Management & Production',
    timeline: 'Day 22-50',
    desc: 'Once you approve samples, we negotiate the final contract, manage production, and conduct multi-stage quality inspections throughout the manufacturing process.',
    details: [
      'Negotiate final pricing and payment terms',
      'Draft and review production contracts',
      'Pre-production sample and material verification',
      'In-line quality inspections during production',
      'Weekly progress reports with photos',
    ],
  },
  {
    num: '05',
    icon: Truck,
    title: 'Final Inspection & Shipping',
    timeline: 'Day 51-70',
    desc: 'We perform a comprehensive pre-shipment inspection, arrange logistics, handle all documentation, and coordinate delivery to your specified destination.',
    details: [
      'Pre-shipment inspection using AQL standards',
      'Container loading supervision',
      'Freight booking (sea, air, or rail)',
      'Export and customs documentation',
      'Door-to-door delivery with full tracking',
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            How We Work
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A transparent, step-by-step process designed to make sourcing from China simple and risk-free. Typical project timeline: 8-12 weeks from inquiry to delivery.
          </p>
        </div>
      </section>

      {/* Timeline overview */}
      <section className="bg-white py-12 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="text-center p-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm mx-auto mb-2">
                  {step.num}
                </div>
                <div className="font-semibold text-xs text-content-primary">{step.title}</div>
                <div className="text-content-muted text-xs mt-1">{step.timeline}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, idx) => (
              <div key={step.num} className="grid lg:grid-cols-2 gap-10 items-start">
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-brand-orange font-bold text-4xl">{step.num}</span>
                    <span className="text-content-muted text-sm font-medium bg-surface-light px-3 py-1 rounded-full">{step.timeline}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-content-primary mb-4">{step.title}</h2>
                  <p className="text-content-secondary text-base leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-2.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-trust-green shrink-0 mt-0.5" />
                        <span className="text-content-secondary text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''} bg-surface-light rounded-2xl overflow-hidden`}>
                  <div className="h-64 md:h-80 flex items-center justify-center">
                    <step.icon className="w-20 h-20 text-brand-navy/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-surface-light py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Deliverables"
            title="What You Receive at Each Stage"
            description="Every step of the process comes with documented deliverables so you always know exactly where your project stands."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Supplier Report', desc: 'Detailed profiles, pricing comparisons, and capacity assessments for each shortlisted supplier.' },
              { title: 'Sample Inspection Report', desc: 'Photos, measurements, and quality evaluation of every sample before it ships to you.' },
              { title: 'Production Updates', desc: 'Weekly reports with factory photos, milestone progress, and any issues flagged for resolution.' },
              { title: 'QC & Shipping Docs', desc: 'Full inspection reports, loading photos, customs documents, and shipment tracking information.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-border-light">
                <h3 className="font-semibold text-content-primary mb-3">{item.title}</h3>
                <p className="text-content-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Start Your Sourcing Project Today
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            No commitment required. Tell us what you need and receive a detailed sourcing proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton className="text-base px-8 py-4">
              Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
