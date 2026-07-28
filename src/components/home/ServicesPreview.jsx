import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { services } from "@/data/services"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Sourcing services that cover the full journey"
          description="From finding the right factory to delivering goods at your door, each service is handled by a specialist on our team - not handed off to a platform."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} className="flex flex-col transition-shadow hover:shadow-md">
                <CardHeader>
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <ul className="space-y-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button as={Link} to="/services" variant="outline" size="lg">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
