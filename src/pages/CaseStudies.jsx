import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Truck,
  Layers,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/InquiryForm'

const cases = [
  {
    id: 'cookware',
    industry: 'Cookware',
    country: 'United States',
    title: 'A US cookware brand sourced stainless steel pans from a verified Yangjiang factory',
    summary:
      'A US cookware brand needed a long-term production partner for a tri-ply stainless steel pan program. We shortlisted 4 factories, audited 2, and ran sampling for 8 weeks before the first production order.',
    challenge:
      'The buyer had been burned twice by middlemen who claimed factory relationships. They needed a verified, export-ready factory with consistent finish quality and reasonable MOQs for reorders.',
    approach: [
      'Shortlisted 4 Yangjiang factories with export history to North America',
      'On-site audits of the top 2 candidates: production line, polishing line, packaging line, and warehouse',
      'Coordinated 3 sample rounds, including a tri-ply bonding test and a handle-rivet pull test',
      'Negotiated a 1,000-unit trial MOQ with a price break at 3 containers',
    ],
    result: '8 weeks of sampling, 3 containers shipped, 1.8% defect rate at PSI',
    metrics: [
      { label: 'Defect rate at PSI', value: '1.8%' },
      { label: 'Audit reports delivered', value: '2' },
      { label: 'Sample rounds', value: '3' },
      { label: 'Containers shipped', value: '3' },
    ],
    icon: Factory,
    timeline: '8 weeks sampling → 90-day production → sea freight to Long Beach',
  },
  {
    id: 'lighting',
    industry: 'LED Lighting',
    country: 'Germany',
    title: 'A German B2B distributor consolidated 6 SKUs under one Shenzhen lighting factory',
    summary:
      'A German distributor was buying 6 LED lighting SKUs from 3 different Chinese suppliers. We consolidated everything under one factory, ran inspections, and shipped a single 40HQ with full CE and RoHS documentation.',
    challenge:
      'Quality was inconsistent across suppliers, and the buyer was paying for 3 separate shipments. They wanted one source, one shipment, and one quality standard.',
    approach: [
      'Audited 3 candidate factories, all in the Shenzhen LED cluster',
      'Selected one factory with the right capacity, lab testing capability, and CE/RoHS documentation',
      'Negotiated consolidated tooling and raw material pricing across all 6 SKUs',
      'Ran DUPRO and pre-shipment inspections with AQL 2.5',
    ],
    result: '4 inspections, 1 shipment, 6 SKUs consolidated, on-time delivery',
    metrics: [
      { label: 'Suppliers consolidated', value: '3 → 1' },
      { label: 'Inspections', value: '4' },
      { label: 'Shipment mode', value: '40HQ CIF Hamburg' },
      { label: 'Documentation', value: 'CE · RoHS · REACH' },
    ],
    icon: ShieldCheck,
    timeline: '6-week project, single 40HQ shipment',
  },
  {
    id: 'apparel',
    industry: 'Apparel',
    country: 'Australia',
    title: 'An Australian outdoor brand set up a private-label workwear line in Jiangsu',
    summary:
      'An Australian outdoor brand wanted a private-label workwear line with 2 custom fabrics. We developed the fabrics, ran 3 sample rounds, and shipped 4,800 garments DDP to Sydney.',
    challenge:
      'The brand had no China experience and needed an end-to-end partner — fabric development, sampling, production, QC, and shipping. They also needed brand protection and a signed NDA.',
    approach: [
      'Signed mutual NDA before sharing any supplier or design details',
      'Developed 2 custom fabrics with a Jiangsu mill (cotton/poly blend and a treated ripstop)',
      'Ran 3 sample rounds for fit, color, and wash durability',
      'Coordinated production across 2 facilities, with AQL 2.5 inspections at DUPRO and PSI',
    ],
    result: '4,800 units shipped DDP to Sydney, on time, defect rate below 1.5%',
    metrics: [
      { label: 'Custom fabrics', value: '2' },
      { label: 'Sample rounds', value: '3' },
      { label: 'Units shipped', value: '4,800' },
      { label: 'Defect rate', value: '< 1.5%' },
    ],
    icon: Layers,
    timeline: '5-month program',
  },
  {
    id: 'logistics',
    industry: 'Logistics',
    country: 'Canada',
    title: 'A Canadian e-commerce brand moved from LCL to FCL and cut landed cost per unit by 14%',
    summary:
      'A Canadian e-commerce brand was shipping LCL (less than container load) and paying too much in freight and customs fees. We helped them move to FCL with a 90-day production buffer and consolidated shipping.',
    challenge:
      'The brand had no in-house logistics expertise. They were paying LCL premiums, dealing with surprise customs charges, and missing the Amazon restock window.',
    approach: [
      'Reviewed 6 months of shipping data and built a cost model for FCL vs LCL',
      'Identified a 90-day production buffer that allowed the brand to wait for a full container',
      'Set up a DDP shipping program with a Shenzhen-based freight forwarder',
      'Coordinated Amazon FBA prep and labeling at the origin warehouse',
    ],
    result: '14% lower landed cost per unit, on-time delivery for 12 consecutive months',
    metrics: [
      { label: 'Landed cost reduction', value: '14%' },
      { label: 'On-time delivery', value: '12/12 months' },
      { label: 'LCL → FCL conversion', value: '100%' },
      { label: 'Amazon FBA prep', value: 'Origin' },
    ],
    icon: Truck,
    timeline: 'Ongoing 12-month program',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case Studies"
        headline="Short, specific examples of how we run China sourcing projects"
        subline="We publish case studies that focus on what actually happened: the brief, the factory, the inspections, the issues we found, and the result. Names of buyers are kept confidential unless they ask us to share them."
        ctaLabel="Get a Free Sourcing Quote"
        ctaTo="/contact"
        bgQuery="[page-hero-headline] [page-hero-subline]"
      />

      <section className="section-y bg-white">
        <div className="container-x space-y-12">
          {cases.map((c, idx) => {
            const Icon = c.icon
            const reverse = idx % 2 === 1
            return (
              <article
                key={c.id}
                id={c.id}
                className="rounded-2xl border border-hairline bg-white shadow-card overflow-hidden scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div
                    className={`lg:col-span-5 aspect-[4/3] lg:aspect-auto ${
                      reverse ? 'lg:order-2' : ''
                    }`}
                  >
                    <div
                      className="w-full h-full"
                      data-strk-bg-id={`case-bg-${c.id}-${Math.random().toString(36).slice(2, 7)}`}
                      data-strk-bg="[page-hero-headline] [page-hero-subline]"
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="900"
                    />
                  </div>
                  <div className={`lg:col-span-7 p-6 md:p-8 ${reverse ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="badge-soft">{c.industry}</span>
                      <span className="inline-flex items-center gap-1 text-muted-ink">
                        <MapPin className="w-3 h-3" /> {c.country}
                      </span>
                      <span className="inline-flex items-center gap-1 text-muted-ink">
                        <Calendar className="w-3 h-3" /> {c.timeline}
                      </span>
                    </div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-navy leading-snug">
                      {c.title}
                    </h2>
                    <p className="mt-3 text-ink-soft leading-relaxed">{c.summary}</p>

                    <div className="mt-6">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-ink">
                        The challenge
                      </div>
                      <p className="mt-2 text-sm text-ink leading-relaxed">{c.challenge}</p>
                    </div>

                    <div className="mt-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-ink">
                        What we did
                      </div>
                      <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-ink">
                        {c.approach.map((a) => (
                          <li key={a} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-status-success flex-shrink-0" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {c.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl bg-surface border border-hairline p-3"
                        >
                          <div className="text-lg font-bold text-brand-navy">{m.value}</div>
                          <div className="text-xs text-muted-ink leading-tight mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex items-start gap-2 text-sm font-semibold text-status-success">
                      <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-ink">Result: {c.result}</span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow">Start a project</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">
                Ready to send a brief?
              </h2>
              <p className="mt-4 text-ink-soft">
                A short brief is enough. We will reply within 1 business day with
                a written scope, a fee, and the next steps.
              </p>
              <Link to="/services" className="mt-7 btn-secondary inline-flex">
                See all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm sourcePage="case-studies" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
