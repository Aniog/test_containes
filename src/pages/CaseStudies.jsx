import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHeader from "../components/shared/PageHeader"
import { caseStudies } from "../data/siteData"

export default function CaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Real projects, real outcomes"
        description="A selection of sourcing engagements across industries and geographies. All figures are based on actual project results."
      />

      <section ref={ref} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {caseStudies.map((c, idx) => (
            <article
              key={c.id}
              className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-sm"
            >
              <div className="grid gap-0 lg:grid-cols-12">
                <div
                  className={[
                    "lg:col-span-5",
                    idx % 2 === 1 ? "lg:order-2" : "",
                  ].join(" ")}
                >
                  <div className="aspect-[4/3] h-full w-full overflow-hidden bg-brand-soft">
                    <img
                      alt={c.client}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`case-${c.id}-img`}
                      data-strk-img={`[case-${c.id}-industry] [case-${c.id}-client]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
                <div className="p-7 md:p-10 lg:col-span-7">
                  <span
                    id={`case-${c.id}-industry`}
                    className="inline-flex items-center rounded-full bg-brand-accent/10 px-2.5 py-1 text-xs font-semibold text-brand-accent"
                  >
                    {c.industry}
                  </span>
                  <h2
                    id={`case-${c.id}-client`}
                    className="mt-4 text-2xl font-bold tracking-tight text-brand-ink md:text-3xl"
                  >
                    {c.client}
                  </h2>

                  <div className="mt-6 grid gap-5 md:grid-cols-3">
                    <Block label="Challenge" text={c.challenge} />
                    <Block label="Solution" text={c.solution} />
                    <Block label="Result" text={c.result} />
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-4 border-t border-brand-line pt-6">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-xl font-extrabold text-brand-navy md:text-2xl">
                          {m.value}
                        </div>
                        <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-brand-muted">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className="rounded-2xl border border-brand-line bg-brand-soft p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">
              Have a similar project in mind?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base text-brand-body">
              Tell us what you want to source and we will share comparable engagements,
              expected timelines and an indicative scope.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent-dark"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Block({ label, text }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-accent">
        {label}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-brand-body">{text}</p>
    </div>
  )
}
