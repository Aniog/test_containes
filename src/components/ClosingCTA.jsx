import React from 'react'
import { strings } from '../lib/strings'

const s = strings.en

export default function ClosingCTA() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 text-center">
        <h2 className="font-heading font-bold text-heading text-2xl md:text-3xl uppercase mb-3">
          {s.closingHeading}
        </h2>
        <p className="text-body-text text-base mb-8 max-w-lg mx-auto">
          {s.closingSub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient-bg text-white font-heading font-bold uppercase text-sm rounded-[4px] hover:opacity-90 transition-opacity inline-block"
          style={{ height: '44px', lineHeight: '44px', padding: '0 32px' }}
        >
          {s.closingCta}
        </a>
      </div>
    </section>
  )
}
