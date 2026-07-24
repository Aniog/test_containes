import { ugcItems } from '@/data/products'

export default function UgcRow() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-3">As Worn By You</h2>
          <p className="text-stone-500 text-sm">Tag @velmora to be featured</p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-64 md:w-72 aspect-[9/16] rounded-sm overflow-hidden snap-start group"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs tracking-widest uppercase mb-1">{item.handle}</p>
                <p className="text-white/80 text-sm font-serif italic">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
