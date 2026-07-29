import CTASection from '@/components/common/CTASection.jsx'
import BulletList from '@/components/common/BulletList.jsx'
import ImageCard from '@/components/common/ImageCard.jsx'
import PageHero from '@/components/common/PageHero.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import { usePageSEO } from '@/hooks/usePageSEO.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import { services } from '@/data/site-content.js'

const Services = () => {
  usePageSEO(
    'Services | China Supplier Search, Verification, QC & Shipping | SSourcing China',
    'Explore SSourcing China services including supplier search, supplier verification, factory audit coordination, quality inspection, production follow-up, and shipping coordination.',
  )

  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="Services"
        title="China sourcing support across the stages buyers care about most"
        description="Use SSourcing China for complete sourcing support or for one focused service such as supplier verification, quality inspection, production follow-up, or shipping coordination."
        titleId="services-hero-title"
        descriptionId="services-hero-desc"
        backgroundId="services-hero-bg-1dd6a2"
      />

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Service scope"
            title="Choose support where supplier risk or execution pressure is highest"
            description="Every service is designed to help overseas buyers make clearer decisions and reduce avoidable surprises during sourcing and production."
            titleId="services-grid-title"
            descriptionId="services-grid-desc"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ImageCard key={service.id} item={service} sectionTitleId="services-grid-title">
                <BulletList items={service.bullets} />
              </ImageCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Before sampling or deposit</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Supplier search, shortlisting, and verification help you avoid spending time on factories that are not a fit.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">During production</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Production follow-up and inspection support keep milestones, quality concerns, and corrective actions visible.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-950">Before shipment</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Shipping coordination helps align documents, packing status, inspection release, and supplier handoff readiness.
            </p>
          </article>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default Services
