import PageHeader from "@/components/shared/PageHeader"
import { Section, SectionContainer } from "@/components/ui/Section"
import Icon from "@/components/ui/Icon"
import CtaBand from "@/components/shared/CtaBand"
import { SERVICES } from "@/data/content"

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for every stage"
        description="Use a single service for a specific need, or combine them into a full sourcing program managed end to end."
      />

      <Section className="bg-white">
        <SectionContainer>
          <div className="space-y-10">
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 md:grid-cols-[auto_1fr] md:gap-8 md:p-10"
              >
                <div className="flex items-start gap-4 md:flex-col md:items-start">
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-accent-dark">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {service.summary}
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </Section>

      <CtaBand
        title="Not sure which service you need?"
        description="Tell us your product and goal. We'll recommend the right scope and send a free quote."
      />
    </>
  )
}
