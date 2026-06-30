const ugcItems = [
  { id: 1, caption: 'Everyday elegance', tag: '@sarah.style' },
  { id: 2, caption: 'Stacked & styled', tag: '@emma.wears' },
  { id: 3, caption: 'Gift-worthy', tag: '@rachel.k' },
  { id: 4, caption: 'Golden hour', tag: '@mia.jewelry' },
  { id: 5, caption: 'Minimal luxe', tag: '@anna.gold' },
  { id: 6, caption: 'Date night ready', tag: '@lily.gems' },
]

export default function UGCReel() {
  return (
    <section className="py-20 md:py-28 border-t border-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-light mb-3">
              As Seen On
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              #VelmoraWomen
            </h2>
          </div>
          <span className="text-xs text-taupe font-light tracking-wider uppercase cursor-pointer hover:text-gold transition-colors hidden md:block">
            Follow @velmora →
          </span>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-5 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 aspect-[9/16] bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal rounded-sm overflow-hidden group cursor-pointer flex-shrink-0"
            >
              {/* Warm gradient placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />

              {/* Decorative jewelry silhouette */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-gold/30" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 translate-y-6 w-px h-16 bg-gold/20" />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/90 to-transparent">
                <p className="font-serif text-sm text-cream italic mb-0.5">{item.caption}</p>
                <p className="text-[10px] text-cream/50 font-sans">{item.tag}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
