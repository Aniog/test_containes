// Inline SVG icons. Decorative usage -> aria-hidden.
// All non-decorative icons should be wrapped by a labeled control.

import React from 'react';

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function MagnifyingGlassIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function PlusIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function MinusIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function BoltIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" />
    </svg>
  );
}

export function PhoneIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function HeartIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
    </svg>
  );
}

// A line-art website mockup illustration (soft purple).
export function WebsiteIllustration({ width = 480, height = 360 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 480 360"
      fill="none"
      role="img"
      aria-label="Soft purple line-art website mockup illustration"
    >
      <defs>
        <linearGradient id="washGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7671FF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.10" />
        </linearGradient>
      </defs>

      {/* Soft wash background blob */}
      <ellipse cx="240" cy="180" rx="220" ry="150" fill="url(#washGrad)" />

      {/* Browser frame */}
      <rect
        x="80" y="60" width="320" height="240" rx="10"
        stroke="#8159BB" strokeOpacity="0.55" strokeWidth="1.5"
        fill="#FFFFFF"
      />
      {/* Top bar */}
      <line x1="80" y1="92" x2="400" y2="92" stroke="#8159BB" strokeOpacity="0.35" />
      <circle cx="96" cy="76" r="3" fill="#8159BB" fillOpacity="0.55" />
      <circle cx="108" cy="76" r="3" fill="#8159BB" fillOpacity="0.4" />
      <circle cx="120" cy="76" r="3" fill="#8159BB" fillOpacity="0.3" />

      {/* Hero block inside mockup */}
      <rect x="100" y="112" width="180" height="14" rx="3" fill="#8159BB" fillOpacity="0.75" />
      <rect x="100" y="134" width="240" height="8" rx="2" fill="#8159BB" fillOpacity="0.25" />
      <rect x="100" y="148" width="200" height="8" rx="2" fill="#8159BB" fillOpacity="0.18" />

      {/* CTA button inside mockup */}
      <rect x="100" y="172" width="92" height="28" rx="4" fill="url(#btnGrad)" />
      <defs>
        <linearGradient id="btnGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>

      {/* Three feature cards inside mockup */}
      <rect x="100" y="216" width="80" height="64" rx="4" stroke="#8159BB" strokeOpacity="0.35" fill="none" />
      <rect x="200" y="216" width="80" height="64" rx="4" stroke="#8159BB" strokeOpacity="0.35" fill="none" />
      <rect x="300" y="216" width="80" height="64" rx="4" stroke="#8159BB" strokeOpacity="0.35" fill="none" />
      <rect x="110" y="228" width="60" height="6" rx="2" fill="#8159BB" fillOpacity="0.5" />
      <rect x="110" y="240" width="48" height="4" rx="2" fill="#8159BB" fillOpacity="0.25" />
      <rect x="110" y="250" width="40" height="4" rx="2" fill="#8159BB" fillOpacity="0.2" />
      <rect x="210" y="228" width="60" height="6" rx="2" fill="#8159BB" fillOpacity="0.5" />
      <rect x="210" y="240" width="48" height="4" rx="2" fill="#8159BB" fillOpacity="0.25" />
      <rect x="210" y="250" width="40" height="4" rx="2" fill="#8159BB" fillOpacity="0.2" />
      <rect x="310" y="228" width="60" height="6" rx="2" fill="#8159BB" fillOpacity="0.5" />
      <rect x="310" y="240" width="48" height="4" rx="2" fill="#8159BB" fillOpacity="0.25" />
      <rect x="310" y="250" width="40" height="4" rx="2" fill="#8159BB" fillOpacity="0.2" />

      {/* Floating sparkle */}
      <g transform="translate(370 50)">
        <path d="M0 8 L2 6 L8 0 L10 -2 L8 0 L2 6 Z" fill="#8159BB" fillOpacity="0.6" />
      </g>
    </svg>
  );
}

// Small category illustrations (used both on Section 4 cards and Section 5 subsection thumbs).
// Each is a 64x64 line-art icon in brand purple.
const cat = { ...base, stroke: '#8159BB', strokeOpacity: 0.75 };

export function CategoryIllustration({ kind = 'website', size = 56 }) {
  const props = { width: size, height: size, viewBox: '0 0 64 64', ...cat, 'aria-hidden': 'true' };
  switch (kind) {
    case 'website':
      return (
        <svg {...props}>
          <rect x="8" y="12" width="48" height="36" rx="4" />
          <line x1="8" y1="22" x2="56" y2="22" />
          <circle cx="14" cy="17" r="1.2" />
          <circle cx="18" cy="17" r="1.2" />
          <circle cx="22" cy="17" r="1.2" />
          <line x1="16" y1="30" x2="40" y2="30" />
          <line x1="16" y1="36" x2="34" y2="36" />
          <line x1="32" y1="48" x2="32" y2="54" />
          <line x1="22" y1="54" x2="42" y2="54" />
        </svg>
      );
    case 'landing':
      return (
        <svg {...props}>
          <rect x="8" y="10" width="48" height="44" rx="4" />
          <rect x="14" y="18" width="36" height="10" rx="2" />
          <line x1="14" y1="34" x2="42" y2="34" />
          <line x1="14" y1="40" x2="38" y2="40" />
          <rect x="24" y="44" width="16" height="6" rx="2" />
        </svg>
      );
    case 'portfolio':
      return (
        <svg {...props}>
          <rect x="8" y="10" width="22" height="22" rx="2" />
          <rect x="34" y="10" width="22" height="22" rx="2" />
          <rect x="8" y="36" width="22" height="18" rx="2" />
          <rect x="34" y="36" width="22" height="18" rx="2" />
        </svg>
      );
    case 'blog':
      return (
        <svg {...props}>
          <rect x="12" y="10" width="40" height="44" rx="3" />
          <line x1="18" y1="20" x2="46" y2="20" />
          <line x1="18" y1="28" x2="46" y2="28" />
          <line x1="18" y1="36" x2="40" y2="36" />
          <line x1="18" y1="44" x2="34" y2="44" />
        </svg>
      );
    case 'store':
      return (
        <svg {...props}>
          <path d="M10 22 L14 12 H50 L54 22" />
          <path d="M10 22 V52 H54 V22" />
          <path d="M10 22 H54" />
          <path d="M22 22 V32 a10 10 0 0 0 20 0 V22" />
        </svg>
      );
    case 'linkbio':
      return (
        <svg {...props}>
          <rect x="22" y="6" width="20" height="34" rx="3" />
          <line x1="26" y1="14" x2="38" y2="14" />
          <line x1="26" y1="20" x2="34" y2="20" />
          <line x1="26" y1="34" x2="38" y2="34" />
          <circle cx="32" cy="50" r="2" />
          <path d="M22 44 L8 50" />
          <path d="M42 44 L56 50" />
        </svg>
      );
    default:
      return null;
  }
}

// Step badges (How It Works section) -- 1, 2, 3 inside a purple circle.
export function StepBadge({ index }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: 'var(--color-brand-purple)',
        color: '#FFFFFF',
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 16,
      }}
    >
      {index}
    </span>
  );
}

// Why Strikingly simple line icons.
export function WhyIcon({ kind }) {
  const props = { width: 36, height: 36, viewBox: '0 0 24 24', ...base, stroke: '#8159BB', 'aria-hidden': 'true' };
  switch (kind) {
    case 'bolt':
      return (
        <svg {...props}>
          <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...props}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...props}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
        </svg>
      );
    default:
      return null;
  }
}
