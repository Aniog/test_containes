import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <header
      className="bg-white border-b border-divider sticky top-0 z-50"
      style={{ borderBottomColor: '#E2E4E7' }}
    >
      <div className="content-container flex items-center" style={{ height: 56 }}>
        <Link
          to="/"
          aria-label="Strikingly home"
          className="flex items-center gap-2 no-underline"
          style={{ textDecoration: 'none' }}
        >
          {/* Strikingly wordmark + AI badge */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="6" fill="url(#logoGrad)" />
            <path
              d="M8 10h12M8 14h8M8 18h10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7671FF" />
                <stop offset="100%" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
          <span
            className="font-heading font-bold text-hero-heading"
            style={{
              fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: '#2E2E2F',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          >
            strikingly{' '}
            <span className="ai-gradient-text" style={{ fontSize: 18 }}>AI</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
