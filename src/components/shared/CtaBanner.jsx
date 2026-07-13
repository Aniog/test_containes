import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function CtaBanner({
  eyebrow = "Ready to source from China?",
  title = "Tell us about your project — get a sourcing plan and quote within 1 business day.",
  description,
  primaryTo = "/contact",
  primaryLabel = "Get a Free Sourcing Quote",
  secondaryTo = "/how-it-works",
  secondaryLabel = "See How It Works",
}) {
  return (
    <section className="bg-brand-800 text-white">
      <div className="container-x py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200 mb-3">
              {eyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-brand-100 text-base md:text-lg max-w-2xl">
                {description}
              </p>
            )}
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-800 hover:bg-brand-50 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center gap-2 border border-brand-600 text-white hover:bg-brand-700 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
