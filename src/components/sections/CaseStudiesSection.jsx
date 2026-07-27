import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { caseStudies } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export default function CaseStudiesSection({ limit }) {
  const ref = useRef(null)
  const items = limit ? caseStudies.slice(0, limit) : caseStudies

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-surface">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real sourcing projects, real outcomes"
          subtitle="A look at how we have helped buyers across industries source, verify, inspect, and ship from China."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {items.map((c) => (
            <article
              key={c.id}
              className="flex flex-col overflow-hidden rounded-xl border border-border-base bg-white shadow-sm"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={c.client}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-accent">
                  {c.industry}
                </span>
                <h3 id={c.titleId} className="mt-4 text-lg font-semibold text-ink">
                  {c.client}
                </h3>
                <p id={c.descId} className="mt-2 text-sm leading-relaxed text-slate-body">
                  {c.challenge}
                </p>
                <div className="mt-4 rounded-lg bg-surface p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-action">
                    Result
                  </p>
                  <p className="mt-1.5 text-sm text-ink">{c.result}</p>
                </div>
                <Link
                  to="/case-studies"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-accent hover:text-primary"
                >
                  Read full case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/case-studies" size="lg" variant="navy">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  )
}
