export default function WebsiteIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      width="400"
      height="300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7671FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect x="20" y="30" width="360" height="240" rx="8" fill="url(#purpleGrad)" stroke="#8159BB" strokeWidth="2" />
      <rect x="40" y="50" width="320" height="30" rx="4" fill="none" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="60" cy="65" r="6" fill="none" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="80" y="58" width="80" height="14" rx="3" fill="none" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="40" y="100" width="140" height="140" rx="4" fill="none" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="50" y="110" width="120" height="60" rx="3" fill="none" stroke="#8159BB" strokeWidth="1" />
      <rect x="50" y="180" width="120" height="8" rx="2" fill="none" stroke="#8159BB" strokeWidth="1" />
      <rect x="50" y="194" width="80" height="8" rx="2" fill="none" stroke="#8159BB" strokeWidth="1" />
      <rect x="50" y="208" width="100" height="8" rx="2" fill="none" stroke="#8159BB" strokeWidth="1" />
      <rect x="200" y="100" width="160" height="65" rx="4" fill="none" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="210" y="110" width="140" height="40" rx="3" fill="none" stroke="#8159BB" strokeWidth="1" />
      <rect x="200" y="180" width="160" height="60" rx="4" fill="none" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="210" y="190" width="60" height="40" rx="3" fill="none" stroke="#8159BB" strokeWidth="1" />
      <rect x="280" y="190" width="70" height="8" rx="2" fill="none" stroke="#8159BB" strokeWidth="1" />
      <rect x="280" y="204" width="50" height="8" rx="2" fill="none" stroke="#8159BB" strokeWidth="1" />
      <rect x="280" y="218" width="60" height="8" rx="2" fill="none" stroke="#8159BB" strokeWidth="1" />
    </svg>
  );
}
