import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does your sourcing service cost?",
    a: "We typically charge a service fee based on order value, or a fixed project fee for verification and inspections. There are no upfront costs for the initial supplier shortlist and quote. We will send a clear proposal after understanding your requirements.",
  },
  {
    q: "How long does it take to find suppliers?",
    a: "For standard products, we deliver an initial shortlist within 3-5 business days. For specialized or custom products, it may take 5-10 business days depending on complexity and market availability.",
  },
  {
    q: "Do you work with small businesses or only large orders?",
    a: "We support businesses of all sizes. Whether you are placing a small trial order or a full container load, we tailor our service to your needs and budget.",
  },
  {
    q: "Can you help with custom products and OEM manufacturing?",
    a: "Yes. We regularly manage OEM and ODM projects, including mold development, material sourcing, sample iterations, and production management.",
  },
  {
    q: "What happens if quality issues are found?",
    a: "If defects are discovered during inspection, we document everything with photos and reports, then work with the factory on rework, replacement, or negotiation. You decide whether to accept, reject, or re-inspect.",
  },
  {
    q: "Do you handle shipping and customs?",
    a: "We coordinate freight forwarding, prepare customs documentation, and track shipments until delivery. You can choose air, sea, or rail depending on your timeline and budget.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Quick answers to common questions about working with us.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
