function hashString(value = '') {
  return value.split('').reduce((total, char) => total + char.charCodeAt(0), 0)
}

function ProductImage({ alt, imgId = 'velmora-image', query = '', className = '' }) {
  const content = `${alt} ${query}`.toLowerCase()
  const seed = hashString(imgId)
  const isGift = content.includes('gift') || content.includes('box')
  const isNecklace = content.includes('necklace') || content.includes('pendant')
  const isWorn = content.includes('worn') || content.includes('model') || content.includes('ear stack')
  const isDark = content.includes('hero') || content.includes('reel') || content.includes('story') || isWorn
  const gradientId = `velmora-gradient-${seed}`
  const glowId = `velmora-glow-${seed}`
  const pearlX = 130 + (seed % 90)
  const pearlY = 170 + (seed % 130)

  return (
    <div className={`relative overflow-hidden ${className}`} role="img" aria-label={alt}>
      <svg className="h-full w-full" viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={isDark ? 'var(--velmora-obsidian)' : 'var(--velmora-pearl)'} />
            <stop offset="48%" stopColor={isDark ? 'var(--velmora-cocoa)' : 'var(--velmora-ivory)'} />
            <stop offset="100%" stopColor={isDark ? 'var(--velmora-umber)' : 'var(--velmora-linen)'} />
          </linearGradient>
          <radialGradient id={glowId} cx="38%" cy="35%" r="62%">
            <stop offset="0%" stopColor="var(--velmora-champagne)" stopOpacity="0.52" />
            <stop offset="58%" stopColor="var(--velmora-antique)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--velmora-obsidian)" stopOpacity="0" />
          </radialGradient>
          <filter id={`soft-blur-${seed}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        <rect width="800" height="1000" fill={`url(#${gradientId})`} />
        <circle cx={pearlX} cy={pearlY} r="310" fill={`url(#${glowId})`} />
        <circle cx="660" cy="150" r="190" fill="var(--velmora-ivory)" opacity={isDark ? '0.08' : '0.42'} filter={`url(#soft-blur-${seed})`} />
        <path d="M-40 830 C160 740 272 842 444 756 C568 694 680 706 850 642 L850 1040 L-40 1040 Z" fill={isDark ? 'var(--velmora-obsidian)' : 'var(--velmora-cocoa)'} opacity={isDark ? '0.32' : '0.08'} />

        {isWorn && (
          <>
            <path d="M492 130 C610 216 610 396 540 526 C486 626 492 760 570 904 L342 1010 C254 846 268 654 328 514 C392 362 348 226 492 130 Z" fill="var(--velmora-rose)" opacity="0.42" />
            <path d="M482 286 C532 334 522 424 474 474 C444 506 390 488 386 438 C382 382 420 322 482 286 Z" fill="var(--velmora-ivory)" opacity="0.22" />
          </>
        )}

        {isGift ? (
          <>
            <rect x="190" y="360" width="420" height="320" rx="18" fill="var(--velmora-ivory)" opacity="0.90" />
            <rect x="180" y="330" width="440" height="82" rx="16" fill="var(--velmora-linen)" />
            <rect x="378" y="330" width="48" height="350" fill="var(--velmora-champagne)" />
            <path d="M314 328 C248 254 348 214 398 326 C454 214 554 254 486 328" fill="none" stroke="var(--velmora-champagne)" strokeWidth="24" strokeLinecap="round" />
            <circle cx="400" cy="528" r="72" fill="none" stroke="var(--velmora-antique)" strokeWidth="16" />
            <circle cx="400" cy="528" r="18" fill="var(--velmora-ivory)" opacity="0.9" />
          </>
        ) : isNecklace ? (
          <>
            <path d="M170 254 C238 530 562 530 630 254" fill="none" stroke="var(--velmora-champagne)" strokeWidth="16" strokeLinecap="round" />
            <path d="M198 268 C256 474 544 474 602 268" fill="none" stroke="var(--velmora-antique)" strokeWidth="4" strokeLinecap="round" opacity="0.88" />
            <circle cx="400" cy="548" r="76" fill="none" stroke="var(--velmora-champagne)" strokeWidth="18" />
            <circle cx="400" cy="548" r="33" fill="var(--velmora-ivory)" opacity="0.82" />
            <circle cx="360" cy="520" r="18" fill="var(--velmora-rose)" opacity="0.92" />
            <circle cx="440" cy="520" r="18" fill="var(--velmora-linen)" opacity="0.95" />
          </>
        ) : (
          <>
            <ellipse cx="318" cy="462" rx="92" ry="122" fill="none" stroke="var(--velmora-champagne)" strokeWidth="22" />
            <ellipse cx="488" cy="462" rx="92" ry="122" fill="none" stroke="var(--velmora-antique)" strokeWidth="16" opacity="0.9" />
            <circle cx="400" cy="354" r="30" fill="var(--velmora-ivory)" opacity="0.92" />
            <circle cx="438" cy="382" r="16" fill="var(--velmora-champagne)" />
            <path d="M300 640 C360 690 450 690 506 640" fill="none" stroke="var(--velmora-champagne)" strokeWidth="18" strokeLinecap="round" opacity="0.82" />
          </>
        )}

        <path d="M0 0 H800 V1000 H0 Z" fill="none" stroke="var(--velmora-ivory)" strokeOpacity={isDark ? '0.08' : '0.26'} strokeWidth="2" />
        <circle cx="620" cy="720" r="6" fill="var(--velmora-ivory)" opacity="0.72" />
        <circle cx="662" cy="690" r="3" fill="var(--velmora-champagne)" opacity="0.86" />
        <circle cx="212" cy="720" r="4" fill="var(--velmora-champagne)" opacity="0.72" />
      </svg>
    </div>
  )
}

export default ProductImage
