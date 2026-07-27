import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const faqs = [
  {
    question: "What does a sourcing agent in China actually do?",
    answer:
      "A sourcing agent acts as your local representative. We find suppliers, verify factories, negotiate terms, manage quality inspections, follow production, and coordinate shipping so you do not have to manage these tasks from overseas.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "We typically charge a transparent service fee based on the project scope or a percentage of the order value. We discuss pricing upfront and do not accept hidden commissions from factories.",
  },
  {
    question: "Can you help with small orders or startups?",
    answer:
      "Yes. We work with businesses of all sizes and can tailor a sourcing plan based on your budget, MOQ needs, and growth stage.",
  },
  {
    question: "How do you verify suppliers?",
    answer:
      "Verification includes business license checks, factory visits or video audits, production capability review, quality system checks, and reference validation where possible.",
  },
  {
    question: "Do you handle shipping and customs documentation?",
    answer:
      "Yes. We coordinate freight forwarding, prepare export documents, and help communicate with customs brokers to smooth the delivery process.",
  },
  {
    question: "How long does the sourcing process take?",
    answer:
      "Initial supplier shortlists are usually ready within 3-5 business days. Full projects vary depending on product complexity, sampling, and order size.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions about sourcing from China"
          description="Quick answers to help you understand how we work and what to expect."
        />
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-700 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
