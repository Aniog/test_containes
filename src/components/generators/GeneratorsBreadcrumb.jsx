import { strings } from '../../data/generators';

const s = strings.en;

export default function GeneratorsBreadcrumb() {
  return (
    <nav
      className="breadcrumb-nav"
      aria-label="Breadcrumb"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid var(--color-divider)',
        padding: '10px 0',
      }}
    >
      <div className="content-container">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <a href="/" itemProp="item">
              <span itemProp="name">{s.breadcrumb.home}</span>
            </a>
            <meta itemProp="position" content="1" />
            <span className="breadcrumb-sep" aria-hidden="true">›</span>
          </li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span
              itemProp="name"
              aria-current="page"
              style={{ color: 'var(--color-hero-heading)', fontWeight: 500 }}
            >
              {s.breadcrumb.current}
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </div>
    </nav>
  );
}
