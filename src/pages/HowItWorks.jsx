import PageHero from '@/components/shared/PageHero'
import ProcessSection from '@/components/sections/ProcessSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'

const HowItWorks = () => (
  <main>
    <PageHero
      eyebrow="How it works"
      title="A clear sourcing workflow from brief to shipment handover"
      description="Our sourcing process is designed around practical checkpoints: product brief, supplier screening, quotation comparison, sample coordination, production follow-up, inspection, and shipping handover."
      imageId="how-it-works-production-follow-up-2e8b45"
      titleId="how-page-title"
      descId="how-page-desc"
    />
    <ProcessSection />
    <FaqSection />
    <CtaSection />
  </main>
)

export default HowItWorks
