import { ArrowRight } from "lucide-react"

const categoryThumbnails = {
  websites: "website",
  landingPages: "landing-page",
  portfolios: "portfolio",
  blogs: "blog",
  stores: "store",
  linkInBio: "link-in-bio",
}

export function CategoryIllustration({ categoryKey, className = "" }) {
  const theme = categoryThumbnails[categoryKey] || "website"

  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#8159BB] ${className}`}
      aria-hidden="true"
      width="64"
      height="48"
    >
      {theme === "website" && (
        <>
          <rect x="4" y="4" width="56" height="40" rx="3" stroke="currentColor" strokeWidth="2" />
          <rect x="10" y="10" width="44" height="6" rx="1" fill="currentColor" fillOpacity="0.2" />
          <rect x="10" y="20" width="20" height="18" rx="1" fill="currentColor" fillOpacity="0.15" />
          <rect x="34" y="20" width="20" height="8" rx="1" fill="currentColor" fillOpacity="0.15" />
          <rect x="34" y="32" width="20" height="6" rx="1" fill="currentColor" fillOpacity="0.15" />
        </>
      )}
      {theme === "landing-page" && (
        <>
          <rect x="4" y="4" width="56" height="40" rx="3" stroke="currentColor" strokeWidth="2" />
          <rect x="10" y="10" width="44" height="6" rx="1" fill="currentColor" fillOpacity="0.2" />
          <rect x="10" y="20" width="44" height="8" rx="1" fill="currentColor" fillOpacity="0.2" />
          <rect x="10" y="32" width="20" height="8" rx="1" fill="currentColor" fillOpacity="0.15" />
        </>
      )}
      {theme === "portfolio" && (
        <>
          <rect x="4" y="4" width="56" height="40" rx="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="18" r="6" fill="currentColor" fillOpacity="0.2" />
          <rect x="28" y="12" width="26" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
          <rect x="28" y="20" width="20" height="4" rx="1" fill="currentColor" fillOpacity="0.15" />
          <rect x="10" y="32" width="44" height="8" rx="1" fill="currentColor" fillOpacity="0.15" />
        </>
      )}
      {theme === "blog" && (
        <>
          <rect x="4" y="4" width="56" height="40" rx="3" stroke="currentColor" strokeWidth="2" />
          <rect x="10" y="10" width="44" height="8" rx="1" fill="currentColor" fillOpacity="0.2" />
          <rect x="10" y="22" width="44" height="4" rx="1" fill="currentColor" fillOpacity="0.15" />
          <rect x="10" y="30" width="30" height="4" rx="1" fill="currentColor" fillOpacity="0.15" />
        </>
      )}
      {theme === "store" && (
        <>
          <rect x="4" y="4" width="56" height="40" rx="3" stroke="currentColor" strokeWidth="2" />
          <rect x="10" y="10" width="16" height="16" rx="1" fill="currentColor" fillOpacity="0.2" />
          <rect x="30" y="10" width="16" height="16" rx="1" fill="currentColor" fillOpacity="0.2" />
          <rect x="10" y="30" width="36" height="6" rx="1" fill="currentColor" fillOpacity="0.15" />
        </>
      )}
      {theme === "link-in-bio" && (
        <>
          <rect x="20" y="4" width="24" height="40" rx="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="32" cy="14" r="4" fill="currentColor" fillOpacity="0.2" />
          <rect x="24" y="22" width="16" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
          <rect x="24" y="30" width="16" height="4" rx="1" fill="currentColor" fillOpacity="0.15" />
        </>
      )}
    </svg>
  )
}

export function GeneratorCard({
  href,
  name,
  description,
  categoryKey,
  categoryLabel,
  showCategoryTag = false,
  showArrow = false,
}) {
  return (
    <a
      href={href}
      className="group block rounded-[3px] border border-[#C6C9CD] bg-white p-5 transition-all duration-200 hover:border-[#8159BB] hover:shadow-[0_4px_12px_rgba(129,89,187,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
    >
      <CategoryIllustration categoryKey={categoryKey} className="mb-4" />
      <h4 className="font-['Josefin_Sans',sans-serif] text-base font-bold uppercase leading-tight text-[#4B5056]">
        {name}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-[#636972]">{description}</p>
      {showCategoryTag && (
        <span className="mt-3 inline-block rounded-[3px] border border-[#8159BB] px-1.5 py-0.5 font-['Josefin_Sans',sans-serif] text-[11px] font-bold uppercase text-[#8159BB]">
          {categoryLabel}
        </span>
      )}
      {showArrow && (
        <ArrowRight
          className="mt-3 h-4 w-4 text-[#8159BB] transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </a>
  )
}
