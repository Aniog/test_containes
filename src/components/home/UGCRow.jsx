import { useImageLoader } from '@/hooks/useImageLoader'
import { ugcPosts } from '@/data/products'

export function UGCRow() {
  const containerRef = useImageLoader()

  return (
    <section className="py-16 md:py-24 bg-velmora-dark text-velmora-cream overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 mb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-velmora-gold mb-3">@velmorafine</p>
            <h2 className="font-serif text-4xl md:text-5xl">Worn by You</h2>
          </div>
          <p className="font-sans text-sm text-velmora-warm/70 max-w-sm">
            Tag us in your Velmora moments for a chance to be featured.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-5 md:px-8 lg:px-12 pb-4"
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[220px] md:w-[280px] aspect-[9/16] group overflow-hidden"
          >
            <img
              data-strk-img-id={post.id}
              data-strk-img={post.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-dark/70 via-transparent to-transparent" />
            <p
              id={`${post.id}-caption`}
              className="absolute bottom-5 left-5 right-5 font-serif text-xl md:text-2xl italic text-velmora-cream"
            >
              {post.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
