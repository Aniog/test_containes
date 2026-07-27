import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import { FAQS } from "@/data/site";
import { cn } from "@/lib/utils";

export default function FAQ({ items = FAQS, eyebrow = "FAQ", title = "Questions buyers ask before getting started" }) {
  const [open, setOpen] = useState(0);
  return (
    <Section bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow={eyebrow} title={title} />
          <p className="mt-5 text-ink-600 text-sm">
            Don't see your question? Email us at{" "}
            <a href="mailto:info@ssourcingchina.com" className="font-semibold text-brand-700 hover:underline">
              info@ssourcingchina.com
            </a>{" "}
            and a sourcing manager will respond within one business day.
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="rounded-lg border border-ink-200 bg-white divide-y divide-ink-200">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[15px] font-semibold text-ink-900">
                      {item.q}
                    </span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0 text-brand-600" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-ink-500" />
                    )}
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-200",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-ink-600 text-[15px] leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
