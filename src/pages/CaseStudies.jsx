import CTASection from '@/components/common/CTASection.jsx'
import ImageCard from '@/components/common/ImageCard.jsx'
import PageHero from '@/components/common/PageHero.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import { usePageSEO } from '@/hooks/usePageSEO.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import { caseStudies } from '@/data/site-content.js'

const CaseStudies = () => {
  usePageSEO(
    'Case Studies | Buyer Sourcing Support Examples | SSourcing China',
    'Read practical case studies showing how SSourcing China supports overseas buyers with supplier screening, packaging coordination, production follow-up, and quality control.',
  )

  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="Case studies"
        title="Practical sourcing situations buyers ask us to support"
        description="These examples show the kinds of sourcing, verification, packaging, quality control, and shipment preparation challenges that lead buyers to contact us."
        titleId="cases-hero-title"
        descriptionId="cases-hero-desc"
        backgroundId="cases-hero-bg-23d61f"
      />

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Examples"
            title="Case studies focused on operational clarity"
            description="The goal is to show how process support can help buyers manage risk and execution, not to make unrealistic promises."
            titleId="cases-grid-title"
            descriptionId="cases-grid-desc"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <ImageCard key={item.id} item={item} sectionTitleId="cases-grid-title">
                <div className="space-y-3 text-sm leading-6 text-slate-700">
                  <p><span className="font-semibold text-slate-950">Challenge:</span> {item.challenge}</p>
                  <p><span className="font-semibold text-slate-950">Solution:</span> {item.solution}</p>
                  <p><span className="font-semibold text-slate-950">Outcome:</span> {item.outcome}</p>
                </div>
              </ImageCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default CaseStudies
