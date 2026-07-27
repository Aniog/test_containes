import { useState } from "react"
import SectionHeader from "@/components/shared/SectionHeader"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What does SSourcing China actually do?",
    answer: "We act as your sourcing team in China. We find suppliers, verify factories, manage quality inspections, monitor production, and coordinate shipping on your behalf.",
  },
  {
    question: "Do you keep stock or hold inventory?",
    answer: "No. We are a service company, not a trading company with warehouses. We work directly with manufacturers and move goods according to your instructions.",
  },
  {
    question: "How do you charge for sourcing services?",
    answer: "We typically charge a service fee based on the project scope and order value. For repeat or high-volume clients, we also offer retainer arrangements. Contact us for a custom quote.",
  },
  {
    question: "Can you help with a single product or a one-time order?",
    answer: "Yes. We support both one-time sourcing projects and ongoing supply-chain partnerships.",
  },
  {
    question: "Do you handle shipping and customs documents?",
    answer: "We coordinate shipping, prepare export documents, and support customs clearance. You can use your own forwarder or ask us to recommend one.",
  },
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        className="flex w-full items-center justify-between py-5 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Frequently asked questions"
          description="Quick answers to common questions about working with us."
          centered
        />
        <div className="rounded-xl border border-slate-200 bg-white px-6">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
