import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function CtaBanner({
  eyebrow = "Ready to start?",
  title = "Tell us what you need to source from China.",
  subtitle = "Most buyers receive a first shortlist of qualified suppliers within 3–7 working days. No commitment, no fees for the first conversation.",
  primaryLabel = "Get a Free Sourcing Quote",
  primaryTo = "/contact",
  secondaryLabel = "See How It Works",
  secondaryTo = "/how-it-works",
}) {
  return (
    <section className="bg-navy">
      <div className="container-x grid items-center gap-8 py-14 md:grid-cols-[1.4fr_1fr] md:py-16">
        <div>
          <p className="eyebrow text-accent-muted">{eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-white/75 md:text-base">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-soft"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to={secondaryTo}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
