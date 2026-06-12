/** Inline SVG icons for each generator category */

export function WebsiteIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="4" y="8" width="32" height="7" rx="3" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1.8" />
      <circle cx="9" cy="11.5" r="1.5" fill="#8159BB" opacity="0.5" />
      <circle cx="14" cy="11.5" r="1.5" fill="#8159BB" opacity="0.5" />
      <rect x="9" y="20" width="22" height="2.5" rx="1.2" fill="#C6C9CD" />
      <rect x="9" y="25" width="16" height="2.5" rx="1.2" fill="#E2E4E7" />
    </svg>
  );
}

export function LandingPageIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="10" y="10" width="20" height="8" rx="2" fill="url(#lpGrad)" />
      <rect x="10" y="22" width="20" height="2.5" rx="1.2" fill="#C6C9CD" />
      <rect x="10" y="27" width="14" height="2.5" rx="1.2" fill="#E2E4E7" />
      <path d="M20 32 L20 36 M17 34 L20 37 L23 34" stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="lpGrad" x1="10" y1="10" x2="30" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7671FF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PortfolioIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="14" height="14" rx="2.5" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="22" y="4" width="14" height="14" rx="2.5" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="4" y="22" width="14" height="14" rx="2.5" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="22" y="22" width="14" height="14" rx="2.5" fill="url(#pfGrad)" opacity="0.8" />
      <defs>
        <linearGradient id="pfGrad" x1="22" y1="22" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BlogIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="5" width="28" height="30" rx="3" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="11" y="11" width="18" height="3" rx="1.5" fill="#8159BB" opacity="0.7" />
      <rect x="11" y="17" width="18" height="2" rx="1" fill="#C6C9CD" />
      <rect x="11" y="22" width="14" height="2" rx="1" fill="#C6C9CD" />
      <rect x="11" y="27" width="16" height="2" rx="1" fill="#E2E4E7" />
      <circle cx="30" cy="30" r="6" fill="url(#blogGrad)" />
      <path d="M28 30 L30 28 L32 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="blogGrad" x1="24" y1="24" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function StoreIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 14 L6 8 H34 L32 14" stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="6" y="14" width="28" height="20" rx="3" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <path d="M14 14 C14 17.3 16.7 20 20 20 C23.3 20 26 17.3 26 14" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <rect x="15" y="24" width="10" height="10" rx="2" fill="url(#storeGrad)" opacity="0.8" />
      <defs>
        <linearGradient id="storeGrad" x1="15" y1="24" x2="25" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LinkInBioIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="12" y="4" width="16" height="32" rx="4" stroke="#8159BB" strokeWidth="1.8" fill="none" />
      <rect x="15" y="10" width="10" height="3" rx="1.5" fill="url(#libGrad)" opacity="0.9" />
      <rect x="15" y="16" width="10" height="3" rx="1.5" fill="#C6C9CD" />
      <rect x="15" y="22" width="10" height="3" rx="1.5" fill="#C6C9CD" />
      <rect x="15" y="28" width="10" height="3" rx="1.5" fill="#E2E4E7" />
      <circle cx="20" cy="7" r="1.5" fill="#8159BB" opacity="0.5" />
      <defs>
        <linearGradient id="libGrad" x1="15" y1="10" x2="25" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export const categoryIcons = {
  websites: WebsiteIcon,
  'landing-pages': LandingPageIcon,
  portfolios: PortfolioIcon,
  blogs: BlogIcon,
  stores: StoreIcon,
  'link-in-bio': LinkInBioIcon,
};
