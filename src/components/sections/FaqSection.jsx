import { faqItems } from '@/data/siteData'
import SectionHeading from './SectionHeading'

export default function FaqSection() {
  return (
    <section className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Common questions from overseas buyers"
          text="Straightforward answers for buyers evaluating sourcing, inspection, and shipping support in China."
        />
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm">
          {faqItems.map((item) => (
            <details key={item.question} className="group p-6">
              <summary className="cursor-pointer list-none text-base font-bold text-slate-950 marker:hidden">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
