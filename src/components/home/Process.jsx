import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useReveal } from "@/hooks/useReveal"
import { processSteps } from "@/data/company"
import { cn } from "@/lib/utils"

function StepRow({ step, index }) {
  const [ref, visible] = useReveal()
  const isLast = index === processSteps.length - 1

  return (
    <li
      ref={ref}
      className={cn(
        "relative grid grid-cols-12 gap-4 py-10 transition-all duration-700 md:gap-8 md:py-12",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[2.4rem] top-[5rem] bottom-0 w-px bg-hairline md:left-[3rem]"
        />
      )}
      <div className="col-span-2 md:col-span-1">
        <div className="grid h-12 w-12 place-items-center border border-brass/40 bg-bone font-serif text-lg text-brass-deep md:h-16 md:w-16 md:text-xl num-tabular">
          {step.step}
        </div>
      </div>
      <div className="col-span-10 md:col-span-11">
        <h3 className="font-serif text-2xl text-ink md:text-3xl">
          {step.title}
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel-soft">
          {step.body}
        </p>
      </div>
    </li>
  )
}

export function Process() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section
      ref={ref}
      aria-label="How we work"
      className="bg-bone section-pad-lg"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="How we work"
              title="Four steps. Fixed price. Twelve weeks."
              description="A predictable process means you can plan your production schedule around our delivery date, not the other way around."
            />

            <div className="mt-10 overflow-hidden border border-hairline">
              <img
                alt="Artitect engineering team reviewing a custom folding machine build"
                data-strk-img-id="process-img-team"
                data-strk-img="[process-quote] [process-title] [process-eyebrow]"
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                className="aspect-[3/2] w-full object-cover"
                loading="lazy"
              />
              <blockquote
                id="process-quote"
                className="border-t border-hairline bg-paper p-5 text-sm italic text-steel-soft"
              >
                "The engineer who sold us the Titan H600 was on site for the
                install. Same person, same handwriting on the layout drawing."
              </blockquote>
            </div>
            <span id="process-eyebrow" className="hidden">
              How we work
            </span>
            <span id="process-title" className="hidden">
              Four steps fixed price twelve weeks
            </span>
          </div>

          <div className="lg:col-span-7">
            <ol className="border-t border-hairline">
              {processSteps.map((step, i) => (
                <StepRow key={step.step} step={step} index={i} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
