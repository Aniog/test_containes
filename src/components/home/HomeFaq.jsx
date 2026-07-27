import SectionHeading from '@/components/shared/SectionHeading'
import Faq from '@/components/shared/Faq'
import { faqItems } from '@/data/faq'

const HomeFaq = () => {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions buyers ask us"
          description="Straight answers about fees, minimums, verification, and how we work."
        />
        <div className="mt-12">
          <Faq items={faqItems} />
        </div>
      </div>
    </section>
  )
}

export default HomeFaq
