import { strings } from '@/data/generators';

const s = strings.en;

export default function TopBar() {
  return (
    <header
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid var(--divider)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          marginInline: 'auto',
          padding: '0 20px',
          height: 56,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <a
          href="/"
          style={{ textDecoration: 'none' }}
          aria-label="Strikingly home"
        >
          <span
            style={{
              fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: 'var(--hero-heading)',
              letterSpacing: '0.02em',
              textTransform: 'none',
            }}
          >
            strikingly{' '}
            <span className="ai-gradient-text" style={{ fontFamily: 'inherit' }}>
              AI
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}
