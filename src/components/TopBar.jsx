import React from 'react'
import { strings } from '../lib/strings'

const s = strings.en

export default function TopBar() {
  return (
    <header className="w-full bg-white border-b border-divider">
      <div className="max-w-content mx-auto px-5 py-3 flex items-center">
        <a href="/" className="font-heading font-bold text-heading-dark text-lg tracking-wide uppercase" aria-label={s.logoAlt}>
          <span className="text-heading-dark">strikingly</span>
          <span className="ai-gradient-text ml-1">AI</span>
        </a>
      </div>
    </header>
  )
}
