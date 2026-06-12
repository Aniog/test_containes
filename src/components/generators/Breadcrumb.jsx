import { strings } from '../../data/generatorsData.js';

const s = strings.en;

export default function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        borderBottom: '1px solid #E2E4E7',
        background: '#ffffff',
      }}
    >
      <div
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
            flexWrap: 'wrap',
          }}
        >
          <li>
            <a
              href="/"
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: 13,
                color: '#636972',
                textDecoration: 'none',
              }}
            >
              {s.breadcrumb.home}
            </a>
          </li>
          <li
            aria-hidden="true"
            style={{ color: '#8159BB', fontSize: 13, userSelect: 'none' }}
          >
            &rsaquo;
          </li>
          <li>
            <span
              aria-current="page"
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: 13,
                color: '#4B5056',
                fontWeight: 600,
              }}
            >
              {s.breadcrumb.current}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
