import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"

const POINTS = [
  "Free, no-obligation sourcing quote",
  "Reply within 1 business day",
  "Your details stay confidential",
]

export default function CTASection() {
  return (
    <section className="py-20 md:py-24 bg-brand-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to source from China with confidence?
            </h2>
            <p className="mt-4 text-base md:text-lg text-brand-100 leading-relaxed">
              Tell us about your product and target. We'll come back with a clear
              plan, a shortlist of verified suppliers, and a transparent quote —
              usually within one business day.
            </p>
            <ul className="mt-6 space-y-2">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-white">
                  <Check className="w-4 h-4 text-brand-200 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:justify-self-end w-full lg:max-w-sm">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-lg bg-white text-brand-800 hover:bg-brand-50 transition-colors shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-3 text-center text-sm text-brand-100">
              Or email us directly — we reply fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
