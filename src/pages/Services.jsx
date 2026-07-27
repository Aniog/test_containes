import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/common/PageHeader'
import CtaBand from '@/components/common/CtaBand'
import SectionHeading from '@/components/ui/SectionHeading'
import { services, trustPoints } from '@/data/site'

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for every stage of your order"
        description="Each service can be used standalone or combined into a full end-to-end program. You choose the level of support you need."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-16 md:space-y-20">
            {services.map((s, i) => {
              const Icon = s.icon
              const reversed = i % 2 === 1
              return (
                <div
                  key={s.id}
                  className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14 items-center"
                >
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-5 text-2xl md:text-3xl font-bold tracking-tight text-brand-ink">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-brand-muted">
                      {s.desc}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-brand-ink"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-amber" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <div className="overflow-hidden rounded-xl shadow-md">
                      <img
                        alt={s.title}
                        data-strk-img-id={`svc-${s.id}-img-3f8a1c`}
                        data-strk-img={`[svc-${s.id}-desc] [svc-${s.id}-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 id={`svc-${s.id}-title`} className="sr-only">
                      {s.title}
                    </h3>
                    <p id={`svc-${s.id}-desc`} className="sr-only">
                      {s.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-slate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <SectionHeading
            eyebrow="Why It Works"
            title="Built on local presence and independent oversight"
            description="Our services work because we are physically in China and we work for you, not the factory."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((t) => {
              const Icon = t.icon
              return (
                <div
                  key={t.id}
                  className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-slate text-brand-blue">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-brand-ink">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {t.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
