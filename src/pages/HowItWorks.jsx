import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageSquare, Search, FileSearch, ClipboardCheck, Factory, Ship,
  CheckCircle2, ArrowRight, Calendar, ShieldCheck, Mail,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const steps = [
  {
    n: '01',
    icon: MessageSquare,
    title: 'Sourcing brief & scoping',
    duration: 'Day 1',
    body: 'You share product specs, target price, MOQ and any certifications. We confirm scope, fees and timeline within 24 working hours.',
    deliverables: [
      'Signed sourcing agreement and NDA (optional)',
      'Project plan with milestones and fees',
    ],
  },
  {
    n: '02',
    icon: Search,
    title: 'Supplier search & shortlist',
    duration: 'Days 2 - 7',
    body: 'We screen 20-50 suppliers across the relevant industrial cluster, request quotations from the most promising, and present a shortlist of 3-5.',
    deliverables: [
      'Side-by-side comparison of price, MOQ, lead time and capacity',
      'Initial background check on shortlisted factories',
    ],
  },
  {
    n: '03',
    icon: FileSearch,
    title: 'Sampling & verification',
    duration: 'Days 7 - 21',
    body: 'We collect samples, consolidate them in our office, and visit the most promising factories on-site for a structured audit before you commit.',
    deliverables: [
      'Consolidated sample shipment to your office',
      'Factory audit report with photos and video',
    ],
  },
  {
    n: '04',
    icon: ClipboardCheck,
    title: 'Negotiation & contract',
    duration: 'Days 18 - 25',
    body: 'We negotiate price, payment terms, packaging and tooling fees in your name. A bilingual sales contract is signed before deposit.',
    deliverables: [
      'Line-item quotation breakdown',
      'Bilingual sales contract with milestones',
    ],
  },
  {
    n: '05',
    icon: Factory,
    title: 'Production follow-up & QC',
    duration: 'Production lead time',
    body: 'We monitor production weekly and run inspections at the right moments: pre-production, during production (DUPRO) and pre-shipment (PSI).',
    deliverables: [
      'Weekly status report with photos and video',
      'Inspection reports at AQL 2.5 with pass/fail decision',
    ],
  },
  {
    n: '06',
    icon: Ship,
    title: 'Shipping & handover',
    duration: 'Final 1 - 4 weeks',
    body: 'We arrange consolidation, export clearance and shipment by sea, air, rail or express, and hand over a clean document set for customs at destination.',
    deliverables: [
      'Booking, B/L, CI, PL, CO and other documents',
      'Tracking from factory pickup to destination port',
    ],
  },
]

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'We work for the buyer',
    body: 'We never accept commissions or kickbacks from suppliers. Quotations are issued in your name.',
  },
  {
    icon: Calendar,
    title: 'Weekly reporting',
    body: 'Every active project gets a structured weekly report. No silence, no surprises.',
  },
  {
    icon: CheckCircle2,
    title: 'Inspection before payment',
    body: 'Final balance is only released after pre-shipment inspection passes AQL 2.5.',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  useEffect(() => {
    let cleanup
    ;(async () => {
      try {
        const sdk = await import('@strikingly/sdk')
        const cfg = await import('../strk-img-config.json')
        if (sdk?.ImageHelper?.loadImages && containerRef.current) {
          cleanup = sdk.ImageHelper.loadImages(cfg.default || cfg, containerRef.current)
        }
      } catch (e) { /* ignore */ }
    })()
    return () => { if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How It Works"
        title="A clear, six-step sourcing workflow"
        description="The same process we use for every B2B project, refined over 1,200+ orders. You always know what is happening, who is doing it, and what it costs."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {steps.map((s, idx) => {
              const Icon = s.icon
              const isEven = idx % 2 === 1
              return (
                <div
                  key={s.n}
                  className={`grid lg:grid-cols-12 gap-8 items-start ${isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  <div className="lg:col-span-5">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden aspect-[4/3]">
                      <img
                        alt={s.title}
                        className="w-full h-full object-cover"
                        data-strk-img-id={`how-step-${s.n}-img-9d`}
                        data-strk-img={`[how-step-${s.n}-desc] [how-step-${s.n}-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-navy text-white rounded-md flex items-center justify-center font-bold text-sm">
                        {s.n}
                      </div>
                      <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-md flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                        {s.duration}
                      </div>
                    </div>
                    <h3 id={`how-step-${s.n}-title`} className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                      {s.title}
                    </h3>
                    <p id={`how-step-${s.n}-desc`} className="text-slate-600 leading-relaxed mb-4">
                      {s.body}
                    </p>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Deliverables
                      </div>
                      <ul className="space-y-1.5 text-sm text-slate-700">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
              Our commitments
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              How we keep the process honest
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((g) => {
              const Icon = g.icon
              return (
                <div key={g.title} className="bg-white border border-slate-200 rounded-lg p-7">
                  <div className="w-11 h-11 bg-blue-50 text-brand-blue rounded-md flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{g.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{g.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Ready to start your sourcing project?
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Send us a brief. We respond within 24 working hours with a clear
            scope and fees.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentDark text-white px-7 py-3 rounded-md font-semibold transition"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:hello@ssourcingchina.com"
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-800 hover:bg-slate-50 px-7 py-3 rounded-md font-semibold transition"
            >
              <Mail className="w-4 h-4" /> Email us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
