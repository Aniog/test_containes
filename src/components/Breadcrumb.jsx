import { strings } from '../data/strings'

export default function Breadcrumb() {
  const t = strings.en

  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
          <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item" className="breadcrumb-link">
              <span itemProp="name">{t.breadcrumbHome}</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
          <li className="breadcrumb-item breadcrumb-current" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{t.breadcrumbCurrent}</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </div>
    </nav>
  )
}
