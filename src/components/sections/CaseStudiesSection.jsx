import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import SectionHeader from "@/components/sections/SectionHeader"
import { caseStudies } from "@/data/content"

export default function CaseStudiesSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case studies"
          title="Real sourcing projects, real outcomes"
          description="A look at how we have helped buyers source, verify, and ship products from China."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((c) => (
            <Card key={c.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-md">
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f59e0b]">
                  {c.industry}
                </span>
                <h3 id={c.titleId} className="mt-2 text-lg font-bold text-slate-900">
                  {c.title}
                </h3>
                <p id={c.descId} className="mt-2 text-sm leading-relaxed text-slate-600">
                  {c.desc}
                </p>
                <p className="mt-4 text-sm font-medium text-slate-900">
                  Result: <span className="font-normal text-slate-600">{c.result}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f2a4a] hover:underline"
          >
            Read all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
