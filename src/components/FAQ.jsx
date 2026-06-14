import React from "react"
import { strings } from "@/i18n/strings"

const s = strings.en

// Use native <details>/<summary> so FAQ works without JavaScript.
// The first item ships with `open` so the first answer is visible by default.
export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-12 md:py-16">
        <header className="mb-7">
          <h2
            id="faq-heading"
            className="font-heading font-bold uppercase text-[#4B5056] text-[22px] md:text-[28px]"
          >
            {s.faq.heading}
          </h2>
        </header>
        <div className="max-w-[820px] space-y-3">
          {s.faq.items.map((item, i) => (
            <details
              key={i}
              open={i === 0}
              data-faq-item
              className="group bg-white border border-[#C6C9CD] rounded-[3px] open:border-[#8159BB] transition-colors"
            >
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
                aria-controls={`faq-panel-${i}`}
                aria-expanded={i === 0 ? "true" : "false"}
              >
                <span className="font-heading font-bold uppercase text-[#2E2E2F] text-[15px] leading-snug">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 w-7 h-7 rounded-full border border-[#8159BB] text-[#8159BB] flex items-center justify-center text-[18px] font-bold leading-none transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div
                id={`faq-panel-${i}`}
                className="px-5 pb-5 -mt-1"
              >
                <p className="text-[14px] text-[#636972] leading-[1.6]">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
