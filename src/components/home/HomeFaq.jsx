import SectionHeading from '@/components/ui/SectionHeading'
import FaqAccordion from '@/components/common/FaqAccordion'
import { FAQS } from '@/data/siteContent'
import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'

export default function HomeFaq() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions buyers ask us"
          description="Straight answers to the most common questions about working with a China sourcing agent."
          align="center"
        />
        <div className="mt-12">
          <FaqAccordion items={FAQS.slice(0, 6)} />
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
          >
            Have a different question? Talk to us
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
