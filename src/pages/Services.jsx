import PageHero from '@/components/PageHero'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CtaBanner from '@/components/CtaBanner'
import InquiryForm from '@/components/sections/InquiryForm'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A full sourcing service, from supplier search to delivered goods"
        description="We handle the parts of international trade that are hard to do remotely: factory visits, quality control, production follow-up and shipping coordination."
        breadcrumbs={[{ label: 'Services' }]}
      />
      <ServicesSection withCta={false} />
      <ProcessSection />
      <CtaBanner />
      <InquiryForm />
    </>
  )
}
