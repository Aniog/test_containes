import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/content";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/sections/SectionHeader";

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions from new clients"
              subtitle="If you don't see your question here, just send it through the contact form."
            />
          </div>
          <div className="lg:col-span-8">
            <ul className="card divide-y divide-border">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6 hover:bg-surface-muted/40 transition-colors"
                    >
                      <span className="text-sm md:text-base font-semibold text-ink pr-2">
                        {f.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-ink-muted shrink-0 transition-transform",
                          isOpen && "rotate-180 text-primary"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-ink-soft leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
