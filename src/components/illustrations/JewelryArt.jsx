import React from "react";

/**
 * Editorial jewelry illustrations rendered as SVG.
 * Used as the "elegant placeholder" for product imagery.
 * Each illustration sits on a warm dark mocha background that flatters gold.
 *
 * Replace any of these with a real <img src=...> in your product card /
 * gallery without changing component structure.
 */

const GRADIENT_DEFS = (
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#E8C97A" />
      <stop offset="35%" stopColor="#B8893E" />
      <stop offset="65%" stopColor="#8C6020" />
      <stop offset="100%" stopColor="#D4A656" />
    </linearGradient>
    <linearGradient id="goldGradV" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stopColor="#E8C97A" />
      <stop offset="50%" stopColor="#B8893E" />
      <stop offset="100%" stopColor="#8C6020" />
    </linearGradient>
    <radialGradient id="goldShine" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#F5D88A" stopOpacity="0.9" />
      <stop offset="60%" stopColor="#B8893E" stopOpacity="0" />
    </radialGradient>
    <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#EFE9DE" />
      <stop offset="50%" stopColor="#A89E8E" />
      <stop offset="100%" stopColor="#6B6155" />
    </linearGradient>
    <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F4D9B0" stopOpacity="0.95" />
      <stop offset="100%" stopColor="#C9A57B" stopOpacity="0.6" />
    </linearGradient>
    <radialGradient id="warmGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stopColor="#3A2A1B" stopOpacity="1" />
      <stop offset="100%" stopColor="#1B130C" stopOpacity="1" />
    </radialGradient>
    <radialGradient id="centerSpot" cx="50%" cy="40%" r="40%">
      <stop offset="0%" stopColor="#5C4326" stopOpacity="0.55" />
      <stop offset="100%" stopColor="#241D17" stopOpacity="0" />
    </radialGradient>
  </defs>
);

const Background = ({ id }) => (
  <>
    <rect width="800" height="800" fill="url(#warmGlow)" />
    <rect width="800" height="800" fill="url(#centerSpot)" />
  </>
);

// ----------------------------------------------------------------
// 1. Vivid Aura Jewels — gold ear cuff with crystal accent
// ----------------------------------------------------------------
export const EarCuffArt = ({ id }) => (
  <svg
    viewBox="0 0 800 800"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    aria-label="Gold ear cuff with crystal accent"
  >
    {GRADIENT_DEFS}
    <Background id={id} />
    {/* A soft halo behind the cuff */}
    <circle cx="400" cy="400" r="220" fill="url(#goldShine)" opacity="0.35" />
    {/* Ear cuff: an open hoop that wraps */}
    <g transform="translate(400 400)">
      {/* outer curve */}
      <path
        d="M -160 30 C -160 -180, 160 -180, 160 30"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="34"
        strokeLinecap="round"
      />
      {/* inner curve highlight */}
      <path
        d="M -160 30 C -160 -180, 160 -180, 160 30"
        fill="none"
        stroke="#F5D88A"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* crystal setting in front */}
      <ellipse cx="0" cy="55" rx="32" ry="22" fill="url(#goldGradV)" />
      <ellipse cx="0" cy="50" rx="14" ry="10" fill="#F8E4B0" opacity="0.9" />
      <circle cx="0" cy="50" r="6" fill="#FFF6E0" opacity="0.85" />
    </g>
    {/* subtle dust specks */}
    <circle cx="220" cy="240" r="2" fill="#D4A656" opacity="0.5" />
    <circle cx="610" cy="220" r="1.5" fill="#D4A656" opacity="0.6" />
    <circle cx="180" cy="560" r="1.8" fill="#D4A656" opacity="0.5" />
    <circle cx="640" cy="600" r="1.5" fill="#D4A656" opacity="0.5" />
  </svg>
);

