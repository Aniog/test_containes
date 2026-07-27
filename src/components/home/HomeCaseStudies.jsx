import { Link } from "react-router-dom"
import { ArrowRight, MapPin } from "lucide-react"
import { CASE_STUDIES } from "@/data/content"
import SectionHeading from "@/components/common/SectionHeading"

export default function HomeCaseStudies() {
  const featured = CASE_STUDIES.slice(0, 3)
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title="How buyers source with us"
          description="Real engagement patterns showing how we apply sourcing, verification, QC, and shipping together."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((study) => (
            <article
              key={study.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  alt={study.title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand">
                    {study.industry}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {study.location}
                  </span>
                </div>
                <h3
                  id={study.titleId}
                  className="mt-3 text-lg font-semibold text-ink"
                >
                  {study.title}
                </h3>
                <p
                  id={study.descId}
                  className="mt-2 flex-1 text-sm leading-relaxed text-slate-600"
                >
                  {study.summary}
                </p>
                <Link
                  to="/case-studies"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-accent"
                >
                  Read case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
