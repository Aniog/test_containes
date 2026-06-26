import SectionHeader from '@/components/shared/SectionHeader'
import FaqList from '@/components/shared/FaqList'
import { faqs } from '@/data/content'

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-24 bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions from new buyers"
              description="If your question is not here, send it to us through the inquiry form and we will reply with a clear answer."
            />
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faqs.slice(0, 6)} />
          </div>
        </div>
      </div>
    </section>
  )
}