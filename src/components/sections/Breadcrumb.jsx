import React from 'react';
import { t } from '../../data/strings.js';

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" style={{ background: 'var(--color-white)' }}>
      <div className="container" style={{ paddingBlock: 10 }}>
        <ol
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            alignItems: 'center',
            margin: 0,
            padding: 0,
            listStyle: 'none',
            color: 'var(--color-body)',
            fontSize: 13,
          }}
        >
          <li>
            <a
              href="/"
              style={{
                color: 'var(--color-body)',
                textDecoration: 'none',
              }}
            >
              {t.breadcrumb.home}
            </a>
          </li>
          <li aria-hidden="true" style={{ color: 'var(--color-card-border)' }}>{'>'}</li>
          <li aria-current="page" style={{ color: 'var(--color-heading)', fontWeight: 600 }}>
            {t.breadcrumb.current}
          </li>
        </ol>
      </div>
    </nav>
  );
}
