import React from "react"

// All illustrations are inline SVGs with explicit width/height for zero CLS.
// Purple palette (#8159BB) and a soft secondary, line-art style.
// Decorative — every SVG ships aria-hidden="true".

const stroke = "#8159BB"
const soft = "#C9B8E2"
const accent = "#7671FF"

export function WebsiteMockupIllustration({ width = 360, height = 280 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 280"
      width={width}
      height={height}
      role="img"
      aria-hidden="true"
    >
      {/* browser frame */}
      <rect x="24" y="20" width="312" height="240" rx="10" ry="10" fill="#FFFFFF" stroke={stroke} strokeWidth="2" />
      <rect x="24" y="20" width="312" height="32" rx="10" ry="10" fill="#F4F6F8" stroke={stroke} strokeWidth="2" />
      <circle cx="40" cy="36" r="3" fill={soft} />
      <circle cx="52" cy="36" r="3" fill={soft} />
      <circle cx="64" cy="36" r="3" fill={soft} />
      <rect x="86" y="30" width="180" height="12" rx="6" ry="6" fill="#FFFFFF" stroke={soft} strokeWidth="1" />

      {/* hero block */}
      <rect x="44" y="68" width="180" height="14" rx="4" ry="4" fill={stroke} />
      <rect x="44" y="90" width="220" height="8" rx="3" ry="3" fill={soft} />
      <rect x="44" y="104" width="180" height="8" rx="3" ry="3" fill={soft} />
      <rect x="44" y="128" width="80" height="26" rx="6" ry="6" fill={accent} />
      <rect x="134" y="128" width="80" height="26" rx="6" ry="6" fill="#FFFFFF" stroke={stroke} strokeWidth="1.5" />

      {/* cards */}
      <rect x="44" y="172" width="84" height="68" rx="6" ry="6" fill="#FFFFFF" stroke={soft} strokeWidth="1.5" />
      <rect x="138" y="172" width="84" height="68" rx="6" ry="6" fill="#FFFFFF" stroke={soft} strokeWidth="1.5" />
      <rect x="232" y="172" width="84" height="68" rx="6" ry="6" fill="#FFFFFF" stroke={soft} strokeWidth="1.5" />
      <circle cx="86" cy="200" r="10" fill={soft} />
      <circle cx="180" cy="200" r="10" fill={soft} />
      <circle cx="274" cy="200" r="10" fill={soft} />
      <rect x="56" y="218" width="60" height="6" rx="3" ry="3" fill={stroke} />
      <rect x="150" y="218" width="60" height="6" rx="3" ry="3" fill={stroke} />
      <rect x="244" y="218" width="60" height="6" rx="3" ry="3" fill={stroke} />
    </svg>
  )
}

