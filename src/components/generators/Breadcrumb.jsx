import { strings } from '@/data/generators';

const s = strings.en.breadcrumb;

export default function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        maxWidth: 1200,
        marginInline: 'auto',
        padding: '10px 20px',
      }}
    >
      <ol
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 12,
          color: 'var(--body-text)',
        }}
      >
        <li>
          <a
            href="/"
            style={{ color: 'var(--brand-purple)', textDecoration: 'none' }}
          >
            {s.home}
          </a>
        </li>
        <li aria-hidden="true" style={{ color: 'var(--card-border)' }}>›</li>
        <li aria-current="page" style={{ color: 'var(--body-text)' }}>
          {s.current}
        </li>
      </ol>
    </nav>
  );
}
