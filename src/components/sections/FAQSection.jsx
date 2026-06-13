import { faqs } from '../../data/siteContent'
import SectionHeading from '../common/SectionHeading'

export default function FAQSection() {
  return (
    <section className="bg-white px-4 py-20 text-brand-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions from overseas buyers"
          text="Straightforward answers about supplier verification, inspections, production follow-up, and shipping coordination."
          align="center"
        />
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details className="group rounded-2xl border border-slate-200 bg-brand-surface p-5 text-brand-ink open:bg-white open:shadow-sm" key={faq.question}>
              <summary className="cursor-pointer list-none text-base font-bold text-brand-navy">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-brand-subtle">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
