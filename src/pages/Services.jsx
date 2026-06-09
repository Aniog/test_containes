import PageHero from '@/components/site/PageHero'
import ServiceGrid from '@/components/site/ServiceGrid'
import CtaBanner from '@/components/site/CtaBanner'
import { services } from '@/content/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

export default function ServicesPage() {
  usePageMeta('Services | SSourcing China')

  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Supplier search, verification, QC, production follow-up, and shipping support"
        description="We support overseas buyers with practical sourcing execution in China, whether you need full sourcing help or support at a specific stage."
      />
      <ServiceGrid items={services} compact />
      <CtaBanner />
    </main>
  )
}
