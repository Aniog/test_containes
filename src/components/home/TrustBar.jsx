import React from 'react'
import { trustPoints } from '@/data/products'

const TrustBar = () => (
  <section className="border-y border-velmora-line bg-white/70">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 text-[11px] uppercase tracking-[0.32em] text-velmora-ink sm:px-8 lg:px-10">
      {trustPoints.map((point, index) => (
        <React.Fragment key={point}>
          <span>{point}</span>
          {index < trustPoints.length - 1 ? (
            <span className="hidden text-velmora-gold sm:inline">·</span>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  </section>
)

export default TrustBar
