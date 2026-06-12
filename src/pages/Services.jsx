import PageHeader from '@/components/sections/PageHeader'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ProblemsWeSolve from '@/components/sections/ProblemsWeSolve'
import TrustPoints from '@/components/sections/TrustPoints'
import CTASection from '@/components/sections/CTASection'

export default function Services() {
  return (
    <>
      <PageHeader
        kicker="Services"
        title="Sourcing services for serious buyers"
        subtitle="From the first supplier shortlist to delivery at your destination port — every step handled by one accountable team in China."
      />
      <ServicesGrid title="Eight core services, one process" kicker="Service catalog" showCTA={false} />
      <ProblemsWeSolve />
      <TrustPoints />
      <CTASection
        title="Need a service quote?"
        subtitle="Tell us your scope — supplier search only, QC only, or end-to-end. We'll send pricing back the same day where possible."
      />
    </>
  )
}
