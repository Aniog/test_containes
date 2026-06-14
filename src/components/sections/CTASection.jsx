import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function CTASection({
  title = "Ready to source from China with a partner you can actually call?",
  subtitle = "Send a quick brief. We will reply within one business day with a shortlist of pre-screened factories, a sample plan, and a clear cost breakdown.",
  ctaLabel = "Get a Free Sourcing Quote",
  ctaHref = "/contact",
}) {
  return (
    <section className="bg-navy-900 text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-300 leading-relaxed">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
            <Link to={ctaHref} className="btn-primary">
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="mailto:hello@ssourcingchina.com" className="btn-secondary-on-dark">
              Email a sourcing manager
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
