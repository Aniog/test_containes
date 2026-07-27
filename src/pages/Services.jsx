import { Link } from "react-router-dom"
import { Check, ArrowRight } from "lucide-react"
import { SERVICES, TRUST_FEATURES } from "@/data/content"
import { PageHeader } from "@/components/shared/PageHeader"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardBody } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/shared/CtaSection"

export default function Services() {
  return (
    <>
      <PageHeader
        bgId="services-header-bg-1a2b3c"
        eyebrow="Services"
        title="Sourcing services for global buyers"
        description="Each service can be used on its own or combined into a full sourcing program. You choose the level of support you need."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon
              const reversed = idx % 2 === 1
              return (
                <div
                  key={service.id}
                  className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-900 text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2 className="mt-5 text-2xl font-bold tracking-tight text-brand-900 md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-slate-700"
                        >
                          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Button
                      as={Link}
                      to="/contact"
                      variant="outline"
                      size="sm"
                      className="mt-6"
                    >
                      Request this service
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className={reversed ? "lg:order-1" : ""}>
                    <Card className="overflow-hidden">
                      <CardBody className="bg-slate-50">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-500">
                          What you get
                        </h3>
                        <div className="mt-4 space-y-4">
                          {service.points.map((point) => (
                            <div
                              key={point}
                              className="rounded-xl border border-slate-200 bg-white p-4"
                            >
                              <p className="text-sm font-medium text-brand-900">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why us"
            title="What makes our services different"
            description="We are independent, on the ground, and accountable for what we report."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TRUST_FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title}>
                  <CardBody className="flex gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-900">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
