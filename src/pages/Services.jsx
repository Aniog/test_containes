import { Link } from "react-router-dom"
import { Check, ArrowRight } from "lucide-react"
import PageHeader from "@/components/ui/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/sections/CTASection"
import { services } from "@/data/content"

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Sourcing services for global buyers"
        description="A complete set of services covering supplier search, factory verification, quality control, production follow-up, and shipping coordination."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="space-y-8">
            {services.map((service, idx) => (
              <Card key={service.id} className="overflow-hidden">
                <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
                  <div
                    className={
                      "flex flex-col justify-center p-6 md:p-8 " +
                      (idx % 2 === 0
                        ? "bg-brand text-white md:order-1"
                        : "bg-brand text-white md:order-2")
                    }
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-4 text-xl font-bold">{service.title}</h2>
                    <p className="mt-1 text-sm text-slate-200">
                      Step {idx + 1} of {services.length}
                    </p>
                  </div>
                  <div
                    className={
                      "p-6 md:col-span-2 md:p-8 " +
                      (idx % 2 === 0 ? "md:order-2" : "md:order-1")
                    }
                  >
                    <p className="text-base leading-relaxed text-slate-700">
                      {service.desc}
                    </p>
                    <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button as={Link} to="/contact">
              Request this service
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service you need?"
        description="Tell us your product and goals, and we'll recommend the right scope of work for your project."
        buttonText="Get a Free Sourcing Quote"
      />
    </>
  )
}
