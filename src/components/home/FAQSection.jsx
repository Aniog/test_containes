import SectionHeader from '@/components/shared/SectionHeader'
import { faqs } from '@/data/siteContent'

export default function FAQSection() {
  return (
    <section className="bg-brand-mist py-16 text-brand-ink md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions overseas buyers often ask"
          description="Clear answers before you send a sourcing inquiry."
          align="center"
        />
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-brand-line bg-white p-6 text-brand-ink shadow-sm" open={faq.question === faqs[0].question}>
              <summary className="cursor-pointer list-none text-base font-semibold text-brand-navy marker:hidden">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-6 text-brand-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
