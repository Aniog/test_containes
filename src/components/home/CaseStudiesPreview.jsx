import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    id: 'eu-cookware',
    industry: 'Home & Kitchen',
    country: 'Germany',
    title: 'Cookware brand cut sourcing costs by 18% after factory switch',
    summary:
      'We audited three new suppliers in Guangdong, ran pre-shipment QC and consolidated two SKUs into one container, saving the buyer freight and per-unit cost.',
  },
  {
    id: 'us-apparel',
    industry: 'Apparel & Textiles',
    country: 'United States',
    title: 'Private label apparel start-up shipped first 5,000-pc order in 9 weeks',
    summary:
      'Sourcing brief to delivered goods in 9 weeks, with on-site fabric checks and a pre-shipment AQL inspection prior to balance payment.',
  },
  {
    id: 'au-furniture',
    industry: 'Furniture',
    country: 'Australia',
    title: 'Outdoor furniture importer recovered from defective batch with no downtime',
    summary:
      'After defects were flagged during DUPRO, we re-negotiated with the factory, replaced the batch and shipped on the original ETA window.',
  },
]

export default function CaseStudiesPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Case studies"
            title="Real sourcing projects, real outcomes"
            description="A few recent examples of how we helped buyers source from China without the usual headaches."
          />
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-800"
          >
            See all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.id}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={`home-case-${c.id}-img`}
                  data-strk-img={`[home-case-${c.id}-title] [home-case-${c.id}-industry]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
                  <span id={`home-case-${c.id}-industry`}>{c.industry}</span>
                  <span className="text-slate-300">·</span>
                  <span>{c.country}</span>
                </div>
                <h3 id={`home-case-${c.id}-title`} className="mt-3 text-lg font-semibold text-slate-900 leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{c.summary}</p>
                <Link
                  to="/case-studies"
                  className="mt-5 inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-800 text-sm"
                >
                  Read case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
