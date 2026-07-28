import PageHeader from '@/components/shared/PageHeader'
import SectionHeading from '@/components/shared/SectionHeading'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import IconBox from '@/components/shared/IconBox'
import CTASection from '@/components/home/CTASection'
import { services } from '@/data/siteData'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function Services() {
  const containerRef = useImageLoader()

  return (
    <>
      <PageHeader
        title="Our Sourcing Services"
        description="Practical support for every stage of buying from China — from supplier search to delivery at your door."
        badge="What We Do"
        pageId="services"
      />

      <section ref={containerRef} className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="A Full Range of Sourcing Support"
            description="Each service can be used on its own or combined into a complete sourcing package based on your needs."
            className="mb-12"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <Card key={service.id} className="overflow-hidden transition-shadow hover:shadow-md">
                <div className="grid md:grid-cols-[160px_1fr]">
                  <div className="relative min-h-[140px] bg-gray-100">
                    <div
                      className="absolute inset-0"
                      data-strk-bg-id={`service-bg-${service.id}-a1`}
                      data-strk-bg={`[service-title-${index}] [service-desc-${index}]`}
                      data-strk-bg-ratio="1x1"
                      data-strk-bg-width="400"
                    />
                  </div>
                  <div>
                    <CardHeader>
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light">
                        <IconBox name={service.icon} className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle id={`service-title-${index}`}>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription id={`service-desc-${index}`} className="text-base leading-relaxed text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
