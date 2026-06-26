import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import SectionHeader from '@/components/shared/SectionHeader'

const faqs = [
  {
    question: 'What does SSourcing China actually do?',
    answer:
      'We act as your local sourcing agent in China. We find suppliers, verify factories, manage quality inspections, monitor production, and coordinate shipping on your behalf.',
  },
  {
    question: 'Do you hold inventory or take ownership of goods?',
    answer:
      'No. We work as your representative. You contract directly with the supplier, and we charge a transparent service fee for sourcing support and quality management.',
  },
  {
    question: 'How long does it take to get a quote?',
    answer:
      'For most products, we return an initial supplier shortlist and estimated pricing within 3–5 working days after receiving clear product requirements.',
  },
  {
    question: 'Can you handle small trial orders?',
    answer:
      'Yes. We support trial orders and sample consolidation, which is ideal for buyers testing a new supplier or product before scaling up.',
  },
  {
    question: 'Which industries do you specialize in?',
    answer:
      'We focus on electronics, apparel, hardware, home goods, packaging, and machinery. Most of our verified suppliers are located in Guangdong, Zhejiang, and Jiangsu.',
  },
]

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions from buyers"
          description="Clear answers about how we work, pricing, and what to expect when sourcing with us."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-slate-50 transition"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-slate-500 shrink-0 transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <p className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
