import { useEffect, useRef } from "react"
import { Check } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SERVICES } from "@/data/content"
import PageHeader from "@/components/common/PageHeader"
import SectionHeading from "@/components/common/SectionHeading"
import CtaBanner from "@/components/common/CtaBanner"

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
        description="We cover the full lifecycle of buying from China, so you can choose a single service or let us manage the whole process end to end."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            const reversed = index % 2 === 1
            return (
              <div
                key={service.id}
                className="grid gap-8 lg:grid-cols-2 lg:items-center"
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-ink md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-slate-600">{service.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-sm text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`overflow-hidden rounded-xl bg-slate-100 ${
                    reversed ? "lg:order-1" : ""
                  }`}
                >
                  <img
                    alt={`${service.title} in a Chinese factory context`}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`svc-${service.id}-img-${index}`}
                    data-strk-img={`[svc-${service.id}-caption] [svc-${service.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <span id={`svc-${service.id}-title`} className="hidden">
                  {service.title}
                </span>
                <span id={`svc-${service.id}-caption`} className="hidden">
                  {service.summary}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Engagement models"
            title="Choose the level of support you need"
            description="Start with a single service or combine them into a full managed engagement."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ModelCard
              title="Sourcing only"
              description="We find and verify suppliers and deliver a shortlist with quotations for you to manage directly."
            />
            <ModelCard
              title="Sourcing + QC"
              description="We source, verify, and inspect quality at key stages, then hand off shipping to your forwarder."
              highlighted
            />
            <ModelCard
              title="Full end-to-end"
              description="We manage sourcing, verification, production, QC, and shipping from request to delivery."
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}

function ModelCard({ title, description, highlighted }) {
  return (
    <div
      className={`rounded-xl border p-6 ${
        highlighted
          ? "border-accent bg-accent-50 shadow-sm"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      {highlighted && (
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}
      <h3 className="mt-3 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  )
}
