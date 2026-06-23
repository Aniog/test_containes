import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/SectionHeader'
import { Quote } from 'lucide-react'

export const CASE_STUDIES = [
  {
    id: 'eu-home-appliance',
    industry: 'Home Appliances',
    region: 'EU buyer',
    title: 'Switching kitchen appliance supplier without missing peak season',
    summary:
      'A German importer needed to replace an underperforming supplier within 10 weeks. We shortlisted 4 alternatives, audited 2, and managed first production with zero shipment delays.',
    metrics: [
      { value: '10 wks', label: 'Project duration' },
      { value: '−14%', label: 'Unit cost vs. previous' },
      { value: '0', label: 'Shipment delays' },
    ],
    quote:
      'Their audit report flagged exactly the risks we ran into with our previous factory. We finally had visibility into production.',
    person: 'Procurement Lead, German home goods importer',
    imgId: 'case-eu-home-1c2d3e',
  },
  {
    id: 'us-startup-launch',
    industry: 'Consumer Electronics',
    region: 'US startup',
    title: 'First-time hardware launch: from sample to 5,000-unit shipment',
    summary:
      'A US-based startup with no China experience launched a Bluetooth audio device. We handled supplier selection, certifications, packaging and DDP shipment to a 3PL.',
    metrics: [
      { value: '5,000', label: 'Units in first run' },
      { value: '4', label: 'Certifications managed' },
      { value: 'DDP', label: 'Door-to-door shipping' },
    ],
    quote:
      'They translated everything we did not understand — tooling, MOQ, packaging compliance — into a clear plan with weekly updates.',
    person: 'Founder, US consumer electronics startup',
    imgId: 'case-us-electronics-2d3e4f',
  },
  {
    id: 'au-retail-furniture',
    industry: 'Furniture',
    region: 'Australian retailer',
    title: 'Container-load optimization for a furniture retailer',
    summary:
      'An Australian retailer needed to reduce per-unit freight cost. We consolidated three Foshan suppliers into mixed containers and managed pre-shipment QC.',
    metrics: [
      { value: '3', label: 'Suppliers consolidated' },
      { value: '−22%', label: 'Freight cost per unit' },
      { value: 'AQL 2.5', label: 'Inspection level' },
    ],
    quote:
      'Mixed-supplier consolidation was something our previous agent could not handle. SSourcing China made it routine.',
    person: 'Buying Manager, Australian furniture retailer',
    imgId: 'case-au-furniture-3e4f5a',
  },
]

export default function HomeCaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real projects, real numbers"
          description="A selection of recent sourcing projects, anonymized where required by NDA. Full client references available on request."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c) => (
            <article
              key={c.id}
              className="bg-white rounded-2xl border border-line overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden bg-surface-2">
                <img
                  alt={c.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[case-${c.id}-title] [case-${c.id}-industry]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-ink-soft">
                  <span id={`case-${c.id}-industry`} className="px-2 py-0.5 bg-surface-2 rounded font-semibold text-brand">{c.industry}</span>
                  <span>·</span>
                  <span>{c.region}</span>
                </div>
                <h3 id={`case-${c.id}-title`} className="mt-3 font-semibold text-brand text-lg leading-snug">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{c.summary}</p>

                <div className="grid grid-cols-3 gap-2 mt-5">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="bg-surface rounded-lg p-3 text-center">
                      <div className="text-base font-bold text-brand">{m.value}</div>
                      <div className="text-[11px] text-ink-soft mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-line">
                  <Quote className="w-4 h-4 text-accent" />
                  <p className="mt-2 text-sm text-ink italic">"{c.quote}"</p>
                  <div className="mt-2 text-xs text-ink-soft">— {c.person}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            See all case studies →
          </Link>
        </div>
      </div>
    </section>
  )
}
