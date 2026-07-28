import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Clock } from "lucide-react"
import PageHeader from "@/components/ui/page-header"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/sections/CTASection"
import { processSteps } from "@/data/content"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const timeline = [
  { phase: "Week 1", title: "Discovery & shortlist", desc: "Requirements confirmed, suppliers identified, first quotes collected." },
  { phase: "Week 2-3", title: "Verification & sampling", desc: "Factory audits, sample coordination, and spec approval." },
  { phase: "Week 4-10", title: "Production & QC", desc: "PO placed, production tracked, inspections at milestones." },
  { phase: "Week 10+", title: "Inspection & shipping", desc: "Final QC, consolidation, freight, and customs to your door." },
]

export default function HowItWorks() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="From request to delivery, step by step"
        description="A transparent process with clear milestones, written updates, and one dedicated specialist from start to finish."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionHeading
            eyebrow="The Process"
            title="Six steps to a reliable order"
            description="Each step is designed to reduce risk and keep you informed at every milestone."
          />

          <div className="mt-12 relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-slate-200 md:left-1/2 md:block" />
            <div className="space-y-8">
              {processSteps.map((step, idx) => (
                <div
                  key={step.id}
                  className={
                    "relative flex flex-col gap-4 md:flex-row md:items-center " +
                    (idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")
                  }
                >
                  <div className="md:w-1/2">
                    <div
                      className={
                        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7 " +
                        (idx % 2 === 0 ? "md:text-right" : "md:text-left")
                      }
                    >
                      <div
                        className={
                          "flex items-center gap-3 " +
                          (idx % 2 === 0 ? "md:justify-end" : "md:justify-start")
                        }
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                          <step.icon className="h-5 w-5" />
                        </span>
                        <span className="text-2xl font-bold text-slate-200">{step.step}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Typical Timeline"
                title="What to expect, and when"
                description="Timelines vary by product and order size, but most projects follow this general rhythm."
                align="left"
              />
              <div className="mt-8 space-y-4">
                {timeline.map((t) => (
                  <div
                    key={t.phase}
                    className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                        {t.phase}
                      </p>
                      <h3 className="mt-0.5 text-base font-bold text-ink">{t.title}</h3>
                      <p className="mt-1 text-sm text-muted">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button as={Link} to="/contact" className="mt-8">
                Start your project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt="Factory production floor in China"
                  data-strk-img-id="howitworks-floor-9a8b7c"
                  data-strk-img="[howitworks-img-title] [howitworks-img-desc]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  className="h-full w-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id="howitworks-img-title" className="text-lg font-bold text-ink">
                  On-the-ground production follow-up
                </h3>
                <p id="howitworks-img-desc" className="mt-2 text-sm leading-relaxed text-muted">
                  Our specialists visit factories, track schedules, and send
                  photo updates so you always know the real status of your order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
