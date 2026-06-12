import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const faqs = [
  {
    question: 'What is the minimum order quantity (MOQ) you work with?',
    answer: 'We work with suppliers across a range of MOQs. Many factories accept orders starting from 100–500 units depending on the product. We can also help negotiate lower MOQs for initial trial orders.',
  },
  {
    question: 'How do you charge for your services?',
    answer: 'We offer transparent, project-based pricing. Typical sourcing projects include a service fee based on order value (usually 5–8%). We never take hidden commissions from suppliers. Detailed pricing is provided after understanding your requirements.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'A typical sourcing project takes 2–4 weeks from requirement submission to supplier shortlist. Sample production adds 1–2 weeks. Total timeline from inquiry to shipment is usually 45–90 days depending on product complexity.',
  },
  {
    question: 'Can you help with products I already have a supplier for?',
    answer: 'Yes. We offer standalone services including factory audits, quality inspections, production monitoring, and shipping coordination — even if you already have an existing supplier relationship.',
  },
  {
    question: 'What regions in China do you cover?',
    answer: 'Our team covers all major manufacturing regions including Guangdong, Zhejiang, Jiangsu, Fujian, Shandong, and Hebei. We have local staff in Yiwu, Guangzhou, and Shenzhen.',
  },
  {
    question: 'Do you handle customs and import duties?',
    answer: 'We coordinate the export side including documentation, customs clearance in China, and freight booking. For import duties and clearance at your destination, we can recommend trusted customs brokers in your country.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Common questions from buyers considering a China sourcing agent."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors border-none cursor-pointer"
              >
                <span className="font-medium text-navy-900 text-sm md:text-base pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
