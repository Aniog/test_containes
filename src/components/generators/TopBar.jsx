import React from 'react';
import strings from '@/data/strings.en.js';

export default function TopBar() {
  return (
    <header
      style={{
        backgroundColor: 'var(--color-white)',
        borderBottom: '1px solid var(--color-divider)',
        height: 56,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <a href="/" aria-label={strings.logoAlt}>
          <svg width="140" height="28" viewBox="0 0 140 28" aria-hidden="true" style={{ display: 'block' }}>
            <text x="0" y="22" fontFamily="var(--font-heading)" fontWeight="700" fontSize="22" fill="#8159BB">
              strikingly
            </text>
            <text x="96" y="22" fontFamily="var(--font-heading)" fontWeight="700" fontSize="22" fill="#CB0C9F">
              AI
            </text>
          </svg>
        </a>
      </div>
    </header>
  );
}