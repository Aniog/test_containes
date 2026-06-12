/* Inline SVG: soft purple line-art website mockup illustration */
export default function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      style={{ width: '100%', height: 'auto', maxWidth: 480 }}
    >
      {/* Browser chrome */}
      <rect x="20" y="20" width="440" height="320" rx="10" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
      <rect x="20" y="20" width="440" height="44" rx="10" fill="#E2E4E7" />
      <rect x="20" y="52" width="440" height="12" fill="#E2E4E7" />
      {/* Traffic lights */}
      <circle cx="46" cy="42" r="6" fill="#CB0C9F" opacity="0.4" />
      <circle cx="64" cy="42" r="6" fill="#7671FF" opacity="0.4" />
      <circle cx="82" cy="42" r="6" fill="#8159BB" opacity="0.4" />
      {/* URL bar */}
      <rect x="100" y="32" width="260" height="20" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <text x="116" y="46" fontSize="10" fill="#C6C9CD" fontFamily="sans-serif">strikingly.com/my-site</text>
      {/* Hero block */}
      <rect x="40" y="80" width="400" height="90" rx="6" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="60" y="100" width="180" height="14" rx="3" fill="#8159BB" opacity="0.25" />
      <rect x="60" y="122" width="240" height="10" rx="3" fill="#C6C9CD" opacity="0.6" />
      <rect x="60" y="138" width="200" height="10" rx="3" fill="#C6C9CD" opacity="0.4" />
      <rect x="60" y="156" width="80" height="22" rx="4" fill="#8159BB" opacity="0.7" />
      <rect x="148" y="156" width="80" height="22" rx="4" fill="none" stroke="#8159BB" strokeWidth="1.5" opacity="0.5" />
      {/* Three feature cards */}
      <rect x="40" y="186" width="120" height="80" rx="6" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="56" y="202" width="40" height="20" rx="3" fill="#7671FF" opacity="0.2" />
      <rect x="56" y="228" width="88" height="8" rx="2" fill="#C6C9CD" opacity="0.6" />
      <rect x="56" y="242" width="70" height="8" rx="2" fill="#C6C9CD" opacity="0.4" />

      <rect x="180" y="186" width="120" height="80" rx="6" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="196" y="202" width="40" height="20" rx="3" fill="#CB0C9F" opacity="0.2" />
      <rect x="196" y="228" width="88" height="8" rx="2" fill="#C6C9CD" opacity="0.6" />
      <rect x="196" y="242" width="70" height="8" rx="2" fill="#C6C9CD" opacity="0.4" />

      <rect x="320" y="186" width="120" height="80" rx="6" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="336" y="202" width="40" height="20" rx="3" fill="#8159BB" opacity="0.2" />
      <rect x="336" y="228" width="88" height="8" rx="2" fill="#C6C9CD" opacity="0.6" />
      <rect x="336" y="242" width="70" height="8" rx="2" fill="#C6C9CD" opacity="0.4" />

      {/* Footer bar */}
      <rect x="40" y="282" width="400" height="36" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="56" y="294" width="60" height="8" rx="2" fill="#C6C9CD" opacity="0.5" />
      <rect x="130" y="294" width="60" height="8" rx="2" fill="#C6C9CD" opacity="0.5" />
      <rect x="204" y="294" width="60" height="8" rx="2" fill="#C6C9CD" opacity="0.5" />
    </svg>
  );
}