// Small thumbnail (per-category) for the All Generators cards.
// All thumbnails are square ~80x80; same shape per category for visual rhythm.
export function CategoryThumb({ kind = "website" }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 80 80",
    width: 80,
    height: 80,
    role: "img",
    "aria-hidden": "true",
  }
  switch (kind) {
    case "landing":
      return (
        <svg {...common}>
          <rect x="10" y="8" width="60" height="64" rx="6" fill="#F4F6F8" stroke={stroke} strokeWidth="1.5" />
          <rect x="18" y="16" width="44" height="6" rx="3" fill={stroke} />
          <rect x="18" y="26" width="34" height="4" rx="2" fill={soft} />
          <rect x="18" y="34" width="30" height="4" rx="2" fill={soft} />
          <rect x="18" y="46" width="20" height="10" rx="3" fill={accent} />
          <path d="M48 51 L56 51 M52 47 L52 55" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case "portfolio":
      return (
        <svg {...common}>
          <rect x="10" y="14" width="60" height="52" rx="6" fill="#FFFFFF" stroke={stroke} strokeWidth="1.5" />
          <rect x="16" y="20" width="22" height="18" rx="3" fill={soft} />
          <rect x="42" y="20" width="22" height="18" rx="3" fill={accent} opacity="0.5" />
          <rect x="16" y="42" width="22" height="3" rx="1.5" fill={stroke} />
          <rect x="16" y="48" width="16" height="3" rx="1.5" fill={soft} />
          <rect x="42" y="42" width="22" height="3" rx="1.5" fill={stroke} />
          <rect x="42" y="48" width="16" height="3" rx="1.5" fill={soft} />
        </svg>
      )
    case "blog":
      return (
        <svg {...common}>
          <rect x="12" y="10" width="56" height="60" rx="4" fill="#FFFFFF" stroke={stroke} strokeWidth="1.5" />
          <rect x="20" y="18" width="40" height="5" rx="2" fill={stroke} />
          <rect x="20" y="28" width="40" height="3" rx="1.5" fill={soft} />
          <rect x="20" y="34" width="32" height="3" rx="1.5" fill={soft} />
          <rect x="20" y="40" width="40" height="3" rx="1.5" fill={soft} />
          <rect x="20" y="46" width="28" height="3" rx="1.5" fill={soft} />
          <rect x="20" y="56" width="40" height="6" rx="3" fill={accent} />
        </svg>
      )
    case "store":
      return (
        <svg {...common}>
          <path d="M16 28 L24 18 L56 18 L64 28 L64 60 L16 60 Z" fill="#FFFFFF" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
          <rect x="32" y="40" width="16" height="20" fill={accent} opacity="0.35" />
          <rect x="20" y="32" width="6" height="6" fill={soft} />
          <rect x="54" y="32" width="6" height="6" fill={soft} />
          <path d="M40 18 L40 12" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case "link":
      return (
        <svg {...common}>
          <rect x="14" y="20" width="52" height="40" rx="8" fill="#F4F6F8" stroke={stroke} strokeWidth="1.5" />
          <path d="M30 36 L24 40 L30 44" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M50 36 L56 40 L50 44" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="36" y="32" width="8" height="16" rx="2" fill={accent} />
        </svg>
      )
    case "website":
    default:
      return (
        <svg {...common}>
          <rect x="12" y="12" width="56" height="56" rx="6" fill="#FFFFFF" stroke={stroke} strokeWidth="1.5" />
          <rect x="12" y="12" width="56" height="12" rx="6" fill={stroke} />
          <circle cx="20" cy="18" r="1.5" fill="#FFFFFF" />
          <circle cx="26" cy="18" r="1.5" fill="#FFFFFF" />
          <circle cx="32" cy="18" r="1.5" fill="#FFFFFF" />
          <rect x="20" y="32" width="40" height="4" rx="2" fill={stroke} />
          <rect x="20" y="40" width="28" height="3" rx="1.5" fill={soft} />
          <rect x="20" y="48" width="32" height="10" rx="3" fill={accent} />
        </svg>
      )
  }
}

// Larger illustration used at the top of each Browse by Category card.
export function CategoryHeroIcon({ kind = "website" }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 120 90",
    width: 120,
    height: 90,
    role: "img",
    "aria-hidden": "true",
  }
  switch (kind) {
    case "landing":
      return (
        <svg {...common}>
          <rect x="14" y="10" width="92" height="70" rx="6" fill="#FFFFFF" stroke={stroke} strokeWidth="1.8" />
          <rect x="24" y="20" width="60" height="8" rx="3" fill={stroke} />
          <rect x="24" y="34" width="48" height="5" rx="2" fill={soft} />
          <rect x="24" y="42" width="40" height="5" rx="2" fill={soft} />
          <rect x="24" y="56" width="28" height="14" rx="4" fill={accent} />
          <path d="M62 63 L70 63 M66 59 L66 67" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case "portfolio":
      return (
        <svg {...common}>
          <rect x="12" y="14" width="96" height="62" rx="6" fill="#FFFFFF" stroke={stroke} strokeWidth="1.8" />
          <rect x="20" y="22" width="36" height="26" rx="3" fill={soft} />
          <rect x="62" y="22" width="36" height="26" rx="3" fill={accent} opacity="0.45" />
          <rect x="20" y="54" width="36" height="4" rx="2" fill={stroke} />
          <rect x="20" y="60" width="24" height="3" rx="1.5" fill={soft} />
          <rect x="62" y="54" width="36" height="4" rx="2" fill={stroke} />
          <rect x="62" y="60" width="24" height="3" rx="1.5" fill={soft} />
        </svg>
      )
    case "blog":
      return (
        <svg {...common}>
          <rect x="20" y="10" width="80" height="70" rx="4" fill="#FFFFFF" stroke={stroke} strokeWidth="1.8" />
          <rect x="32" y="20" width="56" height="7" rx="3" fill={stroke} />
          <rect x="32" y="34" width="56" height="4" rx="2" fill={soft} />
          <rect x="32" y="42" width="48" height="4" rx="2" fill={soft} />
          <rect x="32" y="50" width="40" height="4" rx="2" fill={soft} />
          <rect x="32" y="60" width="22" height="10" rx="3" fill={accent} />
        </svg>
      )
    case "store":
      return (
        <svg {...common}>
          <path d="M22 30 L34 16 L86 16 L98 30 L98 74 L22 74 Z" fill="#FFFFFF" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
          <rect x="48" y="46" width="24" height="28" fill={accent} opacity="0.4" />
          <rect x="28" y="36" width="10" height="10" fill={soft} />
          <rect x="82" y="36" width="10" height="10" fill={soft} />
          <path d="M60 16 L60 8" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case "link":
      return (
        <svg {...common}>
          <rect x="14" y="22" width="92" height="46" rx="10" fill="#F4F6F8" stroke={stroke} strokeWidth="1.8" />
          <path d="M38 38 L28 45 L38 52" stroke={stroke} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M82 38 L92 45 L82 52" stroke={stroke} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="48" y="34" width="24" height="22" rx="3" fill={accent} opacity="0.4" />
        </svg>
      )
    case "website":
    default:
      return (
        <svg {...common}>
          <rect x="14" y="10" width="92" height="70" rx="6" fill="#FFFFFF" stroke={stroke} strokeWidth="1.8" />
          <rect x="14" y="10" width="92" height="14" rx="6" fill={stroke} />
          <circle cx="22" cy="17" r="1.6" fill="#FFFFFF" />
          <circle cx="28" cy="17" r="1.6" fill="#FFFFFF" />
          <circle cx="34" cy="17" r="1.6" fill="#FFFFFF" />
          <rect x="24" y="34" width="60" height="6" rx="3" fill={stroke} />
          <rect x="24" y="46" width="44" height="4" rx="2" fill={soft} />
          <rect x="24" y="54" width="36" height="4" rx="2" fill={soft} />
          <rect x="24" y="64" width="28" height="10" rx="3" fill={accent} />
        </svg>
      )
  }
}

// Icons for the "Why Strikingly" cells.
export function WhyIcon({ kind }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: 48,
    height: 48,
    role: "img",
    "aria-hidden": "true",
  }
  if (kind === "live") {
    return (
      <svg {...common}>
        <path d="M24 6 L29 19 L42 20 L32 28 L36 41 L24 33 L12 41 L16 28 L6 20 L19 19 Z" fill="none" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  }
  if (kind === "mobile") {
    return (
      <svg {...common}>
        <rect x="14" y="6" width="20" height="36" rx="3" fill="none" stroke={stroke} strokeWidth="2" />
        <rect x="18" y="10" width="12" height="22" rx="1" fill="none" stroke={stroke} strokeWidth="1.5" />
        <circle cx="24" cy="37" r="1.5" fill={stroke} />
      </svg>
    )
  }
  if (kind === "free") {
    return (
      <svg {...common}>
        <circle cx="24" cy="24" r="18" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M24 12 L24 24 L34 28" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    )
  }
  return null
}

// Inline arrows / glyphs
export function ArrowRight({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

export function SearchIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  )
}

export function PlusIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

export function MinusIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
    </svg>
  )
}
