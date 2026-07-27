import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Section, SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { CASE_STUDIES } from '@/content'
import { ArrowRight } from 'lucide-react'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function HomeCaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <Section muted>
      <SectionHeader
        eyebrow="Case Studies"
        title="How we help buyers succeed"
        description="Real examples of how our sourcing, QC, and shipping support helped clients get their products to market."
      />
      <div ref={containerRef} className="mt-12 grid gap-6 lg:grid-cols-3">
        {CASE_STUDIES.map((study) => (
          <article
            key={study.id}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
          >
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={PLACEHOLDER}
                alt={study.title}
                data-strk-img-id={study.imgId}
                data-strk-img={`[${study.descId}] [${study.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-medium text-accent uppercase tracking-wide">
                <span>{study.industry}</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground normal-case tracking-normal">
                  {study.location}
                </span>
              </div>
              <h3 id={study.titleId} className="mt-2 text-lg font-bold text-foreground leading-snug">
                {study.title}
              </h3>
              <p id={study.descId} className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {study.challenge}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/case-studies" variant="outline">
          Read All Case Studies
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}
