import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { services } from "@/data/services"
import PageHeader from "@/components/shared/PageHeader"
import { Card, CardBody } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Container, SectionHeader } from "@/components/shared/Section"
import CtaBanner from "@/components/shared/CtaBanner"

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for every stage of your order"
        description="Each service can be used standalone or combined into a full sourcing program. Choose what fits your needs."
      />

      <section className="py-16 md:py-24 bg-bg">
        <Container>
          <div className="grid gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const reversed = index % 2 === 1
              return (
                <Card key={service.id} className="overflow-hidden">
                  <CardBody className="grid gap-8 md:grid-cols-3 md:items-center">
                    <div className={reversed ? "md:order-2" : ""}>
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light">
                        <Icon className="h-7 w-7 text-brand" />
                      </div>
                      <h2 className="mt-5 text-2xl font-bold text-ink">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-sm text-slate-ink leading-relaxed">
                        {service.summary}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 rounded-lg border border-border bg-surface p-4"
                          >
                            <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                            <span className="text-sm text-ink">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionHeader
            eyebrow="How They Fit Together"
            title="Use one service or the full program"
            description="Some clients only need factory verification. Others want us to manage everything from sourcing to shipping. We scale to your needs."
          />
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button as={Link} to="/contact" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/how-it-works" variant="outline" size="lg">
              See the full process
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
