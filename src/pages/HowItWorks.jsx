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
  CheckCircle2,
  Clock,
  FileCheck2,
  ArrowRight,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/InquiryForm'

const phases = [
  {
    num: '01',
    title: 'Intake & Planning',
    days: 'Day 1–2',
    intro:
      'We agree on the brief, the deliverables, and the fee in writing. Nothing moves forward without a signed scope.',
    icon: FileText,
    steps: [
      {
        t: 'Project brief',
        d: 'You share specs, quantity, target price, certifications, and timeline. We confirm in writing within 1 business day.',
      },
      {
        t: 'Scope & fee',
        d: 'We send a written proposal: which services are in scope, what is excluded, the fee, and the timeline.',
      },
      {
        t: 'NDA (if needed)',
        d: 'For private-label or new product projects, we sign a mutual NDA before sharing any supplier details.',
      },
    ],
  },
  {
    num: '02',
    title: 'Sourcing & Verification',
    days: 'Day 2–10',
    intro:
      'We shortlist 3–5 factories, audit the top candidates, and run sampling until you have an approved pre-production sample.',
    icon: Search,
    steps: [
      {
        t: 'Supplier shortlist',
        d: 'We identify factories that match your product, quantity, and price target. You receive 3–5 written quotations.',
      },
      {
        t: 'On-site verification',
        d: 'We visit the top 1–2 candidates: production floor, equipment, workforce, license, export history, references.',
      },
      {
        t: 'Sample development',
        d: 'We coordinate gold samples, then pre-production samples. Lab testing is arranged when needed.',
      },
      {
        t: 'Sample approval',
        d: 'You sign off on a specific sample. That signed sample becomes the reference standard for the production run.',
      },
    ],
  },
  {
    num: '03',
    title: 'Production & Quality Control',
    days: 'Day 15–60 (depending on product)',
    intro:
      'Once the PO is signed, we run the production cycle with written milestones, weekly updates, and AQL-based inspections.',
    icon: ShieldCheck,
    steps: [
      {
        t: 'Purchase order',
        d: 'PO, proforma invoice, and quality agreement signed by both you and the factory. Payment milestones agreed.',
      },
      {
        t: 'Production kick-off',
        d: 'Raw materials confirmed, production line reserved, and a written schedule with milestones is shared with you.',
      },
      {
        t: 'DUPRO inspection',
        d: 'When production reaches 20–30%, we run a during-production inspection to catch issues early.',
      },
      {
        t: 'Pre-shipment inspection',
        d: 'AQL-based inspection against the approved sample. Defects are corrected at the factory before booking.',
      },
      {
        t: 'Final sign-off',
        d: 'You receive the inspection report with photos and videos. Once approved, we book the shipment.',
      },
    ],
  },
  {
    num: '04',
    title: 'Shipping & Delivery',
    days: 'Day 60+ (depends on transit)',
    intro:
      'We consolidate, export, and ship to your destination — FOB, CIF, or DDP — with full documentation.',
    icon: Truck,
    steps: [
      {
        t: 'Export documents',
        d: 'Commercial invoice, packing list, certificate of origin, and any certificates (CE, RoHS, etc.) prepared.',
      },
      {
        t: 'Container loading',
        d: 'We supervise the loading and send a photo record. Container is sealed and sealed number recorded.',
      },
      {
        t: 'Freight & customs',
        d: 'Sea, air, or rail freight booked. Customs clearance handled, duties calculated (DDP option).',
      },
      {
        t: 'Delivery',
        d: 'Cargo delivered to your warehouse, port, or Amazon FC. We track the shipment and confirm arrival.',
      },
    ],
  },
]

const faqs = [
  {
    q: 'Do I need to visit the factory myself?',
    a: 'No. Our Shenzhen-based team handles factory visits, audits, and inspections. You receive photo and video reports. We can also arrange for you to join a video call with the factory from your office.',
  },
  {
    q: 'What if I already have a supplier?',
    a: 'You can use us for QC inspections, production follow-up, or shipping only. We do not require a full sourcing engagement — pick the services you need.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Sampling usually takes 2–3 weeks. Production is typically 30–60 days depending on category, plus ocean transit (about 18–30 days to the US or EU). We will give you a written timeline before the project starts.',
  },
  {
    q: 'What happens if there is a quality problem?',
    a: 'If our inspection finds defects, the factory is required to correct them before the container leaves. We do not sign off on the shipment until the issues are resolved. If a dispute arises, we have the documentation to support your claim.',
  },
  {
    q: 'What is the AQL standard you use?',
    a: 'We default to AQL 2.5 for general consumer products, AQL 1.0 for higher-end or regulated goods, and AQL 4.0 for low-cost items. The exact level is agreed with you in writing before production starts.',
  },
  {
    q: 'Can you handle small orders?',
    a: 'Yes. We have helped clients with 100-unit trial orders. For very small orders we may suggest consolidating with another buyer to share a container.',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How It Works"
        headline="A practical 4-phase process, with written deliverables at every step"
        subline="Sourcing from China should not be a leap of faith. Below is the exact workflow we use on every project — short enough to read in 2 minutes, detailed enough to run a real program."
        ctaLabel="Get a Free Sourcing Quote"
        ctaTo="/contact"
        bgQuery="[page-hero-headline] [page-hero-subline]"
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="space-y-16">
            {phases.map((phase, idx) => {
              const Icon = phase.icon
              return (
                <div key={phase.num} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <div className="sticky top-24">
                      <div className="inline-flex items-center gap-2 text-xs font-semibold text-muted-ink uppercase tracking-wider">
                        <Clock className="w-3.5 h-3.5" />
                        {phase.days}
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                            Phase {phase.num}
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
                            {phase.title}
                          </h2>
                        </div>
                      </div>
                      <p className="mt-4 text-ink-soft leading-relaxed">{phase.intro}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="rounded-2xl border border-hairline bg-white shadow-card overflow-hidden">
                      <ol className="divide-y divide-hairline">
                        {phase.steps.map((s, i) => (
                          <li key={s.t} className="p-5 md:p-6 flex gap-4">
                            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-surface text-primary text-sm font-bold flex items-center justify-center">
                              {i + 1}
                            </div>
                            <div>
                              <div className="font-semibold text-ink">{s.t}</div>
                              <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                                {s.d}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow">What you can expect</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">
              Clear checkpoints, no surprises
            </h2>
            <p className="mt-4 lead">
              The whole point of the process is to give you visibility and
              control — without the time-zone drag.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: FileCheck2,
                title: 'Written scope',
                desc: 'Every project has a written scope with deliverables, dates, and a fee — agreed before work starts.',
              },
              {
                icon: CheckCircle2,
                title: 'Written sign-offs',
                desc: 'Sample approval, production milestones, and final QC are all signed off in writing, with photos.',
              },
              {
                icon: ClipboardCheck,
                title: 'Single point of contact',
                desc: 'You have one English-speaking manager who replies within 1 business day. No call-center handoffs.',
              },
            ].map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-hairline bg-white p-6 shadow-card"
                >
                  <div className="icon-tile">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-navy">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow">Process FAQ</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">
              Questions about the workflow
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-hairline bg-white p-6 shadow-card"
              >
                <h3 className="text-base font-semibold text-brand-navy">{f.q}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow">Get started</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">
                Send your project brief
              </h2>
              <p className="mt-4 text-ink-soft">
                A short brief is enough to get started. We will come back with a
                written scope, a fee, and the next steps within 1 business day.
              </p>
              <Link to="/case-studies" className="mt-7 btn-secondary inline-flex">
                See real projects first
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm sourcePage="how-it-works" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
