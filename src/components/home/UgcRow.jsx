import React from 'react'
import { Play } from 'lucide-react'
import { ugcItems } from '@/data/products'

export default function UgcRow() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl">As Seen On</h2>
        <p className="mt-2 text-sm text-current/60">Real moments, real style.</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative h-[420px] w-[260px] flex-shrink-0 snap-start overflow-hidden rounded-sm bg-[#f5f5f0]"
          >
            <img
              alt={item.title}
              data-strk-img-id={item.imageId}
              data-strk-img={`[ugc-title-${item.id}] [ugc-handle-${item.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p id={`ugc-title-${item.id}`} className="font-serif text-sm text-white">
                {item.title}
              </p>
              <p id={`ugc-handle-${item.id}`} className="mt-1 text-xs text-white/70">
                {item.handle}
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Play className="h-5 w-5 text-white" fill="white" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
