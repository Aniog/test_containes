import PageHero from "@/components/shared/PageHero"
import { Section, SectionHeader, Card } from "@/components/shared/Section"
import { services } from "@/data/content"
import CTASection from "@/components/shared/CTASection"
import { Check } from "lucide-react"

export default function Services() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Our Services"
        title="End-to-End Sourcing Services for Global Buyers"
        subtitle="Pick a single service or let us manage your entire order from supplier search to delivery. Every service is transparent, documented, and built around your specs."
      />

      <Section className="bg-bg">
        <div className="space-y-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            const reversed = idx % 2 === 1
            return (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-line bg-surface p-6 md:p-10 shadow-sm"
              >
                <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                  <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-primary mb-5">
                    <Icon className="w-7 h-7" />
                  </span>
                  <h2 className="text-2xl font-bold text-ink">{service.title}</h2>
                  <p className="mt-3 text-muted leading-relaxed">{service.desc}</p>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-ink">
                        <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                  <div className="rounded-xl bg-bg-alt border border-line p-6">
                    <h3 className="text-sm font-bold text-ink uppercase tracking-wider">
                      What you get
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-muted">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        A dedicated coordinator for your project
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        Written reports with photos and video
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        Clear, upfront pricing with no hidden fees
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        English-language communication throughout
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <CTASection
        title="Not sure which service you need?"
        subtitle="Tell us about your project and we will recommend the right scope and a clear quote."
        buttonText="Get a Free Sourcing Quote"
      />
    </>
  )
}
