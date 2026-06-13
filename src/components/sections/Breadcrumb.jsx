import strings from '@/data/strings';
const s = strings.en;

export default function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '15px 20px',
      }}
    >
      <ol
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 13,
          color: '#636972',
        }}
      >
        <li>
          <a
            href="/"
            style={{
              color: '#636972',
              textDecoration: 'none',
              fontWeight: 400,
            }}
          >
            {s.breadcrumbHome}
          </a>
        </li>
        <li aria-hidden="true" style={{ color: '#C6C9CD' }}>
          &gt;
        </li>
        <li>
          <span
            aria-current="page"
            style={{
              color: '#636972',
              fontWeight: 400,
            }}
          >
            {s.breadcrumbCurrent}
          </span>
        </li>
      </ol>
    </nav>
  );
}
