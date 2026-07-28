import PageHero from '@/components/layout/PageHero'
import SectionIntro from '@/components/layout/SectionIntro'
import ImageShowcase from '@/components/sections/ImageShowcase'
import InquiryForm from '@/components/sections/InquiryForm'
import ProcessSteps from '@/components/sections/ProcessSteps'
import TrustStats from '@/components/sections/TrustStats'
import { useStrkImages } from '@/lib/useStrkImages'

const HowItWorks = () => {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How it works"
        title="A clear sourcing workflow from requirement to shipment coordination"
        description="Our process helps overseas buyers understand what happens at each stage, what decisions matter, and where visibility should be improved."
      />

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <TrustStats />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <SectionIntro
          eyebrow="Process steps"
          title="Five stages that keep supplier selection and order execution organized"
          description="We move from requirement clarity to supplier screening, verification, production follow-up, and final shipment readiness."
        />
        <div className="mt-10">
          <ProcessSteps />
        </div>
      </section>

      <section className="border-y border-line bg-brand-sky/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1fr]">
          <ImageShowcase
            idPrefix="how-works-visual"
            title="Production updates, issue tracking, and milestone communication"
            description="The goal is not more reporting. The goal is timely reporting that helps buyers act before delays or quality problems become expensive."
            imageAlt="Production monitoring and sourcing workflow in China"
            ratio="16x9"
          />
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
