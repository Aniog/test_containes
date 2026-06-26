import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/common/PageHeader'
import Badge from '@/components/ui/Badge'
import Icon from '@/components/ui/Icon'
import CtaBanner from '@/components/common/CtaBanner'
import { CASE_STUDIES, STATS } from '@/data/siteContent'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Case Studies"
        title="How global buyers source better with us"
        description="Real examples of how our sourcing, verification, QC, and logistics services helped companies reduce cost, improve quality, and ship on time."
        breadcrumbs={[{ label: 'Case Studies' }]}
      />

      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <dt className="text-3xl font-extrabold text-brand">{s.value}</dt>
                <dd className="mt-1 text-sm text-ink-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {CASE_STUDIES.map((c, idx) => {
            const reversed = idx % 2 === 1
            return (
              <article
                key={c.id}
                className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className={reversed ? 'lg:order-2' : ''}>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        alt={c.title}
                        data-strk-img-id={c.imgId}
                        data-strk-img={`[${c.descId}] [${c.titleId}]`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="900"
                        src={PLACEHOLDER}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <p id={c.titleId} className="sr-only">
                    {c.title}
                  </p>
                  <p id={c.descId} className="sr-only">
                    {c.challenge}
                  </p>
                </div>
                <div className={reversed ? 'lg:order-1' : ''}>
                  <Badge variant="accent">{c.category}</Badge>
                  <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">{c.title}</h2>
                  <p className="mt-2 text-sm font-medium text-ink-muted">{c.client}</p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent">
                        <Icon name="AlertTriangle" className="h-4 w-4" /> Challenge
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{c.challenge}</p>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent">
                        <Icon name="Target" className="h-4 w-4" /> Our Approach
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{c.approach}</p>
                    </div>
                    <div className="rounded-xl bg-green-50 p-4">
                      <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-green-700">
                        <Icon name="TrendingDown" className="h-4 w-4" /> Result
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink">{c.result}</p>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <CtaBanner
        title="Want results like these for your business?"
        description="Tell us your sourcing goals and we will show you what is possible — with a free, no-obligation quote."
      />
    </div>
  )
}
