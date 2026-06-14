import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta = { to: "/contact", label: "Get a Free Sourcing Quote" },
  secondaryCta,
  bullets = [],
  background,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {background ? (
        <div
          className="absolute inset-0 -z-10 opacity-30"
          aria-hidden="true"
          data-strk-bg-id={background.id}
          data-strk-bg={background.query}
          data-strk-bg-ratio={background.ratio || "16x9"}
          data-strk-bg-width={background.width || 1600}
        />
      ) : null}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
        aria-hidden="true"
      />
      <div className="container-wide py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow-on-dark">{eyebrow}</p> : null}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
              {subtitle}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {primaryCta ? (
              <Link to={primaryCta.to} className="btn-primary">
                {primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link to={secondaryCta.to} className="btn-secondary-on-dark">
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
          {bullets.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-200">
              {bullets.map((b) => (
                <li key={b} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="absolute bottom-6 right-6 hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 md:inline-flex">
        <ShieldCheck className="h-3.5 w-3.5 text-success-500" />
        English-speaking team in Shenzhen · Replies within 1 business day
      </div>
    </section>
  )
}
