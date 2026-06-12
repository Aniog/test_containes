import strings from '../../data/strings';

const s = strings.en.breadcrumb;

export default function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white"
      style={{ borderBottom: '1px solid #E2E4E7' }}
    >
      <div className="content-wrap" style={{ paddingBlock: 10 }}>
        <ol
          className="flex items-center gap-1 list-none m-0 p-0"
          style={{ fontSize: 12, color: '#636972' }}
        >
          <li>
            <a
              href="/"
              className="hover:underline"
              style={{ color: '#8159BB', textDecoration: 'none' }}
            >
              {s.home}
            </a>
          </li>
          <li aria-hidden="true" style={{ color: '#C6C9CD', userSelect: 'none' }}>›</li>
          <li aria-current="page" style={{ color: '#636972' }}>
            {s.current}
          </li>
        </ol>
      </div>
    </nav>
  );
}
