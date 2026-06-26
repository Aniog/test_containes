import * as React from "react"
import SectionTitle from "@/components/shared/SectionTitle"

const faqs = [
  {
    question: "What does a China sourcing agent do?",
    answer: "A sourcing agent helps you find suppliers, negotiate prices, verify factories, manage quality inspections, and coordinate shipping from China.",
  },
  {
    question: "How do you charge for your services?",
    answer: "We typically charge a transparent commission based on order value or a fixed project fee for audits and inspections. We quote upfront with no hidden fees.",
  },
  {
    question: "Can you work with small orders or startups?",
    answer: "Yes. We support startups, Amazon sellers, and small businesses, and can advise on MOQ negotiation and sample management.",
  },
  {
    question: "Do you own the factories?",
    answer: "No. We are an independent agent, which means we select the best supplier for your product rather than pushing a single factory.",
  },
  {
    question: "How do you handle quality control?",
    answer: "We follow AQL sampling standards and provide photo and video reports. Inspections can be arranged pre-production, during production, and before shipment.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState(0)

  return (
    <section className="section-padding bg-white">
      <div className="container-page max-w-4xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Common questions about sourcing from China"
        />
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === idx}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <span className="ml-4 text-2xl leading-none text-brand-600">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
