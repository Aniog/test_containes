import React from 'react'
import { strings } from '../../data/strings'

const s = strings.en

export default function Breadcrumb() {
  return (
    <nav aria-label={s.ariaBreadcrumb} style={{ paddingBlock: 16, borderBottom: '1px solid #E2E4E7' }}>
      <div className="section-container">
        <ol style={{ display: 'flex', alignItems: 'center', gap: 8, listStyle: 'none', margin: 0, padding: 0, fontSize: 13, color: '#636972' }}>
          <li>
            <a href="/" style={{ color: '#636972', textDecoration: 'none' }}>{s.breadcrumbHome}</a>
          </li>
          <li aria-hidden="true" style={{ color: '#C6C9CD' }}>/</li>
          <li aria-current="page" style={{ fontWeight: 600 }}>{s.breadcrumbCurrent}</li>
        </ol>
      </div>
    </nav>
  )
}
