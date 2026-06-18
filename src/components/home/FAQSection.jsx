import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services include a sourcing fee, factory audit fee, and inspection fee — all quoted transparently before you commit.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present a shortlist of 3–5 verified suppliers within 5–10 business days. Complex or highly customized products may take longer.',
  },
  {
    q: 'Can you help with small orders or first-time imports?',
    a: 'Yes. We work with businesses of all sizes, including first-time importers. We can help you understand MOQs, negotiate trial orders, and guide you through the entire import process.',
  },
  {
    q: 'Do you work with any product category?',
    a: 'We source across most consumer and industrial product categories. If you\'re unsure whether we can help with your specific product, just send us an inquiry and we\'ll let you know.',
  },
  {
    q: 'What is included in a factory audit?',
    a: 'Our factory audits cover business license verification, production capacity assessment, quality management systems, worker conditions, certifications (ISO, CE, etc.), and sample production capability.',
  },
  {
    q: 'Can you handle shipping and customs?',
    a: 'Yes. We coordinate sea freight, air freight, and express shipping. We also prepare all necessary export documentation and can work with your customs broker or recommend one.',
  },
  {
    q: 'What if the products fail quality inspection?',
    a: 'If goods fail inspection, we work with the factory to resolve defects before shipment. We provide a detailed inspection report and photos, and we do not release shipment until issues are resolved.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-[#F7F9FC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common questions from buyers new to sourcing from China."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F7F9FC] transition-colors duration-200"
              >
                <span className="font-semibold text-[#1A1A2E] pr-4 text-sm md:text-base">{faq.q}</span>
                {openIndex === index
                  ? <ChevronUp className="w-5 h-5 text-[#1A3C6E] flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-[#718096] flex-shrink-0" />
                }
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-[#4A5568] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
