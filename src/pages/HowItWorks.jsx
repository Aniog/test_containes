import { useEffect, useRef } from "react"
import PageHero from "@/components/shared/PageHero"
import { Section, SectionHeader } from "@/components/shared/Section"
import { processSteps } from "@/data/content"
import CTASection from "@/components/shared/CTASection"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function HowItWorks() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHero
        breadcrumb="How It Works"
        eyebrow="The Process"
        title="How We Take You From Inquiry to Delivery"
        subtitle="A transparent, eight-step process. You always know what is happening, what comes next, and who is responsible."
      />

      <Section className="bg-bg">
        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-line -translate-x-1/2" />
          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              const isLeft = idx % 2 === 0
              return (
                <div key={step.step} className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                  <div className={isLeft ? "lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12"}>
                    <div className="rounded-2xl border border-line bg-surface p-6 md:p-8 shadow-sm">
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white text-sm font-bold shrink-0">
                          {step.step}
                        </span>
                        <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-primary shrink-0">
                          <Icon className="w-5 h-5" />
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block" />
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-bg-alt py-0">
        <div className="rounded-3xl border border-line bg-surface p-8 md:p-12">
          <SectionHeader
            align="left"
            eyebrow="What to Expect"
            title="Working With SSourcing China"
            subtitle="A few things that make the process smooth from day one."
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "One Coordinator", desc: "A single English-speaking contact owns your project end to end, so nothing falls through the cracks." },
              { title: "Weekly Updates", desc: "You receive regular status reports with photos and milestones, not silence between order and delivery." },
              { title: "Documented Everything", desc: "Audit reports, inspection reports, and shipping documents are shared with you in writing." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-bg p-6 border border-line">
                <h4 className="text-base font-bold text-ink">{item.title}</h4>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Ready to start sourcing the right way?"
        subtitle="From supplier search to final delivery, we handle every step so you import from China with confidence. Get a free, no-obligation quote within one business day."
        buttonText="Get a Free Sourcing Quote"
      />
    </>
  )
}
