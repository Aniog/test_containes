import React from "react";

// All icons are inline SVG so we don't depend on external images.
// Decorative icons take aria-hidden via the parent where appropriate.

export function SearchIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function ChevronIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function SpeedIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

export function MobileIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function FreeIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
    </svg>
  );
}

// Small placeholder thumbnails used inside generator cards in the directory.
const thumbStroke = "#8159BB";

export function ThumbSite() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="12" width="48" height="36" rx="3" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <rect x="14" y="20" width="36" height="6" rx="1" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <rect x="14" y="30" width="20" height="4" rx="1" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <rect x="14" y="38" width="28" height="4" rx="1" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <path d="M52 48v6H12v-6" fill="none" stroke={thumbStroke} strokeWidth="2" />
    </svg>
  );
}

export function ThumbPage() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="8" width="36" height="48" rx="3" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <path d="M22 20h20M22 28h20M22 36h12" stroke={thumbStroke} strokeWidth="2" strokeLinecap="round" />
      <rect x="22" y="42" width="20" height="8" rx="2" fill="none" stroke={thumbStroke} strokeWidth="2" />
    </svg>
  );
}

export function ThumbGrid() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="8" width="22" height="22" rx="2" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <rect x="34" y="8" width="22" height="22" rx="2" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <rect x="8" y="34" width="22" height="22" rx="2" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <rect x="34" y="34" width="22" height="22" rx="2" fill="none" stroke={thumbStroke} strokeWidth="2" />
    </svg>
  );
}

export function ThumbBlog() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="8" width="36" height="48" rx="3" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <path d="M22 18h20M22 26h20M22 34h14" stroke={thumbStroke} strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="44" r="3" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <path d="M28 44h12" stroke={thumbStroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ThumbStore() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 22 14 10h36l4 12" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <path d="M10 22h44v22a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V22z" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <path d="M22 30v18M42 30v18" stroke={thumbStroke} strokeWidth="2" />
    </svg>
  );
}

export function ThumbLink() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="20" fill="none" stroke={thumbStroke} strokeWidth="2" />
      <path d="M22 26h20M22 32h20M22 38h12" stroke={thumbStroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export const THUMB_BY_ID = {
  site: ThumbSite,
  page: ThumbPage,
  grid: ThumbGrid,
  blog: ThumbBlog,
  store: ThumbStore,
  link: ThumbLink,
};

// Category card icons (top of each Browse-by-Category card).
export function CatWebsitesIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8h18" />
      <path d="M8 20h8" />
      <path d="M12 18v2" />
    </svg>
  );
}

export function CatLandingIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 8h10" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
    </svg>
  );
}

export function CatPortfolioIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

export function CatBlogIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h12l4 4v12a0 0 0 0 1 0 0H4z" />
      <path d="M16 4v4h4" />
      <path d="M8 12h8" />
      <path d="M8 16h6" />
    </svg>
  );
}

export function CatStoreIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h18l-2 11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
    </svg>
  );
}

export function CatLinkIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 15a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1" />
      <path d="M15 9a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1" />
    </svg>
  );
}

// Hero illustration - a soft purple line-art website mockup.
export function HeroIllustration({ className }) {
  return (
    <svg
      className={className}
      width="540"
      height="420"
      viewBox="0 0 540 420"
      role="img"
      aria-label="Illustration of a website mockup"
    >
      <defs>
        <linearGradient id="hero-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
        <linearGradient id="hero-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7671FF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* soft background blob */}
      <path
        d="M70 90c0-30 30-50 70-50s70 20 90 50 30 70 10 110-80 70-130 60-70-50-70-90 30-50 30-80z"
        fill="url(#hero-fill)"
      />

      {/* Browser frame */}
      <rect
        x="100"
        y="80"
        width="380"
        height="270"
        rx="14"
        fill="#FFFFFF"
        stroke="url(#hero-stroke)"
        strokeWidth="3"
      />
      <line x1="100" y1="120" x2="480" y2="120" stroke="url(#hero-stroke)" strokeWidth="2" />
      <circle cx="118" cy="100" r="4" fill="#8159BB" opacity="0.6" />
      <circle cx="132" cy="100" r="4" fill="#8159BB" opacity="0.4" />
      <circle cx="146" cy="100" r="4" fill="#8159BB" opacity="0.3" />

      {/* Mock header */}
      <rect x="130" y="140" width="160" height="14" rx="3" fill="url(#hero-stroke)" opacity="0.85" />
      <rect x="380" y="140" width="60" height="14" rx="3" fill="none" stroke="#8159BB" strokeWidth="1.5" />

      {/* Hero block */}
      <rect x="130" y="170" width="220" height="12" rx="3" fill="#4B5056" opacity="0.7" />
      <rect x="130" y="190" width="180" height="10" rx="3" fill="#4B5056" opacity="0.4" />
      <rect x="130" y="208" width="100" height="22" rx="4" fill="url(#hero-stroke)" />

      {/* Three feature cards */}
      <rect x="130" y="250" width="100" height="80" rx="6" fill="#F4F6F8" stroke="#C6C9CD" />
      <rect x="240" y="250" width="100" height="80" rx="6" fill="#F4F6F8" stroke="#C6C9CD" />
      <rect x="350" y="250" width="100" height="80" rx="6" fill="#F4F6F8" stroke="#C6C9CD" />
      <circle cx="155" cy="278" r="10" fill="url(#hero-stroke)" opacity="0.2" />
      <circle cx="265" cy="278" r="10" fill="url(#hero-stroke)" opacity="0.2" />
      <circle cx="375" cy="278" r="10" fill="url(#hero-stroke)" opacity="0.2" />
      <rect x="145" y="296" width="70" height="6" rx="2" fill="#4B5056" opacity="0.5" />
      <rect x="145" y="306" width="50" height="6" rx="2" fill="#4B5056" opacity="0.3" />
      <rect x="255" y="296" width="70" height="6" rx="2" fill="#4B5056" opacity="0.5" />
      <rect x="255" y="306" width="50" height="6" rx="2" fill="#4B5056" opacity="0.3" />
      <rect x="365" y="296" width="70" height="6" rx="2" fill="#4B5056" opacity="0.5" />
      <rect x="365" y="306" width="50" height="6" rx="2" fill="#4B5056" opacity="0.3" />

      {/* Floating card */}
      <rect x="420" y="200" width="90" height="60" rx="8" fill="#FFFFFF" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="438" cy="222" r="6" fill="url(#hero-stroke)" />
      <rect x="450" y="216" width="46" height="6" rx="2" fill="#4B5056" opacity="0.5" />
      <rect x="450" y="226" width="36" height="6" rx="2" fill="#4B5056" opacity="0.3" />
      <rect x="430" y="240" width="68" height="8" rx="2" fill="url(#hero-stroke)" opacity="0.85" />

      {/* Sparkle */}
      <path d="M70 200l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="url(#hero-stroke)" opacity="0.7" />
      <path d="M470 100l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="url(#hero-stroke)" opacity="0.5" />
    </svg>
  );
}