import React from "react"
import { strings } from "@/i18n/strings"

const s = strings.en

const STEPS = [
  { n: 1, title: s.howItWorks.step1Title, body: s.howItWorks.step1Body },
  { n: 2, title: s.howItWorks.step2Title, body: s.howItWorks.step2Body },
  { n: 3, title: s.howItWorks.step3Title, body: s.howItWorks.step3Body },
]

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-12 md:py-16">
        <header className="mb-7 text-center">
          <h2
            id="how-heading"
            className="font-heading font-bold uppercase text-[#4B5056] text-[22px] md:text-[28px]"
          >
            {s.howItWorks.heading}
          </h2>
        </header>
        <ol
          role="list"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
        >
          {STEPS.map((step) => (
            <li key={step.n} className="text-center md:text-left">
              <div
                aria-hidden="true"
                className="mx-auto md:mx-0 mb-4 w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-white text-[18px]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)",
                }}
              >
                {step.n}
              </div>
              <h3 className="font-heading font-bold uppercase text-[#2E2E2F] text-[15px]">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[14px] text-[#636972] leading-[1.5]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
