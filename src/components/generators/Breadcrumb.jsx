import { strings } from '../../data/generators';

const s = strings.en;

export default function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #E2E4E7',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '8px 20px',
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
            flexWrap: 'wrap',
          }}
        >
          <li>
            <a
              href="/"
              style={{
                fontSize: 13,
                color: '#636972',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
              }}
            >
              {s.breadcrumbHome}
            </a>
          </li>
          <li
            aria-hidden="true"
            style={{ fontSize: 13, color: '#8159BB', fontWeight: 700, lineHeight: 1 }}
          >
            ›
          </li>
          <li>
            <span
              aria-current="page"
              style={{
                fontSize: 13,
                color: '#4B5056',
                fontFamily: 'var(--font-body)',
              }}
            >
              {s.breadcrumbCurrent}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
