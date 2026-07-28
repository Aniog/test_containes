import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionTitle from '../shared/SectionTitle'

const faqs = [
  {
    question: 'How much do your sourcing services cost?',
    answer: 'We typically charge a commission of 3-10% of the order value, depending on product complexity and order size. There are no upfront fees for the initial supplier search and quotation. You only pay when you place an order through us.',
  },
  {
    question: 'How long does it take to find suppliers?',
    answer: 'For standard products, we deliver 3-5 qualified supplier quotations within 3-5 business days. For specialized or custom products, it may take 7-10 business days to complete thorough research and verification.',
  },
  {
    question: 'Do you work with small businesses or only large orders?',
    answer: 'We work with businesses of all sizes. While larger orders naturally receive more negotiating leverage, we also help startups and small businesses with lower MOQs by connecting them with the right factories.',
  },
  {
    question: 'What if I already have a supplier but need QC?',
    answer: 'We offer standalone quality control and inspection services. Our inspectors can visit your supplier\'s factory for pre-shipment inspections, during-production checks, or container loading supervision.',
  },
  {
    question: 'How do you handle shipping and customs?',
    answer: 'We coordinate with freight forwarders to arrange sea, air, or rail freight based on your timeline and budget. We also prepare all export documentation including commercial invoices, packing lists, and certificates of origin.',
  },
  {
    question: 'Can you help with product development and samples?',
    answer: 'Yes. We assist with prototype development, sample collection, and design refinement. We coordinate between you and the factory to ensure samples meet your specifications before mass production begins.',
  },
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-text-primary pr-4 group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-sm text-text-secondary leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with SSourcing China."
        />
        <div className="bg-white rounded-xl border border-border p-2 md:p-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
