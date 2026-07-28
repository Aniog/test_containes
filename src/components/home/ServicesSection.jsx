import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SectionHeading from '@/components/shared/SectionHeading'
import IconBox from '@/components/shared/IconBox'
import { services } from '@/data/siteData'

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={{ text: 'Our Services' }}
          title="End-to-End Sourcing Support"
          description="From the first supplier search to final delivery, we manage the details that protect your order."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                  <IconBox name={service.icon} className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
