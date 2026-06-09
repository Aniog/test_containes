import s from '../../data/strings.js';

export default function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{ borderBottom: '1px solid #E2E4E7', background: '#fff' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '10px 20px' }}>
        <ol
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            color: '#636972',
          }}
        >
          <li>
            <a
              href="/"
              style={{ color: '#636972', textDecoration: 'none' }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#8159BB')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#636972')}
            >
              {s.breadcrumb.home}
            </a>
          </li>
          <li aria-hidden="true" style={{ color: '#8159BB', fontWeight: 700 }}>›</li>
          <li>
            <span aria-current="page" style={{ color: '#4B5056', fontWeight: 600 }}>
              {s.breadcrumb.current}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
