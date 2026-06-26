import * as Icons from "lucide-react"
import { PageHeader } from "@/components/sections/PageHeader"
import { Container, Button } from "@/components/ui/primitives"
import { processSteps } from "@/data/site"
import { useStrkImages } from "@/lib/useStrkImages"
import CtaSection from "@/components/sections/CtaSection"

const stageImages = [
  { id: "how-stage-1", titleId: "how-stage-1-title", descId: "how-stage-1-desc", text: "Buyer sharing product requirements with sourcing agent" },
  { id: "how-stage-2", titleId: "how-stage-2-title", descId: "how-stage-2-desc", text: "Sourcing agent shortlisting Chinese factories" },
  { id: "how-stage-3", titleId: "how-stage-3-title", descId: "how-stage-3-desc", text: "On-site factory verification audit in China" },
  { id: "how-stage-4", titleId: "how-stage-4-title", descId: "how-stage-4-desc", text: "Product sample review and price negotiation" },
  { id: "how-stage-5", titleId: "how-stage-5-title", descId: "how-stage-5-desc", text: "Quality control inspection on production line" },
  { id: "how-stage-6", titleId: "how-stage-6-title", descId: "how-stage-6-desc", text: "Container loading and shipping coordination" },
]

export default function HowItWorks() {
  const ref = useStrkImages([])

  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="From first inquiry to final delivery"
        description="A transparent, six-step process designed to reduce risk and keep your order on schedule — with photo-backed updates at every stage."
      />

      <section ref={ref} className="py-16 md:py-24">
        <Container>
          <ol className="relative space-y-12 border-l border-slate-200 pl-8 md:pl-10">
            {processSteps.map((step, i) => {
              const Icon = Icons[step.icon] ?? Icons.Circle
              const img = stageImages[i]
              return (
                <li key={step.step} className="relative">
                  <span className="absolute -left-[2.6rem] flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white md:-left-[3.1rem]">
                    {step.step}
                  </span>
                  <div className="grid gap-6 md:grid-cols-2 md:items-center">
                    <div>
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-blue-700" />
                        <h2 id={img.titleId} className="text-xl font-bold text-slate-900">{step.title}</h2>
                      </div>
                      <p id={img.descId} className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                    <img
                      alt={step.title}
                      data-strk-img-id={img.id}
                      data-strk-img={`[${img.descId}] [${img.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-56 w-full rounded-xl object-cover md:h-64"
                    />
                  </div>
                </li>
              )
            })}
          </ol>

          <div className="mt-14 rounded-2xl bg-slate-50 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-slate-900">Start with a free sourcing quote</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Share your product details and we will outline the steps, timeline, and estimated cost for your project.
            </p>
            <Button to="/contact" className="mt-6">Get a Free Sourcing Quote</Button>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  )
}
