import { faqs } from '../../data'
import SectionHeader from '../common/SectionHeader'

export default function FAQSection() {
  return (
    <section className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Common questions from overseas buyers" text="Straightforward answers to help you decide whether sourcing support is a fit for your project." align="center" />
        <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-xl">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-6 open:bg-slate-100/50">
              <summary className="cursor-pointer list-none text-lg font-bold text-slate-900 marker:hidden">
                {faq.q}
                <span className="float-right ml-4 text-sky-700 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
