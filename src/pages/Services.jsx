import PageHero from '@/components/layout/PageHero'
import SectionIntro from '@/components/layout/SectionIntro'
import ImageShowcase from '@/components/sections/ImageShowcase'
import InquiryForm from '@/components/sections/InquiryForm'
import ServiceGrid from '@/components/sections/ServiceGrid'
import { useStrkImages } from '@/lib/useStrkImages'

const Services = () => {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Services"
        title="China sourcing services built for overseas buyers"
        description="From early supplier search to production follow-up and shipping coordination, our services are designed to make sourcing in China more structured and more visible."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <SectionIntro
          eyebrow="Service scope"
          title="Where we help buyers reduce sourcing risk and improve execution"
          description="We support the steps that buyers commonly struggle to manage remotely, especially when communication, verification, and quality follow-up need local attention."
        />
        <div className="mt-10">
          <ServiceGrid />
        </div>
      </section>

      <section className="border-y border-line bg-brand-sky/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <ImageShowcase
            idPrefix="services-visual-a"
            title="Supplier review, sample coordination, and buyer-side comparison"
            description="Practical sourcing starts with structured supplier filtering and clear visibility into capability, communication, and fit."
            imageAlt="Supplier review and sourcing comparison in China"
          />
          <ImageShowcase
            idPrefix="services-visual-b"
            title="Factory checks, quality follow-up, and export readiness support"
            description="We help buyers stay closer to production realities before inspection and shipment deadlines arrive."
            imageAlt="Quality inspection and shipment coordination"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionIntro
            eyebrow="Get started"
            title="Tell us where you need sourcing support"
            description="If you already have a supplier, we can still help with verification, production follow-up, and quality coordination."
          />
        </div>
        <InquiryForm />
      </section>
    </div>
  )
}

export default Services
