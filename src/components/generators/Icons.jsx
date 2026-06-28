import React from 'react';

export const StrikinglyLogo = () => (
  <svg width="140" height="28" viewBox="0 0 140 28" fill="none" aria-hidden="true">
    <text x="0" y="22" fontFamily="'Josefin Sans', sans-serif" fontWeight="700" fontSize="20" fill="#2E2E2F" textTransform="uppercase">Strikingly</text>
    <text x="105" y="22" fontFamily="'Josefin Sans', sans-serif" fontWeight="700" fontSize="20" fill="#8159BB"> AI</text>
  </svg>
);

export const SearchIcon = ({ className = "" }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const ArrowRightIcon = ({ className = "" }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const ChevronDownIcon = ({ className = "" }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const GlobeIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export const MegaphoneIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m3 11 18-5v12L3 13v-2z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);

export const BriefcaseIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const PencilIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
);

export const ShoppingBagIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export const LinkIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export const ClockIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const SmartphoneIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

export const DollarIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const categoryIconMap = {
  globe: GlobeIcon,
  megaphone: MegaphoneIcon,
  briefcase: BriefcaseIcon,
  pencil: PencilIcon,
  shoppingBag: ShoppingBagIcon,
  link: LinkIcon,
};

export const CategoryIcon = ({ icon, size = 32 }) => {
  const IconComponent = categoryIconMap[icon] || GlobeIcon;
  return <IconComponent size={size} />;
};

// Hero illustration - a soft purple line-art website mockup
export const HeroIllustration = () => (
  <svg width="480" height="380" viewBox="0 0 480 380" fill="none" aria-hidden="true" role="img">
    {/* Browser window frame */}
    <rect x="40" y="30" width="400" height="280" rx="12" fill="#F4F0FB" stroke="#8159BB" strokeWidth="1.5" />
    {/* Title bar */}
    <rect x="40" y="30" width="400" height="36" rx="12" fill="#EDE7F6" />
    <rect x="40" y="54" width="400" height="12" fill="#EDE7F6" />
    {/* Traffic lights */}
    <circle cx="62" cy="48" r="5" fill="#FF5F57" />
    <circle cx="80" cy="48" r="5" fill="#FEBC2E" />
    <circle cx="98" cy="48" r="5" fill="#28C840" />
    {/* URL bar */}
    <rect x="120" y="40" width="260" height="16" rx="4" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="0.75" />
    {/* Nav bar content */}
    <rect x="60" y="78" width="80" height="8" rx="2" fill="#8159BB" opacity="0.3" />
    <rect x="280" y="78" width="40" height="8" rx="2" fill="#8159BB" opacity="0.2" />
    <rect x="330" y="78" width="40" height="8" rx="2" fill="#8159BB" opacity="0.2" />
    <rect x="380" y="78" width="40" height="8" rx="2" fill="#8159BB" opacity="0.2" />
    {/* Hero block */}
    <rect x="60" y="100" width="360" height="100" rx="8" fill="url(#heroGrad)" opacity="0.15" />
    <rect x="120" y="120" width="240" height="14" rx="4" fill="#8159BB" opacity="0.25" />
    <rect x="150" y="142" width="180" height="10" rx="3" fill="#636972" opacity="0.2" />
    <rect x="200" y="165" width="80" height="22" rx="11" fill="url(#heroGrad)" opacity="0.6" />
    {/* Content cards */}
    <rect x="60" y="218" width="110" height="80" rx="6" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="70" y="228" width="90" height="8" rx="2" fill="#8159BB" opacity="0.2" />
    <rect x="70" y="244" width="70" height="6" rx="2" fill="#636972" opacity="0.15" />
    <rect x="70" y="258" width="80" height="6" rx="2" fill="#636972" opacity="0.15" />
    <rect x="70" y="276" width="50" height="14" rx="4" fill="#8159BB" opacity="0.15" />
    <rect x="185" y="218" width="110" height="80" rx="6" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="195" y="228" width="90" height="8" rx="2" fill="#CB0C9F" opacity="0.2" />
    <rect x="195" y="244" width="70" height="6" rx="2" fill="#636972" opacity="0.15" />
    <rect x="195" y="258" width="80" height="6" rx="2" fill="#636972" opacity="0.15" />
    <rect x="195" y="276" width="50" height="14" rx="4" fill="#CB0C9F" opacity="0.15" />
    <rect x="310" y="218" width="110" height="80" rx="6" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="320" y="228" width="90" height="8" rx="2" fill="#7671FF" opacity="0.2" />
    <rect x="320" y="244" width="70" height="6" rx="2" fill="#636972" opacity="0.15" />
    <rect x="320" y="258" width="80" height="6" rx="2" fill="#636972" opacity="0.15" />
    <rect x="320" y="276" width="50" height="14" rx="4" fill="#7671FF" opacity="0.15" />
    {/* Floating sparkle elements */}
    <circle cx="30" cy="100" r="6" fill="#8159BB" opacity="0.15" />
    <circle cx="460" cy="160" r="8" fill="#CB0C9F" opacity="0.12" />
    <circle cx="450" cy="60" r="4" fill="#7671FF" opacity="0.2" />
    <circle cx="20" cy="220" r="5" fill="#7671FF" opacity="0.15" />
    {/* AI sparkle / wand */}
    <path d="M420 340l8-20 8 20-20-8 20-8z" fill="#8159BB" opacity="0.25" />
    <path d="M440 310l4-12 4 12-12-4 12-4z" fill="#CB0C9F" opacity="0.2" />
    <defs>
      <linearGradient id="heroGrad" x1="60" y1="100" x2="420" y2="200">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

// Small category thumbnail SVG for generator cards
export const CategoryThumbnail = ({ category, size = 40 }) => {
  const colors = {
    websites: { primary: '#8159BB', secondary: '#EDE7F6' },
    'landing-pages': { primary: '#7671FF', secondary: '#E8E8FF' },
    portfolios: { primary: '#CB0C9F', secondary: '#FCE7F3' },
    blogs: { primary: '#8159BB', secondary: '#EDE7F6' },
    stores: { primary: '#7671FF', secondary: '#E8E8FF' },
    'link-in-bio': { primary: '#CB0C9F', secondary: '#FCE7F3' },
  };
  const { primary, secondary } = colors[category] || colors.websites;

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill={secondary} />
      <rect x="8" y="10" width="24" height="3" rx="1.5" fill={primary} opacity="0.5" />
      <rect x="8" y="16" width="18" height="2" rx="1" fill={primary} opacity="0.3" />
      <rect x="8" y="21" width="20" height="2" rx="1" fill={primary} opacity="0.3" />
      <rect x="8" y="26" width="12" height="8" rx="2" fill={primary} opacity="0.2" />
      <rect x="22" y="26" width="10" height="8" rx="2" fill={primary} opacity="0.15" />
    </svg>
  );
};
