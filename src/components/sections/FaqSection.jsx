import SectionHeader from '../SectionHeader'
import { faqs } from '../../data/siteContent'

export default function FaqSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions buyers often ask before starting"
          description="Straightforward answers about sourcing, verification, quality control, and shipping coordination."
          centered
        />
        <div className="mt-10 divide-y divide-sourcing-mist rounded-3xl border border-sourcing-mist bg-white shadow-soft">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6 open:bg-sourcing-cloud">
              <summary className="cursor-pointer list-none text-lg font-semibold text-sourcing-navy">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-sourcing-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