// ----------------------------------------------------------------
// 2. Majestic Flora Nectar — multicolor floral crystal necklace
// ----------------------------------------------------------------
export const FloralNecklaceArt = ({ id }) => (
  <svg
    viewBox="0 0 800 800"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    aria-label="Multicolor floral crystal necklace"
  >
    {GRADIENT_DEFS}
    <Background id={id} />
    <circle cx="400" cy="400" r="260" fill="url(#goldShine)" opacity="0.3" />
    {/* Chain: a soft U-curve from top left to top right */}
    <g>
      <path
        d="M 100 200 Q 400 100, 700 200"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="6"
        opacity="0.85"
      />
      <path
        d="M 100 200 Q 400 100, 700 200"
        fill="none"
        stroke="#F5D88A"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </g>
    {/* Floral pendant cluster */}
    <g transform="translate(400 480)">
      {/* center stone */}
      <circle r="28" fill="#8FB6C9" opacity="0.85" />
      <circle r="14" fill="#D4E5EF" opacity="0.9" />
      {/* petals: 5 around */}
      {[0, 72, 144, 216, 288].map((deg, i) => {
        const colors = ["#C99EAB", "#D4B57A", "#A8C49E", "#B89AC9", "#D4A1A1"];
        return (
          <g key={i} transform={`rotate(${deg})`}>
            <ellipse cx="55" cy="0" rx="22" ry="14" fill={colors[i]} opacity="0.9" />
            <ellipse cx="55" cy="0" rx="10" ry="6" fill="#FBF1DC" opacity="0.6" />
          </g>
        );
      })}
      {/* gold frame */}
      <circle r="90" fill="none" stroke="url(#goldGrad)" strokeWidth="3" opacity="0.6" />
      {/* short drop chain */}
      <line x1="0" y1="-30" x2="0" y2="-80" stroke="url(#goldGrad)" strokeWidth="3" />
      <circle cx="0" cy="-30" r="6" fill="url(#goldGradV)" />
    </g>
    {/* small accent stones on chain */}
    <circle cx="280" cy="155" r="3" fill="#D4A656" opacity="0.7" />
    <circle cx="520" cy="155" r="3" fill="#D4A656" opacity="0.7" />
    <circle cx="340" cy="130" r="2" fill="#D4A656" opacity="0.6" />
    <circle cx="460" cy="130" r="2" fill="#D4A656" opacity="0.6" />
  </svg>
);

// ----------------------------------------------------------------
// 3. Golden Sphere Huggies — chunky gold dome huggie earrings (pair)
// ----------------------------------------------------------------
export const SphereHuggiesArt = ({ id }) => (
  <svg
    viewBox="0 0 800 800"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    aria-label="Chunky gold dome huggie earrings"
  >
    {GRADIENT_DEFS}
    <Background id={id} />
    <circle cx="400" cy="400" r="240" fill="url(#goldShine)" opacity="0.3" />
    {/* Left huggie */}
    <g transform="translate(280 380)">
      <circle r="120" fill="none" stroke="url(#goldGrad)" strokeWidth="42" />
      <circle r="120" fill="none" stroke="#F5D88A" strokeWidth="6" opacity="0.4" />
      {/* dome highlight */}
      <ellipse cx="-40" cy="-50" rx="40" ry="20" fill="#F8E4B0" opacity="0.5" />
    </g>
    {/* Right huggie */}
    <g transform="translate(520 380)">
      <circle r="120" fill="none" stroke="url(#goldGrad)" strokeWidth="42" />
      <circle r="120" fill="none" stroke="#F5D88A" strokeWidth="6" opacity="0.4" />
      <ellipse cx="-40" cy="-50" rx="40" ry="20" fill="#F8E4B0" opacity="0.5" />
    </g>
  </svg>
);

