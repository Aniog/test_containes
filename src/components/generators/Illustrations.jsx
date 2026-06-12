// Inline SVG illustrations for the generators hub page

export const HeroIllustration = () => (
  <svg
    width="480"
    height="360"
    viewBox="0 0 480 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    style={{ maxWidth: '100%', height: 'auto' }}
  >
    {/* Browser chrome */}
    <rect x="40" y="40" width="400" height="280" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
    <rect x="40" y="40" width="400" height="36" rx="8" fill="#E2E4E7" />
    <rect x="40" y="64" width="400" height="12" fill="#E2E4E7" />
    {/* Browser dots */}
    <circle cx="62" cy="58" r="5" fill="#CB0C9F" opacity="0.5" />
    <circle cx="78" cy="58" r="5" fill="#7671FF" opacity="0.5" />
    <circle cx="94" cy="58" r="5" fill="#8159BB" opacity="0.5" />
    {/* URL bar */}
    <rect x="110" y="50" width="240" height="16" rx="3" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
    <text x="120" y="62" fontSize="9" fill="#8159BB" fontFamily="monospace">strikingly.com/generators</text>
    {/* Hero block inside browser */}
    <rect x="60" y="90" width="360" height="60" rx="3" fill="url(#heroGrad)" opacity="0.12" />
    <rect x="80" y="102" width="180" height="10" rx="2" fill="#4B5056" opacity="0.5" />
    <rect x="80" y="118" width="140" height="8" rx="2" fill="#636972" opacity="0.35" />
    <rect x="80" y="132" width="80" height="12" rx="3" fill="url(#heroGrad)" opacity="0.7" />
    {/* Card grid */}
    <rect x="60" y="165" width="108" height="70" rx="3" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="70" y="175" width="60" height="6" rx="2" fill="#4B5056" opacity="0.4" />
    <rect x="70" y="187" width="80" height="5" rx="2" fill="#636972" opacity="0.25" />
    <rect x="70" y="197" width="80" height="5" rx="2" fill="#636972" opacity="0.2" />
    <rect x="70" y="210" width="40" height="10" rx="2" fill="#8159BB" opacity="0.2" />

    <rect x="186" y="165" width="108" height="70" rx="3" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="196" y="175" width="60" height="6" rx="2" fill="#4B5056" opacity="0.4" />
    <rect x="196" y="187" width="80" height="5" rx="2" fill="#636972" opacity="0.25" />
    <rect x="196" y="197" width="80" height="5" rx="2" fill="#636972" opacity="0.2" />
    <rect x="196" y="210" width="40" height="10" rx="2" fill="#7671FF" opacity="0.2" />

    <rect x="312" y="165" width="108" height="70" rx="3" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="322" y="175" width="60" height="6" rx="2" fill="#4B5056" opacity="0.4" />
    <rect x="322" y="187" width="80" height="5" rx="2" fill="#636972" opacity="0.25" />
    <rect x="322" y="197" width="80" height="5" rx="2" fill="#636972" opacity="0.2" />
    <rect x="322" y="210" width="40" height="10" rx="2" fill="#CB0C9F" opacity="0.2" />

    {/* Second row cards */}
    <rect x="60" y="248" width="108" height="55" rx="3" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="70" y="258" width="50" height="6" rx="2" fill="#4B5056" opacity="0.3" />
    <rect x="70" y="270" width="80" height="5" rx="2" fill="#636972" opacity="0.2" />
    <rect x="70" y="280" width="80" height="5" rx="2" fill="#636972" opacity="0.15" />

    <rect x="186" y="248" width="108" height="55" rx="3" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="196" y="258" width="50" height="6" rx="2" fill="#4B5056" opacity="0.3" />
    <rect x="196" y="270" width="80" height="5" rx="2" fill="#636972" opacity="0.2" />
    <rect x="196" y="280" width="80" height="5" rx="2" fill="#636972" opacity="0.15" />

    <rect x="312" y="248" width="108" height="55" rx="3" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="322" y="258" width="50" height="6" rx="2" fill="#4B5056" opacity="0.3" />
    <rect x="322" y="270" width="80" height="5" rx="2" fill="#636972" opacity="0.2" />
    <rect x="322" y="280" width="80" height="5" rx="2" fill="#636972" opacity="0.15" />

    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
)

