import React from 'react';
import { strings } from '@/data/generators';

const s = strings.en;

export default function TopBar() {
  return (
    <header
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E4E7',
        padding: '16px 0',
      }}
    >
      <div className="section-container">
        <a
          href="/"
          style={{
            fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '18px',
            color: '#2E2E2F',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {s.topBar.logo}
        </a>
      </div>
    </header>
  );
}