// ----------------------------------------------------------------
// 4. Amber Lace Earrings — textured gold filigree drop earrings (pair)
// ----------------------------------------------------------------
export const FiligreeDropArt = ({ id }) => (
  <svg
    viewBox="0 0 800 800"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    aria-label="Textured gold filigree drop earrings"
  >
    {GRADIENT_DEFS}
    <Background id={id} />
    <circle cx="400" cy="400" r="240" fill="url(#goldShine)" opacity="0.3" />
    {/* Two filigree drops side by side */}
    {[280, 520].map((cx, i) => (
      <g key={i} transform={`translate(${cx} 380)`}>
        {/* hook */}
        <path
          d="M 0 -100 C -25 -110, -25 -80, 0 -70"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="5"
        />
        {/* ornate medallion */}
        <circle r="60" fill="none" stroke="url(#goldGrad)" strokeWidth="3" />
        <circle r="48" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.7" />
        {/* filigree pattern: small inner swirls */}
        {[0, 60, 120, 180, 240, 300].map((deg, j) => (
          <g key={j} transform={`rotate(${deg})`}>
            <path
              d="M 0 -50 C 8 -45, 8 -35, 0 -30"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="1.5"
            />
          </g>
        ))}
        {/* center stone */}
        <circle r="10" fill="#D4B57A" opacity="0.85" />
        <circle r="4" fill="#F8E4B0" />
        {/* small drop chain */}
        <line x1="0" y1="60" x2="0" y2="100" stroke="url(#goldGrad)" strokeWidth="2" />
        <circle cx="0" cy="110" r="10" fill="url(#goldGradV)" />
      </g>
    ))}
  </svg>
);

// ----------------------------------------------------------------
// 5. Royal Heirloom Set — gift box open with jewelry inside
// ----------------------------------------------------------------
export const HeirloomSetArt = ({ id }) => (
  <svg
    viewBox="0 0 800 800"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    aria-label="Gift-boxed earring and necklace set"
  >
    {GRADIENT_DEFS}
    <Background id={id} />
    <circle cx="400" cy="430" r="280" fill="url(#goldShine)" opacity="0.28" />
    {/* Box base */}
    <g transform="translate(400 430)">
      {/* box body */}
      <rect x="-220" y="-20" width="440" height="220" rx="6" fill="#3A2A1B" stroke="url(#goldGrad)" strokeWidth="2" />
      {/* box lid (slightly opened, behind) */}
      <rect x="-230" y="-60" width="460" height="50" rx="4" fill="#2A1F14" stroke="url(#goldGrad)" strokeWidth="1.5" />
      {/* velvet interior */}
      <rect x="-210" y="-10" width="420" height="200" rx="4" fill="#1F1810" />
      {/* necklace draped in box */}
      <path
        d="M -180 60 Q 0 -20, 180 60"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="2.5"
      />
      {/* necklace pendant */}
      <g transform="translate(0 70)">
        <ellipse rx="18" ry="26" fill="url(#goldGradV)" />
        <ellipse rx="9" ry="14" fill="#D4B57A" opacity="0.8" />
        <circle r="3" cy="6" fill="#F8E4B0" />
      </g>
      {/* left earring */}
      <g transform="translate(-130 50)">
        <circle r="22" fill="none" stroke="url(#goldGrad)" strokeWidth="3" />
        <circle r="6" fill="#D4B57A" />
      </g>
      {/* right earring */}
      <g transform="translate(130 50)">
        <circle r="22" fill="none" stroke="url(#goldGrad)" strokeWidth="3" />
        <circle r="6" fill="#D4B57A" />
      </g>
      {/* gold corner accents */}
      {[
        [-220, -20], [220, -20], [-220, 200], [220, 200],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="url(#goldGradV)" />
      ))}
    </g>
    {/* ribbon */}
    <path
      d="M -240 -45 Q 0 -100, 240 -45"
      fill="none"
      stroke="#B8893E"
      strokeWidth="3"
      opacity="0.6"
    />
  </svg>
);

// ----------------------------------------------------------------
// Category tile illustrations
// ----------------------------------------------------------------
export const CategoryEarringsArt = () => (
  <svg viewBox="0 0 800 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-label="Gold earrings">
    {GRADIENT_DEFS}
    <Background />
    <circle cx="400" cy="400" r="240" fill="url(#goldShine)" opacity="0.3" />
    {/* Two long dangle earrings */}
    {[280, 520].map((cx, i) => (
      <g key={i} transform={`translate(${cx} 300)`}>
        {/* hook */}
        <path d="M 0 -60 C -16 -68, -16 -42, 0 -32" fill="none" stroke="url(#goldGrad)" strokeWidth="4" />
        {/* small stone */}
        <circle cx="0" cy="-20" r="6" fill="url(#goldGradV)" />
        {/* drop bar */}
        <line x1="0" y1="-10" x2="0" y2="50" stroke="url(#goldGrad)" strokeWidth="3" />
        {/* filigree end */}
        <g transform="translate(0 80)">
          <circle r="26" fill="none" stroke="url(#goldGrad)" strokeWidth="2" />
          <circle r="18" fill="none" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
          <circle r="8" fill="#D4B57A" />
        </g>
      </g>
    ))}
  </svg>
);

