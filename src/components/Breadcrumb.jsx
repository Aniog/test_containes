import React from 'react'

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" style={{ paddingBlock: '16px' }}>
      <div className="container">
        <ol style={{ display: 'flex', alignItems: 'center', gap: 6, listStyle: 'none', fontSize: 13 }}>
          <li>
            <a
              href="/"
              style={{ color: 'var(--color-brand-purple)', fontWeight: 500 }}
            >
              Strikingly
            </a>
          </li>
          <li aria-hidden="true" style={{ color: 'var(--color-body-text)', fontSize: 11 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 2L7.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </li>
          <li>
            <span style={{ color: 'var(--color-body-text)', fontWeight: 400 }} aria-current="page">
              AI Generators
            </span>
          </li>
        </ol>
      </div>
    </nav>
  )
}
