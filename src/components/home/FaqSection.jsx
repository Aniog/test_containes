import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What types of products can you help source?',
    a: 'We source across 50+ product categories including electronics, home goods, apparel, industrial equipment, beauty products, packaging, and more. If it can be manufactured in China, we can help you find a supplier.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits that include checking business licenses, production capacity, equipment condition, quality management systems, export experience, and financial background. We also verify any certifications (ISO, BSCI, CE, FDA, etc.).',
  },
  {
    q: 'What are your service fees?',
    a: 'Our pricing depends on the scope of your project. We offer project-based pricing for one-time sourcing, and retainer models for ongoing procurement. Contact us for a free quote tailored to your needs. There are no hidden fees—everything is transparent upfront.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically, supplier identification and factory audits take 5-10 business days. Sampling adds another 7-14 days. Full production timelines depend on your product complexity and order quantity. We provide a clear timeline before starting any project.',
  },
  {
    q: 'Do you handle shipping and logistics?',
    a: 'Yes. We coordinate FCL and LCL sea freight, air freight, and express shipping. We manage customs documentation, freight consolidation, and provide tracking from factory to your destination port or warehouse.',
  },
  {
    q: 'Can you help with small orders or startups?',
    a: 'Absolutely. We work with businesses of all sizes, from startups placing their first order to established brands managing complex supply chains. We help you find suppliers that accommodate your minimum order quantities.',
  },
  {
    q: 'What makes you different from Alibaba or trade shows?',
    a: 'Alibaba lists suppliers but doesn\'t verify them independently. Trade shows give a snapshot, not ongoing oversight. We provide continuous on-the-ground presence, independent factory audits, ongoing QC, and someone who represents your interests in every negotiation.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-28 bg-surface" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Everything you need to know about working with SSourcing China.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                  <p className="text-slate-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
