import { products } from '@/data/products'

const reelCaptions = [
  'Morning light, gold glow.',
  'Stack them, wear them, love them.',
  'The everyday essential.',
  'Gift-wrapped with love.',
  'Your new signature piece.',
]

export default function ReelStrip() {
  return (
    <section className="py-16 md:py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <span className="text-xs tracking-widest uppercase text-brand-stone">As seen on</span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal mt-3 font-semibold">
            Worn Your Way
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-4 md:px-8 pb-4 w-max">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-48 md:w-56 relative group cursor-pointer"
            >
              {/* 9:16 aspect card */}
              <div className="aspect-[9/16] bg-brand-charcoal overflow-hidden relative">
                <img
                  src={product.images[1] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic">
                    {reelCaptions[i % reelCaptions.length]}
                  </p>
                  <p className="text-[10px] tracking-widest uppercase text-white/60 mt-1">
                    @velmorajewelry
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}