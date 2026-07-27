import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero.jsx'
import SectionHeader from '@/components/SectionHeader.jsx'
import CtaBand from '@/components/CtaBand.jsx'
import Icon from '@/components/Icon.jsx'
import { SERVICES } from '@/data/site.js'

const DELIVERABLES = [
  {
    id: 'deliv-audit',
    title: 'Factory audit report',
    desc: 'A written report with photos and video covering licenses, production lines, equipment, workforce, quality systems, and export history.',
    imgId: 'deliv-audit-img-a1',
  },
  {
    id: 'deliv-inspection',
    title: 'Inspection report',
    desc: 'AQL-based results with defect photos, measurements, packaging checks, and a clear pass/fail recommendation before shipment.',
    imgId: 'deliv-inspection-img-b2',
  },
  {
    id: 'deliv-production',
    title: 'Production status update',
    desc: 'Weekly milestones with dated photos from the production floor, so you always know where your order stands.',
    imgId: 'deliv-production-img-c3',
  },
]

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
      <PageHero
        eyebrow="Our Services"
        title="Sourcing, verification, QC, and shipping — under one roof"
        subtitle="Every service is delivered by our own team in China and documented in writing. Pick one service or hand us the whole order."
        id="services-title"
        subId="services-subtitle"
        bgId="services-hero-bg-d4"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.id} id={s.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
                <div className="inline-flex w-fit rounded-lg bg-brand-50 p-3 text-brand-600">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What You Receive"
            title="Documented deliverables, not verbal promises"
            subtitle="Every engagement produces written, photo-backed evidence you can keep and act on."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {DELIVERABLES.map((d) => (
              <article key={d.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={d.title}
                    data-strk-img-id={d.imgId}
                    data-strk-img={`[${d.id}-desc] [${d.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`${d.id}-title`} className="text-base font-semibold text-slate-900">{d.title}</h3>
                  <p id={`${d.id}-desc`} className="mt-2 text-sm leading-relaxed text-slate-600">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        subtitle="Describe your product and where you are in the process — we will recommend the smallest scope that actually protects you."
      />
    </div>
  )
}
