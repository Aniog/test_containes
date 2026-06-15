import { strings } from '../../data/generators';

const s = strings.en;

export default function GeneratorsTopBar() {
  return (
    <header
      style={{
        background: '#ffffff',
        borderBottom: '1px solid var(--color-divider)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        className="content-container"
        style={{ display: 'flex', alignItems: 'center', height: 56 }}
      >
        <a
          href="/"
          aria-label="Strikingly home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            textDecoration: 'none',
          }}
        >
          {/* Inline SVG logo mark */}
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
              d="M8 19.5L14 8.5L20 19.5"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 15.5H17.5"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7671FF" />
                <stop offset="1" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 16,
              textTransform: 'lowercase',
              letterSpacing: '0.02em',
              color: 'var(--color-hero-heading)',
            }}
          >
            {s.topbar.logoText}
          </span>
        </a>
      </div>
    </header>
  );
}
