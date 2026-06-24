// Inline SVG illustrations for category thumbnails and hero
// All decorative SVGs use aria-hidden="true"

export function WebsiteIllustration({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect x="8" y="10" width="48" height="36" rx="3" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8"/>
      <rect x="12" y="18" width="20" height="3" rx="1" fill="#C6C9CD"/>
      <rect x="12" y="24" width="32" height="2" rx="1" fill="#E2E4E7"/>
      <rect x="12" y="29" width="28" height="2" rx="1" fill="#E2E4E7"/>
      <rect x="12" y="34" width="24" height="2" rx="1" fill="#E2E4E7"/>
      <circle cx="44" cy="22" r="6" fill="#E2E4E7"/>
      <line x1="20" y1="46" x2="44" y2="46" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function LandingPageIllustration({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect x="12" y="8" width="40" height="48" rx="3" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8"/>
      <rect x="16" y="16" width="32" height="6" rx="2" fill="#8159BB" opacity="0.3"/>
      <rect x="20" y="26" width="24" height="3" rx="1" fill="#C6C9CD"/>
      <rect x="22" y="32" width="20" height="2" rx="1" fill="#E2E4E7"/>
      <rect x="24" y="38" width="16" height="6" rx="3" fill="#8159BB"/>
      <line x1="28" y1="41" x2="36" y2="41" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function PortfolioIllustration({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect x="8" y="10" width="48" height="44" rx="3" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8"/>
      <rect x="14" y="16" width="16" height="12" rx="2" fill="#8159BB" opacity="0.2"/>
      <rect x="34" y="16" width="16" height="12" rx="2" fill="#8159BB" opacity="0.2"/>
      <rect x="14" y="32" width="36" height="3" rx="1" fill="#C6C9CD"/>
      <rect x="14" y="38" width="28" height="2" rx="1" fill="#E2E4E7"/>
      <rect x="14" y="43" width="20" height="2" rx="1" fill="#E2E4E7"/>
    </svg>
  );
}

export function BlogIllustration({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect x="10" y="8" width="44" height="48" rx="3" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8"/>
      <rect x="16" y="14" width="32" height="4" rx="1" fill="#8159BB" opacity="0.3"/>
      <rect x="16" y="22" width="14" height="10" rx="2" fill="#C6C9CD"/>
      <rect x="34" y="22" width="14" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="34" y="28" width="10" height="2" rx="1" fill="#E2E4E7"/>
      <rect x="16" y="36" width="32" height="2" rx="1" fill="#E2E4E7"/>
      <rect x="16" y="41" width="28" height="2" rx="1" fill="#E2E4E7"/>
      <rect x="16" y="46" width="24" height="2" rx="1" fill="#E2E4E7"/>
    </svg>
  );
}

export function StoreIllustration({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect x="8" y="10" width="48" height="44" rx="3" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8"/>
      <rect x="14" y="16" width="14" height="14" rx="2" fill="#8159BB" opacity="0.2"/>
      <rect x="34" y="16" width="14" height="14" rx="2" fill="#8159BB" opacity="0.2"/>
      <rect x="14" y="34" width="14" height="3" rx="1" fill="#C6C9CD"/>
      <rect x="34" y="34" width="14" height="3" rx="1" fill="#C6C9CD"/>
      <rect x="14" y="40" width="10" height="2" rx="1" fill="#8159BB" opacity="0.5"/>
      <rect x="34" y="40" width="10" height="2" rx="1" fill="#8159BB" opacity="0.5"/>
    </svg>
  );
}

export function LinkInBioIllustration({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect x="16" y="6" width="32" height="52" rx="8" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8"/>
      <circle cx="32" cy="18" r="6" fill="#8159BB" opacity="0.25"/>
      <rect x="22" y="28" width="20" height="4" rx="2" fill="#C6C9CD"/>
      <rect x="20" y="36" width="24" height="4" rx="2" fill="#8159BB" opacity="0.2"/>
      <rect x="20" y="44" width="24" height="4" rx="2" fill="#8159BB" opacity="0.2"/>
    </svg>
  );
}

export function HeroIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" width="480" height="360" className="w-full max-w-[480px]">
      {/* Browser frame */}
      <rect x="40" y="30" width="400" height="280" rx="12" stroke="#8159BB" strokeWidth="2" fill="white" opacity="0.8"/>
      {/* Title bar */}
      <rect x="40" y="30" width="400" height="36" rx="12" fill="#F4F6F8"/>
      <rect x="40" y="54" width="400" height="12" fill="#F4F6F8"/>
      {/* Window dots */}
      <circle cx="64" cy="48" r="5" fill="#FF6B6B" opacity="0.6"/>
      <circle cx="82" cy="48" r="5" fill="#FFD93D" opacity="0.6"/>
      <circle cx="100" cy="48" r="5" fill="#6BCB77" opacity="0.6"/>
      {/* URL bar */}
      <rect x="120" y="39" width="200" height="18" rx="4" fill="white" stroke="#E2E4E7"/>
      {/* Nav elements */}
      <rect x="340" y="40" width="40" height="16" rx="3" fill="#8159BB" opacity="0.15"/>
      <rect x="388" y="40" width="32" height="16" rx="3" fill="#8159BB" opacity="0.15"/>
      {/* Hero section mockup */}
      <rect x="60" y="80" width="180" height="20" rx="3" fill="#4B5056" opacity="0.15"/>
      <rect x="60" y="108" width="240" height="10" rx="2" fill="#E2E4E7"/>
      <rect x="60" y="124" width="200" height="10" rx="2" fill="#E2E4E7"/>
      {/* CTA button mockup */}
      <rect x="60" y="148" width="120" height="28" rx="4" fill="#8159BB" opacity="0.3"/>
      {/* Image placeholder */}
      <rect x="320" y="80" width="100" height="80" rx="6" fill="#E2E4E7"/>
      <path d="M350 110 L380 100 L390 120 L340 125 Z" fill="#8159BB" opacity="0.15"/>
      <circle cx="355" cy="95" r="8" fill="#8159BB" opacity="0.15"/>
      {/* Feature cards */}
      <rect x="60" y="196" width="106" height="80" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1"/>
      <circle cx="93" cy="222" r="12" fill="#8159BB" opacity="0.12"/>
      <rect x="75" y="242" width="56" height="6" rx="2" fill="#C6C9CD"/>
      <rect x="80" y="254" width="46" height="4" rx="1" fill="#E2E4E7"/>
      <rect x="186" y="196" width="106" height="80" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1"/>
      <circle cx="219" cy="222" r="12" fill="#8159BB" opacity="0.12"/>
      <rect x="201" y="242" width="56" height="6" rx="2" fill="#C6C9CD"/>
      <rect x="206" y="254" width="46" height="4" rx="1" fill="#E2E4E7"/>
      <rect x="312" y="196" width="106" height="80" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1"/>
      <circle cx="345" cy="222" r="12" fill="#8159BB" opacity="0.12"/>
      <rect x="327" y="242" width="56" height="6" rx="2" fill="#C6C9CD"/>
      <rect x="332" y="254" width="46" height="4" rx="1" fill="#E2E4E7"/>
      {/* Decorative gradient arc */}
      <path d="M40 310 Q240 260 440 310" stroke="url(#heroGrad)" strokeWidth="3" fill="none" opacity="0.4"/>
      <defs>
        <linearGradient id="heroGrad" x1="40" y1="310" x2="440" y2="310">
          <stop offset="0%" stopColor="#7671FF"/>
          <stop offset="100%" stopColor="#CB0C9F"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Map category IDs to their illustrations
export const categoryIllustrations = {
  websites: WebsiteIllustration,
  'landing-pages': LandingPageIllustration,
  portfolios: PortfolioIllustration,
  blogs: BlogIllustration,
  stores: StoreIllustration,
  'link-in-bio': LinkInBioIllustration,
};

// Small icon for "Browse by Category" cards
export function CategoryIcon({ categoryId, className = '' }) {
  const Illustration = categoryIllustrations[categoryId];
  if (!Illustration) return null;
  return <Illustration className={className} />;
}

// Arrow right icon
export function ArrowRight({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Magnifying glass icon
export function SearchIcon({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// Strikingly AI logo
export function StrikinglyLogo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#8159BB"/>
        <path d="M7 8h10M7 12h8M7 16h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span className="font-heading text-[18px] font-bold tracking-tight text-text-hero">
        strikingly <span className="ai-gradient-text">AI</span>
      </span>
    </span>
  );
}

// Numbered step circle
export function StepCircle({ number }) {
  return (
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-purple text-white font-heading text-[16px] font-bold shrink-0">
      {number}
    </span>
  );
}

// Simple line icons for Why Strikingly
export function LightningIcon({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 4L8 18H15L14 28L24 14H17L18 4Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round" fill="#8159BB" fillOpacity="0.1"/>
    </svg>
  );
}

export function MobileIcon({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="4" width="12" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="#8159BB" fillOpacity="0.1"/>
      <line x1="14" y1="24" x2="18" y2="24" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function FreeTagIcon({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8C6 6.895 6.895 6 8 6H20L26 12V24C26 25.105 25.105 26 24 26H8C6.895 26 6 25.105 6 24V8Z" stroke="#8159BB" strokeWidth="2" fill="#8159BB" fillOpacity="0.1"/>
      <path d="M20 6V12H26" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 18H20" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 22H17" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// Chevron down for FAQ accordion
export function ChevronDown({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
