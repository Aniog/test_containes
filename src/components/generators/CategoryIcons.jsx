// Inline SVG category icons — all aria-hidden, decorative only

export function IconWebsites() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="cat-card-icon">
      <rect x="4" y="8" width="40" height="32" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="4" y="8" width="40" height="10" rx="4" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1.5"/>
      <circle cx="11" cy="13" r="2" fill="#8159BB" opacity="0.4"/>
      <circle cx="18" cy="13" r="2" fill="#8159BB" opacity="0.4"/>
      <rect x="10" y="24" width="28" height="4" rx="2" fill="#8159BB" opacity="0.2"/>
      <rect x="10" y="32" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.15"/>
    </svg>
  );
}

export function IconLandingPages() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="cat-card-icon">
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="12" y="14" width="24" height="6" rx="2" fill="#8159BB" opacity="0.2"/>
      <rect x="16" y="24" width="16" height="10" rx="2" fill="none" stroke="#8159BB" strokeWidth="1.5"/>
      <path d="M24 24 L24 34" stroke="#8159BB" strokeWidth="1.5"/>
      <path d="M20 30 L24 34 L28 30" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconPortfolios() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="cat-card-icon">
      <rect x="6" y="6" width="16" height="16" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="26" y="6" width="16" height="16" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="6" y="26" width="16" height="16" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="26" y="26" width="16" height="16" rx="3" fill="#8159BB" opacity="0.15" stroke="#8159BB" strokeWidth="1.5"/>
      <circle cx="14" cy="14" r="3" fill="#8159BB" opacity="0.3"/>
      <circle cx="34" cy="14" r="3" fill="#8159BB" opacity="0.3"/>
      <circle cx="14" cy="34" r="3" fill="#8159BB" opacity="0.3"/>
    </svg>
  );
}

export function IconBlogs() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="cat-card-icon">
      <rect x="8" y="6" width="32" height="36" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="14" y="14" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.4"/>
      <rect x="14" y="20" width="20" height="2" rx="1" fill="#8159BB" opacity="0.2"/>
      <rect x="14" y="25" width="16" height="2" rx="1" fill="#8159BB" opacity="0.2"/>
      <rect x="14" y="30" width="18" height="2" rx="1" fill="#8159BB" opacity="0.2"/>
      <path d="M32 36 L36 32 L40 36" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconStores() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="cat-card-icon">
      <path d="M8 18 L12 8 H36 L40 18" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="8" y="18" width="32" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <path d="M18 18 C18 22 22 26 24 26 C26 26 30 22 30 18" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <rect x="18" y="30" width="12" height="10" rx="2" fill="#8159BB" opacity="0.15" stroke="#8159BB" strokeWidth="1"/>
    </svg>
  );
}

export function IconLinkInBio() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="cat-card-icon">
      <rect x="14" y="4" width="20" height="40" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="18" y="14" width="12" height="5" rx="2.5" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1"/>
      <rect x="18" y="22" width="12" height="5" rx="2.5" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1"/>
      <rect x="18" y="30" width="12" height="5" rx="2.5" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1"/>
      <circle cx="24" cy="9" r="1.5" fill="#8159BB" opacity="0.5"/>
    </svg>
  );
}

// Map slug → icon component
export const categoryIconMap = {
  websites:      IconWebsites,
  'landing-pages': IconLandingPages,
  portfolios:    IconPortfolios,
  blogs:         IconBlogs,
  stores:        IconStores,
  'link-in-bio': IconLinkInBio,
};

// Shared thumbnail icons for directory cards (smaller, 40×40)
export function ThumbWebsites()    { return <IconWebsites />; }
export function ThumbLandingPages(){ return <IconLandingPages />; }
export function ThumbPortfolios()  { return <IconPortfolios />; }
export function ThumbBlogs()       { return <IconBlogs />; }
export function ThumbStores()      { return <IconStores />; }
export function ThumbLinkInBio()   { return <IconLinkInBio />; }

export const thumbMap = {
  websites:        ThumbWebsites,
  'landing-pages': ThumbLandingPages,
  portfolios:      ThumbPortfolios,
  blogs:           ThumbBlogs,
  stores:          ThumbStores,
  'link-in-bio':   ThumbLinkInBio,
};
