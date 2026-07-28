import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { caseStudies } from "@/data/case-studies"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function CaseStudiesPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="bg-muted py-16 md:py-24" ref={containerRef}>
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real sourcing projects, measurable results"
          description="A few examples of how our process helped buyers reduce cost, improve quality, and ship on time."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((cs) => (
            <Link
              key={cs.id}
              to="/case-studies"
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Badge variant="default" className="w-fit">
                  {cs.industry}
                </Badge>
                <h3 id={cs.titleId} className="mt-3 text-lg font-semibold text-foreground">
                  {cs.title}
                </h3>
                <p id={cs.descId} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cs.summary}
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
                  {cs.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <p className="text-lg font-bold text-primary">{r.value}</p>
                      <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button as={Link} to="/case-studies" variant="outline" size="lg">
            Read all case studies
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
