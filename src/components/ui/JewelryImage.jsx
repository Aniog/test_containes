import React from 'react';
import { clsx } from 'clsx';

// Inline SVG placeholder that already looks editorial: warm gradient backdrop
// with a soft gold jewelry silhouette. The runtime stock-image system will
// replace the `src` if `data-strk-img` is configured; if not, this fallback
// renders cleanly on its own.
//
// `kind` controls the silhouette: 'earring' | 'necklace' | 'huggie' | 'set'
// `theme` controls the backdrop tones: 'warm' | 'dark' | 'linen'

const THEMES = {
  warm: {
    bg1: '#3a2a1c',
    bg2: '#1f1610',
    accent: '#cfa461',
    glow: '#e9c98a',
  },
  dark: {
    bg1: '#1F1A14',
    bg2: '#0f0c08',
    accent: '#c8a25b',
    glow: '#dcb56b',
  },
  linen: {
    bg1: '#EDE5D8',
    bg2: '#D9CDB8',
    accent: '#B08D57',
    glow: '#C9A877',
  },
  cream: {
    bg1: '#F6F1EA',
    bg2: '#EDE5D8',
    accent: '#B08D57',
    glow: '#C9A877',
  },
};

function Silhouette({ kind, accent, glow }) {
  switch (kind) {
    case 'necklace':
      return (
        <g stroke={accent} strokeWidth="0.8" fill="none">
          <path
            d="M 30 30 Q 50 60 70 30"
            stroke={glow}
            strokeWidth="0.4"
            opacity="0.9"
          />
          <path d="M 30 30 Q 50 65 70 30" />
          <circle cx="50" cy="62" r="3.5" fill={accent} stroke="none" />
          <circle cx="50" cy="62" r="1.4" fill={glow} stroke="none" />
        </g>
      );
    case 'huggie':
      return (
        <g stroke={accent} strokeWidth="2" fill="none">
          <circle cx="42" cy="50" r="10" />
          <circle cx="58" cy="50" r="10" />
          <circle cx="42" cy="50" r="7" stroke={glow} strokeWidth="0.6" />
          <circle cx="58" cy="50" r="7" stroke={glow} strokeWidth="0.6" />
        </g>
      );
    case 'set':
      return (
        <g stroke={accent} strokeWidth="1" fill="none">
          <path d="M 28 32 Q 50 58 72 32" />
          <circle cx="50" cy="56" r="3" fill={accent} stroke="none" />
          <circle cx="36" cy="74" r="4" />
          <circle cx="64" cy="74" r="4" />
          <circle cx="36" cy="74" r="2" stroke={glow} />
          <circle cx="64" cy="74" r="2" stroke={glow} />
        </g>
      );
    case 'earring':
    default:
      return (
        <g stroke={accent} strokeWidth="0.9" fill="none">
          <path
            d="M 50 28 Q 42 38 44 50 Q 46 62 50 70"
            strokeWidth="1.4"
          />
          <circle cx="50" cy="74" r="3" fill={accent} stroke="none" />
          <circle cx="50" cy="74" r="1.2" fill={glow} stroke="none" />
          <path
            d="M 50 30 L 48 35"
            stroke={glow}
            strokeWidth="0.6"
          />
        </g>
      );
  }
}

function buildPlaceholder(theme = 'warm', kind = 'earring') {
  const t = THEMES[theme] || THEMES.warm;
  const svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'>
  <defs>
    <radialGradient id='g' cx='50%' cy='42%' r='70%'>
      <stop offset='0%' stop-color='${t.bg1}'/>
      <stop offset='100%' stop-color='${t.bg2}'/>
    </radialGradient>
    <radialGradient id='glow' cx='50%' cy='40%' r='30%'>
      <stop offset='0%' stop-color='${t.glow}' stop-opacity='0.35'/>
      <stop offset='100%' stop-color='${t.glow}' stop-opacity='0'/>
    </radialGradient>
  </defs>
  <rect width='100' height='100' fill='url(#g)'/>
  <rect width='100' height='100' fill='url(#glow)'/>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// `query` is the data-strk-img reference string (e.g. "[t1] [t2]").
// `imgId`  is unique per image element (data-strk-img-id).
// `ratio` is one of '3x2' | '4x3' | '1x1' | '16x9' | '3x4' | '9x16' | '2x3'
// `width` is the approximate pixel width.
// `kind` and `theme` configure the placeholder look.
const JewelryImage = React.forwardRef(function JewelryImage(
  {
    imgId,
    query,
    ratio = '3x4',
    width = 800,
    alt = '',
    kind = 'earring',
    theme = 'warm',
    className,
    fallbackQuery,
    rounded = false,
    ...rest
  },
  ref,
) {
  const placeholder = buildPlaceholder(theme, kind);
  // Render a positioned <img> filling parent. Parent should set aspect/size.
  return (
    <div
      ref={ref}
      className={clsx(
        'relative overflow-hidden bg-espresso',
        rounded && 'rounded-full',
        className,
      )}
      aria-hidden={alt ? undefined : true}
    >
      {/* Layered SVG silhouette stays visible if data-strk-img system is offline */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <radialGradient id={`bg-${imgId}`} cx="50%" cy="42%" r="70%">
            <stop offset="0%" stopColor={THEMES[theme].bg1} />
            <stop offset="100%" stopColor={THEMES[theme].bg2} />
          </radialGradient>
          <radialGradient id={`glow-${imgId}`} cx="50%" cy="40%" r="32%">
            <stop offset="0%" stopColor={THEMES[theme].glow} stopOpacity="0.4" />
            <stop offset="100%" stopColor={THEMES[theme].glow} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#bg-${imgId})`} />
        <rect width="100" height="100" fill={`url(#glow-${imgId})`} />
        <Silhouette
          kind={kind}
          accent={THEMES[theme].accent}
          glow={THEMES[theme].glow}
        />
      </svg>
      {/* The strk-img tagged <img> overlays the silhouette when populated */}
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query || fallbackQuery || ''}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={placeholder}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        {...rest}
      />
    </div>
  );
});

export default JewelryImage;
