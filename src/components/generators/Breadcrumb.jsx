import React from 'react';

const Breadcrumb = () => (
  <nav
    aria-label="Breadcrumb"
    style={{
      borderBottom: '1px solid #E2E4E7',
      background: '#ffffff',
    }}
  >
    <div
      style={{
        maxWidth: '1200px',
        marginInline: 'auto',
        padding: '10px 20px',
      }}
    >
      <ol
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: 'var(--color-body)',
        }}
      >
        <li>
          <a
            href="/"
            style={{ color: 'var(--color-purple)', textDecoration: 'none' }}
          >
            Strikingly
          </a>
        </li>
        <li aria-hidden="true" style={{ color: '#C6C9CD', userSelect: 'none' }}>›</li>
        <li aria-current="page" style={{ color: 'var(--color-body)' }}>
          AI Generators
        </li>
      </ol>
    </div>
  </nav>
);

export default Breadcrumb;
