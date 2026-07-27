import SectionHeader from '@/components/shared/SectionHeader.jsx'
import { faqs } from '@/data/siteData.js'

export default function FaqSection() {
  return (
    <section className="bg-white py-16 text-sourcing-ink md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions overseas buyers often ask"
          description="A practical starting point before requesting a sourcing quote."
          centered
        />
        <div className="mt-10 divide-y divide-sourcing-line overflow-hidden rounded-2xl border border-sourcing-line bg-sourcing-card shadow-sm">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6 open:bg-sourcing-soft">
              <summary className="cursor-pointer list-none text-lg font-bold text-sourcing-navy marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-2xl text-sourcing-blue group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-sourcing-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
