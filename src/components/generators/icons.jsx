import React from 'react';

// All decorative SVGs use aria-hidden="true". Keep them tiny and consistent.

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

export const IconSearch = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const IconArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

export const IconChevronDown = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// Category illustrations - simple line-art glyphs
export const IconWebsite = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 8h18" />
    <circle cx="6" cy="6" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="8" cy="6" r="0.6" fill="currentColor" stroke="none" />
    <path d="M6 12h7" />
    <path d="M6 15h10" />
  </svg>
);

export const IconLanding = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8 8h8" />
    <path d="M8 12h6" />
    <rect x="8" y="15" width="8" height="3" rx="1" />
  </svg>
);

export const IconPortfolio = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <rect x="3" y="6" width="8" height="6" rx="1" />
    <rect x="13" y="6" width="8" height="6" rx="1" />
    <rect x="3" y="14" width="8" height="6" rx="1" />
    <rect x="13" y="14" width="8" height="6" rx="1" />
  </svg>
);

export const IconBlog = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M5 4h11l3 3v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
    <path d="M16 4v3h3" />
    <path d="M8 11h8" />
    <path d="M8 14h8" />
    <path d="M8 17h5" />
  </svg>
);

export const IconStore = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M4 8 5.2 5h13.6L20 8" />
    <path d="M4 8h16v3a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-4 0V8Z" />
    <path d="M5 12v8h14v-8" />
    <path d="M10 20v-4h4v4" />
  </svg>
);

export const IconLink = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1.4 1.4" />
    <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1.4-1.4" />
  </svg>
);

export const IconBolt = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" />
  </svg>
);

export const IconMobile = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <path d="M11 18h2" />
  </svg>
);

export const IconFree = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 9h6" />
    <path d="M9 13h4" />
    <path d="M9 9v8" />
  </svg>
);

// Hero illustration - soft purple line-art website mockup
export const HeroIllustration = ({ width = 480, height = 380 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 480 380"
    role="img"
    aria-label="Illustration of a website mockup"
    fill="none"
  >
    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7671FF" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.18" />
      </linearGradient>
      <linearGradient id="heroAccent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>

    {/* soft backdrop */}
    <rect x="20" y="30" width="440" height="320" rx="18" fill="url(#heroGrad)" />

    {/* main browser window */}
    <g transform="translate(50 60)">
      <rect width="320" height="240" rx="10" fill="#FFFFFF" stroke="#8159BB" strokeWidth="1.5" />
      {/* browser dots */}
      <circle cx="18" cy="18" r="4" fill="#FFFFFF" stroke="#8159BB" strokeWidth="1.2" />
      <circle cx="34" cy="18" r="4" fill="#FFFFFF" stroke="#8159BB" strokeWidth="1.2" />
      <circle cx="50" cy="18" r="4" fill="#FFFFFF" stroke="#8159BB" strokeWidth="1.2" />
      {/* address bar */}
      <rect x="70" y="10" width="230" height="16" rx="4" stroke="#C6C9CD" strokeWidth="1.2" fill="#F4F6F8" />
      {/* divider */}
      <line x1="0" y1="36" x2="320" y2="36" stroke="#E2E4E7" strokeWidth="1" />

      {/* hero block */}
      <rect x="20" y="56" width="180" height="14" rx="3" fill="url(#heroAccent)" opacity="0.85" />
      <rect x="20" y="78" width="120" height="8" rx="3" fill="#C6C9CD" />
      <rect x="20" y="92" width="160" height="8" rx="3" fill="#E2E4E7" />

      {/* CTA pill */}
      <rect x="20" y="112" width="92" height="22" rx="11" fill="url(#heroAccent)" />

      {/* image placeholder */}
      <rect x="220" y="56" width="80" height="80" rx="6" stroke="#8159BB" strokeWidth="1.4" fill="#FFFFFF" />
      <circle cx="240" cy="80" r="6" stroke="#8159BB" strokeWidth="1.2" />
      <path d="M226 130 L248 108 L266 124 L290 100 L300 110" stroke="#8159BB" strokeWidth="1.2" fill="none" />

      {/* card row */}
      <rect x="20" y="156" width="86" height="64" rx="6" stroke="#C6C9CD" strokeWidth="1.2" fill="#FFFFFF" />
      <rect x="28" y="166" width="48" height="6" rx="2" fill="#8159BB" opacity="0.7" />
      <rect x="28" y="178" width="64" height="5" rx="2" fill="#E2E4E7" />
      <rect x="28" y="188" width="56" height="5" rx="2" fill="#E2E4E7" />

      <rect x="118" y="156" width="86" height="64" rx="6" stroke="#C6C9CD" strokeWidth="1.2" fill="#FFFFFF" />
      <rect x="126" y="166" width="48" height="6" rx="2" fill="#8159BB" opacity="0.7" />
      <rect x="126" y="178" width="64" height="5" rx="2" fill="#E2E4E7" />
      <rect x="126" y="188" width="56" height="5" rx="2" fill="#E2E4E7" />

      <rect x="216" y="156" width="86" height="64" rx="6" stroke="#C6C9CD" strokeWidth="1.2" fill="#FFFFFF" />
      <rect x="224" y="166" width="48" height="6" rx="2" fill="#8159BB" opacity="0.7" />
      <rect x="224" y="178" width="64" height="5" rx="2" fill="#E2E4E7" />
      <rect x="224" y="188" width="56" height="5" rx="2" fill="#E2E4E7" />
    </g>

    {/* small floating phone mockup */}
    <g transform="translate(330 180)">
      <rect width="100" height="160" rx="14" fill="#FFFFFF" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="10" y="14" width="80" height="56" rx="6" fill="url(#heroAccent)" opacity="0.85" />
      <rect x="10" y="78" width="60" height="6" rx="3" fill="#C6C9CD" />
      <rect x="10" y="90" width="80" height="5" rx="2" fill="#E2E4E7" />
      <rect x="10" y="100" width="70" height="5" rx="2" fill="#E2E4E7" />
      <rect x="10" y="116" width="44" height="16" rx="8" fill="url(#heroAccent)" />
    </g>

    {/* sparkles */}
    <g stroke="#8159BB" strokeWidth="1.4" strokeLinecap="round">
      <path d="M40 50 v8 M36 54 h8" />
      <path d="M430 80 v6 M427 83 h6" />
      <path d="M420 320 v6 M417 323 h6" />
    </g>
  </svg>
);
