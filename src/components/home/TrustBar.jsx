import React from 'react'
import { trustItems } from '@/data/products'

export default function TrustBar() {
  return (
    <div className="bg-velmora-base py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {trustItems.map((item, i) => (
            <React.Fragment key={item}>
              <span className="text-white/80 text-xs tracking-wide">{item}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden sm:block w-px h-3 bg-white/20" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
