import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do you find and verify suppliers?',
    a: 'We use a combination of our existing supplier network, industry databases, trade shows, and factory visits. Every supplier undergoes a multi-step verification process including business license checks, factory audits, certification verification, and reference checks with previous buyers.',
  },
  {
    q: 'What are your service fees?',
    a: 'Our fees depend on the scope of services required. We typically charge a project-based fee or a percentage of the order value (usually 3-8%). We provide a transparent quote upfront after understanding your requirements. There are no hidden costs.',
  },
  {
    q: 'Can you handle small orders?',
    a: 'Yes, we work with orders of all sizes. While some factories have minimum order quantities (MOQs), we can often negotiate lower MOQs or find suitable suppliers who accommodate smaller volumes. We have helped startups with initial orders as small as $2,000.',
  },
  {
    q: 'How do you ensure product quality?',
    a: 'We implement a three-stage quality control process: (1) pre-production sample approval, (2) during-production inspection (DPI) for larger orders, and (3) pre-shipment inspection (PSI) before goods leave the factory. All inspections include detailed reports with photos.',
  },
  {
    q: 'What if there is a problem with the order?',
    a: 'We act as your representative in China to resolve issues. If products do not meet specifications, we negotiate with the factory for rework, replacement, or refund. Our team is on the ground and can visit the factory in person to resolve disputes quickly.',
  },
  {
    q: 'Do you handle shipping and logistics?',
    a: 'Yes, we provide full logistics coordination. We can arrange FOB, CIF, or DDP shipping terms, handle customs documentation, book freight (sea, air, or rail), and track your shipment until it reaches your destination.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically, supplier identification takes 1-2 weeks, sampling 2-4 weeks, and production 3-8 weeks depending on the product complexity. The entire process from inquiry to delivery usually takes 6-14 weeks.',
  },
  {
    q: 'Which industries do you specialize in?',
    a: 'We have deep experience in electronics, industrial parts, machinery, textiles, furniture, home goods, plastics, packaging, and promotional products. Our team has specialists with industry-specific knowledge in each of these areas.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-navy-500 text-lg">
            Everything you need to know about working with a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-sm font-semibold text-navy-900 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-navy-400 shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-navy-500 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}