import { strings } from '../../data/generatorsData';

const s = strings.en.breadcrumb;

export default function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{ borderBottom: '1px solid #E2E4E7', backgroundColor: '#fff' }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1200, padding: '10px 20px' }}
      >
        <ol
          className="flex items-center gap-1 list-none m-0 p-0"
          style={{ fontSize: 13, color: '#636972' }}
        >
          <li>
            <a
              href="/"
              style={{ color: '#8159BB' }}
              className="hover:underline"
            >
              {s.home}
            </a>
          </li>
          <li aria-hidden="true" style={{ color: '#C6C9CD', marginInline: 4 }}>
            &rsaquo;
          </li>
          <li aria-current="page" style={{ color: '#636972' }}>
            {s.current}
          </li>
        </ol>
      </div>
    </nav>
  );
}
