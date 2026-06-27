import React from 'react';
import { t } from '../../data/strings.js';

export default function TopBar() {
  return (
    <header
      style={{
        background: 'var(--color-white)',
        borderBottom: '1px solid var(--color-divider)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 56,
        }}
      >
        <a
          href="/"
          aria-label={t.brandAi}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            textDecoration: 'none',
            color: 'var(--color-heading-strong)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: '0.01em',
          }}
        >
          <span aria-hidden="true" style={{ display: 'inline-flex' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 4h6v6H5V4zm0 10h6v6H5v-6zm10-10h4v4h-4V4zm0 6h4v4h-4v-4zm0 6h4v4h-4v-4zm-4-2h2v2h-2v-2z"
                fill="#8159BB"
              />
            </svg>
          </span>
          <span>
            <span style={{ color: 'var(--color-heading-strong)' }}>strikingly</span>
            <span
              style={{
                marginLeft: 6,
                fontWeight: 700,
                backgroundImage: 'linear-gradient(90deg, var(--color-ai-blue) 0%, var(--color-ai-pink) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AI
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}
