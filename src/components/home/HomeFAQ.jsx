import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeFaqs } from "@/data/faqs";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" size="default" tone="default">
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Frequently asked"
              title="Answers to common questions"
              description="If your question is not answered here, send us a note and a sourcing manager will get back to you within one business day."
            />
            <div className="mt-8">
              <Button to="/contact" variant="primary" size="md">
                Ask a sourcing question
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="rounded-2xl border border-brand-line bg-white divide-y divide-brand-line overflow-hidden">
              {homeFaqs.map((item, idx) => {
                const open = openIndex === idx;
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : idx)}
                      aria-expanded={open}
                      className="w-full flex items-start justify-between gap-6 text-left px-5 md:px-7 py-5 md:py-6 hover:bg-brand-mist/40 transition-colors"
                    >
                      <span className="text-base md:text-lg font-semibold text-brand-navy leading-snug">
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-colors",
                          open
                            ? "bg-brand-red text-white border-brand-red"
                            : "bg-white text-brand-navy border-brand-line"
                        )}
                        aria-hidden="true"
                      >
                        {open ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                    {open ? (
                      <div className="px-5 md:px-7 pb-6 text-sm md:text-base leading-relaxed text-brand-ink-muted">
                        {item.a}
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
