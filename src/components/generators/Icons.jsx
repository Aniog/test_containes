export const WebsiteIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" strokeWidth="2" />
    <path d="M6 18H42" stroke="#8159BB" strokeWidth="2" />
    <circle cx="12" cy="14" r="1.5" fill="#8159BB" />
    <circle cx="17" cy="14" r="1.5" fill="#8159BB" />
    <circle cx="22" cy="14" r="1.5" fill="#8159BB" />
    <rect x="10" y="24" width="10" height="10" rx="1" stroke="#CB0C9F" strokeWidth="2" />
    <path d="M26 24H38M26 28H34M26 32H38" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const LandingPageIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="8" width="32" height="32" rx="3" stroke="#8159BB" strokeWidth="2" />
    <path d="M8 16H40" stroke="#8159BB" strokeWidth="2" />
    <circle cx="24" cy="28" r="6" stroke="#CB0C9F" strokeWidth="2" />
    <path d="M28 26L24 30L22 28" stroke="#CB0C9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PortfolioIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="10" width="14" height="18" rx="1" stroke="#8159BB" strokeWidth="2" />
    <rect x="26" y="10" width="14" height="10" rx="1" stroke="#CB0C9F" strokeWidth="2" />
    <rect x="26" y="24" width="14" height="14" rx="1" stroke="#8159BB" strokeWidth="2" />
  </svg>
);

export const BlogIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="7" width="32" height="34" rx="3" stroke="#8159BB" strokeWidth="2" />
    <path d="M14 16H34" stroke="#CB0C9F" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 23H30" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 30H26" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const StoreIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M8 14L12 8H36L40 14V40H8V14Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round" />
    <path d="M8 18H40" stroke="#8159BB" strokeWidth="2" />
    <circle cx="20" cy="30" r="3" stroke="#CB0C9F" strokeWidth="2" />
    <path d="M31 28H35M31 32H35" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const LinkInBioIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="15" r="6" stroke="#8159BB" strokeWidth="2" />
    <path d="M12 40C12 32 16 28 24 28C32 28 36 32 36 40" stroke="#CB0C9F" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 14H38M34 10V18" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const HeroIllustration = ({ className = 'w-full h-auto' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" aria-hidden="true" width="400" height="300">
    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF" stopOpacity="0.35" />
        <stop offset="1" stopColor="#CB0C9F" stopOpacity="0.25" />
      </linearGradient>
    </defs>
    <rect x="20" y="30" width="360" height="240" rx="8" fill="url(#heroGrad)" />
    <rect x="40" y="50" width="320" height="200" rx="6" stroke="#8159BB" strokeWidth="2" fill="#FFFFFF" fillOpacity="0.6" />
    <rect x="60" y="70" width="120" height="12" rx="2" fill="#8159BB" fillOpacity="0.25" />
    <rect x="60" y="92" width="80" height="8" rx="2" fill="#CB0C9F" fillOpacity="0.35" />
    <rect x="60" y="120" width="280" height="80" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.5" />
    <rect x="80" y="140" width="100" height="40" rx="2" fill="#7671FF" fillOpacity="0.2" />
    <rect x="200" y="140" width="120" height="8" rx="2" fill="#8159BB" fillOpacity="0.25" />
    <rect x="200" y="156" width="100" height="8" rx="2" fill="#8159BB" fillOpacity="0.25" />
    <rect x="200" y="172" width="80" height="8" rx="2" fill="#8159BB" fillOpacity="0.25" />
    <circle cx="320" cy="230" r="16" stroke="#CB0C9F" strokeWidth="2" />
    <path d="M314 230H326M320 224V236" stroke="#CB0C9F" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const LightningIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L4 14H11L10 22L19 10H12L13 2Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const MobileIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="6" y="3" width="12" height="18" rx="2" stroke="#8159BB" strokeWidth="2" />
    <path d="M10 18H14" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const FreeIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="#8159BB" strokeWidth="2" />
    <path d="M8 10C8 8 9.5 7 12 7C14.5 7 16 8.5 16 10C16 12.5 12 12.5 12 15" stroke="#CB0C9F" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1" fill="#8159BB" />
  </svg>
);

export const SearchIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="6" stroke="#636972" strokeWidth="2" />
    <path d="M14 14L18 18" stroke="#636972" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ArrowRightIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronIcon = ({ className = 'w-5 h-5', expanded = false }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }}
  >
    <path d="M5 8L10 13L15 8" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
