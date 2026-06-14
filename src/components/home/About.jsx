import * as React from "react"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { Check } from "lucide-react"
import strkImgConfig from "@/strk-img-config.json"
import { SectionHeading } from "@/components/ui/SectionHeading"

const points = [
  "Computer-controlled ram and backgauge on every model",
  "Welded steel frames, stress-relieved for a decade of accuracy",
  "On-site commissioning and 24/7 remote diagnostics",
  "Spare parts stocked in three regional warehouses",
]

export function About() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section id="about" ref={ref} className="bg-slate-950 py-24 md:py-32">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-line bg-slate-850">
            <div
              className="absolute inset-0"
              data-strk-bg-id="about-bg-artitect-a8d22c"
              data-strk-bg="[about-eyebrow] [about-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="900"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div className="rounded-md border border-line bg-ink/80 backdrop-blur p-4 max-w-[220px]">
                <p className="text-xs text-text-dim tracking-eyebrow uppercase">Est.</p>
                <p className="mt-1 text-2xl font-semibold text-text tabular">1986</p>
                <p className="mt-1 text-xs text-text-muted">
                  Three generations of family ownership.
                </p>
              </div>
              <div className="rounded-md border border-line bg-ink/80 backdrop-blur p-4 max-w-[220px]">
                <p className="text-xs text-text-dim tracking-eyebrow uppercase">ISO</p>
                <p className="mt-1 text-2xl font-semibold text-text tabular">9001</p>
                <p className="mt-1 text-xs text-text-muted">
                  Certified to the latest revision.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="About ARTITECT"
            title={
              <span id="about-title">
                A machine shop that grew up to build machines.
              </span>
            }
            subtitle="What began as a two-man job shop in Pittsburgh is now a 240-person engineering house shipping folding systems to fabricators in over sixty countries. We still answer the phone ourselves."
          />
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-text"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-copper-500/40 bg-copper-500/10 text-copper-400">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span className="text-sm md:text-base text-text-muted leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
