import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do you charge for your sourcing services?',
    a: 'We typically charge a service fee based on order value or a flat monthly retainer for ongoing projects. We are transparent about fees from day one — no hidden commissions from suppliers.',
  },
  {
    q: 'Can you help with small orders or only large volumes?',
    a: 'We support both. For smaller orders, we can consolidate with similar clients or recommend verified traders. For large volumes, we negotiate directly with manufacturers.',
  },
  {
    q: 'Do you own or operate any factories?',
    a: 'No. We are an independent agent with no factory ownership, which means our recommendations are unbiased and solely in your best interest.',
  },
  {
    q: 'What languages do your team speak?',
    a: 'Our team is fluent in English and Mandarin Chinese. All client communication is handled in English, while we manage suppliers directly in Chinese.',
  },
  {
    q: 'How long does the sourcing process usually take?',
    a: 'Initial supplier shortlisting takes 3–5 business days. Full verification, sampling, and production typically range from 4–10 weeks depending on product complexity.',
  },
  {
    q: 'What if the goods arrive with quality issues?',
    a: 'We include pre-shipment inspection as a standard step. If issues still arise, we mediate with the supplier for rework, replacement, or compensation.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-accent mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
            Common Questions
          </h2>
          <p className="text-text-secondary">
            Quick answers to the questions we hear most often from new clients.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border-light rounded-lg bg-bg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-text-primary pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-4">
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
