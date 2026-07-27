import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Target, Route, TrendingUp } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import CTABand from '@/components/sections/CTABand'
import { CASE_STUDIES } from '@/data/content'

export default function CaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="How we help buyers import more reliably"
        description="Real examples of sourcing, quality control, and logistics work that reduced risk and improved outcomes for our clients."
        bgId="cases-hero-bg-5d4e"
        queryIds="[cases-hero-desc] [cases-hero-title]"
      />
      <span id="cases-hero-title" className="hidden">Sourcing case studies</span>
      <span id="cases-hero-desc" className="hidden">
        Case studies on supplier verification, quality inspection, and shipping consolidation for global buyers.
      </span>

      <section ref={ref} className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-10">
            {CASE_STUDIES.map((cs, idx) => {
              const reversed = idx % 2 === 1
              return (
                <article
                  key={cs.id}
                  className="grid gap-8 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:gap-12"
                >
                  <div className={`overflow-hidden rounded-lg bg-muted ${reversed ? 'lg:order-2' : ''}`}>
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {cs.industry}
                    </span>
                    <h2 id={cs.titleId} className="mt-2 text-2xl font-bold text-foreground">
                      {cs.title}
                    </h2>
                    <div className="mt-5 space-y-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-danger" />
                          <h3 className="text-sm font-semibold text-foreground">Challenge</h3>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{cs.challenge}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Route className="h-4 w-4 text-accent" />
                          <h3 className="text-sm font-semibold text-foreground">Our approach</h3>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{cs.approach}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-success" />
                          <h3 className="text-sm font-semibold text-foreground">Result</h3>
                        </div>
                        <p id={cs.descId} className="mt-1 text-sm text-muted-foreground">
                          {cs.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
