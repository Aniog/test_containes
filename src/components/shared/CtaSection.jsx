import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useImageLoader } from "@/hooks/useImageLoader"
import { StrkBackground } from "@/components/shared/StrkImage"

export function CtaSection() {
  const ref = useImageLoader([])
  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-900">
      <StrkBackground
        bgId="cta-bg-7f3a9c"
        query="[cta-subtitle] [cta-title]"
        ratio="16x9"
        width={1600}
        className="absolute inset-0 opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 to-brand-900/70" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 md:py-24 lg:px-8">
        <h2
          id="cta-title"
          className="text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Ready to source from China with confidence?
        </h2>
        <p
          id="cta-subtitle"
          className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg"
        >
          Tell us what you need to source. We will send a free, no-obligation
          quote with a clear plan and next steps.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button as={Link} to="/contact" variant="accent" size="lg">
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button as={Link} to="/how-it-works" variant="outlineWhite" size="lg">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
