import React from 'react'
import { ugcPosts } from '@/data/products'
import { StrkImage } from '@/components/ui/StrkImage'
import { useImageLoader } from '@/hooks/useImageLoader'

export function UgcReelRow() {
  const ref = useImageLoader()

  return (
    <section ref={ref} className="bg-cream-50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-espresso-600">
          @velmora on Instagram
        </p>
      </div>
      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
        {ugcPosts.map((post, i) => (
          <div
            key={post.id}
            className="group relative w-[180px] flex-shrink-0 cursor-pointer overflow-hidden rounded-sm sm:w-[220px]"
          >
            <div className="relative aspect-[9/16] bg-cream-200">
              <StrkImage
                id={`ugc-img-${post.id}`}
                query={`[ugc-caption-${i}] gold jewelry worn ear neck close up editorial`}
                ratio="9x16"
                width={400}
                alt="Customer style"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/70 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${i}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-cream-50"
              >
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
