import { SectionHeading } from './SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { faqs } from '@/data/siteData'

export function FAQSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Common Questions"
          description="Quick answers about how we work, what we charge, and how to get started."
        />
        <div className="mt-12">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  )
}
