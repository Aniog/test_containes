import React from 'react';

export const CategoryIcon = ({ type, className = '' }) => {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <rect x="4" y="6" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <line x1="4" y1="12" x2="36" y2="12" stroke="#8159BB" strokeWidth="1.5"/>
        <circle cx="8" cy="9" r="1.2" fill="#8159BB"/>
        <circle cx="12" cy="9" r="1.2" fill="#8159BB"/>
        <circle cx="16" cy="9" r="1.2" fill="#8159BB"/>
        <rect x="8" y="16" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="1" fill="none"/>
        <line x1="22" y1="16" x2="32" y2="16" stroke="#8159BB" strokeWidth="1"/>
        <line x1="22" y1="20" x2="30" y2="20" stroke="#8159BB" strokeWidth="1"/>
        <line x1="22" y1="24" x2="28" y2="24" stroke="#8159BB" strokeWidth="1"/>
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <line x1="14" y1="12" x2="26" y2="12" stroke="#8159BB" strokeWidth="1.5"/>
        <line x1="16" y1="17" x2="24" y2="17" stroke="#8159BB" strokeWidth="1"/>
        <rect x="14" y="22" width="12" height="6" rx="1" stroke="#8159BB" strokeWidth="1" fill="none"/>
        <circle cx="20" cy="25" r="1.5" fill="#8159BB"/>
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <rect x="8" y="12" width="10" height="8" rx="1" stroke="#8159BB" strokeWidth="1" fill="none"/>
        <rect x="22" y="12" width="10" height="8" rx="1" stroke="#8159BB" strokeWidth="1" fill="none"/>
        <rect x="8" y="22" width="24" height="6" rx="1" stroke="#8159BB" strokeWidth="1" fill="none"/>
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <line x1="12" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="1.5"/>
        <line x1="12" y1="17" x2="26" y2="17" stroke="#8159BB" strokeWidth="1"/>
        <line x1="12" y1="22" x2="24" y2="22" stroke="#8159BB" strokeWidth="1"/>
        <line x1="12" y1="27" x2="20" y2="27" stroke="#8159BB" strokeWidth="1"/>
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <path d="M8 16L6 8h28l-2 8" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <rect x="6" y="16" width="28" height="18" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <circle cx="15" cy="25" r="3" stroke="#8159BB" strokeWidth="1" fill="none"/>
        <line x1="22" y1="22" x2="30" y2="22" stroke="#8159BB" strokeWidth="1"/>
        <line x1="22" y1="26" x2="28" y2="26" stroke="#8159BB" strokeWidth="1"/>
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
        <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <circle cx="20" cy="14" r="3" stroke="#8159BB" strokeWidth="1" fill="none"/>
        <line x1="14" y1="21" x2="26" y2="21" stroke="#8159BB" strokeWidth="1"/>
        <line x1="14" y1="25" x2="26" y2="25" stroke="#8159BB" strokeWidth="1"/>
        <line x1="16" y1="29" x2="24" y2="29" stroke="#8159BB" strokeWidth="1"/>
      </svg>
    ),
  };
  return icons[type] || icons.websites;
};

export const HeroIllustration = () => (
  <svg width="440" height="340" viewBox="0 0 440 340" fill="none" aria-hidden="true" className="w-full max-w-[440px] h-auto">
    <rect x="40" y="20" width="360" height="260" rx="12" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3"/>
    <rect x="60" y="50" width="320" height="210" rx="8" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2"/>
    <line x1="60" y1="80" x2="380" y2="80" stroke="#8159BB" strokeWidth="1" opacity="0.2"/>
    <circle cx="80" cy="65" r="5" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
    <circle cx="96" cy="65" r="5" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
    <circle cx="112" cy="65" r="5" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
    <rect x="80" y="96" width="120" height="60" rx="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.25"/>
    <line x1="220" y1="100" x2="350" y2="100" stroke="#8159BB" strokeWidth="1" opacity="0.2"/>
    <line x1="220" y1="115" x2="330" y2="115" stroke="#8159BB" strokeWidth="1" opacity="0.15"/>
    <line x1="220" y1="130" x2="310" y2="130" stroke="#8159BB" strokeWidth="1" opacity="0.1"/>
    <rect x="80" y="170" width="280" height="30" rx="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.15"/>
    <rect x="80" y="210" width="280" height="30" rx="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.1"/>
    <circle cx="350" cy="300" r="20" stroke="#7671FF" strokeWidth="1" fill="none" opacity="0.15"/>
    <circle cx="60" cy="310" r="15" stroke="#CB0C9F" strokeWidth="1" fill="none" opacity="0.15"/>
    <path d="M30 300 Q 60 280 90 300" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.1"/>
  </svg>
);

export const ArrowRightIcon = ({ className = '' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SearchIcon = ({ className = '' }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
    <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ChevronDownIcon = ({ className = '' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StepNumber = ({ number }) => (
  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: 'linear-gradient(135deg, #7671FF, #CB0C9F)', fontFamily: 'var(--font-heading)' }}>
    {number}
  </div>
);

export const CheckIcon = ({ className = '' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <circle cx="12" cy="12" r="10" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <path d="M8 12l3 3 5-5" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LightningIcon = ({ className = '' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export const MobileIcon = ({ className = '' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <line x1="10" y1="18" x2="14" y2="18" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const FreeIcon = ({ className = '' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <circle cx="12" cy="12" r="10" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    <text x="12" y="16" textAnchor="middle" fill="#8159BB" fontSize="10" fontWeight="700" fontFamily="var(--font-heading)">$</text>
  </svg>
);
