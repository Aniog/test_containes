import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  Search,
  Factory,
  Layers,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  ArrowRight,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Requirement Intake',
    summary:
      'You share specs, quantity, target price, certifications, and timeline. We confirm the brief in writing.',
    deliverable: 'Sourcing brief',
    duration: 'Day 1',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Shortlist',
    summary:
      'We identify 3–5 pre-screened factories that match your brief and ask for quotations.',
    deliverable: 'Shortlist + quotes',
    duration: 'Day 2–5',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Verification',
    summary:
      'On-site audit for the top candidates: license, production lines, capacity, workforce, references.',
    deliverable: 'Audit report',
    duration: 'Day 5–8',
  },
  {
    num: '04',
    icon: Layers,
    title: 'Sampling',
    summary:
      'Coordinate gold samples, lab tests, and revisions until the sample is approved.',
    deliverable: 'Approved sample',
    duration: 'Day 8–18',
  },
  {
    num: '05',
    icon: ShieldCheck,
    title: 'Production & QC',
    summary:
      'DUPRO and pre-shipment inspections, AQL checks, weekly photo updates, and corrective actions.',
    deliverable: 'Inspection reports',
    duration: 'Production cycle',
  },
  {
    num: '06',
    icon: ClipboardCheck,
    title: 'Final Approval',
    summary:
      'Book, packing list, and commercial invoice reviewed. Final sign-off before the goods leave the factory.',
    deliverable: 'Shipping approval',
    duration: 'Before ETD',
  },
  {
    num: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    summary:
      'Export documents, customs clearance, and freight forwarding. FOB, CIF, or DDP — your call.',
    deliverable: 'Cargo at destination',
    duration: 'Transit',
  },
]

export default function ProcessSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-y bg-surface">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <div className="eyebrow">Sourcing Process</div>
          <h2
            id="process-headline"
            className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy"
          >
            A clear, step-by-step way to source from China
          </h2>
          <p
            id="process-sub"
            className="mt-4 lead"
          >
            Each step has a written deliverable, an owner, and a checkpoint so
            you always know what is happening — without chasing the factory.
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-hairline" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-5">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.num} className="relative">
                  <div className="hidden md:flex w-14 h-14 rounded-full bg-white border-2 border-primary text-primary items-center justify-center relative z-10 shadow-card">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="md:hidden inline-flex w-12 h-12 rounded-lg bg-primary-soft text-primary items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="mt-3 md:mt-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-ink uppercase tracking-wider">
                      <span>Step {step.num}</span>
                      <span className="text-hairline">·</span>
                      <span>{step.duration}</span>
                    </div>
                    <h3 className="mt-1.5 text-base font-semibold text-brand-navy">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                      {step.summary}
                    </p>
                    <div className="mt-2 text-xs text-ink">
                      <span className="font-semibold text-primary">Deliverable: </span>
                      {step.deliverable}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link to="/how-it-works" className="btn-primary">
            Read the full process
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/case-studies" className="btn-secondary">
            See real projects
          </Link>
        </div>
      </div>
    </section>
  )
}
