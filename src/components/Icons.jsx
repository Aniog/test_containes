import React from 'react';

export const StrikinglyLogo = () => (
  <div className="flex items-center gap-1.5">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="url(#logoGrad)" />
      <path d="M8 14.5L12 18.5L20 10.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
    <span className="font-heading font-bold text-[16px] tracking-tight">
      <span className="text-heading-dark">strikingly</span>{' '}
      <span className="hero-gradient-text">AI</span>
    </span>
  </div>
);

export const HeroIllustration = () => (
  <svg
    width="480"
    height="380"
    viewBox="0 0 480 380"
    fill="none"
    aria-hidden="true"
    className="w-full h-auto max-w-[480px]"
  >
    {/* Browser window frame */}
    <rect x="40" y="30" width="400" height="280" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
    {/* Title bar */}
    <rect x="40" y="30" width="400" height="36" rx="12" fill="#E2E4E7" />
    <rect x="40" y="54" width="400" height="12" fill="#E2E4E7" />
    {/* Dots */}
    <circle cx="64" cy="48" r="5" fill="#CB0C9F" opacity="0.6" />
    <circle cx="82" cy="48" r="5" fill="#7671FF" opacity="0.6" />
    <circle cx="100" cy="48" r="5" fill="#8159BB" opacity="0.4" />
    {/* Nav bar */}
    <rect x="60" y="80" width="120" height="8" rx="4" fill="#C6C9CD" opacity="0.6" />
    <rect x="320" y="78" width="100" height="12" rx="4" fill="#8159BB" opacity="0.3" />
    {/* Hero area in mockup */}
    <rect x="60" y="104" width="360" height="60" rx="6" fill="url(#mockHeroGrad)" opacity="0.15" />
    <rect x="120" y="116" width="240" height="12" rx="4" fill="#4B5056" opacity="0.5" />
    <rect x="160" y="136" width="160" height="10" rx="4" fill="#636972" opacity="0.3" />
    <rect x="180" y="152" width="120" height="8" rx="3" fill="#C6C9CD" opacity="0.4" />
    {/* CTA button */}
    <rect x="190" y="176" width="100" height="20" rx="4" fill="url(#mockBtnGrad)" />
    {/* Content blocks */}
    <rect x="60" y="210" width="110" height="80" rx="6" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="70" y="220" width="90" height="40" rx="4" fill="#E2E4E7" />
    <rect x="80" y="268" width="70" height="6" rx="3" fill="#C6C9CD" opacity="0.5" />
    <rect x="185" y="210" width="110" height="80" rx="6" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="195" y="220" width="90" height="40" rx="4" fill="#E2E4E7" />
    <rect x="205" y="268" width="70" height="6" rx="3" fill="#C6C9CD" opacity="0.5" />
    <rect x="310" y="210" width="110" height="80" rx="6" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="320" y="220" width="90" height="40" rx="4" fill="#E2E4E7" />
    <rect x="330" y="268" width="70" height="6" rx="3" fill="#C6C9CD" opacity="0.5" />
    {/* Sparkle decorations */}
    <circle cx="38" cy="100" r="4" fill="#7671FF" opacity="0.4" />
    <circle cx="445" cy="80" r="6" fill="#CB0C9F" opacity="0.3" />
    <circle cx="420" cy="340" r="8" fill="#7671FF" opacity="0.2" />
    <circle cx="60" cy="340" r="5" fill="#8159BB" opacity="0.25" />
    {/* AI sparkle */}
    <path d="M430 40L434 48L442 52L434 56L430 64L426 56L418 52L426 48Z" fill="url(#sparkleGrad)" opacity="0.5" />
    <defs>
      <linearGradient id="mockHeroGrad" x1="60" y1="104" x2="420" y2="164">
        <stop stopColor="#7671FF" />
        <stop offset="1" stopColor="#CB0C9F" />
      </linearGradient>
      <linearGradient id="mockBtnGrad" x1="190" y1="176" x2="290" y2="196">
        <stop stopColor="#7671FF" />
        <stop offset="1" stopColor="#CB0C9F" />
      </linearGradient>
      <linearGradient id="sparkleGrad" x1="418" y1="40" x2="442" y2="64">
        <stop stopColor="#7671FF" />
        <stop offset="1" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

export const CategoryIcon = ({ id }) => {
  const icons = {
    websites: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="36" height="28" rx="4" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8" />
        <line x1="6" y1="18" x2="42" y2="18" stroke="#8159BB" strokeWidth="1.5" opacity="0.5" />
        <rect x="10" y="22" width="12" height="8" rx="2" fill="#7671FF" opacity="0.2" />
        <rect x="26" y="22" width="12" height="8" rx="2" fill="#CB0C9F" opacity="0.2" />
        <rect x="16" y="40" width="16" height="2" rx="1" fill="#C6C9CD" />
      </svg>
    ),
    "landing-pages": (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="32" height="40" rx="4" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8" />
        <rect x="14" y="12" width="20" height="8" rx="2" fill="#7671FF" opacity="0.3" />
        <rect x="16" y="24" width="16" height="3" rx="1.5" fill="#C6C9CD" />
        <rect x="18" y="30" width="12" height="3" rx="1.5" fill="#C6C9CD" opacity="0.6" />
        <rect x="18" y="36" width="12" height="5" rx="2.5" fill="url(#ctaGrad)" />
        <defs>
          <linearGradient id="ctaGrad" x1="18" y1="36" x2="30" y2="41">
            <stop stopColor="#7671FF" />
            <stop offset="1" stopColor="#CB0C9F" />
          </linearGradient>
        </defs>
      </svg>
    ),
    portfolios: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="16" height="12" rx="3" fill="#7671FF" opacity="0.2" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="26" y="10" width="16" height="12" rx="3" fill="#CB0C9F" opacity="0.2" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="6" y="26" width="16" height="12" rx="3" fill="#CB0C9F" opacity="0.15" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="26" y="26" width="16" height="12" rx="3" fill="#7671FF" opacity="0.15" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    blogs: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="10" y="4" width="28" height="40" rx="4" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8" />
        <rect x="16" y="12" width="16" height="3" rx="1.5" fill="#7671FF" opacity="0.4" />
        <rect x="16" y="18" width="16" height="2" rx="1" fill="#C6C9CD" />
        <rect x="16" y="22" width="14" height="2" rx="1" fill="#C6C9CD" opacity="0.6" />
        <rect x="16" y="26" width="16" height="2" rx="1" fill="#C6C9CD" />
        <rect x="16" y="30" width="10" height="2" rx="1" fill="#C6C9CD" opacity="0.6" />
        <rect x="16" y="36" width="8" height="4" rx="2" fill="#CB0C9F" opacity="0.3" />
      </svg>
    ),
    stores: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8" />
        <rect x="14" y="14" width="10" height="10" rx="2" fill="#7671FF" opacity="0.2" />
        <rect x="28" y="14" width="6" height="3" rx="1.5" fill="#C6C9CD" />
        <rect x="28" y="19" width="8" height="2" rx="1" fill="#C6C9CD" opacity="0.6" />
        <rect x="14" y="28" width="10" height="5" rx="2.5" fill="url(#storeBtnGrad)" />
        <rect x="28" y="28" width="6" height="3" rx="1.5" fill="#CB0C9F" opacity="0.3" />
        <defs>
          <linearGradient id="storeBtnGrad" x1="14" y1="28" x2="24" y2="33">
            <stop stopColor="#7671FF" />
            <stop offset="1" stopColor="#CB0C9F" />
          </linearGradient>
        </defs>
      </svg>
    ),
    "link-in-bio": (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="16" r="8" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8" />
        <rect x="14" y="28" width="20" height="3" rx="1.5" fill="#7671FF" opacity="0.3" />
        <rect x="16" y="34" width="16" height="3" rx="1.5" fill="#CB0C9F" opacity="0.3" />
        <rect x="18" y="40" width="12" height="3" rx="1.5" fill="#8159BB" opacity="0.2" />
      </svg>
    ),
  };
  return icons[id] || icons.websites;
};

export const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const ChevronDownIcon = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const StepIcon = ({ number }) => (
  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-brand-purple text-white font-heading font-bold text-[18px] flex-shrink-0">
    {number}
  </div>
);

export const FeatureIcon = ({ type }) => {
  const icons = {
    speed: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="14" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8" />
        <path d="M16 8v8l5 3" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    mobile: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="3" width="16" height="26" rx="3" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8" />
        <circle cx="16" cy="25" r="2" fill="#8159BB" opacity="0.4" />
      </svg>
    ),
    free: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="14" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8" />
        <path d="M16 8v16M12 14h8M12 18h8" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  };
  return icons[type] || icons.speed;
};
