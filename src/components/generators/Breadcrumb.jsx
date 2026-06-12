import { Link } from 'react-router-dom';
import s from '../../data/strings.js';

export default function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white border-b border-divider"
      style={{ borderBottomColor: '#E2E4E7' }}
    >
      <div className="content-container py-2">
        <ol
          className="flex items-center gap-1 list-none m-0 p-0"
          style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: '#636972' }}
        >
          <li>
            <Link
              to="/"
              className="hover:text-brand-purple transition-colors"
              style={{ color: '#636972', textDecoration: 'none' }}
            >
              {s.breadcrumbHome}
            </Link>
          </li>
          <li aria-hidden="true" style={{ color: '#8159BB', fontWeight: 700, fontSize: 12 }}>›</li>
          <li aria-current="page" style={{ color: '#4B5056', fontWeight: 600 }}>
            {s.breadcrumbCurrent}
          </li>
        </ol>
      </div>
    </nav>
  );
}
