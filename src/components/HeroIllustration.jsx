export function HeroIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-[440px] ${className}`}
      width="440"
      height="352"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="400" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#CB0C9F" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect x="40" y="30" width="320" height="260" rx="8" fill="url(#heroGrad)" />
      <rect x="60" y="50" width="280" height="40" rx="4" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="75" y="65" width="80" height="10" rx="2" fill="#8159BB" fillOpacity="0.4" />
      <rect x="60" y="105" width="130" height="160" rx="4" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="75" y="125" width="100" height="60" rx="2" fill="#8159BB" fillOpacity="0.25" />
      <rect x="75" y="200" width="100" height="8" rx="2" fill="#8159BB" fillOpacity="0.3" />
      <rect x="75" y="215" width="70" height="8" rx="2" fill="#8159BB" fillOpacity="0.2" />
      <rect x="205" y="105" width="135" height="75" rx="4" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="220" y="125" width="50" height="8" rx="2" fill="#8159BB" fillOpacity="0.3" />
      <rect x="220" y="140" width="90" height="6" rx="2" fill="#8159BB" fillOpacity="0.2" />
      <rect x="220" y="152" width="70" height="6" rx="2" fill="#8159BB" fillOpacity="0.15" />
      <rect x="205" y="195" width="135" height="70" rx="4" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="220" y="215" width="50" height="8" rx="2" fill="#8159BB" fillOpacity="0.3" />
      <rect x="220" y="230" width="90" height="6" rx="2" fill="#8159BB" fillOpacity="0.2" />
      <rect x="220" y="242" width="70" height="6" rx="2" fill="#8159BB" fillOpacity="0.15" />
      <circle cx="340" cy="270" r="22" stroke="#8159BB" strokeWidth="2" fill="none" />
      <path d="M330 270L338 278L354 262" stroke="#8159BB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
