import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is your fee structure?",
    a: "We typically charge a percentage of the order value or a flat project fee depending on the scope. There are no hidden costs — all fees are disclosed upfront in our service agreement.",
  },
  {
    q: "How long does the sourcing process take?",
    a: "Initial supplier shortlisting usually takes 5–10 business days. Full factory verification and sampling can add another 2–4 weeks. We provide a detailed timeline during the kickoff call.",
  },
  {
    q: "Do you work with small MOQs?",
    a: "Yes. While some factories have high MOQs, we have a broad network that includes small-batch manufacturers. Share your target quantity and we will find suitable options.",
  },
  {
    q: "Can you handle shipping and customs?",
    a: "Absolutely. We coordinate with freight forwarders, prepare export documentation, and track shipments until they reach your destination port or warehouse.",
  },
  {
    q: "What happens if quality issues are found?",
    a: "If our inspection reveals defects, we negotiate rework or replacement with the factory at no additional cost to you. We do not approve shipments that fail inspection.",
  },
  {
    q: "Do I need to speak Chinese?",
    a: "No. Our bilingual project managers handle all communication with suppliers. You receive reports and updates in English.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-surface py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">
            Everything you need to know about working with SSourcing China.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-slate-900 text-sm md:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
