import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer flexible pricing depending on the scope of work. For standard sourcing projects, we charge a percentage-based service fee on the order value, typically 5-10%. For one-off projects or small orders, we offer flat-rate packages. We provide a clear quote upfront — no hidden fees.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For most products, we can provide a shortlist of verified suppliers within 3-5 business days. Custom or niche products may take 7-10 days. We always provide an estimated timeline when we send your sourcing proposal.',
  },
  {
    q: 'Do you only work with large orders?',
    a: 'No. We work with businesses of all sizes, from startups ordering their first batch to established companies with ongoing production needs. We have solutions for orders as small as a few hundred units.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'Our verification process includes on-site factory visits, license and registration checks, production capacity assessment, quality management system review, and reference checks from existing clients. We do not recommend any supplier we have not personally visited.',
  },
  {
    q: 'What happens if products fail quality inspection?',
    a: 'If our pre-shipment inspection identifies defects or non-conformities, we immediately report to you with detailed findings. We negotiate with the factory for rework, replacement, or credit. We do not approve shipping until products meet the agreed specifications.',
  },
  {
    q: 'Can you help with product development and custom designs?',
    a: 'Yes. We can help translate your product concepts into manufacturing specifications, find factories with the right capabilities, coordinate prototyping, and manage the sample approval process before mass production begins.',
  },
  {
    q: 'Which countries do you ship to?',
    a: 'We ship worldwide. Our most common routes include North America (US, Canada), Europe (UK, Germany, France, Netherlands), Australia, and the Middle East. We handle all export documentation and can arrange door-to-door delivery.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply fill out our inquiry form with your product requirements, or send us an email. We will respond within 24 hours with initial questions and a proposed sourcing plan. There is no commitment required to get a quote.',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Common questions about our sourcing services, process, and pricing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base font-medium text-gray-900 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">
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

export default FAQSection
