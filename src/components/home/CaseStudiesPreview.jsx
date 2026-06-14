import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    id: 'case-cookware',
    industry: 'Cookware',
    country: 'United States',
    headline: 'A US cookware brand sourced stainless steel pans from a verified Yangjiang factory',
    summary:
      'Shortlisted 4 factories, audited 2, and moved 3 containers of tri-ply cookware on time, with a 1.8% defect rate.',
    metric: '1.8% defect rate',
    period: '8-week sampling → 90-day production',
  },
  {
    id: 'case-led',
    industry: 'LED Lighting',
    country: 'Germany',
    headline: 'A German B2B distributor consolidated 6 SKUs under one Shenzhen lighting factory',
    summary:
      'Combined 3 suppliers into 1, ran 4 inspections, and shipped a single 40HQ with full CE & RoHS documentation.',
    metric: '4 inspections · 1 shipment',
    period: '6-week project',
  },
  {
    id: 'case-apparel',
    industry: 'Apparel',
    country: 'Australia',
    headline: 'An Australian outdoor brand set up a private-label workwear line in Jiangsu',
    summary:
      'Developed 2 fabrics, approved 3 sample rounds, and shipped 4,800 garments with DDP terms to Sydney.',
    metric: '4,800 units · DDP Sydney',
    period: '5-month program',
  },
]

export default function CaseStudiesPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-y bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="eyebrow">Case Studies</div>
            <h2
              id="cases-headline"
              className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy"
            >
              Real projects, real numbers
            </h2>
            <p id="cases-sub" className="mt-3 text-ink-soft">
              Short, specific examples of how we have helped overseas buyers
              move projects from brief to delivery.
            </p>
          </div>
          <Link to="/case-studies" className="btn-secondary self-start md:self-auto">
            All case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((c, idx) => (
            <article
              key={c.id}
              className="rounded-2xl border border-hairline bg-white overflow-hidden shadow-card hover:shadow-card-hover transition-shadow flex flex-col"
            >
              <div className="aspect-[16/10] relative">
                <div
                  className="w-full h-full"
                  data-strk-bg-id={`cases-bg-${idx}-${c.industry.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Math.random().toString(36).slice(2, 7)}`}
                  data-strk-bg="[cases-headline] [cases-sub]"
                  data-strk-bg-ratio="16x10"
                  data-strk-bg-width="600"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-muted-ink">
                  <span className="badge-soft">{c.industry}</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {c.country}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-brand-navy leading-snug">
                  {c.headline}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
                  {c.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-hairline flex items-center justify-between text-xs">
                  <span className="font-semibold text-primary">{c.metric}</span>
                  <span className="text-muted-ink inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {c.period}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
