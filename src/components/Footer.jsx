import React from 'react'
import { strings } from '../lib/strings'

const s = strings.en

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-white border-t border-divider py-10">
      <div className="max-w-content mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Logo */}
          <div className="md:w-1/4">
            <a href="/" className="font-heading font-bold text-heading-dark text-lg tracking-wide uppercase">
              <span className="text-heading-dark">strikingly</span>
              <span className="ai-gradient-text ml-1">AI</span>
            </a>
          </div>
          {/* Link columns */}
          {s.footerColumns.map((col) => (
            <div key={col.title} className="md:w-1/4">
              <h4 className="font-heading font-bold text-heading-dark text-xs uppercase mb-3">
                {col.title}
              </h4>
              <ul className="list-none m-0 p-0 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-body-text text-sm hover:text-brand-purple transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider pt-5">
          <p className="text-body-text text-xs">
            {s.copyright.replace('{year}', year)}
          </p>
        </div>
      </div>
    </footer>
  )
}
