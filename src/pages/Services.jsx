import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import PageHeader from "../components/shared/PageHeader"
import Icon from "../components/shared/Icon"
import { services } from "../data/siteData"

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="End-to-end sourcing services from China"
        description="Eight focused services that cover every stage from supplier discovery to delivered shipment. Engage us for the full cycle or only the steps you need."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent-dark"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {services.map((s) => (
            <article
              key={s.id}
              className="flex h-full flex-col rounded-xl border border-brand-line bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-brand-ink md:text-2xl">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-body md:text-base">
                {s.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-brand-body">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy py-14 text-white md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
              Not sure which services you need?
            </h3>
            <p className="mt-3 max-w-2xl text-base text-white/80">
              Send us a short brief. We will reply with a recommended scope and a transparent fee proposal.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand-navy hover:bg-white/90"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
