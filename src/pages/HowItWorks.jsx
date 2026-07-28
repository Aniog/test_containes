import { CheckCircle2, Clock, FileText } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import CtaBanner from "@/components/shared/CtaBanner"
import { processSteps } from "@/data/process"
import { SectionHeading } from "@/components/ui/section-heading"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const timeline = [
  { label: "Requirements shared", detail: "Day 0" },
  { label: "Supplier shortlist delivered", detail: "Day 5-10" },
  { label: "Samples approved", detail: "Week 2-4" },
  { label: "PO placed & production starts", detail: "Week 4-5" },
  { label: "During-production inspection", detail: "Mid-production" },
  { label: "Pre-shipment inspection", detail: "Before ex-warehouse" },
  { label: "Shipped & delivered", detail: "Per lead time" },
]

export default function HowItWorks() {
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
    <>
      <PageHeader
        breadcrumb="How It Works"
        eyebrow="The Process"
        title="How sourcing with us works, step by step"
        description="A transparent, milestone-based process. You always know what's happening, what's next, and what you're paying for."
      />

      <section className="py-16 md:py-24" ref={containerRef}>
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Six Steps"
                title="From first message to delivered goods"
                description="Each step has a clear deliverable, so you can measure progress and approve before we move on."
              />
              <ol className="mt-10 space-y-6">
                {processSteps.map((step) => (
                  <li key={step.id} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    alt="Quality inspection on a Chinese factory production line"
                    data-strk-img-id="howitworks-main-3c8d1e"
                    data-strk-img="[howitworks-img-desc] [howitworks-img-title]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                  <span id="howitworks-img-title" className="sr-only">
                    Factory inspection and production follow-up in China
                  </span>
                  <span id="howitworks-img-desc" className="sr-only">
                    Inspector checking product quality on a manufacturing production line
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    Typical project timeline
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Indicative - actual timing depends on product and order size.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {timeline.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
                      >
                        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-success" />
                          {item.label}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What You Get"
            title="Clear deliverables at every stage"
            description="No vague status updates. Every milestone produces something concrete you can review."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Documented reports",
                desc: "Audit reports, QC reports, and shipping documents - all in writing with photos and video where relevant.",
              },
              {
                icon: Clock,
                title: "Predictable timing",
                desc: "A realistic schedule up front, with weekly updates so you can plan your downstream logistics.",
              },
              {
                icon: CheckCircle2,
                title: "Approval gates",
                desc: "You approve samples, inspection results, and shipment before we proceed - nothing ships blind.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want a walkthrough for your product?"
        description="Send us your specs and we'll map out the steps, timeline, and cost for your specific project."
        primaryLabel="Get a Free Sourcing Quote"
      />
    </>
  )
}
