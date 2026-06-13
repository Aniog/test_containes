import CTASection from '@/components/site/CTASection'
import CaseStudyGrid from '@/components/site/CaseStudyGrid'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import { caseStudies } from '@/data/siteContent'

const CaseStudies = () => {
  return (
    <div>
      <PageHero
        eyebrow="Case studies"
        title="Examples of sourcing support for international buyers"
        description="These case examples show how structured supplier review, order follow-up, and inspection coordination can help buyers make clearer decisions."
        points={['Supplier review', 'QC support', 'Shipment readiness']}
        imageId="case-hero-490cc1"
        titleId="case-hero-title"
        descriptionId="case-hero-description"
        imagePrompt="quality control report review with export products and carton inspection in a China factory"
        imagePromptId="case-hero-image-prompt"
        imageQuery="[case-hero-image-prompt]"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Client scenarios"
            title="Practical B2B sourcing situations we support"
            description="The details vary by product, but the common thread is better supplier evaluation, clearer execution follow-up, and stronger visibility before shipment."
          />
          <div className="mt-12">
            <CaseStudyGrid items={caseStudies} />
          </div>
        </div>
      </section>

      <CTASection
        title="Have a sourcing challenge that looks similar?"
        description="Send the product details, order stage, and current risk points. We will review whether our sourcing support fits your situation."
      />
    </div>
  )
}

export default CaseStudies
