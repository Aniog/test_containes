import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How much do your sourcing services cost?',
    answer: 'We typically charge a commission based on the order value, or a fixed project fee depending on the scope. We are transparent about pricing from the first call — no hidden fees. Contact us for a custom quote based on your product and volume.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier research and shortlisting usually takes 1-2 weeks. Factory verification and sample production can add another 2-4 weeks. For urgent projects, we offer expedited sourcing with dedicated resources.',
  },
  {
    question: 'Do you work with small businesses and startups?',
    answer: 'Yes. We work with businesses of all sizes, from startups placing their first order to established brands sourcing millions annually. We adjust our approach to match your budget, volume, and risk tolerance.',
  },
  {
    question: 'What if the supplier you recommend turns out to be unreliable?',
    answer: 'Every supplier we recommend has passed our verification process. If issues arise, we step in immediately — mediating with the factory, finding alternatives, or managing disputes. Our reputation depends on your success.',
  },
  {
    question: 'Can you help with shipping and customs?',
    answer: 'Absolutely. We coordinate freight forwarding, prepare customs documentation, and track shipments until they reach your warehouse. We support sea freight, air freight, and express courier depending on your timeline and budget.',
  },
  {
    question: 'Do I need to visit China to work with you?',
    answer: 'No. Most of our clients never visit China. We handle everything on the ground — factory visits, inspections, negotiations — and keep you updated with reports, photos, and video calls.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-slate-500">
              Everything you need to know about working with SSourcing China.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-100 bg-surface transition"
              >
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="pr-4 text-sm font-semibold text-slate-800">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
