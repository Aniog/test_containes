// Inline SVG illustrations. All decorative — aria-hidden in the parent.
// All share a 240x160 viewBox and use the brand purple + AI gradient palette
// so the directory thumbnails are visually consistent across categories.

import React from 'react';

const STROKE = '#8159BB';
const AI_FROM = '#7671FF';
const AI_TO = '#CB0C9F';
const MUTED = '#C6C9CD';
const SOFT = '#EDE7F6';

function Frame({ children, className = '', label = 'illustration' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      data-illustration={label}
    >
      {children}
    </svg>
  );
}

const AiLine = ({ d, width = 1.5 }) => (
  <path d={d} fill="none" stroke={STROKE} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
);

const MutedLine = ({ d, width = 1 }) => (
  <path d={d} fill="none" stroke={MUTED} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
);

const AiDot = ({ cx, cy, r = 2.5, fill = STROKE }) => (
  <circle cx={cx} cy={cy} r={r} fill={fill} />
);

// ---------- Hero illustration: a soft purple line-art website mockup ----------
export function HeroIllustration({ className = '', width = 360, height = 240 }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 360 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={AI_FROM} />
          <stop offset="100%" stopColor={AI_TO} />
        </linearGradient>
        <linearGradient id="heroWash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={AI_FROM} stopOpacity="0.12" />
          <stop offset="100%" stopColor={AI_TO} stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* soft background wash */}
      <rect x="10" y="10" width="340" height="220" rx="16" fill="url(#heroWash)" />

      {/* browser chrome */}
      <rect x="60" y="36" width="240" height="170" rx="10" fill="#FFFFFF" stroke={STROKE} strokeWidth="1.5" />
      <rect x="60" y="36" width="240" height="22" rx="10" fill="#FFFFFF" stroke={STROKE} strokeWidth="1.5" />
      <circle cx="72" cy="47" r="2.5" fill={MUTED} />
      <circle cx="82" cy="47" r="2.5" fill={MUTED} />
      <circle cx="92" cy="47" r="2.5" fill={MUTED} />

      {/* header line */}
      <line x1="78" y1="74" x2="160" y2="74" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      <line x1="220" y1="74" x2="240" y2="74" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="248" y1="74" x2="262" y2="74" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />

      {/* hero text */}
      <line x1="78" y1="96" x2="220" y2="96" stroke={STROKE} strokeWidth="3" strokeLinecap="round" />
      <line x1="78" y1="108" x2="180" y2="108" stroke={STROKE} strokeWidth="3" strokeLinecap="round" />

      {/* gradient button */}
      <rect x="78" y="124" width="80" height="22" rx="3" fill="url(#heroGrad)" />
      <line x1="88" y1="135" x2="148" y2="135" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

      {/* three cards row */}
      <rect x="78" y="160" width="60" height="32" rx="3" fill="#FFFFFF" stroke={MUTED} strokeWidth="1" />
      <rect x="150" y="160" width="60" height="32" rx="3" fill="#FFFFFF" stroke={MUTED} strokeWidth="1" />
      <rect x="222" y="160" width="60" height="32" rx="3" fill="#FFFFFF" stroke={MUTED} strokeWidth="1" />
      <line x1="86" y1="170" x2="130" y2="170" stroke={MUTED} strokeWidth="1" />
      <line x1="86" y1="178" x2="120" y2="178" stroke={MUTED} strokeWidth="1" />
      <line x1="158" y1="170" x2="202" y2="170" stroke={MUTED} strokeWidth="1" />
      <line x1="158" y1="178" x2="192" y2="178" stroke={MUTED} strokeWidth="1" />
      <line x1="230" y1="170" x2="274" y2="170" stroke={MUTED} strokeWidth="1" />
      <line x1="230" y1="178" x2="264" y2="178" stroke={MUTED} strokeWidth="1" />

      {/* floating sparkles */}
      <g stroke={STROKE} strokeWidth="1.5" strokeLinecap="round">
        <line x1="44" y1="60" x2="44" y2="68" />
        <line x1="40" y1="64" x2="48" y2="64" />
      </g>
      <g stroke={STROKE} strokeWidth="1.5" strokeLinecap="round">
        <line x1="316" y1="120" x2="316" y2="128" />
        <line x1="312" y1="124" x2="320" y2="124" />
      </g>
      <g stroke={STROKE} strokeWidth="1.5" strokeLinecap="round">
        <line x1="30" y1="170" x2="30" y2="178" />
        <line x1="26" y1="174" x2="34" y2="174" />
      </g>
    </svg>
  );
}

