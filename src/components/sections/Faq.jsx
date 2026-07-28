import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export default function Faq({ limit, withHeader = true }) {
  const items = limit ? FAQS.slice(0, limit) : FAQS;
  const [open, setOpen] = useState(0);

  return (
    <section className="section">
      <div className="max-w-container mx-auto container-px">
        {withHeader && (
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Common questions from new buyers. Don't see yours? Send it through the contact form."
          />
        )}

        <div className="mt-10 max-w-3xl mx-auto divide-y divide-brand-border border border-brand-border rounded-lg bg-white shadow-card overflow-hidden">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-brand-surface/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    id={`faq-${i}-q`}
                    className="text-sm md:text-base font-semibold text-brand-ink pr-4"
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-brand-slate shrink-0 transition-transform",
                      isOpen && "rotate-180 text-brand-navy"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p
                      id={`faq-${i}-a`}
                      className="px-5 pb-5 text-sm text-brand-slate leading-relaxed"
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
