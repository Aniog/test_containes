import React from "react";

// All icons are decorative; consumers set aria-hidden via the wrapper.
// Stroke uses brand purple; fills use a light wash so the line-art reads softly.

const stroke = "#8159BB";
const fill = "rgba(129, 89, 187, 0.10)";

export function MagnifierIcon({ size = 18 }) {
  return (
    <svg
      className="strk-search-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.5" stroke={stroke} strokeWidth="1.8" />
      <line
        x1="16"
        y1="16"
        x2="20.5"
        y2="20.5"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlusIcon({ size = 14, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" stroke={color || stroke} strokeWidth="2" strokeLinecap="round" />
      <line x1="5" y1="12" x2="19" y2="12" stroke={color || stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 12, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polyline
        points="6 9 12 15 18 9"
        stroke={color || stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ArrowRightIcon({ size = 18, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="4" y1="12" x2="19" y2="12" stroke={color || stroke} strokeWidth="2" strokeLinecap="round" />
      <polyline points="13 6 19 12 13 18" stroke={color || stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function GlobeIcon({ size = 18, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke={color || stroke} strokeWidth="1.8" />
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke={color || stroke} strokeWidth="1.8" />
      <line x1="3" y1="12" x2="21" y2="12" stroke={color || stroke} strokeWidth="1.8" />
    </svg>
  );
}

// -------- Hero illustration: soft purple line-art website mockup --------
export function HeroIllustration({ width = 520, height = 380 }) {
  return (
    <svg
      className="strk-hero-illustration"
      width={width}
      height={height}
      viewBox="0 0 520 380"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroBluePink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
        <linearGradient id="heroWash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(129,89,187,0.12)" />
          <stop offset="100%" stopColor="rgba(203,12,159,0.10)" />
        </linearGradient>
      </defs>

      {/* soft halo */}
      <ellipse cx="260" cy="220" rx="220" ry="120" fill="url(#heroWash)" />

      {/* Browser frame */}
      <rect x="60" y="60" width="400" height="260" rx="14" fill="#FFFFFF" stroke="#8159BB" strokeWidth="2" />
      {/* title bar */}
      <line x1="60" y1="100" x2="460" y2="100" stroke="#C6C9CD" strokeWidth="1.5" />
      <circle cx="80" cy="80" r="4" fill="#C6C9CD" />
      <circle cx="94" cy="80" r="4" fill="#C6C9CD" />
      <circle cx="108" cy="80" r="4" fill="#C6C9CD" />

      {/* Hero block inside browser */}
      <rect x="90" y="125" width="180" height="18" rx="3" fill="#8159BB" opacity="0.85" />
      <rect x="90" y="152" width="240" height="10" rx="2" fill="#C6C9CD" />
      <rect x="90" y="170" width="200" height="10" rx="2" fill="#C6C9CD" />
      <rect x="90" y="195" width="100" height="32" rx="4" fill="url(#heroBluePink)" />
      <rect x="200" y="195" width="80" height="32" rx="4" fill="none" stroke="#8159BB" strokeWidth="1.5" />

      {/* Card row */}
      <rect x="90" y="245" width="100" height="55" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="200" y="245" width="100" height="55" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="310" y="245" width="100" height="55" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />

      {/* Floating accent dots */}
      <circle cx="450" cy="40" r="6" fill="url(#heroBluePink)" />
      <circle cx="40" cy="320" r="4" fill="#8159BB" />
      <circle cx="490" cy="330" r="5" fill="#CB0C9F" opacity="0.6" />
    </svg>
  );
}

// -------- Category illustrations (one per category, reused across cards in the subsection) --------

export function WebsiteIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <rect x="8" y="14" width="104" height="60" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <line x1="8" y1="28" x2="112" y2="28" stroke={stroke} strokeWidth="1.5" />
      <rect x="14" y="36" width="40" height="6" rx="2" fill={stroke} opacity="0.7" />
      <rect x="14" y="48" width="60" height="4" rx="1" fill="#C6C9CD" />
      <rect x="14" y="56" width="50" height="4" rx="1" fill="#C6C9CD" />
      <rect x="78" y="40" width="28" height="22" rx="3" fill="#FFFFFF" stroke={stroke} strokeWidth="1.2" />
    </svg>
  );
}

export function LandingIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <rect x="14" y="12" width="92" height="56" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <rect x="28" y="22" width="32" height="6" rx="2" fill={stroke} opacity="0.7" />
      <rect x="28" y="34" width="48" height="3" rx="1" fill="#C6C9CD" />
      <rect x="28" y="40" width="40" height="3" rx="1" fill="#C6C9CD" />
      <rect x="28" y="50" width="22" height="10" rx="3" fill={stroke} />
    </svg>
  );
}

export function PortfolioIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <rect x="10" y="14" width="32" height="32" rx="3" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <rect x="46" y="14" width="32" height="32" rx="3" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <rect x="82" y="14" width="28" height="32" rx="3" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <rect x="10" y="52" width="48" height="4" rx="1" fill="#C6C9CD" />
      <rect x="10" y="60" width="32" height="4" rx="1" fill="#C6C9CD" />
    </svg>
  );
}

export function BlogIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <rect x="20" y="12" width="80" height="56" rx="3" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <rect x="30" y="22" width="40" height="6" rx="2" fill={stroke} opacity="0.7" />
      <rect x="30" y="34" width="58" height="3" rx="1" fill="#C6C9CD" />
      <rect x="30" y="42" width="58" height="3" rx="1" fill="#C6C9CD" />
      <rect x="30" y="50" width="40" height="3" rx="1" fill="#C6C9CD" />
    </svg>
  );
}

export function StoreIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <path d="M16 22 L104 22 L98 64 L22 64 Z" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <line x1="16" y1="22" x2="104" y2="22" stroke={stroke} strokeWidth="1.5" />
      <rect x="44" y="34" width="32" height="18" rx="2" fill="#FFFFFF" stroke={stroke} strokeWidth="1.2" />
      <circle cx="60" cy="42" r="3" fill={stroke} />
    </svg>
  );
}

