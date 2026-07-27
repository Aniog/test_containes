import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'What types of products do you source?',
    a: 'We source across a wide range of industries including electronics, home goods, apparel, industrial equipment, auto parts, health and beauty, packaging, and sports products. If you have a specific product in mind, contact us to discuss your requirements.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'Our verification process includes business license validation, on-site factory audits, production capability assessment, quality management system review, and background checks. We also review past export records and client references when available.',
  },
  {
    q: 'What are your service fees?',
    a: 'Our fees depend on the scope of services required, product complexity, and order value. We provide transparent, detailed quotes after understanding your specific needs. Contact us for a free consultation and quote.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical timelines range from 4 to 12 weeks depending on product complexity, supplier availability, sample iterations, and order quantity. We provide a clear timeline at the start of each project.',
  },
  {
    q: 'Do you handle shipping and logistics?',
    a: 'Yes, we coordinate shipping including freight booking, consolidation, customs documentation, and door-to-door delivery. We work with major freight forwarders to offer competitive rates for sea, air, and express shipping.',
  },
  {
    q: 'What if the product quality does not meet specifications?',
    a: 'Our multi-stage inspection process is designed to catch issues early. If defects are found during inspection, we work with the supplier to resolve them before shipment. We also assist with dispute resolution and returns if needed.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes, we work with businesses of all sizes. We understand that smaller buyers have unique needs and budgets, and we tailor our services accordingly. Minimum order quantities depend on the product category.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply contact us through our inquiry form or email. Share your product requirements, target budget, and any specific needs. We will respond within 24 hours with a proposed plan and quote.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Common questions about our China sourcing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-navy-700 text-sm lg:text-base">{faq.q}</span>
                <ChevronDown className={cn(
                  'w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200',
                  openIndex === i && 'rotate-180'
                )} />
              </button>
              {openIndex === i && (
                <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}