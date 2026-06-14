import React from "react"
import { strings } from "@/i18n/strings"

const s = strings.en

export default function ClosingCTA() {
  return (
    <section
      aria-labelledby="closing-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16 md:py-24 text-center">
        <h2
          id="closing-heading"
          className="font-heading font-bold uppercase text-[#2E2E2F] text-[24px] md:text-[32px]"
        >
          {s.closing.heading}
        </h2>
        <p className="mt-3 text-[15px] md:text-[16px] text-[#636972] max-w-[560px] mx-auto leading-[1.5]">
          {s.closing.sub}
        </p>
        <div className="mt-6">
          <a
            href="/s/ai_site_builder"
            className="inline-flex items-center justify-center h-11 px-6 rounded font-heading text-[14px] font-bold uppercase tracking-wide text-white transition-shadow shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7671FF]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)",
            }}
          >
            {s.closing.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
