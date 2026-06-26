import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section } from '../components/Section'
import { caseStudies } from '../components/home/CaseStudies'
import InquirySection from '../components/home/InquirySection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { ArrowRight, Quote } from 'lucide-react'

const extraCases = [
  {
    id: 'industrial-uk',
    industry: 'Industrial & Hardware',
    country: 'United Kingdom',
    title: 'Industrial buyer consolidates 6 suppliers into 2 shipments',
    summary:
      'A UK distributor was managing six separate suppliers and constant shipping headaches. We consolidated production at our warehouse and shipped two grouped containers per month.',
    metrics: [
      { label: 'Suppliers managed', value: '6 → 2' },
      { label: 'Shipping cost', value: '−18%' },
      { label: 'Stockouts', value: '−65%' },
    ],
  },
  {
    id: 'beauty-ca',
    industry: 'Beauty & Personal Care',
    country: 'Canada',
    title: 'Beauty startup launches private label skincare line',
    summary:
      'We sourced contract manufacturers for skincare formulas plus packaging, managed certifications, and shipped to a Canadian 3PL ready for retail.',
    metrics: [
      { label: 'SKUs launched', value: '8' },
      { label: 'Production round', value: '2 cycles' },
      { label: 'Compliance', value: 'Passed' },
    ],
  },
  {
    id: 'sports-fr',
    industry: 'Sports & Outdoors',
    country: 'France',
    title: 'Cycling brand fixes inconsistent finishing on metal parts',
    summary:
      'A French cycling brand had recurring scratches and color mismatches on metal components. We replaced QC procedures and switched anodizing supplier.',
    metrics: [
      { label: 'Returns', value: '−54%' },
      { label: 'Color accuracy', value: '+92%' },
      { label: 'Lead time', value: 'Stable' },
    ],
  },
]

const allCases = [...caseStudies, ...extraCases]

const testimonials = [
  {
    quote:
      'SSourcing China helped us move away from two underperforming suppliers and now we have predictable lead times. The weekly reports alone are worth it.',
    name: 'Anna Becker',
    role: 'Operations Lead, Kitchenware Brand (Germany)',
  },
  {
    quote:
      'We launched in 90 days because they handled every supplier conversation. As a small team, we could not have done this on our own.',
    name: 'David Park',
    role: 'Founder, DTC Electronics (USA)',
  },
  {
    quote:
      'Inspections are detailed, photos are honest, and they push back on the factory when needed. That is exactly what we wanted from a sourcing partner.',
    name: 'Sophie Laurent',
    role: 'Sourcing Manager, Activewear (Australia)',
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Real sourcing projects, real numbers"
        description="A selection of recent projects across consumer, beauty, apparel and industrial categories — with the measurable outcomes that mattered to each buyer."
      />

      <Section className="bg-white">
        <div ref={containerRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allCases.map((c) => (
            <article
              key={c.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  data-strk-img-id={`case-pg-${c.id}-img`}
                  data-strk-img={`[case-pg-${c.id}-summary] [case-pg-${c.id}-title] china manufacturing`}
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
                <h3 id={`case-pg-${c.id}-title`} className="mt-3 text-lg font-semibold text-slate-900">{c.title}</h3>
                <p id={`case-pg-${c.id}-summary`} className="mt-2 text-sm text-slate-600 leading-relaxed">{c.summary}</p>

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
      </Section>

      <Section className="bg-slate-50">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">Buyer Feedback</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What buyers say</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col">
              <Quote className="h-6 w-6 text-blue-700" />
              <blockquote className="mt-4 text-sm text-slate-700 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-slate-100">
                <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <InquirySection />
    </>
  )
}
