import React from 'react'
import { strings } from '../lib/strings'

const s = strings.en

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-white">
      <div className="max-w-content mx-auto px-5 py-3">
        <ol className="flex items-center gap-2 text-sm text-body-text font-body list-none m-0 p-0">
          <li className="m-0">
            <a href="/" className="text-body-text hover:text-brand-purple transition-colors">
              {s.breadcrumbHome}
            </a>
          </li>
          <li aria-hidden="true" className="text-brand-purple mx-1">&gt;</li>
          <li className="m-0">
            <span aria-current="page" className="text-body-text">
              {s.breadcrumbCurrent}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  )
}
