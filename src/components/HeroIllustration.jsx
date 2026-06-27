export default function HeroIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 320"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      width="400"
      height="320"
    >
      <defs>
        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>
      {/* Browser window */}
      <rect x="40" y="30" width="320" height="260" rx="12" fill="none" stroke="#C4B5FD" strokeWidth="2" />
      {/* Top bar */}
      <rect x="40" y="30" width="320" height="28" rx="12" fill="none" stroke="#C4B5FD" strokeWidth="2" />
      <line x1="40" y1="58" x2="360" y2="58" stroke="#C4B5FD" strokeWidth="2" />
      {/* Dots */}
      <circle cx="60" cy="44" r="4" fill="#C4B5FD" />
      <circle cx="78" cy="44" r="4" fill="#C4B5FD" />
      <circle cx="96" cy="44" r="4" fill="#C4B5FD" />
      {/* Content blocks */}
      <rect x="60" y="80" width="120" height="14" rx="4" fill="#DDD6FE" />
      <rect x="60" y="106" width="200" height="10" rx="3" fill="#E9E5FF" />
      <rect x="60" y="122" width="160" height="10" rx="3" fill="#E9E5FF" />
      <rect x="60" y="148" width="80" height="28" rx="6" fill="#C4B5FD" />
      {/* Side image placeholder */}
      <rect x="280" y="80" width="60" height="60" rx="6" fill="#E9E5FF" />
      <circle cx="310" cy="110" r="16" fill="#DDD6FE" />
      {/* Lower cards */}
      <rect x="60" y="200" width="80" height="60" rx="6" fill="#E9E5FF" />
      <rect x="160" y="200" width="80" height="60" rx="6" fill="#E9E5FF" />
      <rect x="260" y="200" width="80" height="60" rx="6" fill="#E9E5FF" />
      {/* Decorative lines */}
      <line x1="60" y1="182" x2="340" y2="182" stroke="#E9E5FF" strokeWidth="2" strokeDasharray="6 4" />
    </svg>
  );
}
