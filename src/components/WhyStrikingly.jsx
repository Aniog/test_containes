import React from "react"
import { strings } from "@/i18n/strings"
import { WhyIcon } from "@/components/illustrations"

const s = strings.en

const CELLS = [
  { kind: "live", claim: s.why.claim1, body: s.why.body1 },
  { kind: "mobile", claim: s.why.claim2, body: s.why.body2 },
  { kind: "free", claim: s.why.claim3, body: s.why.body3 },
]

export default function WhyStrikingly() {
  return (
    <section
      aria-labelledby="why-heading"
      className="w-full"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-12 md:py-16">
        <header className="mb-7">
          <h2
            id="why-heading"
            className="font-heading font-bold uppercase text-[#4B5056] text-[22px] md:text-[28px]"
          >
            {s.why.heading}
          </h2>
        </header>
        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {CELLS.map((c) => (
            <li key={c.kind} className="flex items-start gap-4">
              <div className="shrink-0 mt-0.5">
                <WhyIcon kind={c.kind} />
              </div>
              <div>
                <h3 className="font-heading font-bold uppercase text-[#2E2E2F] text-[15px]">
                  {c.claim}
                </h3>
                <p className="mt-1.5 text-[14px] text-[#636972] leading-[1.5]">
                  {c.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
