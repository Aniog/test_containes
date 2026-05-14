import { t } from './strings'

export default function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b"
      style={{ borderBottomColor: '#E2E4E7', backgroundColor: '#fff' }}
    >
      <div className="max-w-content mx-auto px-5 py-2">
        <ol
          className="flex items-center gap-1 list-none m-0 p-0"
          style={{ fontSize: '12px', color: '#636972' }}
        >
          <li>
            <a
              href="/"
              className="hover:underline"
              style={{ color: '#636972', textDecoration: 'none' }}
            >
              {t.breadcrumbHome}
            </a>
          </li>
          <li aria-hidden="true" style={{ color: '#8159BB', fontWeight: 700, margin: '0 2px' }}>
            &rsaquo;
          </li>
          <li aria-current="page" style={{ color: '#4B5056' }}>
            {t.breadcrumbCurrent}
          </li>
        </ol>
      </div>
    </nav>
  )
}
