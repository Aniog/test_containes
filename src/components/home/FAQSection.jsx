import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much do your sourcing services cost?",
    a: "We offer flexible pricing based on your project size. Typical engagements include a small retainer for supplier research, with the majority of our fee tied to successful order placement. We provide a detailed quote after reviewing your requirements.",
  },
  {
    q: "How long does it take to find a supplier?",
    a: "For standard products, we typically present a shortlist of 3–5 verified suppliers within 5–7 business days. For complex or custom products, it may take 10–14 days to identify and vet suitable factories.",
  },
  {
    q: "Do you only work with large volume buyers?",
    a: "No. We work with businesses of all sizes, from startups placing their first order to established brands sourcing at scale. Our minimum engagement starts at around $3,000 per order.",
  },
  {
    q: "Can you handle shipping and customs clearance?",
    a: "Yes. We coordinate with freight forwarders, handle export documentation, and can arrange door-to-door delivery including customs clearance support for most major destinations.",
  },
  {
    q: "What happens if quality issues are found?",
    a: "Our pre-shipment inspections are designed to catch issues before goods leave the factory. If defects are found, we work with the supplier to rework, replace, or negotiate compensation. We do not recommend shipping until quality is confirmed.",
  },
  {
    q: "Which industries do you specialize in?",
    a: "We have deep experience in electronics, machinery, consumer goods, textiles, packaging, and building materials. If your product category is outside these, reach out — our network covers most manufacturing sectors in China.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Common Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to know about working with SSourcing China.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
