import * as React from "react"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const stats = [
  { value: "12,400+", label: "Machines in service" },
  { value: "62", label: "Countries served" },
  { value: "99.4%", label: "On-time delivery (last 5 yrs)" },
  { value: "10 yr", label: "Frame warranty" },
]

export function Stats() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative isolate overflow-hidden border-t border-line">
      <div
        className="absolute inset-0 -z-10"
        data-strk-bg-id="stats-bg-artitect-9b14de"
        data-strk-bg="[stats-eyebrow] [stats-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/60 to-ink" />

      <div className="container-x py-20 md:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text tabular">
                {s.value}
              </p>
              <p className="mt-3 text-xs md:text-sm text-text-muted tracking-eyebrow uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
