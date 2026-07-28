import SectionHeader from '@/components/site/SectionHeader.jsx'
import { faqs } from '@/content.js'

const FAQSection = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="FAQ" title="Common questions before starting a sourcing project" description="Clear answers to help you decide what level of China sourcing support fits your order." />
      <div className="mt-10 divide-y divide-brand-border rounded-3xl border border-brand-border bg-white shadow-sm">
        {faqs.map(([question, answer]) => (
          <details key={question} className="group p-6 open:bg-brand-mist first:rounded-t-3xl last:rounded-b-3xl">
            <summary className="cursor-pointer list-none text-base font-semibold text-brand-navy marker:hidden">{question}</summary>
            <p className="mt-3 text-sm leading-7 text-brand-muted">{answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default FAQSection
