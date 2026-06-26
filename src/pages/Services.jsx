import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/common/PageHeader'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import CtaBanner from '@/components/common/CtaBanner'
import { SERVICES } from '@/data/siteContent'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for every stage of your import"
        description="Pick the services you need, or let us run the whole process end to end. Each service is delivered by our on-the-ground team in China."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {SERVICES.map((s, idx) => {
            const reversed = idx % 2 === 1
            return (
              <div
                key={s.id}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className={reversed ? 'lg:order-2' : ''}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">{s.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">{s.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                        <span className="text-sm leading-relaxed text-ink">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={reversed ? 'lg:order-1' : ''}>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        alt={s.title}
                        data-strk-img-id={`svc-${s.id}-img-5d8${idx}`}
                        data-strk-img={`[svc-${s.id}-desc] [svc-${s.id}-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src={PLACEHOLDER}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <p id={`svc-${s.id}-title`} className="sr-only">
                    {s.title}
                  </p>
                  <p id={`svc-${s.id}-desc`} className="sr-only">
                    {s.summary}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Full-Service Option"
            title="Not sure which services you need?"
            description="Our full-service plan covers everything from sourcing to shipping as one managed package. Tell us your goals and we will recommend the right scope."
          />
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
