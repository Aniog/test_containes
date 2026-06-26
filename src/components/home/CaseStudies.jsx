import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Section, SectionHeader } from '../Section'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export const caseStudies = [
  {
    id: 'kitchenware-eu',
    industry: 'Home & Kitchen',
    country: 'Germany',
    title: 'Kitchenware brand cuts defect rate by 78%',
    summary:
      'A European kitchenware brand was experiencing high return rates from inconsistent finishing. We replaced two suppliers and introduced inline QC checks at every batch.',
    metrics: [
      { label: 'Defect rate', value: '−78%' },
      { label: 'Lead time', value: '−21 days' },
      { label: 'Cost saving', value: '12%' },
    ],
  },
  {
    id: 'electronics-us',
    industry: 'Consumer Electronics',
    country: 'United States',
    title: 'DTC electronics startup launches in 90 days',
    summary:
      'A US-based startup needed a reliable Shenzhen manufacturer for a Bluetooth audio product. We managed sample iterations, tooling, certification, and first production run.',
    metrics: [
      { label: 'Time to launch', value: '90 days' },
      { label: 'Suppliers vetted', value: '14' },
      { label: 'Units shipped', value: '8,500' },
    ],
  },
  {
    id: 'apparel-au',
    industry: 'Apparel & Textiles',
    country: 'Australia',
    title: 'Activewear label scales private-label production',
    summary:
      'An Australian activewear label scaled from one supplier to a multi-factory production line, with consistent fit, fabric and on-time shipping for seasonal collections.',
    metrics: [
      { label: 'SKUs managed', value: '60+' },
      { label: 'On-time rate', value: '98%' },
      { label: 'Repeat orders', value: '4 seasons' },
    ],
  },
]

export default function CaseStudies({ limit }) {
  const containerRef = useRef(null)
  const items = limit ? caseStudies.slice(0, limit) : caseStudies

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <Section id="case-studies" className="bg-white">
      <SectionHeader
        eyebrow="Case Studies"
        title="Real sourcing projects, measurable outcomes"
        description="A few recent examples of how we helped buyers source better products from China — with verifiable results."
      />

      <div ref={containerRef} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <article
            key={c.id}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <img
                alt={c.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                data-strk-img-id={`case-${c.id}-img`}
                data-strk-img={`[case-${c.id}-summary] [case-${c.id}-title] china manufacturing`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-blue-50 text-blue-700 px-2.5 py-0.5 font-medium">{c.industry}</span>
                <span className="text-slate-500">{c.country}</span>
              </div>
              <h3 id={`case-${c.id}-title`} className="mt-3 text-lg font-semibold text-slate-900">{c.title}</h3>
              <p id={`case-${c.id}-summary`} className="mt-2 text-sm text-slate-600 leading-relaxed">{c.summary}</p>

              <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-xs text-slate-500">{m.label}</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-slate-900">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>

      {limit && (
        <div className="mt-10 flex justify-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </Section>
  )
}
