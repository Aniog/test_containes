import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Section } from "@/components/ui/Section"
import { StrkImage } from "@/components/ui/StrkImage"
import { InquiryForm } from "@/components/shared/InquiryForm"
import { caseStudies } from "@/data/content"

const regionToQuery = {
  USA: "US American retail warehouse buyer",
  EU: "European European Union retail brand",
  "UK": "United Kingdom British retail product",
  Australia: "Australia Australian retail market product",
  "Middle East": "Middle East Arabian Gulf product retail",
  Africa: "Africa African market wholesale distribution",
}

export function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Recent sourcing, QC and shipping projects"
        subtitle="A selection of engagements from the past 12 months. Client names are kept confidential — we're happy to share references and full reports on request."
      />

      <Section bg="white">
        <div className="space-y-10 md:space-y-14">
          {caseStudies.map((c, i) => {
            const reverse = i % 2 === 1
            return (
              <article
                key={c.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-slate-200 bg-white overflow-hidden ${
                  i % 2 === 0 ? "" : ""
                }`}
              >
                <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                  <StrkImage
                    imgId={`case-img-${c.id}`}
                    query={`[case-${c.id}-title] [case-${c.id}-industry] ${regionToQuery[c.region] || ""}`.trim()}
                    ratio="4x3"
                    width={1100}
                    alt={c.title}
                    className="aspect-[4/3] lg:rounded-none lg:h-full"
                  />
                </div>
                <div className={`lg:col-span-5 p-6 md:p-8 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span
                      id={`case-${c.id}-industry`}
                      className="px-2.5 py-1 rounded-md bg-navy-50 text-navy-900 font-semibold"
                    >
                      {c.industry}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold">
                      {c.region}
                    </span>
                  </div>
                  <h2
                    id={`case-${c.id}-title`}
                    className="mt-3 text-xl md:text-2xl font-bold text-slate-900 leading-snug"
                  >
                    {c.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {c.summary}
                  </p>

                  <ul className="mt-5 grid grid-cols-3 gap-2">
                    {c.results.map((r) => (
                      <li
                        key={r.label}
                        className="text-center py-3 rounded-md bg-slate-50 border border-slate-200"
                      >
                        <p className="text-sm font-bold text-slate-900">
                          {r.value}
                        </p>
                        <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                          {r.label}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Services used
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {c.services.map((s) => (
                        <li
                          key={s}
                          className="text-xs px-2.5 py-1 rounded-md bg-accent-50 text-accent-700 font-semibold"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Section>

      {/* Reference promise */}
      <Section bg="slate">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-accent-600">References on request</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
              Talk to a buyer we've worked with
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              For serious inquiries, we are happy to arrange a short call
              with an existing client in a similar product category or region
              — provided they agree and the conversation is kept confidential
              on both sides.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              {[
                "Written case studies with photos available",
                "Sample inspection reports available",
                "NDA available before any sensitive discussion",
              ].map((it) => (
                <li key={it} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="card p-6 md:p-7 bg-white">
              <h3 className="text-lg font-semibold text-slate-900">
                Want a similar outcome?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Send us your product and the problem you're trying to solve.
                We'll come back with a practical plan.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-md px-5 py-3 text-sm"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="navySubtle" id="inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent-600">Start a project</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Tell us what you need to source
            </h2>
            <p className="mt-4 text-base text-slate-600">
              We will reply with a sourcing plan and fee within 1–3 business
              days.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Section>
    </>
  )
}

export default CaseStudies
