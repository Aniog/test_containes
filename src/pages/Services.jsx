import { CheckCircle2 } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import CtaBanner from "@/components/shared/CtaBanner"
import { services } from "@/data/services"
import { SectionHeading } from "@/components/ui/section-heading"

export default function Services() {
  return (
    <>
      <PageHeader
        breadcrumb="Services"
        eyebrow="Our Services"
        title="Sourcing services for every stage of your order"
        description="Each service can be used standalone or combined into a full end-to-end sourcing program. Pick what you need - we'll handle the rest."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const reversed = index % 2 === 1
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={reversed ? "lg:order-1" : ""}>
                    <div className="rounded-xl border border-border bg-muted p-8">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-bold text-primary-200">
                          0{index + 1}
                        </span>
                        <div className="h-px flex-1 bg-border" />
                      </div>
                      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                        {service.title} is part of our integrated sourcing
                        workflow. When combined with verification and inspection,
                        it gives you a controlled, transparent path from supplier
                        discovery to delivered goods.
                      </p>
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-white p-4">
                          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Best for
                          </p>
                          <p className="mt-1 text-sm font-semibold text-foreground">
                            {index === 0
                              ? "New product sourcing"
                              : index === 1
                                ? "Before placing an order"
                                : index === 2
                                  ? "Before shipment"
                                  : index === 3
                                    ? "Active orders"
                                    : index === 4
                                      ? "Export & delivery"
                                      : "Multi-supplier orders"}
                          </p>
                        </div>
                        <div className="rounded-lg bg-white p-4">
                          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Deliverable
                          </p>
                          <p className="mt-1 text-sm font-semibold text-foreground">
                            {index === 0
                              ? "Supplier shortlist"
                              : index === 1
                                ? "Audit report"
                                : index === 2
                                  ? "QC report + media"
                                  : index === 3
                                    ? "Milestone updates"
                                    : index === 4
                                      ? "Shipment + docs"
                                      : "Consolidated load"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Flexible Engagement"
            title="Use one service or the full package"
            description="Some buyers only need a pre-shipment inspection. Others want us to run the entire sourcing program. Both work - you choose the level of involvement."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Single service",
                desc: "Book one service - an audit, an inspection, or freight coordination - for a specific need.",
              },
              {
                title: "Sourcing project",
                desc: "End-to-end sourcing from supplier search through pre-shipment QC, with a dedicated PM.",
              },
              {
                title: "Ongoing program",
                desc: "A retained partnership for repeat orders, with standing QC and logistics support.",
              },
            ].map((tier) => (
              <div
                key={tier.title}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {tier.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
