import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection({
  title = "Ready to source with confidence?",
  description = "Tell us what you need. We'll find verified suppliers, manage quality, and coordinate shipping so you can focus on growing your business.",
  buttonText = "Get a Free Sourcing Quote",
  to = "/contact",
}) {
  return (
    <section className="bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button as={Link} to={to} size="lg">
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
