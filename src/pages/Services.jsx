import PageHero, { CtaBanner } from '@/components/PageHero.jsx'
import SectionHeading from '@/components/SectionHeading.jsx'
import { Link } from 'react-router-dom'
import {
  Search,
  BadgeCheck,
  ClipboardCheck,
  LineChart,
  Truck,
  Package,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { SERVICES } from '@/data/content.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const ICONS = {
  search: Search,
  'badge-check': BadgeCheck,
  'clipboard-check': ClipboardCheck,
  'line-chart': LineChart,
  truck: Truck,
  package: Package,
}

const SERVICE_BULLETS = {
  sourcing: [
    'Product-fit factory research across multiple cities and regions',
    'Verification of export experience, customer references, and trade history',
    'Side-by-side quotation comparison with itemized cost breakdown',
    'MOQ, lead time, and payment term negotiation on your behalf',
  ],
  verification: [
    'Business license check against official Chinese registries',
    'On-site visit to the factory (you receive photos and a written report)',
    'Verification of machines, production lines, headcount, and capacity',
    'Confirmation of certifications (ISO, BSCI, CE, FDA, LFGB, etc.)',
  ],
  inspection: [
    'Pre-production inspection (PPI): materials and components before production starts',
    'During-production inspection (DPI): catches defects early when fixes are cheap',
    'Pre-shipment inspection (PSI): final AQL check before goods leave the factory',
    'Photo-rich reports with a clear pass / fail / rework recommendation',
  ],
  production: [
    'Milestone tracking from purchase order to ex-factory',
    'Weekly progress updates with photos and short notes',
    'Escalation handling for delays, deviations, and material shortages',
    'On-demand video calls with the factory for key decisions',
  ],
  shipping: [
    'FCL, LCL, air freight, and express courier options',
    'Sample consolidation across multiple factories to save on shipping cost',
    'Export documentation: commercial invoice, packing list, certificate of origin',
    'Customs clearance support at origin and, if needed, at destination',
  ],
  samples: [
    'Sample request coordination with factories, including spec clarification',
    'Production-time follow-up so you are not waiting in the dark',
    'Quality check of samples against your brief before international shipping',
    'Consolidated international shipping to your office with tracking',
  ],
}

export default function Services() {
  const ref = useStrkImages()

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="A complete China sourcing and QC service"
        description="Six services that fit together as one workflow. Use what you need — supplier research, factory audits, inspections, production follow-up, shipping, or sample management."
      />

      <section ref={ref} className="section-pad bg-white">
        <div className="container-page space-y-16">
          {SERVICES.map((s, idx) => {
            const Icon = ICONS[s.icon] || Search
            const reversed = idx % 2 === 1
            return (
              <div
                key={s.id}
                id={s.id}
                className={`grid gap-8 md:grid-cols-12 md:items-center ${reversed ? 'md:grid-flow-dense' : ''}`}
              >
                <div className={`md:col-span-5 ${reversed ? 'md:col-start-8' : ''}`}>
                  <div
                    className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-brand-mist"
                    data-strk-img-id={`svc-${s.id}-img-9a8b1c`}
                    data-strk-img={`[svc-${s.id}-title] [svc-${s.id}-desc] [svc-eyebrow] china ${s.title.toLowerCase()}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    alt={s.title}
                  />
                </div>
                <div className={`md:col-span-7 ${reversed ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span
                      id={`svc-${s.id}-title`}
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent-soft text-brand-accent"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">
                      {s.title}
                    </h2>
                  </div>
                  <p
                    id={`svc-${s.id}-desc`}
                    className="mt-4 text-base leading-relaxed text-slate-600"
                  >
                    {s.description}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {SERVICE_BULLETS[s.id]?.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accent-dark"
                  >
                    Discuss a {s.title.toLowerCase()} project
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section-pad-sm bg-brand-mist">
        <div className="container-page">
          <SectionHeading
            eyebrow="Combine services, save time"
            title="Most clients use two or three of these together"
            description="A typical engagement might start with supplier research, move into sample coordination, and end with pre-shipment inspection and freight booking. Tell us where you are in the process and we will suggest the next step."
          />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
