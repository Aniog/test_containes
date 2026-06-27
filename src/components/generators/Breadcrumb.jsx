import React from 'react';
import strings from '@/data/strings.en.js';

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" style={{ paddingBlock: '12px' }}>
      <div className="container">
        <ol
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            color: 'var(--color-body)',
          }}
        >
          <li>
            <a
              href="/"
              style={{ color: 'var(--color-body)', textDecoration: 'none' }}
            >
              {strings.breadcrumbHome}
            </a>
          </li>
          <li aria-hidden="true" style={{ color: 'var(--color-card-border)' }}>&gt;</li>
          <li aria-current="page" style={{ color: 'var(--color-heading)' }}>
            {strings.breadcrumbCurrent}
          </li>
        </ol>
      </div>
    </nav>
  );
}