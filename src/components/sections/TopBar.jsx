import strings from '@/data/strings';
const s = strings.en;

export default function TopBar() {
  return (
    <header
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E4E7',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '15px 20px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            textDecoration: 'none',
          }}
          aria-label={s.logoAlt}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="6" fill="#8159BB" />
            <path
              d="M8 14L12 9L16 14L20 9"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: '#2E2E2F',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            strikingly AI
          </span>
        </a>
      </div>
    </header>
  );
}
