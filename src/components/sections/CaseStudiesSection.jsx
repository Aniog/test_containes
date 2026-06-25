import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Package, Timer } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '../SectionHeader'

export const caseStudies = [
  {
    id: 'smart-home-audio',
    industry: 'Consumer Electronics',
    region: 'Buyer in Germany',
    title: 'Bluetooth speaker line for an EU consumer brand',
    summary:
      'Identified three qualified factories in Shenzhen, completed CE/RoHS compliance review, and managed a 12,000-unit production run with two AQL inspections.',
    metrics: [
      { icon: Package, label: '12,000 units / order' },
      { icon: Timer, label: '45 days lead time' },
      { icon: MapPin, label: 'Shenzhen, Guangdong' },
    ],
    outcome: 'Zero defect claims after retail launch in 6 EU countries.',
  },
  {
    id: 'kitchenware-private-label',
    industry: 'Home & Kitchen',
    region: 'Buyer in the United States',
    title: 'Private-label kitchen tools for a US Amazon seller',
    summary:
      'Sourced silicone and stainless steel kitchen tools, designed FBA-ready packaging, and coordinated DDP sea freight to an FBA prep center.',
    metrics: [
      { icon: Package, label: '6 SKUs · 8,500 units' },
      { icon: Timer, label: '38 days end to end' },
      { icon: MapPin, label: 'Yangjiang, Guangdong' },
    ],
    outcome: 'Repeat orders every 90 days with stable supplier and pricing.',
  },
  {
    id: 'workwear-uniforms',
    industry: 'Apparel & Textiles',
    region: 'Buyer in Saudi Arabia',
    title: 'Industrial workwear and uniforms for a contractor',
    summary:
      'Verified two garment factories, managed fabric and embroidery samples, and ran in-line and final inspections to control color and stitching quality.',
    metrics: [
      { icon: Package, label: '15,000 pieces' },
      { icon: Timer, label: '55 days lead time' },
      { icon: MapPin, label: 'Shaoxing, Zhejiang' },
    ],
    outcome: 'Customer renewed an annual sourcing contract for additional sites.',
  },
]

export default function CaseStudiesSection({ preview = false }) {
  const containerRef = useRef(null)
  const items = preview ? caseStudies.slice(0, 3) : caseStudies

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Case studies"
          title="Real sourcing projects we have delivered"
          description="A snapshot of recent projects across different industries and order sizes."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {items.map((c) => (
            <article
              key={c.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <img
                alt={c.title}
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id={`case-${c.id}-img`}
                data-strk-img={`[case-${c.id}-title] [case-${c.id}-industry]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                  <span
                    id={`case-${c.id}-industry`}
                    className="rounded-full bg-[#1B6FB8]/10 px-2.5 py-1 text-[#1B6FB8]"
                  >
                    {c.industry}
                  </span>
                  <span className="text-slate-500">{c.region}</span>
                </div>
                <h3
                  id={`case-${c.id}-title`}
                  className="mt-4 text-lg font-semibold text-[#0B2545]"
                >
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.summary}</p>

                <ul className="mt-5 space-y-2">
                  {c.metrics.map((m, idx) => {
                    const Icon = m.icon
                    return (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs font-medium text-slate-700"
                      >
                        <Icon className="h-4 w-4 text-[#1B6FB8]" />
                        {m.label}
                      </li>
                    )
                  })}
                </ul>

                <p className="mt-5 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-relaxed text-slate-700">
                  <span className="font-semibold text-[#0F8A6A]">Outcome: </span>
                  {c.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>

        {preview && (
          <div className="mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#1B6FB8] hover:text-[#155A96]"
            >
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
