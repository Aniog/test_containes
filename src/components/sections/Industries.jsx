import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Reveal from "@/components/ui/Reveal"
import { industries } from "@/data/site"

export default function Industries() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="industries" ref={containerRef} className="bg-cream-soft py-20 md:py-28 lg:py-32">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[11px] md:text-xs uppercase tracking-eyebrow text-brass-deep font-medium">
              <span className="inline-block w-8 h-px bg-brass align-middle mr-3" />
              Industries served
            </p>
            <h2
              id="industries-title"
              className="mt-5 font-display font-light text-ink text-3xl md:text-5xl leading-tight"
            >
              Trusted by fabricators in eight demanding industries.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.id}
              delay={i * 50}
              className="bg-cream-soft aspect-square flex flex-col justify-between p-5 md:p-7 hover:bg-white transition-colors"
            >
              <span className="text-[10px] uppercase tracking-eyebrow text-muted">
                0{i + 1}
              </span>
              <div>
                <div
                  className="w-full aspect-[16/9] mb-4 bg-cream border border-line/60"
                  data-strk-bg-id={`industry-bg-${ind.id}`}
                  data-strk-bg={`[industry-name-${ind.id}] [industries-title]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="500"
                />
                <h3
                  id={`industry-name-${ind.id}`}
                  className="font-display text-lg md:text-xl text-ink leading-snug"
                >
                  {ind.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
