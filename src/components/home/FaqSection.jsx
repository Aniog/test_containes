import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/siteData";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Frequently asked questions"
          description="Quick answers to common questions about working with SSourcing China."
        />

        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
