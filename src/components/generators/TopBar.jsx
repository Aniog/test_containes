import { strings } from '../../data/generatorsData';

const s = strings.en.topbar;

export default function TopBar() {
  return (
    <header
      style={{ borderBottom: '1px solid #E2E4E7' }}
      className="bg-white sticky top-0 z-50"
    >
      <div
        className="mx-auto flex items-center"
        style={{ maxWidth: 1200, padding: '0 20px', height: 56 }}
      >
        <a href="/" aria-label="Strikingly home" className="flex items-center gap-2">
          {/* Strikingly wordmark — inline SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="28" height="28" rx="6" fill="url(#logo-grad)" />
            <path
              d="M8 18l4-8 4 8M10.5 15h5"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7671FF" />
                <stop offset="1" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
          <span
            className="font-heading"
            style={{ fontSize: 18, color: '#2E2E2F', letterSpacing: '0.02em' }}
          >
            {s.logoText}
          </span>
        </a>
      </div>
    </header>
  );
}
