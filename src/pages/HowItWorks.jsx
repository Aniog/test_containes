import { useEffect, useRef } from "react"
import { processSteps } from "@/data/process"
import PageHeader from "@/components/shared/PageHeader"
import { Container, SectionHeader } from "@/components/shared/Section"
import CtaBanner from "@/components/shared/CtaBanner"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function HowItWorks() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="From your request to delivered goods"
        description="A transparent, six-stage process that keeps you informed and your order accountable at every milestone."
      />

      <section ref={ref} className="py-16 md:py-24 bg-bg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lift">
              <img
                alt="Quality inspection on a production line"
                data-strk-img-id="howitworks-qc-3f7a2"
                data-strk-img="[howitworks-qc-title] [howitworks-qc-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <h2 id="howitworks-qc-title" className="text-2xl md:text-3xl font-bold text-ink">
                Built around verification and transparency
              </h2>
              <p id="howitworks-qc-desc" className="mt-4 text-slate-ink leading-relaxed">
                Every stage has a defined deliverable — a shortlist, an audit
                report, a sample evaluation, an inspection report, or shipping
                documents. You always know what was checked and what the result
                was.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionHeader
            eyebrow="The Process"
            title="Six stages, one accountable coordinator"
            description="Each stage flows into the next, with clear handoffs and documentation."
          />

          <div className="mt-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="relative md:pl-16 rounded-xl border border-border bg-surface p-6 shadow-card"
                >
                  <div className="absolute left-0 top-6 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white font-bold -translate-x-0">
                    {step.step}
                  </div>
                  <div className="flex items-center gap-3 md:hidden">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white text-sm font-bold">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-3 md:mt-0 text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-ink leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Want this process applied to your order?"
        description="Share your product requirements and we will map out the sourcing plan, timeline, and indicative costs."
        secondaryLabel="View services"
        secondaryTo="/services"
      />
    </>
  )
}
