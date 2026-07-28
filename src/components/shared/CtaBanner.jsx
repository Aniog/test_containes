import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CtaBanner({
  title = "Ready to source from China with confidence?",
  description = "Tell us what you need. We'll send a shortlist of verified suppliers and a transparent quote - no obligation.",
  primaryLabel = "Get a Free Sourcing Quote",
  primaryTo = "/contact",
  secondaryLabel = "Explore Services",
  secondaryTo = "/services",
}) {
  return (
    <section className="bg-primary-900 py-16 md:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-primary-200 sm:text-lg">
            {description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to={primaryTo} variant="accent" size="lg">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              as={Link}
              to={secondaryTo}
              variant="outline"
              size="lg"
              className="border-primary-400 text-white hover:bg-primary-800"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
