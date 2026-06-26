import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function CtaBand({
  title = "Ready to source with confidence?",
  description = "Tell us what you need to source. We will respond within one business day with next steps and a clear quote.",
  buttonText = "Get a Free Sourcing Quote",
  to = "/contact",
}) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              {description}
            </p>
          </div>
          <div className="shrink-0">
            <Button
              as={Link}
              to={to}
              variant="secondary"
              size="lg"
              className="border-transparent bg-white text-brand hover:bg-white/90"
            >
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
