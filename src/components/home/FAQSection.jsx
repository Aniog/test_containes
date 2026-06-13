import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How long does it typically take to find a supplier?',
    answer: 'For standard products, we typically present 3-5 qualified suppliers within 5-7 business days. For custom or specialized products, it can take 10-14 days depending on complexity. Rush sourcing is available at a premium rate.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We work on a transparent commission-based model, typically 3-8% of the order value depending on order size and service scope. There are no hidden fees. We provide a detailed cost breakdown before you commit to anything.',
  },
  {
    question: 'Do you handle small orders or only large volumes?',
    answer: 'We work with a range of order sizes. While our sweet spot is orders between $10,000 and $500,000, we also support smaller test orders (minimum around $3,000) to help new clients validate suppliers before scaling up.',
  },
  {
    question: 'How do you verify factory legitimacy?',
    answer: 'Our verification process includes: business license and registration checks, physical facility inspection, production capability assessment, quality management system review, and reference checks with existing clients. You receive a full written report with photos.',
  },
  {
    question: 'Can you help with custom product development?',
    answer: 'Yes, we manage OEM and ODM projects end-to-end. This includes design coordination, mold/tooling management, sample development, packaging design, and production oversight. Our team has managed hundreds of custom product launches.',
  },
  {
    question: 'What happens if the products have quality issues?',
    answer: 'We conduct pre-shipment inspections and provide detailed defect reports before any goods leave the factory. If defects exceed agreed AQL standards, we work with the factory to rework or replace the goods at their cost. We also offer post-delivery support for any issues that arise.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we manage the full logistics chain including freight negotiation, booking, customs documentation, consolidation, and delivery tracking. We work with sea, air, and express freight options and can arrange door-to-door delivery.',
  },
  {
    question: 'Is my product design and supplier information kept confidential?',
    answer: 'Absolutely. We sign NDAs with all clients and ensure suppliers agree to confidentiality terms. Your designs, pricing, and supplier details are never shared with third parties.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-[#F5EDE3] text-[#C27A3E] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#64748B] text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="text-sm md:text-base font-semibold text-[#1A365D]">{faq.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-[#C27A3E] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#64748B] shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-[#64748B] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
