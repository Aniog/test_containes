import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Button from "@/components/ui/button"
import { Section } from "@/components/shared/Section"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function CTASection({
  title = "Ready to source with confidence?",
  subtitle = "Tell us what you need to source. We will send back a clear plan and a free, no-obligation quote within one business day.",
  buttonText = "Get a Free Sourcing Quote",
}) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <Section className="py-0">
      <div ref={ref} className="relative overflow-hidden rounded-3xl bg-primary-dark px-6 py-14 md:px-16 md:py-20 text-center">
        <div className="absolute inset-0 opacity-10"
          data-strk-bg-id={`cta-bg-${title.replace(/\s+/g, "-").toLowerCase()}`}
          data-strk-bg="[cta-subtitle] [cta-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p id="cta-subtitle" className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button as={Link} to="/contact" size="lg">
              {buttonText} <ArrowRight className="w-4 h-4" />
            </Button>
            <Button as={Link} to="/services" variant="outline" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
