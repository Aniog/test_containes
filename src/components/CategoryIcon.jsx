export default function CategoryIcon({ category, className }) {
  const icons = {
    websites: (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="32" rx="3" fill="none" stroke="#8159BB" strokeWidth="2" />
        <line x1="6" y1="16" x2="42" y2="16" stroke="#8159BB" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.5" fill="#8159BB" />
        <circle cx="17" cy="12" r="1.5" fill="#8159BB" />
        <circle cx="22" cy="12" r="1.5" fill="#8159BB" />
        <rect x="10" y="22" width="12" height="14" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="26" y="22" width="12" height="6" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="26" y="32" width="12" height="4" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    'landing-pages': (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="6" width="28" height="36" rx="3" fill="none" stroke="#8159BB" strokeWidth="2" />
        <rect x="14" y="12" width="20" height="8" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="14" y="24" width="20" height="4" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="14" y="32" width="12" height="4" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5" />
        <polygon points="30,32 38,32 34,38" fill="none" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    portfolios: (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="3" fill="none" stroke="#8159BB" strokeWidth="2" />
        <rect x="12" y="10" width="24" height="14" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="12" y="28" width="10" height="10" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="26" y="28" width="10" height="4" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="26" y="35" width="10" height="3" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    blogs: (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="3" fill="none" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="14" x2="34" y2="14" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="20" x2="30" y2="20" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="14" y1="26" x2="32" y2="26" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="14" y1="32" x2="28" y2="32" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="14" y1="38" x2="24" y2="38" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    stores: (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 18 L12 8 L36 8 L40 18 Z" fill="none" stroke="#8159BB" strokeWidth="2" />
        <rect x="10" y="18" width="28" height="22" rx="2" fill="none" stroke="#8159BB" strokeWidth="2" />
        <rect x="20" y="28" width="8" height="12" rx="1" fill="none" stroke="#8159BB" strokeWidth="1.5" />
        <circle cx="16" cy="14" r="1.5" fill="#8159BB" />
        <circle cx="24" cy="14" r="1.5" fill="#8159BB" />
        <circle cx="32" cy="14" r="1.5" fill="#8159BB" />
      </svg>
    ),
    'link-in-bio': (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="14" r="8" fill="none" stroke="#8159BB" strokeWidth="2" />
        <path d="M12 40 C12 30 36 30 36 40" fill="none" stroke="#8159BB" strokeWidth="2" />
        <circle cx="24" cy="14" r="3" fill="none" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
  };

  return icons[category] || null;
}
