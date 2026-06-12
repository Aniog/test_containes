// Inline SVG icons and illustrations — all decorative SVGs use aria-hidden="true"

export function LogoIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" rx="4" fill="url(#logo-grad)" />
      <path d="M6 14L10 6L14 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="5" stroke="#636972" strokeWidth="1.5" />
      <path d="M11 11L14 14" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8H13M9 4L13 8L9 12" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon({ expanded }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
    >
      <path d="M4 6L8 10L12 6" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeroIllustration() {
  return (
    <svg
      aria-hidden="true"
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Browser chrome */}
      <rect x="40" y="40" width="400" height="280" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
      <rect x="40" y="40" width="400" height="36" rx="12" fill="#E2E4E7" />
      <rect x="40" y="64" width="400" height="12" fill="#E2E4E7" />
      {/* Browser dots */}
      <circle cx="64" cy="58" r="5" fill="#CB0C9F" opacity="0.5" />
      <circle cx="80" cy="58" r="5" fill="#7671FF" opacity="0.5" />
      <circle cx="96" cy="58" r="5" fill="#8159BB" opacity="0.5" />
      {/* URL bar */}
      <rect x="120" y="50" width="240" height="16" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      {/* Hero section mockup */}
      <rect x="60" y="96" width="360" height="80" rx="4" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="80" y="112" width="160" height="10" rx="3" fill="url(#hero-grad)" />
      <rect x="80" y="128" width="120" height="8" rx="3" fill="#C6C9CD" />
      <rect x="80" y="144" width="80" height="20" rx="4" fill="url(#hero-grad)" />
      {/* Card row */}
      <rect x="60" y="188" width="108" height="80" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="76" y="200" width="76" height="40" rx="3" fill="#F4F6F8" />
      <rect x="76" y="248" width="60" height="8" rx="3" fill="#C6C9CD" />
      <rect x="186" y="188" width="108" height="80" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="202" y="200" width="76" height="40" rx="3" fill="#F4F6F8" />
      <rect x="202" y="248" width="60" height="8" rx="3" fill="#C6C9CD" />
      <rect x="312" y="188" width="108" height="80" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="328" y="200" width="76" height="40" rx="3" fill="#F4F6F8" />
      <rect x="328" y="248" width="60" height="8" rx="3" fill="#C6C9CD" />
      {/* Bottom bar */}
      <rect x="60" y="284" width="360" height="20" rx="4" fill="#F4F6F8" />
      <rect x="80" y="290" width="80" height="8" rx="3" fill="#E2E4E7" />
      <defs>
        <linearGradient id="hero-grad" x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CategoryIllustration({ categoryId }) {
  const illustrations = {
    websites: (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="4" y="8" width="40" height="10" rx="4" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1.5" />
        <circle cx="12" cy="13" r="2" fill="#8159BB" opacity="0.5" />
        <circle cx="19" cy="13" r="2" fill="#7671FF" opacity="0.5" />
        <rect x="10" y="24" width="28" height="4" rx="2" fill="#E2E4E7" />
        <rect x="10" y="32" width="20" height="4" rx="2" fill="#E2E4E7" />
      </svg>
    ),
    'landing-pages': (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="12" y="12" width="24" height="6" rx="2" fill="url(#lp-grad)" />
        <rect x="14" y="22" width="20" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="16" y="28" width="16" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="14" y="34" width="20" height="6" rx="3" fill="#8159BB" opacity="0.3" />
        <defs>
          <linearGradient id="lp-grad" x1="12" y1="12" x2="36" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7671FF" />
            <stop offset="1" stopColor="#CB0C9F" />
          </linearGradient>
        </defs>
      </svg>
    ),
    portfolios: (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="18" height="14" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8" />
        <rect x="26" y="10" width="18" height="14" rx="3" stroke="#7671FF" strokeWidth="1.5" fill="#F4F6F8" />
        <rect x="4" y="28" width="18" height="10" rx="3" stroke="#7671FF" strokeWidth="1.5" fill="#F4F6F8" />
        <rect x="26" y="28" width="18" height="10" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8" />
        <circle cx="13" cy="17" r="4" fill="#8159BB" opacity="0.3" />
        <circle cx="35" cy="17" r="4" fill="#7671FF" opacity="0.3" />
      </svg>
    ),
    blogs: (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="36" height="36" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="12" y="14" width="24" height="4" rx="2" fill="#8159BB" opacity="0.6" />
        <rect x="12" y="22" width="24" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="12" y="28" width="18" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="12" y="34" width="20" height="3" rx="1.5" fill="#E2E4E7" />
      </svg>
    ),
    stores: (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 18L10 8H38L40 18" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <rect x="8" y="18" width="32" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <path d="M18 18C18 21.314 20.686 24 24 24C27.314 24 30 21.314 30 18" stroke="#7671FF" strokeWidth="1.5" fill="none" />
        <rect x="18" y="30" width="12" height="10" rx="2" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
      </svg>
    ),
    'link-in-bio': (
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="4" width="20" height="40" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="14" r="4" fill="#8159BB" opacity="0.3" />
        <rect x="18" y="22" width="12" height="4" rx="2" fill="#7671FF" opacity="0.5" />
        <rect x="18" y="30" width="12" height="4" rx="2" fill="#8159BB" opacity="0.4" />
        <rect x="18" y="38" width="12" height="4" rx="2" fill="#E2E4E7" />
      </svg>
    ),
  };
  return illustrations[categoryId] || illustrations.websites;
}

export function StepIcon({ number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span style={{ color: 'white', fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, fontSize: 20 }}>
        {number}
      </span>
    </div>
  );
}

export function WhyIcon({ index }) {
  const icons = [
    // Lightning bolt
    <svg key="lightning" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 4L8 18H16L14 28L24 14H16L18 4Z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>,
    // Mobile
    <svg key="mobile" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="3" width="12" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="25" r="1.5" fill="#8159BB" />
    </svg>,
    // Tag / free
    <svg key="tag" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H16L28 16L16 28L4 16V4Z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <circle cx="10" cy="10" r="2" fill="#8159BB" />
    </svg>,
  ];
  return icons[index] || icons[0];
}
