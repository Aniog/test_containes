import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useReveal } from "@/hooks/useReveal"
import { testimonials } from "@/data/company"
import { cn } from "@/lib/utils"

function TestimonialCard({ item, index }) {
  const [ref, visible] = useReveal()
  return (
    <figure
      ref={ref}
      className={cn(
        "flex h-full flex-col border border-hairline bg-paper p-8 transition-all duration-700 md:p-10",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote
        className="h-7 w-7 text-brass"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <blockquote className="mt-6 flex-1 font-serif text-xl leading-snug text-ink md:text-2xl">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-8 border-t border-hairline pt-5 text-sm">
        <p className="font-medium text-ink">{item.name}</p>
        <p className="mt-1 text-xs uppercase tracking-eyebrow text-steel-soft">
          {item.role}
        </p>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section
      ref={ref}
      aria-label="Customer testimonials"
      className="bg-paper section-pad-lg"
    >
      <div className="container-content">
        <SectionHeader
          eyebrow="From the shop floor"
          title="What fabricators say after the install."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} item={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
