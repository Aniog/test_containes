import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do you charge for your sourcing services?',
    a: 'We operate on a transparent fee structure. For most projects, we charge a fixed service fee based on project scope. We can also work on a commission basis. You always know the factory price directly &mdash; we never add hidden markups. Contact us for a customized quote based on your specific needs.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) you can handle?',
    a: 'We work with orders of all sizes. While Chinese factories typically have MOQs, we can help negotiate lower minimums for initial trial orders. We have experience with both small-batch prototyping and large-scale production runs.',
  },
  {
    q: 'How do you verify suppliers are legitimate?',
    a: 'We conduct comprehensive on-site audits including business license verification, factory tour, production capacity assessment, quality management system review, and financial health check. We also verify certifications (ISO, CE, UL, etc.) directly with issuing bodies.',
  },
  {
    q: 'What if I receive defective products?',
    a: 'Our multi-stage QC process is designed to catch issues before shipment. However, if defects still occur, we help negotiate with the supplier for replacement or compensation. Our contracts include clear quality clauses and we stand by our work.',
  },
  {
    q: 'Which regions in China do you cover?',
    a: 'We are based in Shenzhen with coverage across major manufacturing hubs including Guangdong (Shenzhen, Guangzhou, Dongguan, Foshan), Zhejiang (Yiwu, Ningbo, Hangzhou), Jiangsu (Suzhou, Wuxi), and Fujian (Xiamen, Quanzhou). We can also travel to other regions as needed.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timeline: supplier identification (1-2 weeks), factory audit (1 week), sampling (2-4 weeks), production (varies by product), and shipping (2-6 weeks depending on method). We provide a detailed timeline during the initial consultation.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="section-container max-w-3xl">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Quick answers to common questions about our China sourcing services.
        </p>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="text-sm font-semibold text-neutral-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}