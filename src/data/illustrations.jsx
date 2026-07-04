// Stylized editorial SVG placeholders for Velmora products.
// Each illustration is a deterministic React component (so it can be inlined
// into the DOM, cached as one element, and themed by `variant`).
// Replace with real photography later — the visual language stays.

import React from "react";

// Base wrapper: warm dark background with a soft warm light gradient.
const Frame = ({ children, ratio = "1/1", className = "" }) => (
  <div
    className={`relative w-full overflow-hidden ${className}`}
    style={{ aspectRatio: ratio }}
  >
    <svg
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="warmLight" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#5C3F22" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#2A1C12" stopOpacity="1" />
          <stop offset="100%" stopColor="#0F0A07" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="warmLightRight" cx="75%" cy="80%" r="70%">
          <stop offset="0%" stopColor="#6E4A26" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0F0A07" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9CB8C" />
          <stop offset="50%" stopColor="#C8A66B" />
          <stop offset="100%" stopColor="#8A6A3D" />
        </linearGradient>
        <linearGradient id="goldGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F3DCA2" />
          <stop offset="100%" stopColor="#C8A66B" />
        </linearGradient>
        <radialGradient id="crystalGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F6E7C0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#C8A66B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="600" fill="url(#warmLight)" />
      <rect width="600" height="600" fill="url(#warmLightRight)" />
      {children}
    </svg>
  </div>
);

// Vivid Aura Jewels — gold ear cuff with crystal accent
export const vividAuraSVG = ({ variant = "primary" } = {}) => (
  <Frame>
    {/* Soft shadow under cuff */}
    <ellipse cx="300" cy="430" rx="160" ry="14" fill="#000" opacity="0.45" />
    {/* Curved ear cuff */}
    <path
      d="M 180 320 Q 300 140 420 320"
      fill="none"
      stroke="url(#goldGrad)"
      strokeWidth="14"
      strokeLinecap="round"
    />
    <path
      d="M 180 320 Q 300 140 420 320"
      fill="none"
      stroke="#F3DCA2"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.65"
    />
    {/* Crystal accent (slight position shift on alt for parallax feel) */}
    <g transform={variant === "alt" ? "translate(8,-6)" : "translate(0,0)"}>
      <circle cx="300" cy="200" r="34" fill="url(#crystalGlow)" opacity="0.9" />
      <circle cx="300" cy="200" r="14" fill="#F6E7C0" />
      <circle cx="300" cy="200" r="9" fill="#FFFFFF" opacity="0.8" />
      {/* facet lines */}
      <g stroke="#E9CB8C" strokeWidth="1" opacity="0.7">
        <line x1="300" y1="186" x2="300" y2="214" />
        <line x1="286" y1="200" x2="314" y2="200" />
        <line x1="290" y1="190" x2="310" y2="210" />
        <line x1="310" y1="190" x2="290" y2="210" />
      </g>
    </g>
    {/* Tiny gold droplets flanking the cuff */}
    <circle cx="170" cy="330" r="5" fill="url(#goldGradLight)" />
    <circle cx="430" cy="330" r="5" fill="url(#goldGradLight)" />
  </Frame>
);

// Majestic Flora Nectar — multicolor floral crystal necklace
export const majesticFloraSVG = ({ variant = "primary" } = {}) => {
  const colors = variant === "alt"
    ? ["#E9CB8C", "#C8A66B", "#9C7A4A"]
    : ["#E0A06B", "#C8A66B", "#7E5A8A", "#5E7A6E", "#E6D2A8"];
  return (
    <Frame>
      {/* Chain */}
      <path
        d="M 80 80 Q 300 480 520 80"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="2.5"
      />
      <g opacity="0.5">
        {Array.from({ length: 28 }).map((_, i) => {
          const t = i / 27;
          const x = 80 + (520 - 80) * t;
          const y = 80 + (480 - 80) * (1 - 4 * t * (1 - t));
          return <circle key={i} cx={x} cy={y} r="3" fill="#E9CB8C" />;
        })}
      </g>
      {/* Pendant: floral cluster */}
      <g transform="translate(300,360)">
        {/* center stone */}
        <circle r="34" fill={colors[0]} />
        <circle r="20" fill={colors[1]} opacity="0.85" />
        <circle r="8" fill="#F6E7C0" />
        {/* petals */}
        {colors.slice(1).map((c, i) => {
          const angle = (i / (colors.length - 1)) * Math.PI * 2;
          const x = Math.cos(angle) * 38;
          const y = Math.sin(angle) * 38;
          return (
            <g key={i} transform={`translate(${x},${y})`}>
              <ellipse rx="22" ry="14" fill={c} transform={`rotate(${(angle * 180) / Math.PI})`} />
              <ellipse rx="10" ry="6" fill="#F6E7C0" opacity="0.5" transform={`rotate(${(angle * 180) / Math.PI})`} />
            </g>
          );
        })}
        {/* gold setting */}
        <circle r="42" fill="none" stroke="url(#goldGrad)" strokeWidth="2.5" />
        <circle r="34" fill="none" stroke="url(#goldGradLight)" strokeWidth="1" />
      </g>
    </Frame>
  );
};

// Golden Sphere Huggies — chunky gold dome
export const goldenSphereSVG = ({ variant = "primary" } = {}) => (
  <Frame>
    {/* Two side-by-side domes, slightly tilted */}
    <g transform={variant === "alt" ? "translate(-10,0)" : "translate(0,0)"}>
      <g transform="translate(220,300)">
        <ellipse cx="0" cy="120" rx="90" ry="12" fill="#000" opacity="0.45" />
        <circle r="95" fill="url(#goldGrad)" />
        <ellipse cx="-30" cy="-30" rx="42" ry="22" fill="#F3DCA2" opacity="0.7" />
        <ellipse cx="-38" cy="-36" rx="20" ry="10" fill="#FFFFFF" opacity="0.55" />
        <circle r="95" fill="none" stroke="#8A6A3D" strokeWidth="1" opacity="0.5" />
        {/* hinge hint */}
        <rect x="-6" y="85" width="12" height="20" rx="3" fill="#6E5023" />
      </g>
      <g transform="translate(380,300)">
        <ellipse cx="0" cy="120" rx="90" ry="12" fill="#000" opacity="0.45" />
        <circle r="95" fill="url(#goldGrad)" />
        <ellipse cx="-30" cy="-30" rx="42" ry="22" fill="#F3DCA2" opacity="0.55" />
        <ellipse cx="-38" cy="-36" rx="20" ry="10" fill="#FFFFFF" opacity="0.4" />
        <circle r="95" fill="none" stroke="#8A6A3D" strokeWidth="1" opacity="0.5" />
        <rect x="-6" y="85" width="12" height="20" rx="3" fill="#6E5023" />
      </g>
    </g>
  </Frame>
);

// Amber Lace Earrings — textured gold filigree drop
export const amberLaceSVG = ({ variant = "primary" } = {}) => (
  <Frame>
    {/* Lace filigree earring, two of them */}
    <g transform={variant === "alt" ? "translate(0,-8)" : ""}>
      <g transform="translate(220,180)">
        {/* hook */}
        <path d="M 0 0 Q 0 -40 30 -40" fill="none" stroke="url(#goldGrad)" strokeWidth="3" />
        {/* filigree body: teardrop with openwork */}
        <path
          d="M 0 0 Q -45 80 0 200 Q 45 80 0 0 Z"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="2"
        />
        {/* inner openwork */}
        {Array.from({ length: 6 }).map((_, i) => {
          const y = 20 + i * 28;
          return (
            <path
              key={i}
              d={`M -${20 - i} ${y} Q 0 ${y + 8} ${20 - i} ${y}`}
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="1.2"
              opacity="0.7"
            />
          );
        })}
        {/* central gem drop */}
        <circle cx="0" cy="180" r="10" fill="url(#crystalGlow)" />
        <circle cx="0" cy="180" r="5" fill="#F6E7C0" />
      </g>
      <g transform="translate(380,180)">
        <path d="M 0 0 Q 0 -40 30 -40" fill="none" stroke="url(#goldGrad)" strokeWidth="3" />
        <path
          d="M 0 0 Q -45 80 0 200 Q 45 80 0 0 Z"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="2"
        />
        {Array.from({ length: 6 }).map((_, i) => {
          const y = 20 + i * 28;
          return (
            <path
              key={i}
              d={`M -${20 - i} ${y} Q 0 ${y + 8} ${20 - i} ${y}`}
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="1.2"
              opacity="0.7"
            />
          );
        })}
        <circle cx="0" cy="180" r="10" fill="url(#crystalGlow)" />
        <circle cx="0" cy="180" r="5" fill="#F6E7C0" />
      </g>
    </g>
  </Frame>
);

// Royal Heirloom Set — stud + necklace
export const royalHeirloomSVG = ({ variant = "primary" } = {}) => (
  <Frame>
    {/* Soft gift-box hint in the background */}
    <rect x="380" y="60" width="180" height="180" fill="#2A1C12" stroke="url(#goldGrad)" strokeWidth="1.5" />
    <rect x="380" y="60" width="180" height="180" fill="url(#goldGrad)" opacity="0.06" />
    <line x1="470" y1="60" x2="470" y2="240" stroke="url(#goldGrad)" strokeWidth="1.5" />
    <line x1="380" y1="150" x2="560" y2="150" stroke="url(#goldGrad)" strokeWidth="1.5" />
    {/* Studs */}
    <g transform={variant === "alt" ? "translate(0,10)" : ""}>
      <g transform="translate(180,260)">
        <circle r="42" fill="url(#goldGrad)" />
        <circle r="22" fill="#F3DCA2" />
        <circle r="12" fill="#FFFFFF" opacity="0.7" />
        <circle r="42" fill="none" stroke="#6E5023" strokeWidth="1" />
      </g>
      <g transform="translate(180,400)">
        <circle r="42" fill="url(#goldGrad)" />
        <circle r="22" fill="#F3DCA2" />
        <circle r="12" fill="#FFFFFF" opacity="0.7" />
        <circle r="42" fill="none" stroke="#6E5023" strokeWidth="1" />
      </g>
      {/* Necklace arc with a small pendant */}
      <path
        d="M 60 120 Q 180 240 300 120"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="1.8"
      />
      <g transform="translate(300,120)">
        <circle r="14" fill="url(#goldGrad)" />
        <circle r="7" fill="#F6E7C0" />
        <line x1="0" y1="-22" x2="0" y2="-14" stroke="url(#goldGrad)" strokeWidth="2" />
      </g>
    </g>
  </Frame>
);

// Hero close-up — model with gold earrings (abstract)
export const heroCloseSVG = () => (
  <div className="relative h-full w-full">
    <svg
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="heroLight" cx="40%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#6E4A26" stopOpacity="1" />
          <stop offset="50%" stopColor="#2A1C12" stopOpacity="1" />
          <stop offset="100%" stopColor="#0A0705" stopOpacity="1" />
        </radialGradient>
        <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A261A" />
          <stop offset="100%" stopColor="#1A1108" />
        </linearGradient>
        <linearGradient id="skinHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7A4D2E" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3A261A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2A1A0F" />
          <stop offset="100%" stopColor="#0E0805" />
        </linearGradient>
        <linearGradient id="heroGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3DCA2" />
          <stop offset="60%" stopColor="#C8A66B" />
          <stop offset="100%" stopColor="#8A6A3D" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#heroLight)" />
      {/* hair mass */}
      <path
        d="M 200 100 Q 350 30 600 60 Q 900 80 1050 200 L 1100 900 L 100 900 Z"
        fill="url(#hairGrad)"
      />
      {/* face silhouette */}
      <ellipse cx="600" cy="500" rx="240" ry="320" fill="url(#skin)" />
      <ellipse cx="600" cy="460" rx="240" ry="240" fill="url(#skinHighlight)" />
      {/* neck shadow */}
      <path d="M 480 740 L 720 740 L 760 900 L 440 900 Z" fill="#0A0705" opacity="0.7" />
      {/* gold earring — huggie */}
      <g transform="translate(370,560)">
        <circle r="40" fill="none" stroke="url(#heroGold)" strokeWidth="9" />
        <circle r="40" fill="none" stroke="#F3DCA2" strokeWidth="2" opacity="0.7" />
        <circle r="6" cx="0" cy="40" fill="url(#heroGold)" />
      </g>
      {/* gold earring — drop on other side */}
      <g transform="translate(830,560)">
        <path d="M 0 0 L 0 30" stroke="url(#heroGold)" strokeWidth="3" />
        <path d="M -25 30 Q 0 90 25 30 Z" fill="url(#heroGold)" />
        <circle r="4" cx="0" cy="78" fill="#F6E7C0" />
      </g>
      {/* soft vignette */}
      <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
        <stop offset="60%" stopColor="#000" stopOpacity="0" />
        <stop offset="100%" stopColor="#000" stopOpacity="0.6" />
      </radialGradient>
      <rect width="1200" height="900" fill="url(#vignette)" />
    </svg>
  </div>
);

// Brand story — atelier / workspace mood
export const brandStorySVG = () => (
  <div className="relative h-full w-full">
    <svg
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="storyBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A2818" />
          <stop offset="100%" stopColor="#1A1108" />
        </linearGradient>
        <linearGradient id="storyGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E9CB8C" />
          <stop offset="100%" stopColor="#8A6A3D" />
        </linearGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#storyBg)" />
      {/* table surface */}
      <rect x="0" y="650" width="800" height="350" fill="#0E0805" />
      <line x1="0" y1="650" x2="800" y2="650" stroke="url(#storyGold)" strokeWidth="1" opacity="0.5" />
      {/* jewelry pieces on table */}
      <g transform="translate(250,720)">
        <circle r="60" fill="url(#storyGold)" />
        <ellipse cx="-18" cy="-18" rx="20" ry="10" fill="#F3DCA2" opacity="0.6" />
      </g>
      <g transform="translate(480,780)">
        <path d="M -40 0 Q 0 -80 40 0 Q 0 30 -40 0 Z" fill="url(#storyGold)" />
      </g>
      <g transform="translate(600,720)">
        <path d="M 0 -40 Q 30 0 0 40 Q -30 0 0 -40 Z" fill="url(#storyGold)" opacity="0.85" />
        <circle r="4" fill="#F6E7C0" />
      </g>
      {/* hand silhouette (subtle) */}
      <path
        d="M 100 900 Q 200 700 400 720 Q 600 740 700 900 Z"
        fill="#2A1C12"
        opacity="0.4"
      />
      {/* warm light from top-left */}
      <ellipse cx="200" cy="100" rx="400" ry="200" fill="#6E4A26" opacity="0.25" />
    </svg>
  </div>
);

// Category tiles
const CatTile = ({ children }) => (
  <div className="relative h-full w-full overflow-hidden">
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="catBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A2818" />
          <stop offset="100%" stopColor="#0E0805" />
        </linearGradient>
        <linearGradient id="catGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3DCA2" />
          <stop offset="100%" stopColor="#8A6A3D" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#catBg)" />
      {children}
    </svg>
  </div>
);

export const categoryEarringsSVG = () => (
  <CatTile>
    <g transform="translate(140,140)">
      <path d="M 60 0 L 60 30" stroke="url(#catGold)" strokeWidth="2" />
      <path d="M 30 30 Q 60 120 90 30 Z" fill="url(#catGold)" />
      <circle cx="60" cy="110" r="4" fill="#F6E7C0" />
    </g>
    <g transform="translate(220,170)">
      <circle r="36" fill="none" stroke="url(#catGold)" strokeWidth="6" />
      <circle r="36" fill="none" stroke="#F3DCA2" strokeWidth="1.5" opacity="0.6" />
    </g>
  </CatTile>
);

export const categoryNecklacesSVG = () => (
  <CatTile>
    <path
      d="M 60 80 Q 200 360 340 80"
      fill="none"
      stroke="url(#catGold)"
      strokeWidth="2"
    />
    <g opacity="0.5">
      {Array.from({ length: 20 }).map((_, i) => {
        const t = i / 19;
        const x = 60 + (340 - 60) * t;
        const y = 80 + (360 - 80) * (1 - 4 * t * (1 - t));
        return <circle key={i} cx={x} cy={y} r="2.5" fill="#E9CB8C" />;
      })}
    </g>
    <g transform="translate(200,300)">
      <circle r="28" fill="url(#catGold)" />
      <circle r="14" fill="#F6E7C0" />
    </g>
  </CatTile>
);

export const categoryHuggiesSVG = () => (
  <CatTile>
    <g transform="translate(120,250)">
      <circle r="60" fill="none" stroke="url(#catGold)" strokeWidth="12" />
      <ellipse cx="-22" cy="-22" rx="22" ry="10" fill="#F3DCA2" opacity="0.6" />
    </g>
    <g transform="translate(280,250)">
      <circle r="60" fill="none" stroke="url(#catGold)" strokeWidth="12" />
      <ellipse cx="-22" cy="-22" rx="22" ry="10" fill="#F3DCA2" opacity="0.6" />
    </g>
  </CatTile>
);

// Hero "feature" shapes (used in alt hero or about, optional)
export const heroEarringSVG = () => (
  <div className="h-12 w-12">
    <svg viewBox="0 0 48 48" className="h-full w-full">
      <circle cx="24" cy="24" r="18" fill="none" stroke="#C8A66B" strokeWidth="3" />
    </svg>
  </div>
);
export const heroNecklaceSVG = () => (
  <div className="h-12 w-12">
    <svg viewBox="0 0 48 48" className="h-full w-full">
      <path d="M 8 14 Q 24 36 40 14" fill="none" stroke="#C8A66B" strokeWidth="2" />
      <circle cx="24" cy="32" r="3" fill="#C8A66B" />
    </svg>
  </div>
);
export const heroHuggiesSVG = () => (
  <div className="h-12 w-12">
    <svg viewBox="0 0 48 48" className="h-full w-full">
      <circle cx="18" cy="24" r="10" fill="none" stroke="#C8A66B" strokeWidth="3" />
      <circle cx="32" cy="24" r="10" fill="none" stroke="#C8A66B" strokeWidth="3" />
    </svg>
  </div>
);

// UGC reel cards — vertical "wearer" tiles
const UgcTile = ({ children }) => (
  <div className="relative h-full w-full overflow-hidden">
    <svg
      viewBox="0 0 360 640"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ugcBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A2818" />
          <stop offset="100%" stopColor="#0E0805" />
        </linearGradient>
        <linearGradient id="ugcSkin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5C3F22" />
          <stop offset="100%" stopColor="#2A1C12" />
        </linearGradient>
        <linearGradient id="ugcGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3DCA2" />
          <stop offset="100%" stopColor="#8A6A3D" />
        </linearGradient>
        <radialGradient id="ugcGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F6E7C0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#C8A66B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="360" height="640" fill="url(#ugcBg)" />
      {children}
    </svg>
  </div>
);

// Ear stack shot
export const ugcEarSVG = () => (
  <UgcTile>
    {/* hair side */}
    <path d="M 0 0 L 0 640 L 100 640 L 80 0 Z" fill="#1A1108" />
    {/* face */}
    <ellipse cx="220" cy="320" rx="140" ry="200" fill="url(#ugcSkin)" />
    {/* ear */}
    <path
      d="M 130 320 Q 100 280 100 340 Q 100 400 140 400 Q 160 380 155 340 Z"
      fill="#3A261A"
    />
    {/* ear cuff */}
    <path
      d="M 90 320 Q 130 250 170 320"
      fill="none"
      stroke="url(#ugcGold)"
      strokeWidth="4"
    />
    {/* small studs */}
    <circle cx="130" cy="350" r="4" fill="url(#ugcGold)" />
    <circle cx="120" cy="380" r="3" fill="url(#ugcGold)" />
    {/* glow */}
    <circle cx="130" cy="300" r="20" fill="url(#ugcGlow)" opacity="0.6" />
  </UgcTile>
);

export const ugcEar2SVG = () => (
  <UgcTile>
    <path d="M 260 0 L 360 0 L 360 640 L 280 640 Z" fill="#1A1108" />
    <ellipse cx="140" cy="320" rx="140" ry="200" fill="url(#ugcSkin)" />
    {/* filigree drop earring */}
    <g transform="translate(255,330)">
      <path d="M 0 0 L 0 -30" stroke="url(#ugcGold)" strokeWidth="2" />
      <path
        d="M -20 0 Q 0 90 20 0 Z"
        fill="none"
        stroke="url(#ugcGold)"
        strokeWidth="2"
      />
      <circle r="5" cy="60" fill="url(#ugcGlow)" />
    </g>
    <circle cx="260" cy="330" r="3" fill="url(#ugcGold)" />
  </UgcTile>
);

export const ugcNeckSVG = () => (
  <UgcTile>
    <ellipse cx="180" cy="180" rx="120" ry="140" fill="url(#ugcSkin)" />
    <path d="M 60 280 Q 180 380 300 280 L 300 640 L 60 640 Z" fill="#0E0805" />
    {/* chain */}
    <path
      d="M 100 320 Q 180 380 260 320"
      fill="none"
      stroke="url(#ugcGold)"
      strokeWidth="1.5"
    />
    {/* pendant */}
    <g transform="translate(180,400)">
      <circle r="22" fill="url(#ugcGold)" />
      <circle r="12" fill="url(#ugcGlow)" />
    </g>
    {/* earring hint */}
    <circle cx="100" cy="220" r="3" fill="url(#ugcGold)" />
    <circle cx="260" cy="220" r="3" fill="url(#ugcGold)" />
  </UgcTile>
);

export const ugcNeck2SVG = () => (
  <UgcTile>
    <ellipse cx="180" cy="180" rx="120" ry="140" fill="url(#ugcSkin)" />
    <path d="M 60 280 Q 180 360 300 280 L 300 640 L 60 640 Z" fill="#1A1108" />
    {/* delicate chain */}
    <path
      d="M 120 310 Q 180 360 240 310"
      fill="none"
      stroke="url(#ugcGold)"
      strokeWidth="1"
    />
    {/* small pendant cluster */}
    <g transform="translate(180,380)">
      <circle r="6" fill="url(#ugcGold)" />
      <circle cx="14" cy="6" r="3" fill="#E0A06B" />
      <circle cx="-12" cy="8" r="3" fill="#9C7A4A" />
    </g>
  </UgcTile>
);

export const ugcHuggieSVG = () => (
  <UgcTile>
    <ellipse cx="180" cy="220" rx="130" ry="160" fill="url(#ugcSkin)" />
    <path d="M 0 0 L 80 0 L 60 640 L 0 640 Z" fill="#1A1108" />
    <path d="M 280 0 L 360 0 L 360 640 L 300 640 Z" fill="#1A1108" />
    {/* two huggies */}
    <g transform="translate(95,300)">
      <circle r="22" fill="none" stroke="url(#ugcGold)" strokeWidth="5" />
      <ellipse cx="-8" cy="-8" rx="8" ry="4" fill="#F3DCA2" opacity="0.6" />
    </g>
    <g transform="translate(265,300)">
      <circle r="22" fill="none" stroke="url(#ugcGold)" strokeWidth="5" />
      <ellipse cx="-8" cy="-8" rx="8" ry="4" fill="#F3DCA2" opacity="0.6" />
    </g>
  </UgcTile>
);

export const ugcHuggie2SVG = () => (
  <UgcTile>
    <ellipse cx="180" cy="200" rx="120" ry="150" fill="url(#ugcSkin)" />
    <path d="M 0 0 L 70 0 L 60 640 L 0 640 Z" fill="#0E0805" />
    <path d="M 290 0 L 360 0 L 360 640 L 300 640 Z" fill="#0E0805" />
    {/* chunky domes */}
    <g transform="translate(95,290)">
      <circle r="28" fill="url(#ugcGold)" />
      <ellipse cx="-10" cy="-10" rx="10" ry="5" fill="#F3DCA2" opacity="0.7" />
    </g>
    <g transform="translate(265,290)">
      <circle r="28" fill="url(#ugcGold)" />
      <ellipse cx="-10" cy="-10" rx="10" ry="5" fill="#F3DCA2" opacity="0.7" />
    </g>
  </UgcTile>
);
