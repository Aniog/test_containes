import { faqs } from '../../data/siteContent'
import SectionHeader from './SectionHeader'

const FAQSection = () => (
  <section className="bg-white py-16 text-slate-950 md:py-24">
    <div className="mx-auto max-w-4xl px-6 lg:px-8">
      <SectionHeader
        align="center"
        eyebrow="FAQ"
        title="Common questions from overseas buyers"
        description="Straightforward answers about sourcing, supplier checks, quality control, and shipment coordination."
      />
      <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm">
        {faqs.map((faq) => (
          <details className="group p-6" key={faq.question}>
            <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 marker:hidden">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-2xl font-light text-blue-700 group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-4 text-sm leading-6 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default FAQSection
