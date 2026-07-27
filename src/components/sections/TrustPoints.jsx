import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CheckCircle2 } from "lucide-react"
import { TRUST_POINTS } from "@/data/content"
import { Section, SectionHeader } from "@/components/shared/Section"

export default function TrustPoints() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <Section id="why" className="bg-page">
      <div className="container-x" ref={ref}>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Why buyers stay with us"
              title="Practical reasons, not marketing slogans"
              subtitle="A few of the things we do differently — and the things buyers tell us they wish they had asked for on day one."
            />
            <div
              className="mt-8 aspect-[4/3] overflow-hidden rounded-2xl border border-border-soft bg-slate-100"
              data-strk-bg-id="why-image-bg-1f4d3e"
              data-strk-bg="[why-section-title] [why-section-subtitle]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="700"
            >
              <img
                alt="A sourcing agent in a meeting with factory managers reviewing product samples"
                className="h-full w-full object-cover"
                data-strk-img-id="why-image-1f4d3e-img"
                data-strk-img="[why-section-title] [why-section-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <p id="why-section-title" className="sr-only">
              Why buyers stay with us
            </p>
            <p id="why-section-subtitle" className="sr-only">
              Practical reasons, not marketing slogans
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {TRUST_POINTS.map((tp) => (
              <li
                key={tp.id}
                id={`tp-${tp.id}`}
                className="card flex flex-col gap-2 p-5"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <h3
                  id={`tp-${tp.id}-title`}
                  className="text-base font-semibold text-ink-900"
                >
                  {tp.title}
                </h3>
                <p
                  id={`tp-${tp.id}-desc`}
                  className="text-sm text-ink-700"
                >
                  {tp.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
