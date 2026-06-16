import { useEffect, useRef } from "react"
import { Ruler, ShieldCheck, Cpu, PhoneCall } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Reveal from "@/components/ui/Reveal"
import { features } from "@/data/site"

const ICONS = {
  precision: Ruler,
  frame: ShieldCheck,
  control: Cpu,
  service: PhoneCall,
}

export default function WhyUs() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="why" ref={containerRef} className="bg-ink text-cream-soft py-20 md:py-28 lg:py-32">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <p className="text-[11px] md:text-xs uppercase tracking-eyebrow text-brass font-medium">
                <span className="inline-block w-8 h-px bg-brass align-middle mr-3" />
                Why ARTITECT
              </p>
              <h2
                id="why-title"
                className="mt-5 font-display font-light text-3xl md:text-5xl leading-tight text-cream-soft"
              >
                The quiet work of building a machine that outlasts its decade.
              </h2>
              <p
                id="why-subtitle"
                className="mt-5 text-cream-soft/75 text-lg leading-relaxed max-w-md"
              >
                We make fewer machines, on purpose. Every decision in the workshop is filtered through the
                same four questions.
              </p>
              <div
                aria-hidden
                className="mt-10 hidden lg:block aspect-[4/5] max-w-sm border border-line-dark"
              >
                <div
                  className="w-full h-full"
                  data-strk-bg-id="why-bg-1f7e4b"
                  data-strk-bg="[why-subtitle] [why-title]"
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="700"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line-dark">
            {features.map((f, i) => {
              const Icon = ICONS[f.id]
              return (
                <Reveal key={f.id} delay={i * 80} className="bg-ink p-7 md:p-8 flex flex-col">
                  <Icon className="w-6 h-6 text-brass" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-2xl text-cream-soft">{f.title}</h3>
                  <p className="mt-3 text-sm text-cream-soft/75 leading-relaxed">{f.body}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
