import * as React from "react"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SectionHeading } from "@/components/ui/SectionHeading"

const industries = [
  {
    name: "HVAC & Ductwork",
    body: "Galvanised, stainless and aluminium ductwork for commercial buildings.",
  },
  {
    name: "Architectural Cladding",
    body: "Long-bed, low-radius panels for stadium, transit and high-rise facades.",
  },
  {
    name: "Enclosures & Cabinets",
    body: "Server racks, electrical cabinets, and industrial control panels.",
  },
  {
    name: "Bus, Coach & Rail",
    body: "Body panels, interior trim and structural members for transport OEMs.",
  },
  {
    name: "Steel Service Centres",
    body: "High-tonnage folding for plate processing and contract fabrication.",
  },
  {
    name: "Signage & Studios",
    body: "Bench-class folders for short runs, prototypes and bespoke metalwork.",
  },
]

export function Industries() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-ink border-t border-line">
      <div className="container-x py-24 md:py-32">
        <SectionHeading
          eyebrow="Where it goes"
          title="Six industries, one obsession with the bend."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden">
          {industries.map((i, idx) => (
            <article
              key={i.name}
              className="bg-ink p-7 lg:p-8 group hover:bg-slate-850 transition-colors"
            >
              <p className="text-[10px] tracking-eyebrow uppercase text-text-dim">
                0{idx + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-text group-hover:text-copper-400 transition-colors">
                {i.name}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {i.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
