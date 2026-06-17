import React from 'react';
import { strings } from '../data/strings';

const s = strings.en;

export default function TopBar() {
  return (
    <header className="top-bar" role="banner">
      <div className="top-bar-inner">
        <a href="/" className="top-bar-logo" aria-label="Strikingly AI Home">
          {s.logo}
        </a>
      </div>
    </header>
  );
}
