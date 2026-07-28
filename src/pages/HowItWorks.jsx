import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import { Section, SectionHeading, Container } from "@/components/ui/section"
import { processSteps } from "@/data/content"
import CtaBanner from "@/components/shared/CtaBanner"

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From request to shipment, in six clear stages"
        description="A practical, transparent process. You make the decisions; we handle the on-the-ground work in China."
      />

      <Section>
        <Container>
          <div className="relative">
            <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-border md:block" />
            <ol className="space-y-8">
              {processSteps.map((step) => (
                <li key={step.id} className="relative md:pl-20">
                  <span className="absolute left-0 top-0 hidden h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-primary text-base font-bold text-primary-foreground shadow-sm md:flex">
                    {step.step}
                  </span>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground md:hidden">
                        {step.step}
                      </span>
                      <h2 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h2>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/50" containerRef={null}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center" ref={containerRef}>
            <div className="relative overflow-hidden rounded-2xl bg-muted">
              <img
                alt="Quality inspection on a production line in China"
                data-strk-img-id="howitworks-qc-3f7a2"
                data-strk-img="[howitworks-qc-desc] [howitworks-qc-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Inspection & reporting"
                title="You see what we see"
                description="At every milestone we send written reports with photos, so you can make decisions based on real conditions — not chat messages."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "Factory audit report with on-site photos",
                  "Inspection reports using AQL sampling",
                  "Production progress updates with images",
                  "Shipping and document summary before dispatch",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground md:text-base"
                  >
                    <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span id="howitworks-qc-title" className="hidden">
            Quality inspection and reporting
          </span>
          <span id="howitworks-qc-desc" className="hidden">
            Inspector checking products on a Chinese factory production line during pre-shipment inspection
          </span>
        </Container>
      </Section>

      <CtaBanner />
    </>
  )
}
