import SectionHeading from '@/components/common/SectionHeading.jsx?ssourcing=20260728'
import { faqs } from '@/data/siteContent.js'

const FAQSection = () => (
  <section className="bg-white py-16 text-slate-950 lg:py-24">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions overseas buyers often ask"
        description="A quick overview before you send a sourcing brief or supplier verification request."
        align="center"
      />
      <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-6 open:bg-slate-50">
            <summary className="cursor-pointer list-none text-base font-bold text-slate-950">
              {faq.question}
              <span className="float-right ml-4 text-blue-700 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-7 text-slate-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default FAQSection
