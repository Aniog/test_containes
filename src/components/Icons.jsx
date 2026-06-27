/** SVG illustration components for the generators hub */

export function HeroIllustration() {
  return (
    <svg
      width="400"
      height="300"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Browser window frame */}
      <rect x="40" y="30" width="320" height="240" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2" />
      <rect x="40" y="30" width="320" height="36" rx="12" fill="#E2E4E7" />
      <rect x="40" y="54" width="320" height="2" fill="#C6C9CD" />
      {/* Browser dots */}
      <circle cx="62" cy="48" r="5" fill="#CB0C9F" opacity="0.6" />
      <circle cx="80" cy="48" r="5" fill="#7671FF" opacity="0.6" />
      <circle cx="98" cy="48" r="5" fill="#8159BB" opacity="0.6" />
      {/* Header area */}
      <rect x="60" y="80" width="140" height="16" rx="4" fill="#8159BB" opacity="0.3" />
      <rect x="60" y="106" width="280" height="8" rx="4" fill="#E2E4E7" />
      <rect x="60" y="122" width="240" height="8" rx="4" fill="#E2E4E7" />
      {/* CTA button */}
      <rect x="60" y="144" width="120" height="28" rx="4" fill="url(#aiGrad)" />
      {/* Image placeholder */}
      <rect x="240" y="144" width="100" height="80" rx="6" fill="#E2E4E7" />
      <circle cx="290" cy="180" r="16" fill="#8159BB" opacity="0.2" />
      {/* Content blocks */}
      <rect x="60" y="184" width="160" height="8" rx="4" fill="#E2E4E7" />
      <rect x="60" y="200" width="130" height="8" rx="4" fill="#E2E4E7" />
      <rect x="60" y="216" width="145" height="8" rx="4" fill="#E2E4E7" />
      {/* Floating sparkles */}
      <circle cx="320" cy="50" r="4" fill="#7671FF" opacity="0.5" />
      <circle cx="350" cy="80" r="3" fill="#CB0C9F" opacity="0.4" />
      <circle cx="310" cy="35" r="2" fill="#8159BB" opacity="0.6" />
      <path d="M340 45l4 0-2-4z" fill="#7671FF" opacity="0.4" />
      <defs>
        <linearGradient id="aiGrad" x1="60" y1="144" x2="180" y2="172" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Small category illustration - uses a theme of rectangles/shapes */
export function CategoryIcon({ variant = 'website' }) {
  const shapes = {
    website: (
      <>
        <rect x="6" y="8" width="36" height="28" rx="3" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="12" y="14" width="16" height="8" rx="2" fill="#8159BB" opacity="0.25" />
        <rect x="12" y="26" width="24" height="4" rx="2" fill="#8159BB" opacity="0.25" />
      </>
    ),
    'landing-page': (
      <>
        <rect x="6" y="6" width="36" height="36" rx="3" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="14" y="14" width="20" height="6" rx="2" fill="#8159BB" opacity="0.25" />
        <rect x="14" y="24" width="20" height="4" rx="2" fill="#8159BB" opacity="0.25" />
        <rect x="14" y="32" width="12" height="6" rx="2" fill="#8159BB" opacity="0.35" />
      </>
    ),
    portfolio: (
      <>
        <rect x="6" y="6" width="36" height="36" rx="3" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="10" y="10" width="14" height="14" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="26" y="10" width="14" height="14" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="10" y="26" width="14" height="14" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="26" y="26" width="14" height="14" rx="2" fill="#8159BB" opacity="0.2" />
      </>
    ),
    blog: (
      <>
        <rect x="8" y="6" width="32" height="36" rx="3" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="14" y="12" width="20" height="4" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="14" y="20" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.2" />
        <rect x="14" y="26" width="16" height="3" rx="1.5" fill="#8159BB" opacity="0.2" />
        <rect x="14" y="32" width="18" height="3" rx="1.5" fill="#8159BB" opacity="0.2" />
      </>
    ),
    store: (
      <>
        <rect x="6" y="8" width="36" height="32" rx="3" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="12" y="14" width="24" height="4" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="12" y="22" width="10" height="10" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="26" y="22" width="10" height="10" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="12" y="34" width="24" height="4" rx="2" fill="#8159BB" opacity="0.35" />
      </>
    ),
    'link-in-bio': (
      <>
        <circle cx="24" cy="24" r="18" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="14" y="18" width="20" height="4" rx="2" fill="#8159BB" opacity="0.25" />
        <rect x="14" y="25" width="20" height="4" rx="2" fill="#8159BB" opacity="0.25" />
        <rect x="14" y="32" width="20" height="4" rx="2" fill="#8159BB" opacity="0.25" />
      </>
    ),
  };

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {shapes[variant] || shapes.website}
    </svg>
  );
}