export function LinkInBioIllustration() {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <rect x="36" y="8" width="48" height="64" rx="6" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <circle cx="60" cy="22" r="6" fill="#FFFFFF" stroke={stroke} strokeWidth="1.2" />
      <rect x="44" y="34" width="32" height="6" rx="2" fill="#FFFFFF" stroke={stroke} strokeWidth="1" />
      <rect x="44" y="44" width="32" height="6" rx="2" fill="#FFFFFF" stroke={stroke} strokeWidth="1" />
      <rect x="44" y="54" width="32" height="6" rx="2" fill="#FFFFFF" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}

export function CategoryIllustration({ iconKey }) {
  switch (iconKey) {
    case "website":  return <WebsiteIllustration />;
    case "landing":  return <LandingIllustration />;
    case "portfolio":return <PortfolioIllustration />;
    case "blog":     return <BlogIllustration />;
    case "store":    return <StoreIllustration />;
    case "link":     return <LinkInBioIllustration />;
    default:         return <WebsiteIllustration />;
  }
}

// -------- Why-Strikingly line icons --------

export function BoltIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 L4 14 H11 L10 22 L20 9 H13 Z" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function PhoneIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" stroke={stroke} strokeWidth="1.8" />
      <line x1="10" y1="18.5" x2="14" y2="18.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function HeartIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-4.5-9.5-9.5C0.8 7 4 3 8 4.5 9.5 5 11 6 12 7.5 13 6 14.5 5 16 4.5 20 3 23.2 7 21.5 11.5 19 16.5 12 21 12 21z"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function LogoMark({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 L5 5 H12 C16 5 19 7.5 19 12 C19 16.5 16 19 12 19 Z" stroke="#8159BB" strokeWidth="2" fill="none" />
      <line x1="8" y1="9" x2="13" y2="9" stroke="#8159BB" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="8" y1="12" x2="13" y2="12" stroke="#8159BB" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="8" y1="15" x2="11" y2="15" stroke="#8159BB" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}