import { useEffect, useRef } from "react"
import {
  FileCheck2,
  Gauge,
  Headphones,
  Shield,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useReveal } from "@/hooks/useReveal"
import { differentiators } from "@/data/company"
import { cn } from "@/lib/utils"

const iconMap = { Gauge, Shield, Headphones, FileCheck2 }

function PillarCard({ item, index }) {
  const [ref, visible] = useReveal()
  const Icon = iconMap[item.icon] ?? Gauge
  return (
    <div
      ref={ref}
      className={cn(
        "group relative border border-hairline bg-paper p-8 transition-all duration-700 hover:border-ink md:p-10",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex h-12 w-12 items-center justify-center border border-brass/40 text-brass-deep transition-colors duration-300 group-hover:border-brass group-hover:bg-brass group-hover:text-ink">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <h3 className="mt-6 font-serif text-2xl text-ink md:text-[1.6rem]">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-steel-soft">
        {item.description}
      </p>
    </div>
  )
}

export function WhyChooseUs() {
  const bgRef = useRef(null)

  useEffect(() => {
    if (!bgRef.current) return
    return ImageHelper.loadImages(strkImgConfig, bgRef.current)
  }, [])

  return (
    <section
      ref={bgRef}
      aria-label="Why choose Artitect"
      className="bg-paper section-pad-lg"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why Artitect"
              title="Precision, not promises."
              description="We sell engineering, not adjectives. Each of the four pillars below is something we can prove in a factory acceptance test at our Stuttgart facility."
            />

            <figure className="mt-10 overflow-hidden border border-hairline">
              <img
                alt="Close-up of an Artitect double folding machine's precision tooling"
                data-strk-img-id="why-img-tooling"
                data-strk-img="[why-quote] [why-title] [why-eyebrow]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <figcaption
                id="why-quote"
                className="border-t border-hairline bg-bone p-5 text-sm italic text-steel-soft"
              >
                "Every Atlas D series machine is laser-calibrated before
                shipping. The certificate is in the operator pack, not in a
                drawer."
              </figcaption>
            </figure>
            <span id="why-eyebrow" className="hidden">
              Why Artitect
            </span>
            <span id="why-title" className="hidden">
              Precision not promises
            </span>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <PillarCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
