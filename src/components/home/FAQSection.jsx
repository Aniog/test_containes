import { useState } from 'react'
import SectionHeader from '../SectionHeader'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What does your sourcing service cost?',
    a: 'We offer flexible pricing models depending on your needs: a flat project fee for supplier sourcing and verification, or a percentage of order value for full-service management including QC and shipping. Contact us for a tailored quote.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'Most clients receive a shortlist of verified suppliers within 5-10 business days. Complex products or niche categories may take slightly longer. We keep you updated at every stage.',
  },
  {
    q: 'Do you only work with large orders?',
    a: 'No. We work with businesses of all sizes, from startups placing their first order to established brands reordering in high volumes. Our minimum engagement is flexible.',
  },
  {
    q: 'Can you help with product development and sampling?',
    a: 'Yes. We can coordinate prototype development, sample production, and revisions with factories. This is especially helpful for custom or private-label products.',
  },
  {
    q: 'What if there is a quality issue after shipping?',
    a: 'While our pre-shipment inspections aim to catch issues before goods leave China, we also assist with supplier communication and dispute resolution if post-delivery issues arise.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate with freight forwarders, manage export documentation, and can arrange FOB, CIF, or DDP terms depending on your preference.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-24 bg-bg-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          caption="FAQ"
          title="Common Questions"
          subtitle="Everything you need to know about working with SSourcing China."
        />
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-semibold text-text-primary pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
