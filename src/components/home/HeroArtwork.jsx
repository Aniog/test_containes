export default function HeroArtwork({ className = '' }) {
  const gradientId = 'velmora-hero-gradient'
  const glowId = 'velmora-hero-glow'

  return (
    <div aria-hidden="true" className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg className="h-full w-full" viewBox="0 0 1200 780" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#15120f" />
            <stop offset="0.52" stopColor="#6f563d" />
            <stop offset="1" stopColor="#ead6bb" />
          </linearGradient>
          <radialGradient id={glowId} cx="64%" cy="41%" r="48%">
            <stop offset="0" stopColor="#f6d291" stopOpacity="0.92" />
            <stop offset="0.42" stopColor="#c49558" stopOpacity="0.42" />
            <stop offset="1" stopColor="#120f0d" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1200" height="780" fill={`url(#${gradientId})`} />
        <circle cx="820" cy="290" r="260" fill={`url(#${glowId})`} />
        <path d="M690 210 C790 120 980 166 1012 310 C1048 472 872 570 718 488 C610 430 590 298 690 210Z" fill="#d3a06b" opacity="0.42" />
        <path d="M684 336 C740 255 862 235 930 305" fill="none" stroke="#f1d49b" strokeWidth="15" strokeLinecap="round" opacity="0.92" />
        <path d="M742 388 C806 452 915 443 968 374" fill="none" stroke="#f1d49b" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <circle cx="934" cy="308" r="22" fill="#f8e3af" opacity="0.95" />
        <circle cx="734" cy="338" r="15" fill="#f8e3af" opacity="0.82" />
        <path d="M0 640 C250 535 500 632 705 560 C890 492 975 378 1200 430 L1200 780 L0 780Z" fill="#0f1417" opacity="0.64" />
      </svg>
    </div>
  )
}
