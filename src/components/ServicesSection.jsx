import { Link } from 'react-router-dom'
import { SectionHeading } from './SectionHeading'
import { Card, CardContent } from '@/components/ui/Card'
import { services } from '@/data/siteData'

export function ServicesSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="End-to-End Sourcing Support"
          description="From the first supplier search to final delivery, we cover every step so you can focus on growing your business."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={service.title}
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[${service.descId}] [${service.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 id={service.titleId} className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p id={service.descId} className="mt-2 text-slate-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-block font-medium text-primary hover:text-primary-dark"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  )
}
