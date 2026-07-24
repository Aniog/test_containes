import { ugcPosts } from '@/data/products'

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-velmora-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-gold-600 text-xs tracking-widest uppercase mb-3 font-sans">@velmora</p>
          <h2 className="section-title mb-4">As Worn By You</h2>
          <p className="section-subtitle">
            Real moments, real women, real Velmora.
          </p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcPosts.map(post => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 sm:w-56 snap-start relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-velmora-200 overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="font-serif text-white text-sm px-4 pb-4 italic">
                "{post.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
