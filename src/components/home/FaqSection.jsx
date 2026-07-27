import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { faqs } from '@/data/siteData'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <SectionHeader
          label="FAQ"
          title="Frequently asked questions"
          subtitle="Quick answers about working with SSourcing China."
        />
        <div className="max-w-3xl mx-auto divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-600 leading-relaxed">
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