// Category icon SVGs (small, 40x40)
export const CategoryIcons = {
  websites: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="6" width="32" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="4" y="6" width="32" height="8" rx="3" fill="#8159BB" opacity="0.15" />
      <circle cx="10" cy="10" r="2" fill="#8159BB" opacity="0.5" />
      <circle cx="16" cy="10" r="2" fill="#7671FF" opacity="0.5" />
      <rect x="8" y="20" width="24" height="2" rx="1" fill="#C6C9CD" />
      <rect x="8" y="25" width="16" height="2" rx="1" fill="#C6C9CD" />
      <rect x="8" y="30" width="20" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  'landing-pages': () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="32" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="8" y="10" width="24" height="4" rx="2" fill="#8159BB" opacity="0.3" />
      <rect x="10" y="17" width="20" height="2" rx="1" fill="#C6C9CD" />
      <rect x="12" y="21" width="16" height="2" rx="1" fill="#C6C9CD" />
      <rect x="13" y="27" width="14" height="6" rx="3" fill="url(#lpGrad)" opacity="0.8" />
      <defs>
        <linearGradient id="lpGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  portfolios: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="8" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="22" y="8" width="14" height="14" rx="2" stroke="#7671FF" strokeWidth="1.5" fill="none" />
      <rect x="4" y="26" width="14" height="6" rx="2" stroke="#CB0C9F" strokeWidth="1.5" fill="none" />
      <rect x="22" y="26" width="14" height="6" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="11" cy="15" r="3" fill="#8159BB" opacity="0.2" />
      <circle cx="29" cy="15" r="3" fill="#7671FF" opacity="0.2" />
    </svg>
  ),
  blogs: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="10" y="10" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.4" />
      <rect x="10" y="16" width="20" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="20" width="16" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="24" width="18" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="28" width="12" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  stores: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 14h28l-3 16H9L6 14z" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M14 14V10a6 6 0 0112 0v4" stroke="#7671FF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="16" cy="26" r="2" fill="#8159BB" opacity="0.4" />
      <circle cx="24" cy="26" r="2" fill="#CB0C9F" opacity="0.4" />
    </svg>
  ),
  'link-in-bio': () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="8" y="22" width="24" height="5" rx="2.5" stroke="#7671FF" strokeWidth="1.5" fill="none" />
      <rect x="8" y="30" width="24" height="5" rx="2.5" stroke="#CB0C9F" strokeWidth="1.5" fill="none" />
    </svg>
  ),
}

// Why Strikingly icons
export const WhyIcons = {
  live: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M16 10v6l4 2" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="2" fill="#8159BB" opacity="0.3" />
    </svg>
  ),
  mobile: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="4" width="12" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="24" r="1.5" fill="#8159BB" opacity="0.5" />
      <rect x="13" y="8" width="6" height="1.5" rx="0.75" fill="#8159BB" opacity="0.3" />
    </svg>
  ),
  free: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 4l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>
  ),
}

// Subsection thumbnail (shared per category)
export const SubsectionThumbs = {
  websites: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="6" width="36" height="28" rx="3" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="2" y="6" width="36" height="8" rx="3" fill="#E2E4E7" />
      <circle cx="8" cy="10" r="2" fill="#8159BB" opacity="0.4" />
      <circle cx="14" cy="10" r="2" fill="#7671FF" opacity="0.4" />
      <rect x="6" y="18" width="28" height="3" rx="1" fill="#C6C9CD" />
      <rect x="6" y="24" width="20" height="2" rx="1" fill="#C6C9CD" opacity="0.6" />
    </svg>
  ),
  'landing-pages': () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="36" height="36" rx="3" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="6" y="8" width="28" height="5" rx="2" fill="#8159BB" opacity="0.2" />
      <rect x="8" y="16" width="24" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="20" width="20" height="2" rx="1" fill="#C6C9CD" opacity="0.6" />
      <rect x="12" y="26" width="16" height="7" rx="3" fill="url(#lpThumbGrad)" opacity="0.7" />
      <defs>
        <linearGradient id="lpThumbGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  portfolios: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="17" height="17" rx="2" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1" />
      <rect x="21" y="2" width="17" height="17" rx="2" fill="#F4F6F8" stroke="#7671FF" strokeWidth="1" />
      <rect x="2" y="21" width="17" height="17" rx="2" fill="#F4F6F8" stroke="#CB0C9F" strokeWidth="1" />
      <rect x="21" y="21" width="17" height="17" rx="2" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1" />
    </svg>
  ),
  blogs: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="2" width="32" height="36" rx="3" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="8" y="8" width="24" height="4" rx="2" fill="#8159BB" opacity="0.25" />
      <rect x="8" y="15" width="24" height="2" rx="1" fill="#C6C9CD" />
      <rect x="8" y="19" width="18" height="2" rx="1" fill="#C6C9CD" opacity="0.6" />
      <rect x="8" y="23" width="20" height="2" rx="1" fill="#C6C9CD" opacity="0.5" />
      <rect x="8" y="27" width="14" height="2" rx="1" fill="#C6C9CD" opacity="0.4" />
    </svg>
  ),
  stores: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 16h28l-3 18H9L6 16z" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
      <path d="M14 16V12a6 6 0 0112 0v4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="16" cy="28" r="2.5" fill="#8159BB" opacity="0.3" />
      <circle cx="24" cy="28" r="2.5" fill="#7671FF" opacity="0.3" />
    </svg>
  ),
  'link-in-bio': () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="12" r="7" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1" />
      <rect x="6" y="22" width="28" height="5" rx="2.5" fill="#F4F6F8" stroke="#7671FF" strokeWidth="1" />
      <rect x="6" y="30" width="28" height="5" rx="2.5" fill="#F4F6F8" stroke="#CB0C9F" strokeWidth="1" />
    </svg>
  ),
}

// Strikingly AI logo
export const StrikinglyLogo = () => (
  <svg width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Strikingly AI" role="img">
    <text x="0" y="20" fontFamily="'Josefin Sans', Poppins, sans-serif" fontWeight="700" fontSize="16" fill="#2E2E2F" letterSpacing="0.5">strikingly</text>
    <text x="88" y="20" fontFamily="'Josefin Sans', Poppins, sans-serif" fontWeight="700" fontSize="16" fill="url(#logoGrad)" letterSpacing="0.5"> AI</text>
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
)

// Chevron down icon for FAQ
export const ChevronDown = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Arrow right icon for category cards
export const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Search icon
export const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
