/**
 * Inline SVG illustrations for the generators hub page.
 * All decorative; use aria-hidden="true".
 */

export function HeroIllustration() {
  return (
    <svg
      aria-hidden="true"
      width="480"
      height="380"
      viewBox="0 0 480 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', maxWidth: 480 }}
    >
      {/* Browser window frame */}
      <rect x="60" y="40" width="360" height="260" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2" />
      <rect x="60" y="40" width="360" height="36" rx="8" fill="#E2E4E7" />
      <circle cx="86" cy="58" r="5" fill="#CB0C9F" opacity="0.6" />
      <circle cx="104" cy="58" r="5" fill="#7671FF" opacity="0.6" />
      <circle cx="122" cy="58" r="5" fill="#8159BB" opacity="0.6" />
      <rect x="145" y="50" width="240" height="16" rx="8" fill="#FFFFFF" opacity="0.7" />

      {/* Page content mockup */}
      <rect x="80" y="96" width="320" height="16" rx="3" fill="#7671FF" opacity="0.2" />
      <rect x="80" y="122" width="200" height="10" rx="3" fill="#C6C9CD" opacity="0.5" />
      <rect x="80" y="140" width="280" height="10" rx="3" fill="#C6C9CD" opacity="0.3" />

      {/* Image placeholder blocks */}
      <rect x="80" y="168" width="96" height="72" rx="4" fill="#7671FF" opacity="0.12" />
      <rect x="192" y="168" width="96" height="72" rx="4" fill="#CB0C9F" opacity="0.12" />
      <rect x="304" y="168" width="96" height="72" rx="4" fill="#8159BB" opacity="0.12" />

      {/* Button mockup */}
      <rect x="80" y="260" width="120" height="24" rx="4" fill="url(#heroGrad)" />
      <rect x="216" y="260" width="100" height="24" rx="4" fill="none" stroke="#8159BB" strokeWidth="1.5" />

      {/* Sparkle decorations */}
      <circle cx="430" cy="60" r="4" fill="#7671FF" opacity="0.5" />
      <circle cx="450" cy="90" r="3" fill="#CB0C9F" opacity="0.4" />
      <circle cx="40" cy="200" r="3" fill="#7671FF" opacity="0.4" />
      <circle cx="30" cy="170" r="2" fill="#CB0C9F" opacity="0.3" />

      {/* AI sparkle icon top-right */}
      <path d="M445 140 l4-12 4 12 12 4-12 4-4 12-4-12-12-4z" fill="#7671FF" opacity="0.25" />
      <path d="M30 100 l3-8 3 8 8 3-8 3-3 8-3-8-8-3z" fill="#CB0C9F" opacity="0.2" />

      <defs>
        <linearGradient id="heroGrad" x1="80" y1="260" x2="200" y2="284" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Simple icon illustrations for category cards */
export function CategoryIcon({ category }) {
  const icons = {
    websites: (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <line x1="6" y1="20" x2="42" y2="20" stroke="#8159BB" strokeWidth="1.5" />
        <circle cx="12" cy="15" r="1.5" fill="#CB0C9F" />
        <circle cx="17" cy="15" r="1.5" fill="#7671FF" />
        <rect x="12" y="26" width="24" height="3" rx="1" fill="#7671FF" opacity="0.3" />
        <rect x="12" y="32" width="16" height="3" rx="1" fill="#CB0C9F" opacity="0.3" />
      </svg>
    ),
    'landing-pages': (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="14" y="14" width="20" height="4" rx="1" fill="#7671FF" opacity="0.5" />
        <rect x="14" y="22" width="20" height="3" rx="1" fill="#C6C9CD" opacity="0.5" />
        <rect x="14" y="28" width="14" height="3" rx="1" fill="#C6C9CD" opacity="0.3" />
        <rect x="17" y="34" width="14" height="5" rx="2" fill="url(#catGrad)" />
        <defs>
          <linearGradient id="catGrad" x1="17" y1="34" x2="31" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7671FF" />
            <stop offset="1" stopColor="#CB0C9F" />
          </linearGradient>
        </defs>
      </svg>
    ),
    portfolios: (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="10" y="14" width="14" height="20" rx="2" fill="#7671FF" opacity="0.15" />
        <rect x="28" y="14" width="10" height="9" rx="2" fill="#CB0C9F" opacity="0.15" />
        <rect x="28" y="27" width="10" height="7" rx="2" fill="#7671FF" opacity="0.15" />
      </svg>
    ),
    blogs: (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <line x1="14" y1="14" x2="34" y2="14" stroke="#7671FF" strokeWidth="2" />
        <rect x="14" y="20" width="20" height="2" rx="1" fill="#C6C9CD" opacity="0.5" />
        <rect x="14" y="25" width="20" height="2" rx="1" fill="#C6C9CD" opacity="0.4" />
        <rect x="14" y="30" width="14" height="2" rx="1" fill="#C6C9CD" opacity="0.3" />
      </svg>
    ),
    stores: (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <path d="M14 16 h20 l-3 12 H17 z" fill="#7671FF" opacity="0.15" stroke="#7671FF" strokeWidth="1" />
        <circle cx="19" cy="32" r="2" fill="#8159BB" opacity="0.4" />
        <circle cx="29" cy="32" r="2" fill="#8159BB" opacity="0.4" />
      </svg>
    ),
    'link-in-bio': (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="12" y="4" width="24" height="40" rx="6" stroke="#8159BB" strokeWidth="2" fill="none" />
        <circle cx="24" cy="14" r="4" fill="#7671FF" opacity="0.25" />
        <rect x="17" y="22" width="14" height="3" rx="1.5" fill="#7671FF" opacity="0.3" />
        <rect x="17" y="28" width="14" height="3" rx="1.5" fill="#CB0C9F" opacity="0.3" />
        <rect x="17" y="34" width="14" height="3" rx="1.5" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
  };

  return icons[category] || icons.websites;
}

/** Small thumbnail for directory cards (same per category) */
export function CategoryThumbnail({ category }) {
  return (
    <div style={{ width: 40, height: 40, flexShrink: 0 }}>
      <CategoryIcon category={category} />
    </div>
  );
}

export function SparkleIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2 l1.5 5 5 1.5-5 1.5L10 15 8.5 10 3.5 8.5l5-1.5z" fill="#8159BB" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
      <circle cx="8" cy="8" r="5.5" stroke="#9ca3af" strokeWidth="1.5" />
      <line x1="12" y1="12" x2="16" y2="16" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronIcon({ expanded }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0, transition: 'transform 0.25s ease', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HowItWorksIcon({ step }) {
  if (step === 1) {
    return (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2" fill="none" />
        <path d="M11 13 l5 5 5-5" stroke="#7671FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (step === 2) {
    return (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <line x1="11" y1="12" x2="21" y2="12" stroke="#7671FF" strokeWidth="1.5" />
        <line x1="11" y1="16" x2="21" y2="16" stroke="#CB0C9F" strokeWidth="1.5" />
        <line x1="11" y1="20" x2="17" y2="20" stroke="#7671FF" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2" fill="none" />
      <path d="M11 16l3.5 3.5L21 12" stroke="#7671FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhyIcon({ index }) {
  if (index === 0) {
    return (
      <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="16" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <path d="M12 18h12M18 12v12" stroke="#7671FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="18" r="4" fill="#CB0C9F" opacity="0.2" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="10" y="4" width="16" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="13" y="8" width="10" height="16" rx="1" fill="#7671FF" opacity="0.15" />
        <circle cx="18" cy="28" r="1.5" fill="#8159BB" opacity="0.4" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 4 l2 10h10l-8 6 3 10-7-5-7 5 3-10-8-6h10z" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="18" cy="18" r="3" fill="#CB0C9F" opacity="0.2" />
    </svg>
  );
}
