import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useReveal } from "@/hooks/useReveal"
import { industries } from "@/data/company"
import { cn } from "@/lib/utils"

function IndustryTile({ item, index }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={cn(
        "group relative border border-white/10 bg-ink-soft/40 p-6 transition-all duration-700 hover:border-brass/60 hover:bg-ink-soft/70 md:p-8",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      )}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="font-serif text-3xl text-brass/60 num-tabular">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 font-serif text-xl text-bone md:text-2xl">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-bone/65">
        {item.body}
      </p>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-0 bg-brass transition-all duration-500 group-hover:w-full"
      />
    </div>
  )
}

export function Applications() {
  const bgRef = useRef(null)

  useEffect(() => {
    if (!bgRef.current) return
    return ImageHelper.loadImages(strkImgConfig, bgRef.current)
  }, [])

  return (
    <section
      ref={bgRef}
      aria-label="Industries served"
      className="relative isolate overflow-hidden bg-ink text-bone"
    >
      <div
        aria-hidden="true"
        data-strk-bg-id="applications-bg"
        data-strk-bg="[applications-eyebrow] [applications-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 opacity-30"
      />
      <div className="container-content section-pad-lg relative">
        <SectionHeader
          eyebrow="Industries we serve"
          title="Built for fabricators who fold for a living."
          description="From the duct shop in the back of a building to the cleanroom of a battery plant, our machines bend metal in places where the right angle matters."
          tone="dark"
        />
        <span id="applications-eyebrow" className="hidden">
          Industries we serve
        </span>
        <span id="applications-title" className="hidden">
          Built for fabricators who fold for a living
        </span>

        <div className="mt-14 grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <IndustryTile key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
