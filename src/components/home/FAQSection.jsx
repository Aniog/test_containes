import { HelpCircle } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import { faqs } from '@/data/siteContent'

export default function FAQSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions from overseas buyers"
          description="A practical starting point for importers evaluating China sourcing support."
          align="center"
          id="faq-section-title"
        />
        <div className="mt-12 grid gap-4">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-3xl border border-brand-line bg-white p-6 text-slate-900 shadow-sm">
              <div className="flex gap-4">
                <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy">{item.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
