import React from "react"
import { strings } from "@/i18n/strings"

const s = strings.en

export default function TopBar() {
  return (
    <header className="w-full bg-white border-b border-[#E2E4E7]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 h-16 flex items-center">
        <a
          href="/"
          aria-label={`${s.brand.logoText} ${s.brand.logoSuffix} home`}
          className="inline-flex items-baseline gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded-sm"
        >
          <span className="font-heading text-[20px] font-bold text-[#2E2E2F] lowercase tracking-tight">
            {s.brand.logoText}
          </span>
          <span className="font-heading text-[20px] font-bold text-[#8159BB]">
            {s.brand.logoSuffix}
          </span>
        </a>
      </div>
    </header>
  )
}
