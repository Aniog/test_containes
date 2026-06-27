import { strings } from '../../data/generators-data';

const s = strings.en;

export default function Breadcrumb() {
  return (
    <nav className="strk-breadcrumb" aria-label="Breadcrumb">
      <div className="strk-container">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a href="/" itemProp="item">
              <span itemProp="name">{s.breadcrumbHome}</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li className="sep" aria-hidden="true">&gt;</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" aria-current="page">{s.breadcrumbCurrent}</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </div>
    </nav>
  );
}