// ---------- Category illustrations (small) ----------
export function CategoryWebsitesIcon({ className = '', size = 32 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="2" fill="none" stroke={STROKE} strokeWidth="1.5" />
      <line x1="4" y1="11" x2="28" y2="11" stroke={STROKE} strokeWidth="1.5" />
      <circle cx="7" cy="8.5" r="0.8" fill={STROKE} />
      <circle cx="9.5" cy="8.5" r="0.8" fill={STROKE} />
      <circle cx="12" cy="8.5" r="0.8" fill={STROKE} />
      <line x1="8" y1="16" x2="20" y2="16" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="20" x2="16" y2="20" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CategoryLandingIcon({ className = '', size = 32 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="2" fill="none" stroke={STROKE} strokeWidth="1.5" />
      <rect x="8" y="11" width="16" height="3" rx="1" fill={STROKE} />
      <rect x="8" y="16" width="10" height="2" rx="1" fill={MUTED} />
      <rect x="8" y="19" width="8" height="2" rx="1" fill={MUTED} />
      <rect x="8" y="22" width="6" height="2" rx="1" fill={AI_FROM} />
    </svg>
  );
}

export function CategoryPortfolioIcon({ className = '', size = 32 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="2" fill="none" stroke={STROKE} strokeWidth="1.5" />
      <rect x="7" y="9" width="8" height="6" rx="1" fill={MUTED} />
      <rect x="17" y="9" width="8" height="6" rx="1" fill={MUTED} />
      <rect x="7" y="17" width="18" height="2" rx="1" fill={MUTED} />
      <rect x="7" y="20" width="14" height="2" rx="1" fill={MUTED} />
    </svg>
  );
}

export function CategoryBlogIcon({ className = '', size = 32 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="6" y="4" width="20" height="24" rx="2" fill="none" stroke={STROKE} strokeWidth="1.5" />
      <line x1="10" y1="10" x2="22" y2="10" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="14" x2="22" y2="14" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="10" y1="17" x2="22" y2="17" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="10" y1="20" x2="18" y2="20" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="10" y1="23" x2="14" y2="23" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function CategoryStoreIcon({ className = '', size = 32 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5 10 L7 6 L25 6 L27 10" fill="none" stroke={STROKE} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 10 L7 25 L25 25 L26 10" fill="none" stroke={STROKE} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 14 L12 21 L20 21 L20 14" fill="none" stroke={STROKE} strokeWidth="1.5" />
      <line x1="14" y1="14" x2="14" y2="21" stroke={STROKE} strokeWidth="1.5" />
      <line x1="18" y1="14" x2="18" y2="21" stroke={STROKE} strokeWidth="1.5" />
    </svg>
  );
}

export function CategoryLinkBioIcon({ className = '', size = 32 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="9" r="3" fill="none" stroke={STROKE} strokeWidth="1.5" />
      <path d="M16 12 L16 26" stroke={STROKE} strokeWidth="1.5" />
      <line x1="10" y1="17" x2="22" y2="17" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="22" x2="22" y2="22" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="26" x2="19" y2="26" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function getCategoryIcon(categoryId) {
  switch (categoryId) {
    case 'websites':
      return CategoryWebsitesIcon;
    case 'landing-pages':
      return CategoryLandingIcon;
    case 'portfolios':
      return CategoryPortfolioIcon;
    case 'blogs':
      return CategoryBlogIcon;
    case 'stores':
      return CategoryStoreIcon;
    case 'link-in-bio':
      return CategoryLinkBioIcon;
    default:
      return CategoryWebsitesIcon;
  }
}

// ---------- Directory thumbnail illustrations (one shared per category) ----------
// These are larger than the category icons and used as card thumbnails.

export function ThumbWebsites({ className = '' }) {
  return (
    <Frame className={className} label="thumb-websites">
      <rect x="0" y="0" width="240" height="160" fill={SOFT} />
      <rect x="48" y="32" width="144" height="96" rx="6" fill="#FFFFFF" stroke={STROKE} strokeWidth="1.2" />
      <rect x="48" y="32" width="144" height="16" rx="6" fill="#FFFFFF" stroke={STROKE} strokeWidth="1.2" />
      <circle cx="58" cy="40" r="1.6" fill={MUTED} />
      <circle cx="64" cy="40" r="1.6" fill={MUTED} />
      <circle cx="70" cy="40" r="1.6" fill={MUTED} />
      <line x1="58" y1="60" x2="120" y2="60" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="70" x2="100" y2="70" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="58" y1="76" x2="90" y2="76" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <rect x="58" y="86" width="40" height="14" rx="2" fill="url(#thumbGrad)" />
      <defs>
        <linearGradient id="thumbGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={AI_FROM} />
          <stop offset="100%" stopColor={AI_TO} />
        </linearGradient>
      </defs>
      <rect x="108" y="86" width="40" height="14" rx="2" fill="none" stroke={STROKE} strokeWidth="1" />
      <rect x="158" y="86" width="30" height="14" rx="2" fill="none" stroke={MUTED} strokeWidth="1" />
    </Frame>
  );
}

export function ThumbLandingPages({ className = '' }) {
  return (
    <Frame className={className} label="thumb-landing-pages">
      <rect x="0" y="0" width="240" height="160" fill={SOFT} />
      <rect x="60" y="20" width="120" height="120" rx="6" fill="#FFFFFF" stroke={STROKE} strokeWidth="1.2" />
      <line x1="76" y1="44" x2="164" y2="44" stroke={STROKE} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="76" y1="58" x2="140" y2="58" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <rect x="76" y="72" width="60" height="20" rx="3" fill="url(#thumbGradL)" />
      <defs>
        <linearGradient id="thumbGradL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={AI_FROM} />
          <stop offset="100%" stopColor={AI_TO} />
        </linearGradient>
      </defs>
      <line x1="86" y1="82" x2="126" y2="82" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="76" y1="104" x2="120" y2="104" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="76" y1="112" x2="100" y2="112" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="76" y1="120" x2="80" y2="120" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </Frame>
  );
}

export function ThumbPortfolios({ className = '' }) {
  return (
    <Frame className={className} label="thumb-portfolios">
      <rect x="0" y="0" width="240" height="160" fill={SOFT} />
      <rect x="36" y="32" width="60" height="40" rx="3" fill="#FFFFFF" stroke={STROKE} strokeWidth="1" />
      <rect x="100" y="32" width="60" height="40" rx="3" fill="#FFFFFF" stroke={STROKE} strokeWidth="1" />
      <rect x="164" y="32" width="40" height="40" rx="3" fill="#FFFFFF" stroke={STROKE} strokeWidth="1" />
      <rect x="36" y="80" width="60" height="40" rx="3" fill="#FFFFFF" stroke={STROKE} strokeWidth="1" />
      <rect x="100" y="80" width="60" height="40" rx="3" fill="#FFFFFF" stroke={STROKE} strokeWidth="1" />
      <rect x="164" y="80" width="40" height="40" rx="3" fill="#FFFFFF" stroke={STROKE} strokeWidth="1" />
      <line x1="44" y1="48" x2="88" y2="48" stroke={MUTED} strokeWidth="1" />
      <line x1="108" y1="48" x2="152" y2="48" stroke={MUTED} strokeWidth="1" />
      <line x1="44" y1="96" x2="88" y2="96" stroke={MUTED} strokeWidth="1" />
      <line x1="108" y1="96" x2="152" y2="96" stroke={MUTED} strokeWidth="1" />
    </Frame>
  );
}

export function ThumbBlogs({ className = '' }) {
  return (
    <Frame className={className} label="thumb-blogs">
      <rect x="0" y="0" width="240" height="160" fill={SOFT} />
      <rect x="48" y="22" width="144" height="116" rx="6" fill="#FFFFFF" stroke={STROKE} strokeWidth="1.2" />
      <line x1="62" y1="40" x2="178" y2="40" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
      <line x1="62" y1="56" x2="158" y2="56" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="62" y1="64" x2="140" y2="64" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="62" y1="72" x2="150" y2="72" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="62" y1="80" x2="120" y2="80" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="62" y1="100" x2="100" y2="100" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="62" y1="110" x2="140" y2="110" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="62" y1="118" x2="120" y2="118" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="62" y1="126" x2="130" y2="126" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
    </Frame>
  );
}

export function ThumbStores({ className = '' }) {
  return (
    <Frame className={className} label="thumb-stores">
      <rect x="0" y="0" width="240" height="160" fill={SOFT} />
      <rect x="40" y="36" width="50" height="80" rx="4" fill="#FFFFFF" stroke={STROKE} strokeWidth="1" />
      <rect x="95" y="36" width="50" height="80" rx="4" fill="#FFFFFF" stroke={STROKE} strokeWidth="1" />
      <rect x="150" y="36" width="50" height="80" rx="4" fill="#FFFFFF" stroke={STROKE} strokeWidth="1" />
      <rect x="48" y="44" width="34" height="34" rx="2" fill={SOFT} stroke={MUTED} strokeWidth="0.8" />
      <rect x="103" y="44" width="34" height="34" rx="2" fill={SOFT} stroke={MUTED} strokeWidth="0.8" />
      <rect x="158" y="44" width="34" height="34" rx="2" fill={SOFT} stroke={MUTED} strokeWidth="0.8" />
      <line x1="48" y1="86" x2="82" y2="86" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="103" y1="86" x2="137" y2="86" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="158" y1="86" x2="192" y2="86" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="96" x2="74" y2="96" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="103" y1="96" x2="129" y2="96" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <line x1="158" y1="96" x2="184" y2="96" stroke={MUTED} strokeWidth="1" strokeLinecap="round" />
      <rect x="48" y="104" width="22" height="8" rx="2" fill="url(#thumbGradS)" />
      <rect x="103" y="104" width="22" height="8" rx="2" fill="url(#thumbGradS)" />
      <rect x="158" y="104" width="22" height="8" rx="2" fill="url(#thumbGradS)" />
      <defs>
        <linearGradient id="thumbGradS" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={AI_FROM} />
          <stop offset="100%" stopColor={AI_TO} />
        </linearGradient>
      </defs>
    </Frame>
  );
}

export function ThumbLinkBio({ className = '' }) {
  return (
    <Frame className={className} label="thumb-link-bio">
      <rect x="0" y="0" width="240" height="160" fill={SOFT} />
      <rect x="80" y="18" width="80" height="124" rx="10" fill="#FFFFFF" stroke={STROKE} strokeWidth="1.2" />
      <circle cx="120" cy="42" r="10" fill={SOFT} stroke={STROKE} strokeWidth="1" />
      <line x1="110" y1="42" x2="130" y2="42" stroke={STROKE} strokeWidth="1" />
      <line x1="120" y1="32" x2="120" y2="52" stroke={STROKE} strokeWidth="1" />
      <rect x="92" y="60" width="56" height="10" rx="3" fill={SOFT} stroke={MUTED} strokeWidth="0.8" />
      <rect x="92" y="74" width="56" height="10" rx="3" fill={SOFT} stroke={MUTED} strokeWidth="0.8" />
      <rect x="92" y="88" width="56" height="10" rx="3" fill={SOFT} stroke={MUTED} strokeWidth="0.8" />
      <rect x="92" y="102" width="56" height="10" rx="3" fill="url(#thumbGradLB)" />
      <defs>
        <linearGradient id="thumbGradLB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={AI_FROM} />
          <stop offset="100%" stopColor={AI_TO} />
        </linearGradient>
      </defs>
      <line x1="100" y1="107" x2="140" y2="107" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="92" y="116" width="56" height="10" rx="3" fill={SOFT} stroke={MUTED} strokeWidth="0.8" />
    </Frame>
  );
}

export function getCategoryThumb(categoryId) {
  switch (categoryId) {
    case 'websites':
      return ThumbWebsites;
    case 'landing-pages':
      return ThumbLandingPages;
    case 'portfolios':
      return ThumbPortfolios;
    case 'blogs':
      return ThumbBlogs;
    case 'stores':
      return ThumbStores;
    case 'link-in-bio':
      return ThumbLinkBio;
    default:
      return ThumbWebsites;
  }
}
