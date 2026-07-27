import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "../ui/Primitives.jsx";
import { faqs } from "../../data/site.js";

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <SectionHeader
            kicker="FAQ"
            title="Frequently asked questions"
            subtitle="Straight answers to the questions we hear most often. If yours isn't here, just ask."
          />
        </div>
        <div className="lg:col-span-8">
          <div className="rounded-lg border border-hairline bg-white divide-y divide-hairline">
            {faqs.map((f, idx) => {
              const isOpen = open === idx;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    className="w-full flex items-start justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-navy font-semibold text-base md:text-lg">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-navy flex-shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-ink/80 text-sm md:text-base leading-relaxed">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
