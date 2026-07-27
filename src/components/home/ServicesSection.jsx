import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'Identify and shortlist reliable manufacturers that match your product specs, budget, and order volume.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'Validate factory licenses, production capacity, equipment, and working conditions before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container-loading inspections to protect product quality.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Track milestones, materials, and timelines so delays and defects are caught early.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'Coordinate freight, customs documents, and delivery handoffs to your warehouse or fulfillment center.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="services-title" className="text-3xl font-bold text-slate-900 md:text-4xl">
            End-to-End Sourcing Services
          </h2>
          <p id="services-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            From first supplier search to final delivery, we manage the details so you can focus on growing your business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group border-slate-100 transition hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
