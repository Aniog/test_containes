import PageHero from '@/components/layout/PageHero'
import SectionIntro from '@/components/layout/SectionIntro'
import CaseStudyGrid from '@/components/sections/CaseStudyGrid'
import ImageShowcase from '@/components/sections/ImageShowcase'
import InquiryForm from '@/components/sections/InquiryForm'
import { useStrkImages } from '@/lib/useStrkImages'

const CaseStudies = () => {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case studies"
        title="Examples of sourcing challenges we help buyers work through"
        description="These examples reflect the kind of supplier evaluation, quality coordination, and production follow-up support that overseas buyers often request."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <SectionIntro
          eyebrow="Buyer situations"
          title="Practical sourcing scenarios rather than generic success claims"
          description="The goal is to help buyers improve visibility, execution, and supplier communication during real sourcing projects in China."
        />
        <div className="mt-10">
          <CaseStudyGrid />
        </div>
      </section>

      <section className="border-y border-line bg-brand-sky/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[0.95fr_1.05fr]">
          <ImageShowcase
            idPrefix="case-studies-visual"
            title="On-site checks and reporting that support buyer decisions"
            description="Good sourcing support means helping buyers understand what is happening, what changed, and what action is needed next."
            imageAlt="Factory audit and reporting for overseas buyers"
            ratio="16x9"
          />
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
