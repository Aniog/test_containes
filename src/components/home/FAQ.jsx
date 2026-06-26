import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const faqs = [
  {
    q: 'How do you charge for your sourcing service?',
    a: 'We charge a transparent service fee based on the scope and complexity of your project — usually a fixed fee or a small percentage of the order value. Factory verification and quality inspection are quoted per audit/inspection day. No hidden commissions from suppliers.',
  },
  {
    q: 'What is your minimum order quantity?',
    a: 'We do not enforce a minimum order quantity ourselves, but each factory has its own MOQ. For most product categories we recommend working with us above roughly USD 3,000–5,000 in order value, so the service fee is proportionate to the savings and protection it provides.',
  },
  {
    q: 'Can you help me if I already have a supplier in China?',
    a: 'Yes. We often work as an independent QC and production-follow-up partner for buyers who already have a supplier. We can audit the factory, run inspections, manage shipping or take over communication.',
  },
  {
    q: 'Do you handle shipping to my country?',
    a: 'Yes. We offer consolidation, freight forwarding, customs documents and door-to-door delivery by sea, air or rail. We work with established forwarders to most major markets in North America, Europe, Latin America, Middle East, Africa, Australia and Southeast Asia.',
  },
  {
    q: 'How do I know inspections are done honestly?',
    a: 'Every inspection produces a written AQL-based report with photos and video evidence. We are paid by you, not by the supplier, and we do not accept any commissions from factories. You can also request a third-party agency to cross-check.',
  },
  {
    q: 'How long does sourcing usually take?',
    a: 'A typical first order takes 6–12 weeks: 1–2 weeks for supplier shortlisting and samples, 4–8 weeks for production, and 2–5 weeks for shipping depending on the mode and destination. We share a clear schedule before you commit.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="A few practical answers to the most common questions buyers ask before working with us."
          align="center"
        />

        <div className="mt-12 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5 hover:bg-slate-50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 -mt-1 text-sm md:text-base text-slate-600 leading-relaxed">
                    {faq.a}
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
