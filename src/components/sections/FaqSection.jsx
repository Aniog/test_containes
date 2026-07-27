import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/siteData'
import SectionIntro from './SectionIntro'

export default function FaqSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-white py-16 text-brand-navy md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionIntro
          eyebrow="FAQ"
          title="Common questions from overseas buyers"
          description="Clear answers help you decide whether sourcing support is the right fit before starting a project."
        />
        <div className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = active === index
            return (
              <div key={faq.question} className="border-b border-brand-line last:border-b-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 bg-white px-5 py-5 text-left text-brand-navy"
                  onClick={() => setActive(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-bold">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 flex-none text-brand-blue transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-7 text-brand-slate">
                    {faq.answer}
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
