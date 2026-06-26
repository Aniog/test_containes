import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much do your sourcing services cost?",
    answer:
      "We typically charge a commission based on the order value, or a fixed project fee for smaller orders. The first supplier shortlist and quote review are free. Contact us for a detailed breakdown based on your product category and volume.",
  },
  {
    question: "How long does it take to find a supplier?",
    answer:
      "For common products, we can provide a shortlist of verified suppliers within 5-7 business days. For highly specialized or custom products, it may take 10-14 days to complete thorough research and verification.",
  },
  {
    question: "Do you handle shipping and customs?",
    answer:
      "Yes. We coordinate with freight forwarders, prepare export documentation, and can arrange FOB, CIF, or DDP shipping depending on your preference. We also help with customs clearance paperwork.",
  },
  {
    question: "What if the product quality is bad?",
    answer:
      "We conduct pre-shipment inspections using AQL sampling standards. If defects are found, we work with the factory on rework or replacement before any goods leave China. Our goal is to catch issues before they reach you.",
  },
  {
    question: "Can you help with product development and samples?",
    answer:
      "Absolutely. We assist with prototype development, sample reviews, and design-for-manufacturing feedback. We coordinate directly with factory engineers to ensure your specifications are feasible and cost-effective.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "We cover electronics, machinery and hardware, textiles and apparel, home and kitchen goods, packaging, automotive parts, and consumer products. If your product falls outside these categories, reach out anyway - we likely have relevant experience.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Quick answers to the most common questions we receive from buyers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "border-primary/20 bg-primary/5"
                    : "border-border-light bg-surface"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-text-primary">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
