import React from "react"
import { strings } from "@/i18n/strings"

const s = strings.en

export default function Breadcrumb() {
  return (
    <nav
      aria-label={s.breadcrumb.navLabel}
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-3">
        <ol className="flex items-center gap-1.5 text-[13px] text-[#636972]">
          <li>
            <a
              href="/"
              className="hover:text-[#8159BB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded-sm"
            >
              {s.breadcrumb.home}
            </a>
          </li>
          <li aria-hidden="true" className="text-[#C6C9CD] px-1">
            {s.breadcrumb.separator}
          </li>
          <li aria-current="page" className="text-[#636972]">
            {s.breadcrumb.current}
          </li>
        </ol>
      </div>
    </nav>
  )
}