export const CategoryNecklacesArt = () => (
  <svg viewBox="0 0 800 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-label="Gold necklace">
    {GRADIENT_DEFS}
    <Background />
    <circle cx="400" cy="400" r="260" fill="url(#goldShine)" opacity="0.3" />
    <path d="M 120 240 Q 400 140, 680 240" fill="none" stroke="url(#goldGrad)" strokeWidth="5" />
    <g transform="translate(400 460)">
      {/* heart pendant */}
      <path
        d="M 0 30 C -40 0, -40 -40, -20 -40 C -10 -40, 0 -30, 0 -25 C 0 -30, 10 -40, 20 -40 C 40 -40, 40 0, 0 30 Z"
        fill="url(#goldGradV)"
        stroke="#8C6020"
        strokeWidth="1"
      />
    </g>
  </svg>
);

export const CategoryHuggiesArt = () => (
  <svg viewBox="0 0 800 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-label="Gold huggies">
    {GRADIENT_DEFS}
    <Background />
    <circle cx="400" cy="400" r="240" fill="url(#goldShine)" opacity="0.3" />
    {[280, 520].map((cx, i) => (
      <g key={i} transform={`translate(${cx} 400)`}>
        <circle r="90" fill="none" stroke="url(#goldGrad)" strokeWidth="32" />
        <ellipse cx="-30" cy="-40" rx="30" ry="14" fill="#F8E4B0" opacity="0.5" />
      </g>
    ))}
  </svg>
);

// ----------------------------------------------------------------
// Story illustration: hand holding small gold piece
// ----------------------------------------------------------------
export const StoryArt = () => (
  <svg viewBox="0 0 800 1000" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-label="Hand holding a gold jewelry piece">
    {GRADIENT_DEFS}
    <rect width="800" height="1000" fill="#241D17" />
    <rect width="800" height="1000" fill="url(#centerSpot)" />
    {/* abstract silhouette of hand + jewelry */}
    <g transform="translate(400 500)">
      <ellipse cx="0" cy="0" rx="180" ry="240" fill="#3A2A1B" opacity="0.9" />
      <ellipse cx="0" cy="-20" rx="120" ry="160" fill="#5C4326" opacity="0.7" />
      {/* gold band ring */}
      <ellipse cx="0" cy="60" rx="80" ry="22" fill="none" stroke="url(#goldGrad)" strokeWidth="14" />
      <ellipse cx="-30" cy="50" rx="40" ry="10" fill="#F8E4B0" opacity="0.45" />
    </g>
  </svg>
);

// ----------------------------------------------------------------
// UGC portrait illustrations — stylized "model wearing gold" cards
// ----------------------------------------------------------------
export const UgcPortraitArt = ({ variant = 0 }) => {
  // variants 0–7: subtle differences in composition to feel like a strip
  const tones = ["#3A2A1B", "#2C2117", "#382718", "#2A1E14"];
  const skinTones = ["#C9A57B", "#A8845C", "#D4B07A", "#B68A5A"];
  return (
    <svg
      viewBox="0 0 600 1066"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-label="Lifestyle model wearing gold jewelry"
    >
      {GRADIENT_DEFS}
      <rect width="600" height="1066" fill={tones[variant % tones.length]} />
      <rect width="600" height="1066" fill="url(#centerSpot)" />
      {/* abstract figure: head + shoulder silhouette */}
      <g transform="translate(300 480)">
        {/* shoulders */}
        <path
          d="M -200 350 Q -160 200, -80 200 L 80 200 Q 160 200, 200 350 L 200 600 L -200 600 Z"
          fill={tones[(variant + 1) % tones.length]}
        />
        {/* neck */}
        <rect x="-30" y="100" width="60" height="100" fill={skinTones[variant % skinTones.length]} />
        {/* head */}
        <ellipse cx="0" cy="0" rx="100" ry="120" fill={skinTones[variant % skinTones.length]} />
        {/* hair (varies) */}
        {variant % 2 === 0 ? (
          <path
            d="M -110 -40 Q -100 -140, 0 -130 Q 100 -140, 110 -40 L 110 50 L -110 50 Z"
            fill="#1B130C"
            opacity="0.9"
          />
        ) : (
          <path
            d="M -120 0 Q -100 -150, 0 -140 Q 100 -150, 120 0 L 120 100 L 60 60 L 0 80 L -60 60 L -120 100 Z"
            fill="#1B130C"
            opacity="0.9"
          />
        )}
        {/* gold earring */}
        <g transform="translate(80 30)">
          <path d="M 0 -10 C -10 -14, -10 4, 0 8" fill="none" stroke="url(#goldGrad)" strokeWidth="2" />
          <circle cx="0" cy="14" r="5" fill="url(#goldGradV)" />
        </g>
        {/* gold necklace */}
        <path
          d="M -70 200 Q 0 250, 70 200"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="2"
        />
        <circle cx="0" cy="240" r="6" fill="url(#goldGradV)" />
      </g>
    </svg>
  );
};

