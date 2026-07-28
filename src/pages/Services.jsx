import { CheckCircle2 } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import { Section, Container } from "@/components/ui/section"
import Card from "@/components/ui/card"
import CtaBanner from "@/components/shared/CtaBanner"
import { services } from "@/data/content"

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services, end to end"
        description="Each service can be used standalone or combined into a full sourcing program — from supplier search to shipped goods."
      />

      <Section>
        <Container>
          <div className="space-y-8">
            {services.map((service, idx) => (
              <Card key={service.id} className="overflow-hidden">
                <div className="grid gap-0 md:grid-cols-3">
                  <div
                    className={
                      "flex flex-col justify-center gap-4 p-8 md:p-10 " +
                      (idx % 2 === 0
                        ? "bg-primary text-primary-foreground md:order-1"
                        : "bg-muted text-foreground md:order-2")
                    }
                  >
                    <span
                      className={
                        "flex h-14 w-14 items-center justify-center rounded-2xl " +
                        (idx % 2 === 0
                          ? "bg-white/10 text-accent"
                          : "bg-primary/10 text-primary")
                      }
                    >
                      <service.icon className="h-7 w-7" />
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight">
                      {service.title}
                    </h2>
                    <p
                      className={
                        "text-sm " +
                        (idx % 2 === 0
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground")
                      }
                    >
                      {service.description}
                    </p>
                  </div>

                  <div
                    className={
                      "p-8 md:p-10 md:col-span-2 " +
                      (idx % 2 === 0 ? "md:order-2" : "md:order-1")
                    }
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                      What's included
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
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
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  )
}
