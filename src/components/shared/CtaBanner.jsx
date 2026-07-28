import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Section"

export default function CtaBanner({
  title = "Ready to source with confidence?",
  description = "Tell us what you need to source. We will verify suppliers, control quality, and coordinate shipping so your order arrives right.",
  primaryLabel = "Get a Free Sourcing Quote",
  primaryTo = "/contact",
  secondaryLabel = "See how it works",
  secondaryTo = "/how-it-works",
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-brand px-6 py-12 md:px-12 md:py-16 text-center">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white" />
            <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
              {description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button as={Link} to={primaryTo} variant="accent" size="lg">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
              {secondaryLabel && (
                <Button
                  as={Link}
                  to={secondaryTo}
                  size="lg"
                  className="bg-white text-brand hover:bg-white/90"
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
