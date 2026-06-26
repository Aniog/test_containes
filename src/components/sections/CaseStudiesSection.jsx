import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Container, SectionHeading } from "@/components/ui/primitives"
import { caseStudies } from "@/data/site"
import { useStrkImages } from "@/lib/useStrkImages"

export default function CaseStudiesSection({ limit }) {
  const ref = useStrkImages([])
  const items = limit ? caseStudies.slice(0, limit) : caseStudies

  return (
    <section ref={ref} className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="Results from real sourcing projects"
          description="A look at how we helped buyers solve sourcing, quality, and logistics challenges across different industries."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <article
              key={c.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                alt={c.client}
                data-strk-img-id={c.imgId}
                data-strk-img={`[${c.descId}] [${c.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex w-fit items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {c.industry}
                </span>
                <h3 id={c.titleId} className="mt-3 text-lg font-bold text-slate-900">{c.client}</h3>
                <p id={c.descId} className="sr-only">{c.challenge}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.challenge}</p>
                <div className="mt-4 rounded-lg bg-green-50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Result</p>
                  <p className="mt-1 text-sm text-slate-700">{c.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            Read all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
