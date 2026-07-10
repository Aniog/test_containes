// Lightweight inline SVG icons. We avoid pulling a runtime icon library
// to keep the bundle slim and let each icon inherit currentColor.

export const SearchIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)

export const BagIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 8h14l-1 12H6L5 8Z" />
    <path d="M9 8a3 3 0 0 1 6 0" />
  </svg>
)

export const StarIcon = ({ className = "h-3.5 w-3.5", filled = true }) => (
  <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3.5 14.6 9l6 .9-4.4 4.2 1.1 6L12 17.4 6.7 20l1.1-6L3.4 9.9l6-.9L12 3.5Z" />
  </svg>
)

export const PlusIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const MinusIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <path d="M5 12h14" />
  </svg>
)

export const CloseIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

export const ArrowRightIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="true" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const ChevronDownIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const MenuIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const PlayIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5.5v13l11-6.5L8 5.5Z" />
  </svg>
)

export const InstagramIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)

export const PinterestIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M11.5 7.5c2.4-.6 5 .8 5 3.5 0 2.5-1.8 4-3.8 4-1.2 0-2-.7-1.7-1.6l.7-2.6" />
    <path d="M10 21 11.5 14" />
  </svg>
)

export const TiktokIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 4v9.2a3.3 3.3 0 1 1-3.3-3.3" />
    <path d="M14 4c.5 2.6 2.4 4 5 4" />
  </svg>
)

export const CheckIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12 5 5L20 7" />
  </svg>
)
