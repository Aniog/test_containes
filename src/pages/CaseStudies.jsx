import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import PageHero from "@/components/shared/PageHero"
import PageShell from "@/components/shared/PageShell"
import { Container, Section, SectionHeading, Badge } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import { CASE_STUDIES } from "@/data/content"

export default function CaseStudies() {
  useEffect(() => {
    document.title =
      "Case Studies | China Sourcing Projects | SSourcing China"
  }, [])

  return (
    <PageShell>
      <PageHero
        eyebrow="Case studies"
        title="Recent projects we supported"
        description="Three examples of how we've helped overseas buyers source, inspect and ship — with concrete results, not just adjectives."
      />

      <Section className="bg-white">
        <Container>
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
                  <h3
                    id={`case-study-${c.slug}-title`}
                    className="mt-3 text-lg font-semibold text-slate-900"
                  >
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {c.summary}
                  </p>
                  <div className="mt-auto pt-5">
                    <Link
                      to={`/case-studies/${c.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-navy-700"
                    >
                      Read the case study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-100">
        <Container className="text-center">
          <SectionHeading
            eyebrow="Have a similar project?"
            title="Let's talk about your sourcing needs"
            description="Share a few details and we'll come back within one business day with a fixed-fee proposal."
            className="mb-8"
          />
          <Button as={Link} to="/contact" variant="accent" size="lg">
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </Section>
    </PageShell>
  )
}