import React from 'react'
import { Play } from 'lucide-react'
import { ugcItems } from '@/data/products'

export default function UgcRow() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">@Velmora</p>
          <h2 className="section-title">As Worn By You</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-64 md:w-72 aspect-[9/16] rounded-2xl overflow-hidden snap-start group"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <Play className="h-5 w-5 fill-white" />
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-lg text-white">{item.caption}</p>
                <p className="text-xs text-white/70 mt-1">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}