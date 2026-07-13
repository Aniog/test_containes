import PageHeader from '@/components/layout/PageHeader'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import TrustSection from '@/components/sections/TrustSection'
import CTASection from '@/components/sections/CTASection'
import FAQ from '@/components/sections/FAQ'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services for global buyers"
        description="Modular services you can use individually or as a full end-to-end package — supplier search, factory verification, QC, production follow-up, and shipping."
      />
      <ServicesSection showCta={false} />
      <ProcessSection showCta={false} />
      <TrustSection />
      <FAQ />
      <CTASection />
    </>
  )
}
