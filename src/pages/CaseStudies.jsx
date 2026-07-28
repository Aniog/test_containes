import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CheckCircle2 } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import { Section, Container } from "@/components/ui/section"
import { caseStudies } from "@/data/content"
import CtaBanner from "@/components/shared/CtaBanner"

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="How we've helped global buyers"
        description="Representative sourcing situations — re-sourcing, consolidation, and quality protection. Outcomes are illustrative of typical engagements."
      />

      <Section>
        <Container>
          <div ref={containerRef} className="space-y-10">
            {caseStudies.map((cs, idx) => (
              <article
                key={cs.id}
                className="grid gap-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:grid-cols-2"
              >
                <div
                  className={
                    "relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto " +
                    (idx % 2 === 1 ? "lg:order-2" : "")
                  }
                >
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <span className="inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {cs.industry}
                  </span>
                  <h2 id={cs.titleId} className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                    {cs.title}
                  </h2>
                  <p id={cs.descId} className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {cs.summary}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                      Results
                    </h3>
                    <ul className="mt-3 space-y-2.5">
                      {cs.results.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2.5 text-sm text-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  )
}