// ----------------------------------------------------------------
// Hero portrait — larger editorial silhouette
// ----------------------------------------------------------------
export const HeroFigureArt = () => (
  <svg
    viewBox="0 0 800 1100"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    aria-label="Editorial portrait of model wearing gold jewelry"
  >
    {GRADIENT_DEFS}
    <defs>
      <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0%" stopColor="#3D2C1C" />
        <stop offset="60%" stopColor="#1F1610" />
        <stop offset="100%" stopColor="#1B130C" />
      </linearGradient>
    </defs>
    <rect width="800" height="1100" fill="url(#heroSky)" />
    <rect width="800" height="1100" fill="url(#centerSpot)" />
    <g transform="translate(400 600)">
      {/* shoulder/torso */}
      <path
        d="M -320 300 Q -260 100, -120 100 L 120 100 Q 260 100, 320 300 L 320 600 L -320 600 Z"
        fill="#2A1E14"
      />
      {/* neck */}
      <rect x="-44" y="80" width="88" height="120" fill="#B68A5A" />
      {/* head */}
      <ellipse cx="0" cy="0" rx="140" ry="170" fill="#C9A57B" />
      {/* hair pulled back */}
      <path
        d="M -150 -60 Q -120 -200, 0 -190 Q 120 -200, 150 -60 L 150 30 L 80 0 L 0 20 L -80 0 L -150 30 Z"
        fill="#0F0A06"
        opacity="0.95"
      />
      {/* subtle cheek glow */}
      <ellipse cx="-40" cy="40" rx="40" ry="20" fill="#E8B07A" opacity="0.25" />
      <ellipse cx="40" cy="40" rx="40" ry="20" fill="#E8B07A" opacity="0.25" />
      {/* gold earring */}
      <g transform="translate(115 50)">
        <path d="M 0 -16 C -14 -20, -14 6, 0 12" fill="none" stroke="url(#goldGrad)" strokeWidth="3" />
        <ellipse cx="0" cy="22" rx="8" ry="11" fill="url(#goldGradV)" />
      </g>
      {/* gold necklace layered */}
      <path d="M -110 200 Q 0 280, 110 200" fill="none" stroke="url(#goldGrad)" strokeWidth="3" />
      <path d="M -100 240 Q 0 320, 100 240" fill="none" stroke="url(#goldGrad)" strokeWidth="2" opacity="0.7" />
      <circle cx="0" cy="295" r="8" fill="url(#goldGradV)" />
    </g>
    {/* warm light overlay */}
    <rect width="800" height="1100" fill="url(#goldShine)" opacity="0.1" />
  </svg>
);

// Map illustration name to component
export const ILLUSTRATIONS = {
  earCuff: EarCuffArt,
  floralNecklace: FloralNecklaceArt,
  sphereHuggies: SphereHuggiesArt,
  filigreeDrop: FiligreeDropArt,
  heirloomSet: HeirloomSetArt,
};

export const CATEGORY_ART = {
  earrings: CategoryEarringsArt,
  necklaces: CategoryNecklacesArt,
  huggies: CategoryHuggiesArt,
};
