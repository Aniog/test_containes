import React from "react"
import { strings } from "@/i18n/strings"

const s = strings.en

const COLUMNS = [
  {
    title: s.footer.product,
    links: [
      { label: "AI Site Builder", href: "/s/ai_site_builder" },
      { label: "Templates", href: "/templates" },
      { label: "Pricing", href: "/pricing" },
      { label: "Generators", href: "/generators" },
    ],
  },
  {
    title: s.footer.company,
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: s.footer.resources,
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Community", href: null, plain: true },
      { label: "Status", href: null, plain: true },
    ],
  },
  {
    title: s.footer.legal,
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#E2E4E7] bg-white">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              aria-label={`${s.brand.logoText} ${s.brand.logoSuffix} home`}
              className="inline-flex items-baseline gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded-sm"
            >
              <span className="font-heading text-[18px] font-bold lowercase text-[#2E2E2F]">
                {s.brand.logoText}
              </span>
              <span className="font-heading text-[18px] font-bold text-[#8159BB]">
                {s.brand.logoSuffix}
              </span>
            </a>
            <p className="mt-3 text-[13px] text-[#636972] leading-[1.5] max-w-[220px]">
              {s.footer.tagline}
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading font-bold uppercase text-[#2E2E2F] text-[12px] tracking-wide">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) =>
                  link.href ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-[#636972] hover:text-[#8159BB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li
                      key={link.label}
                      className="text-[13px] text-[#636972]"
                    >
                      {link.label}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[#E2E4E7]">
          <p className="text-[12px] text-[#636972]">
            &copy; {new Date().getFullYear()} {s.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
