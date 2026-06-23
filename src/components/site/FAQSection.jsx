import SectionHeader from './SectionHeader'
import { faqs } from '../../data/siteContent'

const FAQSection = () => (
  <section className="bg-white py-16 text-slate-900 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        align="center"
        eyebrow="FAQ"
        title="Common questions from overseas buyers"
        description="Straightforward answers about sourcing support, supplier checks, QC, and shipping coordination."
      />
      <div className="mx-auto mt-10 grid max-w-4xl gap-4">
        {faqs.map((faq) => (
          <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-900" key={faq.question}>
            <summary className="cursor-pointer text-lg font-semibold text-slate-950">{faq.question}</summary>
            <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default FAQSection
