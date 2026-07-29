import PageHero from '@/components/site/PageHero'
import SectionHeading from '@/components/site/SectionHeading'
import CaseStudyList from '@/components/site/CaseStudyList'
import { caseStudies } from '@/content/siteContent'

const CaseStudies = () => {
  return (
    <div>
      <PageHero
        eyebrow="Case studies"
        title="Examples of sourcing projects and factory-side support"
        description="See how SSourcing China has supported supplier selection, inspection planning, production follow-up, and shipping preparation for overseas buyers."
      />

      <section className="py-16 md:py-20">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Selected projects"
            title="Case studies focused on practical sourcing execution"
            description="Each project is different, but the common goal is better supplier visibility, steadier execution, and fewer avoidable surprises."
          />
          <CaseStudyList items={caseStudies} />
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
