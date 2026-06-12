import { LogoIcon } from './Icons.jsx';
import { strings } from '../../data/generatorsData.js';

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
          marginInline: 'auto',
          padding: '0 20px',
          height: 56,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            textDecoration: 'none',
          }}
          aria-label="Strikingly home"
        >
          <LogoIcon />
          <span
            style={{
              fontFamily: '"Josefin Sans", Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 16,
              color: '#2E2E2F',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {s.topBar.logo}
          </span>
        </a>
      </div>
    </header>
  );
}
