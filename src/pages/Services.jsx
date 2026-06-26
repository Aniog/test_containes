import { useEffect } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/Card'
import { services } from '@/data/siteData'

const pageTitle = 'Sourcing Services | SSourcing China'

export default function Services() {
  useEffect(() => {
    document.title = pageTitle
  }, [])

  return (
    <div className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What We Do for Buyers"
          description="Practical support across the full sourcing cycle, tailored to your product and market."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] bg-slate-100 md:aspect-auto">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="flex flex-col justify-center p-8">
                  <h2 id={service.titleId} className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h2>
                  <p id={service.descId} className="mt-3 text-slate-600">
                    {service.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
