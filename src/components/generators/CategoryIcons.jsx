/* Small inline SVG icons for each generator category */

export function WebsiteIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="1.5" />
      <ellipse cx="20" cy="20" rx="6" ry="14" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="6" y1="20" x2="34" y2="20" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="8" y1="13" x2="32" y2="13" stroke="#8159BB" strokeWidth="1.2" />
      <line x1="8" y1="27" x2="32" y2="27" stroke="#8159BB" strokeWidth="1.2" />
    </svg>
  );
}

export function LandingPageIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="11" y="11" width="18" height="6" rx="2" fill="#8159BB" opacity="0.25" />
      <line x1="11" y1="22" x2="29" y2="22" stroke="#8159BB" strokeWidth="1.2" />
      <line x1="11" y1="26" x2="24" y2="26" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="14" y="29" width="12" height="5" rx="2" fill="#8159BB" opacity="0.5" />
    </svg>
  );
}

export function PortfolioIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="13" height="13" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="22" y="5" width="13" height="13" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="5" y="22" width="13" height="13" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="22" y="22" width="13" height="13" rx="2" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  );
}

export function BlogIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="7" y="5" width="26" height="30" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="12" y1="13" x2="28" y2="13" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="12" y1="18" x2="28" y2="18" stroke="#8159BB" strokeWidth="1.2" />
      <line x1="12" y1="23" x2="22" y2="23" stroke="#8159BB" strokeWidth="1.2" />
      <circle cx="28" cy="30" r="5" fill="#8159BB" opacity="0.3" stroke="#8159BB" strokeWidth="1.2" />
      <line x1="26" y1="30" x2="30" y2="30" stroke="#8159BB" strokeWidth="1.2" />
      <line x1="28" y1="28" x2="28" y2="32" stroke="#8159BB" strokeWidth="1.2" />
    </svg>
  );
}

export function StoreIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 14h24l-2 14H10L8 14z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="16" cy="32" r="2" fill="#8159BB" opacity="0.5" />
      <circle cx="24" cy="32" r="2" fill="#8159BB" opacity="0.5" />
    </svg>
  );
}

export function LinkInBioIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="12" y="6" width="16" height="6" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="12" y="17" width="16" height="6" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="12" y="28" width="16" height="6" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="20" y1="12" x2="20" y2="17" stroke="#8159BB" strokeWidth="1.2" />
      <line x1="20" y1="23" x2="20" y2="28" stroke="#8159BB" strokeWidth="1.2" />
    </svg>
  );
}

export function getCategoryIcon(categoryId, size = 40) {
  switch (categoryId) {
    case 'websites':      return <WebsiteIcon size={size} />;
    case 'landing-pages': return <LandingPageIcon size={size} />;
    case 'portfolios':    return <PortfolioIcon size={size} />;
    case 'blogs':         return <BlogIcon size={size} />;
    case 'stores':        return <StoreIcon size={size} />;
    case 'link-in-bio':   return <LinkInBioIcon size={size} />;
    default:              return <WebsiteIcon size={size} />;
  }
}
