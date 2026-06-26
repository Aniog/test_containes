import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { FAQS } from "@/data/site";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Quick answers to the things buyers ask us most often. Don't see your question? Send it through the inquiry form."
        />

        <div className="mt-12 divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-white">
          {FAQS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-brand-900">
                    {item.q}
                  </span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-ink-200 text-ink-600">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-ink-600">
                    {item.a}
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