import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck } from "lucide-react"
import { Container, Section, SectionHeading, Badge } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import { CASE_STUDIES } from "@/data/content"

export default function CaseStudiesSection() {
  return (
    <Section id="case-studies" className="bg-slate-50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end mb-12">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Case studies"
              title="Recent projects we supported"
              description="A few examples of how we've helped overseas buyers source, inspect and ship — with concrete results, not just adjectives."
            />
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Button as={Link} to="/case-studies" variant="darkOutline" size="lg">
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <article
              key={c.slug}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                <img
                  alt={c.imgAlt}
                  data-strk-img-id={c.imgId}
                  data-strk-img="[case-study-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Badge tone="navy">{c.category}</Badge>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {c.summary}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                  {c.results.slice(0, 2).map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <BadgeCheck className="h-4 w-4 mt-0.5 text-amber-500 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <Link
                    to={`/case-studies/${c.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-navy-700"
                  >
                    Read case study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}