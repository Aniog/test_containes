import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does SSourcing China actually do?",
    answer: "We act as your local sourcing team in China. We help you find suppliers, verify factories, inspect quality, follow production progress, and coordinate shipping.",
  },
  {
    question: "Do you own the factories?",
    answer: "No. We are an independent sourcing agent. We select manufacturers based on your product requirements and perform due diligence before you place an order.",
  },
  {
    question: "How do you charge for your services?",
    answer: "We typically charge a service fee based on the project scope. In some cases, a commission on order value may apply. We provide a clear quote before starting any work.",
  },
  {
    question: "Can you help with small orders?",
    answer: "Yes. We work with businesses of different sizes. Let us know your target quantity and we will advise on the best approach.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We commonly source industrial components, electronics, home and garden products, packaging, apparel, and promotional goods. Contact us if your category is not listed.",
  },
  {
    question: "How long does the sourcing process take?",
    answer: "Initial supplier shortlists are usually ready within 5 to 10 business days. Full projects depend on sampling, order complexity, and production schedules.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers to common questions about working with us."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
