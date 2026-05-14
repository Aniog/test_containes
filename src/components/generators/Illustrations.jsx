// Inline SVG illustrations — no external image dependencies

export function HeroIllustration() {
  return (
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
      {/* Soft background glow */}
      <ellipse cx="240" cy="180" rx="220" ry="160" fill="url(#heroGlow)" opacity="0.18" />

      {/* Browser chrome */}
      <rect x="40" y="40" width="400" height="280" rx="10" fill="white" stroke="#C6C9CD" strokeWidth="1.5" />
      {/* Browser top bar */}
      <rect x="40" y="40" width="400" height="36" rx="10" fill="#F4F6F8" />
      <rect x="40" y="64" width="400" height="12" fill="#F4F6F8" />
      {/* Traffic lights */}
      <circle cx="66" cy="58" r="5" fill="#CB0C9F" opacity="0.5" />
      <circle cx="82" cy="58" r="5" fill="#7671FF" opacity="0.5" />
      <circle cx="98" cy="58" r="5" fill="#8159BB" opacity="0.5" />
      {/* URL bar */}
      <rect x="120" y="50" width="240" height="16" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <text x="240" y="62" textAnchor="middle" fontSize="8" fill="#8159BB" fontFamily="'Open Sans', sans-serif">strikingly.com/my-site</text>

      {/* Hero section inside mockup */}
      <rect x="60" y="90" width="360" height="80" rx="4" fill="url(#heroSection)" />
      <rect x="100" y="108" width="160" height="10" rx="3" fill="white" opacity="0.9" />
      <rect x="100" y="124" width="120" height="8" rx="3" fill="white" opacity="0.6" />
      <rect x="100" y="140" width="80" height="18" rx="4" fill="white" opacity="0.85" />

      {/* Content blocks */}
      <rect x="60" y="182" width="110" height="110" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="75" y="197" width="80" height="50" rx="3" fill="#E2E4E7" />
      <rect x="75" y="254" width="60" height="7" rx="2" fill="#C6C9CD" />
      <rect x="75" y="266" width="45" height="6" rx="2" fill="#E2E4E7" />

      <rect x="185" y="182" width="110" height="110" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="200" y="197" width="80" height="50" rx="3" fill="#E2E4E7" />
      <rect x="200" y="254" width="60" height="7" rx="2" fill="#C6C9CD" />
      <rect x="200" y="266" width="45" height="6" rx="2" fill="#E2E4E7" />

      <rect x="310" y="182" width="110" height="110" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="325" y="197" width="80" height="50" rx="3" fill="#E2E4E7" />
      <rect x="325" y="254" width="60" height="7" rx="2" fill="#C6C9CD" />
      <rect x="325" y="266" width="45" height="6" rx="2" fill="#E2E4E7" />

      {/* AI sparkle accents */}
      <circle cx="420" cy="100" r="6" fill="url(#aiGrad)" opacity="0.7" />
      <circle cx="60" cy="170" r="4" fill="#8159BB" opacity="0.4" />
      <circle cx="440" cy="200" r="3" fill="#7671FF" opacity="0.5" />

      <defs>
        <linearGradient id="heroSection" x1="60" y1="90" x2="420" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
        <linearGradient id="aiGrad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop stopColor="#8159BB" />
          <stop offset="1" stopColor="#CB0C9F" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

// Category thumbnail SVGs — one per category, shared across all cards in that subsection
export const categoryThumbnails = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="6" width="32" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="4" y="6" width="32" height="8" rx="3" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="1.5" fill="#8159BB" opacity="0.5" />
      <circle cx="15" cy="10" r="1.5" fill="#8159BB" opacity="0.5" />
      <rect x="9" y="20" width="22" height="3" rx="1.5" fill="#C6C9CD" />
      <rect x="9" y="26" width="16" height="2.5" rx="1.25" fill="#E2E4E7" />
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="6" y="4" width="28" height="10" rx="3" fill="url(#lpGrad)" opacity="0.7" />
      <rect x="11" y="19" width="18" height="2.5" rx="1.25" fill="#C6C9CD" />
      <rect x="13" y="24" width="14" height="2" rx="1" fill="#E2E4E7" />
      <rect x="14" y="29" width="12" height="5" rx="2.5" fill="#8159BB" opacity="0.6" />
      <defs>
        <linearGradient id="lpGrad" x1="6" y1="4" x2="34" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="8" y="12" width="14" height="12" rx="2" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="25" y="12" width="7" height="5" rx="1.5" fill="#E2E4E7" />
      <rect x="25" y="19" width="7" height="2" rx="1" fill="#E2E4E7" />
      <rect x="25" y="23" width="5" height="1.5" rx="0.75" fill="#E2E4E7" />
      <circle cx="15" cy="18" r="3" fill="#8159BB" opacity="0.3" />
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="10" y="11" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.6" />
      <rect x="10" y="17" width="20" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="21" width="16" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="25" width="18" height="2" rx="1" fill="#E2E4E7" />
      <rect x="10" y="29" width="12" height="2" rx="1" fill="#E2E4E7" />
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 10h24l-3 10H11L8 10z" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <circle cx="15" cy="26" r="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="27" cy="26" r="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M6 6h3l2 4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="12" y="4" width="16" height="28" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="12" r="4" fill="#F4F6F8" stroke="#8159BB" strokeWidth="1" />
      <rect x="15" y="19" width="10" height="3" rx="1.5" fill="#8159BB" opacity="0.5" />
      <rect x="15" y="24" width="10" height="3" rx="1.5" fill="#C6C9CD" />
      <rect x="15" y="29" width="10" height="3" rx="1.5" fill="#E2E4E7" />
    </svg>
  ),
}

// Why Strikingly icons
export function IconLive() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M10 16l4 4 8-8" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMobile() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="4" width="12" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="16" cy="24" r="1.5" fill="#8159BB" />
    </svg>
  )
}

export function IconFree() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="7" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M13 16h6M16 13v6" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// Strikingly AI logo mark
export function StrikinglyLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="url(#logoGrad)" />
      <path d="M8 10h12M8 14h8M8 18h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
