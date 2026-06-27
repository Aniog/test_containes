export function WebsiteMockupIllustration({ className = '', width = 420, height = 320 }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 420 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="mockupGrad" x1="0" y1="0" x2="420" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" stopOpacity="0.25" />
          <stop offset="1" stopColor="#CB0C9F" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="mockupStroke" x1="0" y1="0" x2="420" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
      <rect x="24" y="28" width="372" height="264" rx="8" fill="url(#mockupGrad)" stroke="url(#mockupStroke)" strokeWidth="1.5" />
      <rect x="44" y="52" width="120" height="10" rx="3" fill="#8159BB" fillOpacity="0.35" />
      <rect x="320" y="52" width="56" height="10" rx="3" fill="#8159BB" fillOpacity="0.25" />
      <rect x="44" y="86" width="332" height="80" rx="4" fill="#FFFFFF" fillOpacity="0.6" stroke="#8159BB" strokeWidth="1" strokeOpacity="0.35" />
      <rect x="64" y="106" width="180" height="12" rx="3" fill="#8159BB" fillOpacity="0.4" />
      <rect x="64" y="130" width="120" height="10" rx="3" fill="#8159BB" fillOpacity="0.25" />
      <rect x="280" y="110" width="76" height="32" rx="4" fill="url(#mockupStroke)" fillOpacity="0.35" />
      <rect x="44" y="182" width="156" height="90" rx="4" fill="#FFFFFF" fillOpacity="0.5" stroke="#8159BB" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="60" y="200" width="124" height="8" rx="2" fill="#8159BB" fillOpacity="0.3" />
      <rect x="60" y="218" width="100" height="6" rx="2" fill="#8159BB" fillOpacity="0.2" />
      <rect x="60" y="234" width="80" height="6" rx="2" fill="#8159BB" fillOpacity="0.2" />
      <rect x="220" y="182" width="156" height="90" rx="4" fill="#FFFFFF" fillOpacity="0.5" stroke="#8159BB" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="236" y="200" width="124" height="8" rx="2" fill="#8159BB" fillOpacity="0.3" />
      <rect x="236" y="218" width="100" height="6" rx="2" fill="#8159BB" fillOpacity="0.2" />
      <rect x="236" y="234" width="80" height="6" rx="2" fill="#8159BB" fillOpacity="0.2" />
      <circle cx="354" cy="260" r="18" fill="url(#mockupStroke)" fillOpacity="0.2" />
      <path d="M348 260l6 6 10-12" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CategoryWebsitesIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M6 16h32M14 24h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CategoryLandingIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M14 34l8-10 6 6 8-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CategoryPortfolioIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="7" y="9" width="30" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="21" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M9 35l9-11 6 7 11-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CategoryBlogIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M10 8h24a3 3 0 013 3v22a3 3 0 01-3 3H10a3 3 0 01-3-3V11a3 3 0 013-3z" stroke="currentColor" strokeWidth="2" />
      <path d="M15 18h14M15 25h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CategoryStoreIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M8 14h28l-3 20H11L8 14z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 14V9h14v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 26h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CategoryLinkIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="16" cy="22" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="28" cy="22" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M20 22h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ThumbnailWebsiteIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="5" y="7" width="30" height="26" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 14h30M11 22h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ThumbnailLandingIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="7" y="7" width="26" height="26" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 30l7-9 5 5 7-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ThumbnailPortfolioIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="19" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 31l8-10 5 6 9-12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ThumbnailBlogIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M9 7h22a3 3 0 013 3v20a3 3 0 01-3 3H9a3 3 0 01-3-3V10a3 3 0 013-3z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13 17h14M13 23h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ThumbnailStoreIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M7 13h26l-3 19H10L7 13z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M13 13V9h14v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 25h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ThumbnailLinkIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="14" cy="20" r="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="26" cy="20" r="5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M18 20h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M13 13l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ZapIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M20 4l-10 16h8l-2 12 10-16h-8l2-12z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SmartphoneIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="9" y="4" width="18" height="28" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M14 9h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CreditCardIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="28" height="16" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M4 15h28" stroke="currentColor" strokeWidth="2" />
      <path d="M9 23h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
