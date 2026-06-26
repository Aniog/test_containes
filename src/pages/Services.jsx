import PageHeader from "@/components/shared/PageHeader"
import CtaBanner from "@/components/shared/CtaBanner"
import { Section, Container } from "@/components/ui/Section"
import { SERVICES } from "@/data/site"
import { Check } from "lucide-react"

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for global buyers"
        description="A complete set of services covering every stage of buying from China — use one, or combine them into a full managed sourcing project."
      />

      <Section className="bg-white">
        <Container>
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="grid gap-8 lg:grid-cols-2 lg:items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B2545] text-white">
                    <service.icon className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-[#0B2545]">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {service.summary}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0E7C66]/10 text-[#0E7C66]">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-xl border border-slate-200 bg-[#F5F7FA] p-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#1B6CA8]">
                      Why it matters
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {service.whyItMatters}
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-white p-4">
                        <p className="text-2xl font-bold text-[#0B2545]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="text-xs text-slate-500">Service stage</p>
                      </div>
                      <div className="rounded-lg bg-white p-4">
                        <p className="text-base font-bold text-[#0B2545]">
                          {service.deliverable}
                        </p>
                        <p className="text-xs text-slate-500">
                          {service.deliverableNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner
        title="Not sure which services you need?"
        description="Tell us about your project and we'll recommend the right combination of sourcing, verification, QC, and shipping support."
      />
    </>
  )
}
