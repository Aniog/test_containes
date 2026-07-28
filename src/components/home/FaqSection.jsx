import { faqs } from '@/lib/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const FaqSection = () => (
  <section className="bg-white py-16 text-slate-950 md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        align="center"
        eyebrow="FAQ"
        title="Questions buyers ask before starting"
        description="Clear answers for importers, wholesalers, e-commerce sellers, and brands considering China sourcing support."
      />
      <div className="mx-auto mt-10 grid max-w-4xl gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-950 open:bg-white open:shadow-card">
            <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
              {faq.question}
            </summary>
            <p className="mt-4 text-sm leading-6 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default FaqSection
