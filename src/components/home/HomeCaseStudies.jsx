import { Section, Container, SectionHeading } from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { CASE_STUDIES } from "@/data/site"
import { ArrowRight } from "lucide-react"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function HomeCaseStudies() {
  return (
    <Section className="bg-[#F5F7FA]">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Case Studies"
            title="Sourcing projects we've delivered"
            description="Real examples of how we help buyers source, verify, inspect, and ship from China."
          />
          <Button to="/case-studies" variant="outline" className="shrink-0">
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={study.client}
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1B6CA8]">
                  {study.industry}
                </span>
                <h3 id={study.titleId} className="mt-2 text-lg font-bold text-[#0B2545]">
                  {study.client}
                </h3>
                <p id={study.descId} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {study.challenge}
                </p>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm font-medium text-[#0E7C66]">
                  {study.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
