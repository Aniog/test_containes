import { faqs } from '@/data/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const FaqSection = () => (
  <section className="bg-brand-mist py-16 text-brand-navy md:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="FAQ"
        title="Common sourcing questions"
        description="Straightforward answers for overseas buyers considering supplier sourcing, verification, inspection, and shipping coordination in China."
        align="center"
      />
      <div className="mt-10 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-2xl border border-brand-line bg-white p-5 text-brand-navy shadow-soft" defaultOpen={faq.question === faqs[0].question}>
            <summary className="cursor-pointer list-none text-base font-bold text-brand-navy marker:hidden">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-brand-slate">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default FaqSection
