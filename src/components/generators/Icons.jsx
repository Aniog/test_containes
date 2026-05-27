import React from 'react';

export const WebsiteMockupSVG = ({ className = '' }) => (
  <svg
    className={className}
    width="400"
    height="300"
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="20" y="20" width="360" height="260" rx="8" stroke="#C6B8E0" strokeWidth="2" fill="none" />
    <rect x="40" y="40" width="80" height="12" rx="3" fill="#D4C8E8" />
    <rect x="280" y="40" width="80" height="12" rx="3" fill="#D4C8E8" />
    <rect x="40" y="70" width="320" height="80" rx="4" fill="#EDE8F5" />
    <rect x="60" y="90" width="160" height="16" rx="3" fill="#C6B8E0" />
    <rect x="60" y="116" width="120" height="10" rx="3" fill="#D4C8E8" />
    <rect x="40" y="170" width="100" height="80" rx="4" fill="#EDE8F5" />
    <rect x="150" y="170" width="100" height="80" rx="4" fill="#EDE8F5" />
    <rect x="260" y="170" width="100" height="80" rx="4" fill="#EDE8F5" />
    <circle cx="340" cy="110" r="30" stroke="#C6B8E0" strokeWidth="2" fill="none" />
    <path d="M325 110 L335 120 L355 100" stroke="#8159BB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const CategoryIcon = ({ category, className = '' }) => {
  const icons = {
    websites: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="36" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <line x1="6" y1="16" x2="42" y2="16" stroke="#8159BB" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.5" fill="#8159BB" />
        <circle cx="17" cy="12" r="1.5" fill="#8159BB" />
        <circle cx="22" cy="12" r="1.5" fill="#8159BB" />
        <rect x="10" y="22" width="12" height="12" rx="2" fill="#EDE8F5" />
        <rect x="26" y="22" width="12" height="5" rx="2" fill="#D4C8E8" />
        <rect x="26" y="29" width="12" height="5" rx="2" fill="#D4C8E8" />
      </svg>
    ),
    'landing-pages': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="10" y="6" width="28" height="36" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="14" y="12" width="20" height="8" rx="2" fill="#EDE8F5" />
        <rect x="14" y="24" width="20" height="4" rx="2" fill="#D4C8E8" />
        <rect x="14" y="30" width="12" height="4" rx="2" fill="#D4C8E8" />
        <path d="M30 34 L34 30 L38 34" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    portfolios: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="10" width="32" height="28" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="12" y="14" width="10" height="10" rx="2" fill="#EDE8F5" />
        <rect x="24" y="14" width="12" height="4" rx="2" fill="#D4C8E8" />
        <rect x="24" y="20" width="12" height="4" rx="2" fill="#D4C8E8" />
        <rect x="12" y="26" width="24" height="4" rx="2" fill="#D4C8E8" />
        <rect x="12" y="32" width="16" height="4" rx="2" fill="#D4C8E8" />
      </svg>
    ),
    blogs: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="10" y="6" width="28" height="36" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <line x1="16" y1="14" x2="32" y2="14" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="20" x2="28" y2="20" stroke="#D4C8E8" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="26" x2="30" y2="26" stroke="#D4C8E8" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="32" x2="24" y2="32" stroke="#D4C8E8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    stores: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M8 14 L12 6 L36 6 L40 14" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="8" y="14" width="32" height="28" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="16" y="22" width="16" height="12" rx="2" fill="#EDE8F5" />
        <circle cx="24" cy="28" r="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="14" r="8" stroke="#8159BB" strokeWidth="2" fill="none" />
        <circle cx="24" cy="14" r="3" fill="#D4C8E8" />
        <path d="M12 38 C12 30 18 26 24 26 C30 26 36 30 36 38" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" fill="none" />
        <line x1="18" y1="34" x2="30" y2="34" stroke="#D4C8E8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  };

  return <div className={className}>{icons[category] || null}</div>;
};

export const StepNumber = ({ number, className = '' }) => (
  <div
    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-brand-purple text-brand-purple font-heading text-sm ${className}`}
    aria-hidden="true"
  >
    {number}
  </div>
);

export const FeatureIcon = ({ index, className = '' }) => {
  const icons = [
    // Live in seconds - lightning bolt
    <svg key="0" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M18 4 L10 18 H16 L14 28 L22 14 H16 L18 4Z" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>,
    // Mobile by default - phone
    <svg key="1" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="9" y="3" width="14" height="26" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <line x1="13" y1="8" x2="19" y2="8" stroke="#D4C8E8" strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="12" x2="17" y2="12" stroke="#D4C8E8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="24" r="1.5" fill="#8159BB" />
    </svg>,
    // Free to start - checkmark circle
    <svg key="2" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2" fill="none" />
      <path d="M11 16 L14.5 19.5 L21 12.5" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>,
  ];

  return <div className={className}>{icons[index]}</div>;
};

export const ArrowRightIcon = ({ className = '' }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SearchIcon = ({ className = '' }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="12.5" y1="12.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ChevronDownIcon = ({ className = '' }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
