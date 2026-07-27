import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, FileText, Search, Boxes, BadgeCheck, ClipboardCheck, Ship } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/layout/PageHero"
import SectionHeader from "@/components/ui/SectionHeader"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import StrkImage from "@/components/sections/StrkImage"
import InquiryCTA from "@/components/sections/InquiryCTA"
import { processSteps } from "@/data/site"

const phaseIcons = {
  "01": FileText,
  "02": Search,
  "03": Boxes,
  "04": BadgeCheck,
  "05": ClipboardCheck,
  "06": Ship,
}

const phases = [
  {
    title: "Scoping & sourcing",
    range: "Days 1–10",
    steps: ["01", "02", "03"],
    description:
      "We confirm your brief, shortlist 3–5 factories, and arrange samples for your review.",
  },
  {
    title: "Verification & sampling",
    range: "Days 8–20",
    steps: ["04", "03"],
    description:
      "We audit the chosen factory, run sampling, and lock the spec, price, and timeline.",
  },
  {
    title: "Production & quality control",
    range: "Days 20–60",
    steps: ["05"],
    description:
      "Production runs with weekly status, in-process checks, and a final AQL pre-shipment inspection.",
  },
  {
    title: "Shipping & delivery",
    range: "Days 60–80",
    steps: ["06"],
    description:
      "We book freight, prepare export documents, and coordinate customs to your destination port or door.",
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How it works"
        title="A clear six-step process from brief to delivered goods"
        description="Predictable, written, and tracked. Every step has a deliverable, a timeline, and a person responsible."
      />

      <section className="bg-warm-100">
        <div className="container-content py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <StrkImage
                imgId="howitworks-hero-91a3b2"
                query="sourcing project manager working at desk with supplier samples and timeline"
                ratio="4x3"
                width={900}
                alt="Sourcing project manager working with samples and timeline"
                ratioClass="aspect-[4/3]"
                containerClassName="rounded-[6px] border border-warm-300 shadow-card"
              />
              <div className="mt-6 bg-warm-200 border border-warm-300 rounded-[6px] p-5">
                <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-teal">
                  Typical timeline
                </div>
                <div className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
                  From your first message to goods loaded on a vessel:{" "}
                  <span className="font-semibold text-ink">8 to 12 weeks</span>{" "}
                  for most products, depending on complexity and material
                  availability.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ol className="flex flex-col gap-6">
                {processSteps.map((step, idx) => {
                  const Icon = phaseIcons[step.id] || FileText
                  return (
                    <li key={step.id}>
                      <Card className="p-6 md:p-7">
                        <div className="flex items-start gap-5">
                          <div className="shrink-0 flex flex-col items-center">
                            <div className="w-11 h-11 rounded-[4px] bg-teal text-white flex items-center justify-center">
                              <Icon size={20} strokeWidth={1.75} />
                            </div>
                            {idx < processSteps.length - 1 && (
                              <div className="flex-1 w-px bg-warm-300 mt-2" style={{ minHeight: "24px" }} />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="text-[12px] font-semibold tracking-eyebrow text-teal">
                              STEP {step.id}
                            </div>
                            <h3 className="mt-1 text-xl font-semibold text-ink leading-snug">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm-200 border-y border-warm-300">
        <div className="container-content py-16 md:py-20">
          <SectionHeader
            eyebrow="Phases at a glance"
            title="Four phases, with clear handoffs between each"
            description="A typical project moves through four phases. The timeline below shows what we do in each one and roughly how long it takes."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((phase) => (
              <div
                key={phase.title}
                className="bg-white border border-warm-300 rounded-[6px] p-6"
              >
                <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-teal">
                  {phase.range}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-ink">
                  {phase.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary">
                  {phase.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {phase.steps.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-semibold tracking-wide bg-warm-200 text-ink-secondary rounded-[3px] px-2 py-1"
                    >
                      Step {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm-100">
        <div className="container-content py-16 md:py-20">
          <SectionHeader
            eyebrow="What you receive at every step"
            title="Written deliverables, not just status updates"
            description="Every step ends with a tangible document, sample, or report you can keep on file."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-warm-300 border border-warm-300 rounded-[6px] overflow-hidden">
            {[
              {
                title: "Supplier shortlist report",
                desc: "Factory profiles, license check, export history, MOQ and lead time side by side.",
              },
              {
                title: "Sample log",
                desc: "Each sample revision tracked with photos, dimensions, and your sign-off date.",
              },
              {
                title: "Factory audit report",
                desc: "On-site walk-through with photo evidence, capacity assessment, and a pass / caution / fail rating.",
              },
              {
                title: "Production status report",
                desc: "Weekly update with milestone tracking, photos, and clear risk flags.",
              },
              {
                title: "Inspection report",
                desc: "AQL-based report with defect classification, counts, and pass / fail decision.",
              },
              {
                title: "Shipping documents",
                desc: "Commercial invoice, packing list, certificate of origin, CIQ, and freight booking confirmation.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-warm-100 p-7">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ink-onDark">
        <div className="container-content py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.015em] text-ink-onDark">
            Ready to start step one?
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink-onDarkMuted max-w-2xl mx-auto">
            Send us your product brief and we will come back within one business
            day with a sourcing plan and an indicative cost.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button as={Link} to="/contact#inquiry" variant="primary" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight size={18} />
            </Button>
            <Button as={Link} to="/services" variant="outlineOnDark" size="lg">
              See our services
            </Button>
          </div>
        </div>
      </section>

      <InquiryCTA />
    </div>
  )
}

export default HowItWorks