/** Small thumbnail used for generator cards within a subsection */
export function GeneratorThumbnail({ variant = 'website' }) {
  const shapes = {
    website: (
      <>
        <rect x="4" y="6" width="40" height="32" rx="4" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="10" y="14" width="18" height="8" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="10" y="26" width="28" height="4" rx="2" fill="#8159BB" opacity="0.2" />
      </>
    ),
    'landing-page': (
      <>
        <rect x="4" y="4" width="40" height="36" rx="4" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="12" y="10" width="24" height="6" rx="2" fill="#8159BB" opacity="0.25" />
        <rect x="12" y="20" width="24" height="4" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="12" y="28" width="14" height="8" rx="3" fill="#8159BB" opacity="0.3" />
      </>
    ),
    portfolio: (
      <>
        <rect x="4" y="4" width="40" height="36" rx="4" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="8" y="8" width="15" height="12" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="25" y="8" width="15" height="12" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="8" y="22" width="15" height="14" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="25" y="22" width="15" height="14" rx="2" fill="#8159BB" opacity="0.2" />
      </>
    ),
    blog: (
      <>
        <rect x="6" y="4" width="36" height="36" rx="4" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="12" y="10" width="24" height="5" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="12" y="19" width="24" height="3" rx="1.5" fill="#8159BB" opacity="0.2" />
        <rect x="12" y="25" width="18" height="3" rx="1.5" fill="#8159BB" opacity="0.2" />
        <rect x="12" y="31" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.2" />
      </>
    ),
    store: (
      <>
        <rect x="4" y="6" width="40" height="32" rx="4" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="10" y="12" width="28" height="4" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="10" y="20" width="12" height="12" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="26" y="20" width="12" height="12" rx="2" fill="#8159BB" opacity="0.2" />
      </>
    ),
    'link-in-bio': (
      <>
        <circle cx="24" cy="22" r="18" fill="#F0EBFF" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="12" y="16" width="24" height="4" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="12" y="23" width="24" height="4" rx="2" fill="#8159BB" opacity="0.2" />
      </>
    ),
  };

  return (
    <svg
      width="48"
      height="44"
      viewBox="0 0 48 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {shapes[variant] || shapes.website}
    </svg>
  );
}

/** Icons for Why Strikingly section */
export function LightningIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 4L8 18h8l-2 10 10-14h-8l2-10z" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function MobileIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="4" width="12" height="24" rx="2" stroke="#8159BB" strokeWidth="2" fill="none" />
      <line x1="14" y1="24" x2="18" y2="24" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FreeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2" fill="none" />
      <path d="M16 10v12M10 16h12" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Arrow icon for category cards */
export function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Magnifying glass icon for search */
export function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Chevron for accordion */
export function ChevronDown({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}
    >
      <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Strikingly logo for top bar */
export function StrikinglyLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'inline-block', verticalAlign: 'middle', marginInlineEnd: 8 }}>
      <rect width="24" height="24" rx="4" fill="#8159BB" />
      <path d="M7 7h4v10H7V7zm6 0h4v10h-4V7z" fill="#fff" />
    </svg>
  );
}
