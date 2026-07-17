import React from 'react'
import { ugcReels } from '../../data/products'

export default function UGCSection() {
  return (
    <section className="py-16 md:py-20 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mb-3">
            As Seen On
          </p>
          <h2 className="section-title">Styled by You</h2>
        </div>

        <div className="overflow-x-auto pb-4 -mx-4 md:-mx-8 px-4 md:px-8 ugc-scroll">
          <div className="flex gap-4 md:gap-6 w-max">
            {ugcReels.map((reel) => (
              <div
                key={reel.id}
                className="relative flex-shrink-0 w-40 md:w-52 aspect-[9/16] rounded-sm overflow-hidden bg-ink-200 group cursor-pointer"
              >
                {/* Placeholder image with gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink-300 to-ink-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-cream-50/50 text-[10px] font-sans tracking-wider mb-1">
                    {reel.handle}
                  </p>
                  <p className="text-cream-50 text-xs font-serif italic leading-relaxed">
                    &ldquo;{reel.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-ink-400 font-sans tracking-wide">
            Tag <span className="text-ink-600 font-medium">@velmorajewelry</span> to be featured
          </p>
        </div>
      </div>
    </section>
  )
}