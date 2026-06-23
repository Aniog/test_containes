import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Clock, FileText, Search, Factory, ClipboardCheck, Truck, BarChart3 } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: FileText,
    title: 'Share Your Requirements',
    duration: 'Day 1',
    desc: 'Fill out our inquiry form with product specifications, target pricing, order quantity, required certifications, and any reference samples or images. The more detail you provide, the faster we can find the right supplier.',
    tips: [
      'Include technical drawings or reference photos',
      'Specify your target FOB or EXW pricing',
      'Share any brand or certification requirements',
      'Let us know your preferred shipping method',
    ],
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Identification & Shortlisting',
    duration: '3–5 Days',
    desc: 'We search our network of 10,000+ pre-screened factories and trade databases. After initial screening, we present a shortlist of 3–5 qualified suppliers with a comparison matrix covering pricing, capabilities, certifications, and track record.',
    tips: [
      'We verify business licenses and export records',
      'Each supplier is scored on multiple criteria',
      'You receive a clear comparison table',
      'We help you narrow to 1–2 top candidates',
    ],
  },
  {
    step: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    duration: '2–3 Days per Factory',
    desc: 'Our team visits each shortlisted factory in person. We verify production lines, quality management systems, certifications, worker conditions, and financial standing. You receive a detailed audit report with photos, videos, scores, and our recommendation.',
    tips: [
      'ISO, BSCI, SEDEX certifications verified',
      'Production capacity assessed in real terms',
      'Equipment list and maintenance records checked',
      'Client references contacted when possible',
    ],
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Sample Development & Negotiation',
    duration: '1–2 Weeks',
    desc: 'We arrange sample production from your chosen factory. After you approve samples, we negotiate pricing, payment terms (typically 30/70 or L/C), production timeline, and quality standards. We review the contract to protect your interests under Chinese commercial law.',
    tips: [
      'Samples sent via DHL/FedEx with tracking',
      'We compare sample quality against your specs',
      'Payment terms structured to reduce your risk',
      'Contract reviewed for IP protection clauses',
    ],
  },
  {
    step: '05',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    duration: '2–6 Weeks',
    desc: 'Once production begins, we conduct systematic quality inspections: initial production check, during-production inspection at 30–50%, pre-shipment inspection with AQL sampling, and container loading supervision. You receive detailed QC reports with timestamped photos at every stage.',
    tips: [
      'AQL Level II sampling standard applied',
      'Defect classification: critical, major, minor',
      'Production progress tracked weekly',
      'We can halt production if quality issues arise',
    ],
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping, Logistics & Delivery',
    duration: '1–4 Weeks',
    desc: 'We manage freight forwarding (FCL, LCL, air, or rail), export customs clearance in China, documentation (Bill of Lading, Certificate of Origin, commercial invoice, packing list), container booking, and cargo insurance. Your goods arrive at your designated port or warehouse.',
    tips: [
      'Freight quotes compared from multiple forwarders',
      'All export documentation handled by us',
      'Real-time shipment tracking provided',
      'Post-delivery quality check support included',
    ],
  },
]

const timelineItems = [
  { label: 'Requirements & Sourcing', weeks: 'Week 1–2' },
  { label: 'Factory Audit & Samples', weeks: 'Week 2–4' },
  { label: 'Production', weeks: 'Week 4–8' },
  { label: 'QC & Shipping', weeks: 'Week 8–10' },
  { label: 'Delivery', weeks: 'Week 10–14' },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <div className="container-wide py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wide">How It Works</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 leading-tight">
              Our Sourcing Process
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              A proven six-step process that takes you from product idea to goods delivered — with clear milestones, transparent communication, and zero surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="bg-surface-alt border-b border-surface-border">
        <div className="container-wide py-10">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {timelineItems.map((ti, idx) => (
              <div key={ti.label} className="flex items-center">
                <div className="bg-white rounded-lg px-4 py-3 border border-surface-border text-center min-w-[130px]">
                  <div className="text-xs text-text-muted mb-1">{ti.weeks}</div>
                  <div className="text-sm font-semibold text-text">{ti.label}</div>
                </div>
                {idx < timelineItems.length - 1 && (
                  <ArrowRight size={20} className="text-text-muted mx-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-text-muted mt-4">
            Typical timeline: 10–14 weeks from inquiry to delivery (varies by product complexity)
          </p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col gap-12">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[31px] top-16 bottom-0 w-0.5 bg-surface-border" />
                )}
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-800 text-white rounded-2xl flex items-center justify-center text-2xl font-extrabold">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-surface-alt rounded-xl p-6 md:p-8 border border-surface-border">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon size={24} className="text-brand-800" />
                          <h2 className="text-xl md:text-2xl font-bold text-text">{step.title}</h2>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-accent-500 font-semibold">
                          <Clock size={16} />
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-5">
                      {step.desc}
                    </p>

                    <div className="bg-white rounded-lg p-4 border border-surface-border">
                      <h4 className="text-sm font-semibold text-text mb-3">Key Points:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.tips.map((tip) => (
                          <div key={tip} className="flex items-start gap-2 text-sm text-text-secondary">
                            <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                            {tip}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-800 text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Sourcing Journey Today
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            The first step is simple — tell us what you need. We'll handle the rest.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}