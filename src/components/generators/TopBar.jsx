import { strings } from '../../data/generators';

const s = strings.en;

export default function TopBar() {
  return (
    <header
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #E2E4E7',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 20px',
          height: 56,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <a
          href="/"
          aria-label="Strikingly home"
          style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
        >
          {/* Logo mark — inline SVG lightning bolt */}
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
              d="M16.5 4L9 15.5H14.5L11.5 24L20 12.5H14.5L16.5 4Z"
              fill="white"
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
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#2E2E2F',
              letterSpacing: '0.02em',
            }}
          >
            {s.logoText}
          </span>
        </a>
      </div>
    </header>
  );
}
