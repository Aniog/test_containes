import React from "react"
import { strings } from "@/i18n/strings"
import { WebsiteMockupIllustration } from "@/components/illustrations"

const s = strings.en

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(1100px 480px at 18% 0%, rgba(118,113,255,0.08), transparent 60%), radial-gradient(900px 460px at 88% 30%, rgba(203,12,159,0.07), transparent 65%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h1
              id="hero-heading"
              className="font-heading font-bold uppercase leading-[1.1]"
            >
              <span className="block text-[#2E2E2F] text-[28px] sm:text-[34px] md:text-[44px] lg:text-[48px]">
                {s.hero.h1Line1}
              </span>
              <span
                className="block text-[28px] sm:text-[34px] md:text-[44px] lg:text-[48px] mt-1"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {s.hero.h1Line2}
              </span>
            </h1>

            <p className="mt-5 text-[15px] md:text-[16px] text-[#636972] max-w-[520px] leading-[1.55]">
              {s.hero.sub}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-2.5">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center h-11 px-[18px] rounded font-heading text-[14px] font-bold uppercase tracking-wide text-white transition-shadow shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7671FF]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)",
                }}
              >
                {s.hero.primaryCta}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center h-11 px-[18px] rounded font-heading text-[14px] font-bold uppercase tracking-wide border border-[#8159BB] text-[#8159BB] bg-transparent hover:bg-[#F4F6F8] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
              >
                {s.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end order-first md:order-last">
            <WebsiteMockupIllustration width={420} height={320} />
          </div>
        </div>
      </div>
    </section>
  )
}
