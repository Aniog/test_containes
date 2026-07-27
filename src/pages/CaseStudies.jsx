import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/shared/PageHero'
import { Section } from '@/components/ui/Section'
import CtaBanner from '@/components/shared/CtaBanner'
import { CASE_STUDIES } from '@/content'
import { MapPin, Tag, Target, Route, TrendingUp } from 'lucide-react'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real sourcing outcomes"
        description="Examples of how our sourcing, quality control, and shipping support helped buyers get their products to market with less risk."
      />

      <Section>
        <div ref={containerRef} className="space-y-12">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 aspect-[16/10] lg:aspect-auto overflow-hidden bg-muted">
                  <img
                    src={PLACEHOLDER}
                    alt={study.title}
                    data-strk-img-id={study.imgId}
                    data-strk-img={`[${study.descId}] [${study.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="lg:col-span-3 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent uppercase tracking-wide">
                      <Tag className="h-3.5 w-3.5" />
                      {study.industry}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {study.location}
                    </span>
                  </div>
                  <h2 id={study.titleId} className="mt-4 text-xl md:text-2xl font-extrabold tracking-tight text-foreground leading-snug">
                    {study.title}
                  </h2>
                  <p id={study.descId} className="sr-only">
                    {study.challenge}
                  </p>

                  <div className="mt-5 space-y-4">
                    <div className="flex gap-3">
                      <Target className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-bold text-foreground">Challenge</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Route className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-bold text-foreground">Our Approach</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {study.approach}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <TrendingUp className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-bold text-foreground">Result</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Want results like these?"
        description="Share your product and goals with us. We will outline how we can help you source with confidence."
      />
    </>
  )
}
