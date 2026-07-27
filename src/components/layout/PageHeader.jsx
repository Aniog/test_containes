import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function PageHeader({ eyebrow, title, description, cta = true }) {
  return (
    <section className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-300 mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base md:text-lg text-slate-300 leading-relaxed">
              {description}
            </p>
          )}
          {cta && (
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-brand-700 text-white hover:bg-brand-800 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
