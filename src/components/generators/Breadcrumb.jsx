import React from 'react';
import { strings } from '@/data/generators';

const s = strings.en;

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" style={{ padding: '12px 0' }}>
      <div className="section-container">
        <ol
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            color: '#636972',
          }}
        >
          <li>
            <a
              href="/"
              style={{ color: '#636972', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
            >
              {s.breadcrumb.home}
            </a>
          </li>
          <li aria-hidden="true" style={{ color: '#636972' }}>
            &gt;
          </li>
          <li style={{ color: '#636972' }} aria-current="page">
            {s.breadcrumb.current}
          </li>
        </ol>
      </div>
    </nav>
  );
}
