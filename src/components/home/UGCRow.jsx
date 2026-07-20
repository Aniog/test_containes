import { ugcItems } from '../../data/products'
import AnimateIn from '../AnimateIn'

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="container-page mb-8">
        <AnimateIn className="text-center">
          <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">As Seen On You</p>
          <h2 className="heading-lg">#VELMORAGIRL</h2>
          <div className="w-12 h-0.5 bg-gold/30 mx-auto mt-4" />
        </AnimateIn>
      </div>

      <div className="overflow-x-auto ugc-scroll -mx-4 px-4">
        <div className="flex gap-4 md:gap-6 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] bg-warm-100 rounded-sm overflow-hidden relative group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-xs md:text-sm font-serif italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                &ldquo;{item.caption}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}