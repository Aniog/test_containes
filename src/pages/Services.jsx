import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Factory,
  Layers,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  PackageCheck,
  FileCheck2,
  Languages,
  ArrowRight,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/InquiryForm'

const services = [
  {
    id: 'supplier',
    icon: Search,
    title: 'Supplier Sourcing',
    intro:
      'We identify pre-screened factories that match your product, quantity, and price target. You receive a shortlist with written quotations, not just a list of names.',
    points: [
      'Pre-screened factory network of 1,200+ vetted manufacturers',
      'Domain-matched shortlist — usually 3–5 candidates per inquiry',
      'Written quotations with line items and tooling breakdown',
      'Sample order coordination and lead-time confirmation',
    ],
  },
  {
    id: 'verification',
    icon: Factory,
    title: 'Factory Verification',
    intro:
      'An on-site audit covering the production floor, equipment, workforce, and references. We visit the factory — we don\'t just check a website.',
    points: [
      'Business license and tax registration verification',
      'Production line, equipment, and capacity check',
      'Workforce size, shifts, and seasonality',
      'Past export references and customer list',
      'Compliance documentation (CE, RoHS, FDA, etc.)',
    ],
  },
  {
    id: 'sampling',
    icon: Layers,
    title: 'Sampling & Prototyping',
    intro:
      'From gold samples to pre-production samples, we coordinate the rounds, manage the revisions, and document everything in writing.',
    points: [
      'Gold sample approval and signed sample specs',
      'Pre-production sample rounds with structured feedback',
      'Lab testing arranged (CE, RoHS, REACH, CPSIA, etc.)',
      'Sample cost negotiation and freight optimization',
    ],
  },
  {
    id: 'qc',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    intro:
      'AQL-based inspections at three points: initial production, during production, and pre-shipment. Reports include photos and corrective actions.',
    points: [
      'DUPRO (during-production) inspection',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Inline checks for critical defects and workmanship',
      'Photo and video reports within 24 hours',
      'Corrective action follow-up with the factory',
    ],
  },
  {
    id: 'production',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    intro:
      'A written production schedule, weekly progress photos, and a single point of contact who escalates any delay or risk early.',
    points: [
      'Milestone-based production plan',
      'Weekly progress photos and written status reports',
      'Risk and delay escalation with mitigation plan',
      'Coordination of raw material, sub-components, and tooling',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    intro:
      'From the factory to your warehouse. We consolidate, export, and ship FOB, CIF, or DDP — by sea, air, or rail.',
    points: [
      'Sea, air, and rail freight (FCL, LCL, express)',
      'Export documents: commercial invoice, packing list, certificate of origin',
      'Customs clearance and duty calculation (DDP)',
      'Container loading supervision and photo record',
      'Insurance and last-mile delivery coordination',
    ],
  },
  {
    id: 'private-label',
    icon: PackageCheck,
    title: 'Private Label & OEM',
    intro:
      'For brands and retailers who want their own label, packaging, or custom design. We handle artwork, tooling, and brand protection.',
    points: [
      'Custom packaging and artwork management',
      'Tooling and mold coordination',
      'NDA and brand protection agreement with the factory',
      'Sample labeling and pre-production artwork approval',
    ],
  },
  {
    id: 'trade',
    icon: FileCheck2,
    title: 'Trade Compliance & Documents',
    intro:
      'The paperwork side of importing from China — certificates, declarations, and compliance documents that customs and retailers ask for.',
    points: [
      'CE, FCC, RoHS, REACH, CPSIA, FDA documentation',
      'MSDS, drop test reports, and lab test certificates',
      'Certificate of origin, fumigation, and ISPM 15',
      'Customs HS code suggestions and duty estimation',
    ],
  },
  {
    id: 'language',
    icon: Languages,
    title: 'Bilingual Project Management',
    intro:
      'Your project lives in one place: a written brief, weekly updates, a photo folder, and an English-speaking manager who replies within 1 business day.',
    points: [
      'Single point of contact in English or 中文',
      'Written project plan with deliverables and dates',
      'Shared photo and document folder for your team',
      'Weekly summary call or email — your choice',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Services"
        headline="Sourcing, quality, and shipping — handled in one place"
        subline="Pick a single service or hand the full project to us. Each engagement is scoped in writing, with deliverables, dates, and a clear fee."
        ctaLabel="Get a Free Sourcing Quote"
        ctaTo="/contact"
        bgQuery="[page-hero-headline] [page-hero-subline]"
      />

      <section className="section-y bg-white">
        <div className="container-x space-y-12">
          {services.map((s, idx) => {
            const Icon = s.icon
            const reverse = idx % 2 === 1
            return (
              <div
                key={s.id}
                id={s.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24"
              >
                <div
                  className={`lg:col-span-5 ${
                    reverse ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden border border-hairline aspect-[4/3]">
                    <div
                      className="w-full h-full"
                      data-strk-bg-id={`service-bg-${s.id}-${Math.random().toString(36).slice(2, 7)}`}
                      data-strk-bg="[page-hero-headline] [page-hero-subline]"
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="900"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}>
                  <div className="icon-tile">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="mt-4 text-2xl md:text-3xl font-bold text-brand-navy">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-ink-soft leading-relaxed">{s.intro}</p>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-ink">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <PackageCheck className="w-4 h-4 mt-0.5 text-status-success flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow">Ready to start?</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">
                Send a short brief and we will scope the project
              </h2>
              <p className="mt-4 text-ink-soft">
                Share product specs, quantity, target price, and timing. We
                will come back with a written scope, a fee proposal, and the
                next steps.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {['Reply within 1 business day', 'Written scope and fee', 'NDA available'].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {t}
                    </li>
                  )
                )}
              </ul>
              <Link to="/how-it-works" className="mt-7 btn-secondary inline-flex">
                Read the process first
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm sourcePage="services" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
