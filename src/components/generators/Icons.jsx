export function WebsiteMockupIllustration({ className = '', width = 400, height = 300 }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="wm-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
      <rect
        x="40"
        y="50"
        width="320"
        height="200"
        rx="8"
        stroke="url(#wm-stroke)"
        strokeWidth="2"
        fill="#FAFAFE"
        opacity="0.9"
      />
      <circle cx="60" cy="70" r="4" fill="#CB0C9F" opacity="0.5" />
      <circle cx="76" cy="70" r="4" fill="#7671FF" opacity="0.5" />
      <circle cx="92" cy="70" r="4" fill="#8159BB" opacity="0.4" />
      <rect x="60" y="88" width="120" height="8" rx="4" fill="#8159BB" opacity="0.25" />
      <rect x="60" y="104" width="80" height="6" rx="3" fill="#8159BB" opacity="0.18" />
      <rect x="220" y="88" width="120" height="100" rx="4" stroke="#CB0C9F" strokeWidth="1.5" fill="#FFF6FC" opacity="0.55" />
      <rect x="232" y="104" width="96" height="6" rx="3" fill="#CB0C9F" opacity="0.3" />
      <rect x="232" y="120" width="72" height="6" rx="3" fill="#CB0C9F" opacity="0.2" />
      <rect x="232" y="136" width="88" height="6" rx="3" fill="#CB0C9F" opacity="0.2" />
      <rect x="232" y="152" width="56" height="6" rx="3" fill="#CB0C9F" opacity="0.2" />
      <rect x="60" y="124" width="140" height="64" rx="4" stroke="#7671FF" strokeWidth="1.5" fill="#F2F1FF" opacity="0.55" />
      <rect x="72" y="140" width="116" height="6" rx="3" fill="#7671FF" opacity="0.3" />
      <rect x="72" y="156" width="92" height="6" rx="3" fill="#7671FF" opacity="0.2" />
      <rect x="60" y="204" width="280" height="30" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="#F9F6FD" opacity="0.55" />
      <rect x="72" y="216" width="200" height="6" rx="3" fill="#8159BB" opacity="0.25" />
    </svg>
  )
}

export function CategoryIcon({ className = '', width = 48, height = 48 }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="cat-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
      <rect x="8" y="10" width="32" height="28" rx="4" stroke="url(#cat-stroke)" strokeWidth="2" fill="#FAFAFE" />
      <circle cx="16" cy="18" r="2" fill="#CB0C9F" opacity="0.5" />
      <circle cx="22" cy="18" r="2" fill="#7671FF" opacity="0.5" />
      <rect x="14" y="26" width="20" height="4" rx="2" fill="#8159BB" opacity="0.2" />
    </svg>
  )
}

export function ArrowRightIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SearchIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function CheckIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path d="M5 12L10 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
