export default function CategoryIcon({ category, className = '' }) {
  const icons = {
    websites: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" width="48" height="48">
        <rect x="6" y="8" width="36" height="32" rx="4" stroke="#8159BB" strokeWidth="2" />
        <line x1="6" y1="16" x2="42" y2="16" stroke="#8159BB" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.5" fill="#8159BB" />
        <circle cx="17" cy="12" r="1.5" fill="#8159BB" />
        <circle cx="22" cy="12" r="1.5" fill="#8159BB" />
        <rect x="10" y="22" width="12" height="12" rx="2" fill="#E9E5FF" />
        <rect x="26" y="22" width="12" height="4" rx="1" fill="#E9E5FF" />
        <rect x="26" y="30" width="12" height="4" rx="1" fill="#E9E5FF" />
      </svg>
    ),
    'landing-pages': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" width="48" height="48">
        <rect x="10" y="6" width="28" height="36" rx="3" stroke="#8159BB" strokeWidth="2" />
        <rect x="14" y="12" width="20" height="6" rx="1" fill="#E9E5FF" />
        <rect x="14" y="22" width="20" height="3" rx="1" fill="#E9E5FF" />
        <rect x="14" y="28" width="14" height="3" rx="1" fill="#E9E5FF" />
        <rect x="14" y="34" width="10" height="4" rx="1" fill="#C4B5FD" />
      </svg>
    ),
    portfolios: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" width="48" height="48">
        <rect x="6" y="10" width="16" height="20" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="26" y="10" width="16" height="12" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="26" y="26" width="16" height="12" rx="2" stroke="#8159BB" strokeWidth="2" />
        <circle cx="14" cy="20" r="4" fill="#E9E5FF" />
      </svg>
    ),
    blogs: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" width="48" height="48">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="14" x2="34" y2="14" stroke="#E9E5FF" strokeWidth="2" />
        <line x1="14" y1="20" x2="30" y2="20" stroke="#E9E5FF" strokeWidth="2" />
        <line x1="14" y1="26" x2="34" y2="26" stroke="#E9E5FF" strokeWidth="2" />
        <line x1="14" y1="32" x2="26" y2="32" stroke="#E9E5FF" strokeWidth="2" />
      </svg>
    ),
    stores: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" width="48" height="48">
        <path d="M8 18L12 8H36L40 18H8Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round" />
        <rect x="10" y="18" width="28" height="22" rx="2" stroke="#8159BB" strokeWidth="2" />
        <path d="M16 26H20" stroke="#E9E5FF" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 32H24" stroke="#E9E5FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="30" r="4" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    'link-in-bio': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" width="48" height="48">
        <circle cx="24" cy="14" r="8" stroke="#8159BB" strokeWidth="2" />
        <path d="M10 40C10 32.268 16.268 26 24 26C31.732 26 38 32.268 38 40" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="14" r="3" fill="#E9E5FF" />
      </svg>
    ),
  };

  return icons[category] || null;
}
