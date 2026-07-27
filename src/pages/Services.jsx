import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero"
import { Card } from "@/components/ui/card"
import CtaBanner from "@/components/layout/CtaBanner"
import { services } from "@/data/content"

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Services"
        title="Sourcing services from factory to doorstep"
        description="A complete set of services that cover supplier sourcing, factory verification, quality inspection, production follow-up, and shipping coordination."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {services.map((s, i) => {
              const Icon = s.icon
              const reversed = i % 2 === 1
              return (
                <Card key={s.id} className="overflow-hidden">
                  <div className={`grid gap-0 md:grid-cols-2 ${reversed ? "md:[direction:rtl]" : ""}`}>
                    <div className="flex flex-col justify-center p-6 md:p-10 [direction:ltr]">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0f2a4a]/5 text-[#0f2a4a]">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h2 className="mt-5 text-2xl font-bold text-slate-900">{s.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                      <ul className="mt-5 space-y-2.5">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f59e0b]" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="min-h-[240px] bg-slate-100 [direction:ltr]">
                      <img
                        alt={s.title}
                        data-strk-img-id={`svc-${s.id}-img-${i}`}
                        data-strk-img={`[svc-${s.id}-desc] [svc-${s.id}-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="h-full w-full object-cover"
                      />
                      <span id={`svc-${s.id}-title`} className="hidden">{s.title}</span>
                      <span id={`svc-${s.id}-desc`} className="hidden">{s.desc}</span>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
