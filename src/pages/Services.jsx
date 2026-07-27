import { useEffect, useRef } from 'react'
import * as Icons from 'lucide-react'
import { services } from '@/data/content'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/sections/PageHeader'
import CtaBanner from '@/components/sections/CtaBanner'

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for every stage of your project"
        subtitle="Use a single service or combine them into a complete sourcing program. Each one is designed to reduce risk and save you time when buying from China."
      />

      <section ref={ref} className="bg-surface">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-16">
            {services.map((s, i) => {
              const Icon = Icons[s.icon] || Icons.Circle
              const reversed = i % 2 === 1
              return (
                <div
                  key={s.id}
                  className="grid gap-8 lg:grid-cols-2 lg:items-center"
                >
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <div className="overflow-hidden rounded-xl border border-border-base bg-white shadow-sm">
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          alt={s.title}
                          data-strk-img-id={s.imgId}
                          data-strk-img={`[${s.descId}] [${s.titleId}]`}
                          data-strk-img-ratio="4x3"
                          data-strk-img-width="800"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={reversed ? 'lg:order-1' : ''}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2
                      id={s.titleId}
                      className="mt-5 text-2xl font-bold text-ink"
                    >
                      {s.title}
                    </h2>
                    <p
                      id={s.descId}
                      className="mt-3 text-base leading-relaxed text-slate-body"
                    >
                      {s.summary}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-3 text-sm text-slate-body"
                        >
                          <Icons.Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-action" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which service you need?"
        subtitle="Tell us about your project and we will recommend the right combination of services for your situation."
      />
    </>
  )
}
