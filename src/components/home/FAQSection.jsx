import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const faqs = [
  {
    question: 'What types of products can you source from China?',
    answer: 'We source across 15+ categories including electronics, home goods, apparel, machinery, promotional products, beauty items, and more. If it is manufactured in China, we can likely find a qualified supplier.',
  },
  {
    question: 'How do you verify factories and suppliers?',
    answer: 'Our verification process includes checking business licenses, production capabilities, certifications (ISO, CE, FDA as applicable), on-site visits by our team, and reference checks with existing clients. We provide a detailed audit report for each factory.',
  },
  {
    question: 'What are your fees?',
    answer: 'We charge a transparent sourcing commission typically ranging from 5-10% of the order value, depending on the product complexity and volume. There are no upfront fees for the initial sourcing and quotation. We only earn when you place an order.',
  },
  {
    question: 'How long does it take to get supplier quotes?',
    answer: 'Initial supplier quotes are typically provided within 3-5 business days. If samples are required, sample delivery usually takes 7-14 days depending on the product and customization level.',
  },
  {
    question: 'Do you handle small order quantities?',
    answer: 'Yes, we work with both small and large orders. Minimum order quantities vary by product and factory, but we actively negotiate for lower MOQs when possible. Some of our partner factories accept trial orders as low as 100-500 units.',
  },
  {
    question: 'How do you handle quality issues after delivery?',
    answer: 'We conduct pre-shipment inspections to minimize defects. In the rare case of quality issues, we work directly with the factory to arrange replacements, repairs, or credits. Our contracts include quality guarantee clauses for your protection.',
  },
  {
    question: 'Which countries do you ship to?',
    answer: 'We coordinate shipping worldwide. Our most common routes include the US, Canada, UK, Germany, France, Australia, UAE, and Southeast Asia. We handle both sea freight and air cargo with full customs documentation.',
  },
  {
    question: 'Can you help with private label and custom products?',
    answer: 'Absolutely. Many of our clients source private label products with custom branding, packaging, and specifications. We manage the entire process from mold creation and prototyping through to mass production.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Common questions about sourcing from China with SSourcing China."
        />

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-medium text-neutral-900 pr-4 text-sm md:text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
