import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Section, SectionHeading, Container } from "@/components/ui/section"
import { caseStudies } from "@/data/content"

export default function HomeCaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <Section id="case-studies" className="bg-muted/50">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Case studies"
            title="Real sourcing situations we've handled"
            description="Examples of how we've helped buyers re-source, consolidate, and protect quality."
          />
          <a
            href="/case-studies"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:text-accent"
          >
            See all case studies
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div ref={containerRef} className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                  {cs.industry}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 id={cs.titleId} className="text-lg font-bold text-foreground">
                  {cs.title}
                </h3>
                <p id={cs.descId} className="mt-2 text-sm text-muted-foreground">
                  {cs.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {cs.results.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
