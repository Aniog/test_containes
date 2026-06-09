import s from '../../data/strings.js';

export default function TopBar() {
  return (
    <header
      style={{ borderBottom: '1px solid #E2E4E7', background: '#fff', position: 'sticky', top: 0, zIndex: 50 }}
    >
      <div
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', height: '56px', display: 'flex', alignItems: 'center' }}
      >
        <a
          href="/"
          aria-label="Strikingly home"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <LogoIcon />
          <span
            style={{
              fontFamily: "'Josefin Sans', Poppins, sans-serif",
              fontWeight: 700,
              fontSize: '18px',
              color: '#2E2E2F',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {s.topbar.logoText}
          </span>
        </a>
      </div>
    </header>
  );
}

function LogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
      <rect width="28" height="28" rx="6" fill="url(#logo-grad)" />
      <path
        d="M8 10h12M8 14h8M8 18h10"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
