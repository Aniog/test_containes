import { ugcItems } from '@/data/products'

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-espresso font-medium text-center">
          Worn by You
        </h2>
        <p className="mt-3 text-stone text-sm text-center">Real moments, real jewelry.</p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 md:px-8 pb-4 scrollbar-hide">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
