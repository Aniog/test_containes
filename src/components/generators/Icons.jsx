// Inline SVG illustrations — all decorative, aria-hidden="true"

export function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Browser chrome */}
      <rect x="20" y="20" width="440" height="320" rx="10" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
      {/* Title bar */}
      <rect x="20" y="20" width="440" height="36" rx="10" fill="#E2E4E7" />
      <rect x="20" y="44" width="440" height="12" fill="#E2E4E7" />
      {/* Traffic lights */}
      <circle cx="44" cy="38" r="5" fill="#CB0C9F" opacity="0.6" />
      <circle cx="60" cy="38" r="5" fill="#7671FF" opacity="0.6" />
      <circle cx="76" cy="38" r="5" fill="#8159BB" opacity="0.6" />
      {/* URL bar */}
      <rect x="100" y="30" width="260" height="16" rx="8" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
      {/* Hero section mock */}
      <rect x="40" y="72" width="400" height="80" rx="4" fill="url(#heroGrad)" opacity="0.15" />
      <rect x="60" y="88" width="180" height="12" rx="3" fill="#4B5056" opacity="0.5" />
      <rect x="60" y="108" width="120" height="8" rx="3" fill="#636972" opacity="0.4" />
      <rect x="60" y="124" width="80" height="20" rx="4" fill="url(#heroGrad)" opacity="0.7" />
      {/* Content blocks */}
      <rect x="40" y="168" width="120" height="80" rx="4" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="52" y="180" width="96" height="40" rx="3" fill="#E2E4E7" />
      <rect x="52" y="228" width="60" height="8" rx="3" fill="#4B5056" opacity="0.5" />
      <rect x="52" y="242" width="80" height="6" rx="3" fill="#636972" opacity="0.3" />

      <rect x="180" y="168" width="120" height="80" rx="4" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="192" y="180" width="96" height="40" rx="3" fill="#E2E4E7" />
      <rect x="192" y="228" width="60" height="8" rx="3" fill="#4B5056" opacity="0.5" />
      <rect x="192" y="242" width="80" height="6" rx="3" fill="#636972" opacity="0.3" />

      <rect x="320" y="168" width="120" height="80" rx="4" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="332" y="180" width="96" height="40" rx="3" fill="#E2E4E7" />
      <rect x="332" y="228" width="60" height="8" rx="3" fill="#4B5056" opacity="0.5" />
      <rect x="332" y="242" width="80" height="6" rx="3" fill="#636972" opacity="0.3" />

      {/* Footer mock */}
      <rect x="40" y="268" width="400" height="52" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="60" y="282" width="60" height="8" rx="3" fill="#8159BB" opacity="0.5" />
      <rect x="60" y="298" width="100" height="6" rx="3" fill="#636972" opacity="0.3" />
      <rect x="340" y="282" width="80" height="24" rx="4" fill="url(#heroGrad)" opacity="0.6" />

      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function WebsiteIllustration() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="8" width="40" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="4" y="8" width="40" height="10" rx="3" fill="#8159BB" opacity="0.15" />
      <circle cx="10" cy="13" r="2" fill="#8159BB" opacity="0.5" />
      <circle cx="17" cy="13" r="2" fill="#7671FF" opacity="0.5" />
      <rect x="10" y="24" width="28" height="4" rx="2" fill="#C6C9CD" />
      <rect x="10" y="32" width="18" height="3" rx="1.5" fill="#E2E4E7" />
    </svg>
  );
}

export function LandingPageIllustration() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="4" width="32" height="40" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="12" y="10" width="24" height="8" rx="2" fill="#8159BB" opacity="0.15" />
      <rect x="14" y="12" width="16" height="4" rx="1" fill="#8159BB" opacity="0.4" />
      <rect x="12" y="22" width="24" height="3" rx="1.5" fill="#C6C9CD" />
      <rect x="12" y="28" width="16" height="3" rx="1.5" fill="#E2E4E7" />
      <rect x="14" y="35" width="20" height="6" rx="3" fill="url(#lpGrad)" opacity="0.7" />
      <defs>
        <linearGradient id="lpGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PortfolioIllustration() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="10" width="18" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.1" />
      <rect x="26" y="10" width="18" height="14" rx="2" stroke="#7671FF" strokeWidth="1.5" fill="#7671FF" fillOpacity="0.1" />
      <rect x="4" y="28" width="18" height="10" rx="2" stroke="#CB0C9F" strokeWidth="1.5" fill="#CB0C9F" fillOpacity="0.1" />
      <rect x="26" y="28" width="18" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.1" />
    </svg>
  );
}

export function BlogIllustration() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="36" height="36" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="12" y="14" width="24" height="4" rx="2" fill="#8159BB" opacity="0.5" />
      <rect x="12" y="22" width="24" height="2.5" rx="1.25" fill="#C6C9CD" />
      <rect x="12" y="27" width="18" height="2.5" rx="1.25" fill="#C6C9CD" />
      <rect x="12" y="32" width="20" height="2.5" rx="1.25" fill="#E2E4E7" />
    </svg>
  );
}

export function StoreIllustration() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 18 L12 8 H36 L40 18 V20 C40 22.2 38.2 24 36 24 C33.8 24 32 22.2 32 20 C32 22.2 30.2 24 28 24 C25.8 24 24 22.2 24 20 C24 22.2 22.2 24 20 24 C17.8 24 16 22.2 16 20 C16 22.2 14.2 24 12 24 C9.8 24 8 22.2 8 20 V18Z" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.1" />
      <rect x="8" y="24" width="32" height="16" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="18" y="30" width="12" height="10" rx="1" fill="#8159BB" opacity="0.2" />
    </svg>
  );
}

export function LinkInBioIllustration() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="14" y="4" width="20" height="40" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="14" r="5" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1" />
      <rect x="18" y="22" width="12" height="4" rx="2" fill="#8159BB" opacity="0.4" />
      <rect x="18" y="29" width="12" height="4" rx="2" fill="#7671FF" opacity="0.4" />
      <rect x="18" y="36" width="12" height="4" rx="2" fill="#CB0C9F" opacity="0.3" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M6 10l3 3 5-5" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SpeedIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M16 9v7l4 4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MobileIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="4" width="12" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="24" r="1.5" fill="#8159BB" />
    </svg>
  );
}

export function FreeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 4l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export function LogoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="url(#logoGrad)" />
      <path d="M5 10h10M10 5v10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}
