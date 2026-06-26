import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What is a China sourcing agent and why do I need one?',
    a: 'A sourcing agent is your local representative in China. We find suppliers, visit factories, negotiate in Chinese, inspect quality and coordinate shipping. For most overseas buyers, the cost of a sourcing agent is offset many times over by better prices, fewer defects and avoided mistakes.',
  },
  {
    q: 'How do you charge for sourcing services?',
    a: 'We charge a clear service fee or a small commission, agreed in writing before the project starts. For one-time sourcing we usually quote a flat fee; for ongoing buyers we offer monthly or commission-based options. We do not take hidden kickbacks from factories.',
  },
  {
    q: 'Do you have a minimum order quantity (MOQ)?',
    a: 'We do not set MOQs ourselves, but factories do. Typical factory MOQs in China range from 100 to 1,000 units depending on category. We can also help with smaller pilot orders or consolidation if you are starting out.',
  },
  {
    q: 'How long does a typical sourcing project take?',
    a: 'Supplier shortlisting takes 1–2 weeks. Samples take 1–3 weeks. Bulk production usually takes 30–60 days depending on the product. Sea shipping adds 25–45 days depending on destination. We give you a full timeline at the quoting stage.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We use AQL-based inspections (typically AQL 2.5 / 4.0). We perform initial production checks, during-production (DUPRO) and pre-shipment (PSI) inspections, with photo and video reports. You sign off before goods leave the factory.',
  },
  {
    q: 'Can you ship goods to my country?',
    a: 'Yes. We work with multiple freight forwarders for sea (FCL/LCL), air and rail. We can quote FOB, CIF or DDP, including export documents and consolidation from multiple suppliers.',
  },
]

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Common questions from overseas buyers
          </h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-slate-900 md:text-lg">{f.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-slate-600 md:text-base">
                    {f.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
