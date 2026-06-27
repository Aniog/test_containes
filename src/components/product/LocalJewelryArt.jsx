const artStyles = {
  dark: {
    start: '#15120f',
    end: '#806346',
    panel: '#241a14',
    text: '#fff7eb',
    muted: '#d9b878',
  },
  light: {
    start: '#f6efe5',
    end: '#d8c7b2',
    panel: '#fff8ee',
    text: '#15120f',
    muted: '#7d6043',
  },
  portrait: {
    start: '#2b211a',
    end: '#b78b64',
    panel: '#121719',
    text: '#fff7eb',
    muted: '#d9b878',
  },
}

const artCopy = {
  'vivid-aura-primary.svg': ['Vivid Aura', 'GOLD EAR CUFF', 'light'],
  'vivid-aura-hover.svg': ['Aura Detail', 'CRYSTAL ACCENT', 'dark'],
  'flora-primary.svg': ['Flora Nectar', 'CRYSTAL NECKLACE', 'light'],
  'flora-hover.svg': ['Flora Layer', 'SOFT MULTICOLOR', 'dark'],
  'sphere-primary.svg': ['Golden Sphere', 'DOME HUGGIES', 'light'],
  'sphere-hover.svg': ['Sphere Glow', 'POLISHED HUGGIES', 'dark'],
  'amber-primary.svg': ['Amber Lace', 'FILIGREE DROPS', 'light'],
  'amber-hover.svg': ['Lace Detail', 'TEXTURED GOLD', 'dark'],
  'heirloom-primary.svg': ['Royal Heirloom', 'GIFT SET', 'light'],
  'heirloom-hover.svg': ['Heirloom Box', 'READY TO GIFT', 'dark'],
  'category-earrings.svg': ['Earrings', 'DELICATE DROPS', 'light'],
  'category-necklaces.svg': ['Necklaces', 'LAYERED CHAINS', 'light'],
  'category-huggies.svg': ['Huggies', 'SCULPTED HOOPS', 'light'],
  'brand-story.svg': ['Our Studio', 'WARM GOLD DETAILS', 'light'],
  'ugc-neck-stack.svg': ['Layered', 'GOLD RITUALS', 'portrait'],
  'ugc-gold-huggies.svg': ['Huggies', 'EVERYDAY GLOW', 'portrait'],
  'ugc-gift-box.svg': ['Gifted', 'BOXED WITH CARE', 'portrait'],
  'ugc-ear-cuff.svg': ['Crystal', 'QUIETLY BRIGHT', 'portrait'],
}

const fileNameFromSrc = (src = '') => src.split('/').pop()
const safeId = (value = '') => value.replace(/[^a-zA-Z0-9_-]/g, '-')

export default function LocalJewelryArt({ src, alt, className = '', imgId = '' }) {
  const [title = alt, subtitle = 'VELMORA', styleKey = 'light'] = artCopy[fileNameFromSrc(src)] || []
  const style = artStyles[styleKey] || artStyles.light
  const gradientId = `velmora-gradient-${safeId(imgId || fileNameFromSrc(src))}`
  const glowId = `velmora-glow-${safeId(imgId || fileNameFromSrc(src))}`
  const isPortrait = styleKey === 'portrait'
  const viewBox = isPortrait ? '0 0 900 1200' : '0 0 900 1100'

  return (
    <div role="img" aria-label={alt} className={`relative block h-full w-full overflow-hidden ${className}`}>
      <svg className="h-full w-full" viewBox={viewBox} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor={style.start} />
            <stop offset="1" stopColor={style.end} />
          </linearGradient>
          <radialGradient id={glowId} cx="50%" cy="42%" r="44%">
            <stop offset="0" stopColor="#fff3c7" stopOpacity="0.95" />
            <stop offset="1" stopColor="#fff3c7" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="900" height={isPortrait ? '1200' : '1100'} fill={`url(#${gradientId})`} />
        {isPortrait ? (
          <>
            <ellipse cx="540" cy="440" rx="210" ry="275" fill="#c58f67" opacity="0.34" />
            <path d="M362 378 C424 266 612 252 684 374 C750 486 674 632 530 642 C394 650 300 486 362 378Z" fill="#cfa27d" opacity="0.78" />
            <path d="M586 410 C610 455 601 520 562 552" fill="none" stroke="#f6dca3" strokeWidth="18" strokeLinecap="round" />
            <circle cx="587" cy="399" r="26" fill="#f8e5ad" />
            <circle cx="564" cy="559" r="18" fill="#f8e5ad" />
            <path d="M0 935 C240 800 594 844 900 716 L900 1200 L0 1200Z" fill={style.panel} opacity="0.88" />
            <text x="70" y="1042" fontFamily="Georgia, serif" fontSize="58" fill={style.text}>{title}</text>
            <text x="74" y="1098" fontFamily="Arial, sans-serif" fontSize="18" fill={style.muted} letterSpacing="4">{subtitle}</text>
          </>
        ) : (
          <>
            <rect x="62" y="68" width="776" height="964" rx="330" fill={style.panel} opacity="0.24" />
            <circle cx="450" cy="420" r="270" fill={`url(#${glowId})`} />
            <circle cx="450" cy="382" r="164" fill="none" stroke="#c9a46a" strokeWidth="26" opacity="0.96" />
            <circle cx="450" cy="382" r="92" fill="none" stroke="#fff1bd" strokeWidth="8" opacity="0.86" />
            <path d="M310 588 C420 665 560 665 666 584" fill="none" stroke="#c9a46a" strokeWidth="21" strokeLinecap="round" opacity="0.88" />
            <circle cx="315" cy="588" r="29" fill="#f7df9b" />
            <circle cx="665" cy="584" r="29" fill="#f7df9b" />
            <line x1="140" y1="842" x2="760" y2="842" stroke={style.muted} strokeOpacity="0.28" />
            <text x="450" y="902" textAnchor="middle" fontFamily="Georgia, serif" fontSize="44" fill={style.text}>{title}</text>
            <text x="450" y="952" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fill={style.muted} letterSpacing="5">{subtitle}</text>
          </>
        )}
      </svg>
    </div>
  )
}
