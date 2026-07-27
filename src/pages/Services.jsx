import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHeader from "@/components/layout/PageHeader"
import Services from "@/components/sections/Services"
import CTASection from "@/components/sections/CTASection"
import { SERVICES } from "@/data/site"

function ServiceDetail() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {SERVICES.map((service, idx) => {
          const Icon = service.icon
          const reversed = idx % 2 === 1
          return (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div className={reversed ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 shadow-sm">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={reversed ? "lg:order-1" : ""}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 id={service.titleId} className="mt-5 text-2xl md:text-3xl font-bold text-slate-900">
                  {service.title}
                </h2>
                <p id={service.descId} className="sr-only">{service.summary}</p>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">{service.summary}</p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for every stage of your order"
        description="From the first supplier search to the final shipment, we cover the work that makes importing from China predictable."
      />
      <ServiceDetail />
      <CTASection />
    </>
  )
}
